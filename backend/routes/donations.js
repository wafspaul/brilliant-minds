const express = require("express")
const Donation = require("../models/Donation")
const { body, validationResult } = require("express-validator")

const router = express.Router()

// Submit donation
router.post(
  "/",
  [
    body("donorName").trim().isLength({ min: 2, max: 100 }).withMessage("Name must be between 2 and 100 characters"),
    body("donorEmail").isEmail().normalizeEmail().withMessage("Please enter a valid email"),
    body("donationType")
      .isIn(["financial", "device", "volunteer-time", "skills", "resources", "other"])
      .withMessage("Invalid donation type"),
    body("message").optional().trim().isLength({ max: 500 }).withMessage("Message cannot exceed 500 characters"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: errors.array(),
        })
      }

      const donationData = {
        ...req.body,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent"),
      }

      const donation = new Donation(donationData)
      await donation.save()

      // Create response based on donation type
      let responseMessage = "Thank you for your generous donation!"

      switch (donation.donationType) {
        case "financial":
          responseMessage = `Thank you for your financial pledge of ${donation.financialDetails?.currency} ${donation.financialDetails?.amount}! Our team will contact you with next steps.`
          break
        case "device":
          responseMessage = `Thank you for donating ${donation.deviceDetails?.quantity} ${donation.deviceDetails?.deviceType}(s)! We'll coordinate pickup/delivery soon.`
          break
        case "volunteer-time":
          responseMessage = `Thank you for offering ${donation.volunteerDetails?.hoursPerWeek} hours per week! We'll match you with suitable opportunities.`
          break
        case "skills":
          responseMessage = `Thank you for offering your ${donation.skillsDetails?.serviceType} skills! We'll connect you with projects that need your expertise.`
          break
        default:
          responseMessage = "Thank you for your donation! Our team will review and contact you soon."
      }

      res.status(201).json({
        success: true,
        message: responseMessage,
        data: {
          id: donation._id,
          donationType: donation.donationType,
          status: donation.status,
          submittedAt: donation.createdAt,
        },
      })
    } catch (error) {
      console.error("Donation submission error:", error)
      res.status(500).json({
        success: false,
        message: "Failed to submit donation. Please try again.",
      })
    }
  },
)

// Get donation statistics
router.get("/stats", async (req, res) => {
  try {
    const stats = await Donation.aggregate([
      {
        $group: {
          _id: "$donationType",
          count: { $sum: 1 },
          totalValue: {
            $sum: {
              $switch: {
                branches: [
                  { case: { $eq: ["$donationType", "financial"] }, then: "$financialDetails.amount" },
                  { case: { $eq: ["$donationType", "device"] }, then: "$deviceDetails.estimatedValue" },
                  { case: { $eq: ["$donationType", "skills"] }, then: "$skillsDetails.estimatedValue" },
                  { case: { $eq: ["$donationType", "resources"] }, then: "$resourcesDetails.estimatedValue" },
                ],
                default: 0,
              },
            },
          },
        },
      },
    ])

    const totalDonations = await Donation.countDocuments()
    const pendingDonations = await Donation.countDocuments({ status: "pending" })
    const completedDonations = await Donation.countDocuments({ status: "completed" })

    res.json({
      success: true,
      data: {
        byType: stats,
        summary: {
          total: totalDonations,
          pending: pendingDonations,
          completed: completedDonations,
        },
      },
    })
  } catch (error) {
    console.error("Get donation stats error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve donation statistics",
    })
  }
})

// Get all donations (admin only)
router.get("/", async (req, res) => {
  try {
    const page = Number.parseInt(req.query.page) || 1
    const limit = Number.parseInt(req.query.limit) || 20
    const donationType = req.query.type
    const status = req.query.status
    const skip = (page - 1) * limit

    const query = {}
    if (donationType) query.donationType = donationType
    if (status) query.status = status

    const donations = await Donation.find(query)
      .populate("assignedTo", "firstName lastName")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)

    const total = await Donation.countDocuments(query)

    res.json({
      success: true,
      data: {
        donations,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total,
        },
      },
    })
  } catch (error) {
    console.error("Get donations error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve donations",
    })
  }
})

module.exports = router
