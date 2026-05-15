const express = require("express")
const Contact = require("../models/Contact")
const { body, validationResult } = require("express-validator")

const router = express.Router()

// Submit contact form
router.post(
  "/",
  [
    body("name").trim().isLength({ min: 2, max: 100 }).withMessage("Name must be between 2 and 100 characters"),
    body("email").isEmail().normalizeEmail().withMessage("Please enter a valid email"),
    body("purpose")
      .isIn(["Partnership", "General", "Support", "Business", "Volunteer", "Donation"])
      .withMessage("Invalid purpose"),
    body("message")
      .trim()
      .isLength({ min: 10, max: 1000 })
      .withMessage("Message must be between 10 and 1000 characters"),
    body("phone").optional().trim().isLength({ max: 20 }).withMessage("Phone number too long"),
    body("company").optional().trim().isLength({ max: 100 }).withMessage("Company name too long"),
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

      const { name, email, purpose, message, phone, company } = req.body

      const contact = new Contact({
        name,
        email,
        purpose,
        message,
        phone,
        company,
        ipAddress: req.ip,
        userAgent: req.get("User-Agent"),
      })

      await contact.save()

      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully! We'll get back to you within 24 hours.",
        data: {
          id: contact._id,
          name: contact.name,
          purpose: contact.purpose,
          submittedAt: contact.createdAt,
        },
      })
    } catch (error) {
      console.error("Contact form error:", error)
      res.status(500).json({
        success: false,
        message: "Failed to submit contact form. Please try again.",
      })
    }
  },
)

// Get all contacts (admin only - will add auth middleware later)
router.get("/", async (req, res) => {
  try {
    const page = Number.parseInt(req.query.page) || 1
    const limit = Number.parseInt(req.query.limit) || 20
    const status = req.query.status
    const purpose = req.query.purpose
    const skip = (page - 1) * limit

    const query = {}
    if (status) query.status = status
    if (purpose) query.purpose = purpose

    const contacts = await Contact.find(query)
      .populate("assignedTo", "firstName lastName")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)

    const total = await Contact.countDocuments(query)

    res.json({
      success: true,
      data: {
        contacts,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total,
        },
      },
    })
  } catch (error) {
    console.error("Get contacts error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve contacts",
    })
  }
})

module.exports = router
