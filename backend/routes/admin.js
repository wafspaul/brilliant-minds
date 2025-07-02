const express = require("express")
const jwt = require("jsonwebtoken")
const Admin = require("../models/Admin")
const News = require("../models/News")
const Contact = require("../models/Contact")
const Donation = require("../models/Donation")
const { body, validationResult } = require("express-validator")

const router = express.Router()

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || "your-super-secret-jwt-key-change-in-production"

// Auth middleware
const authenticateAdmin = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "")

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
      })
    }

    const decoded = jwt.verify(token, JWT_SECRET)
    const admin = await Admin.findById(decoded.id).select("-password")

    if (!admin || !admin.isActive) {
      return res.status(401).json({
        success: false,
        message: "Invalid token or inactive account.",
      })
    }

    req.admin = admin
    next()
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid token.",
    })
  }
}

// Admin login
router.post(
  "/login",
  [
    body("email").isEmail().normalizeEmail().withMessage("Please enter a valid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
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

      const { email, password } = req.body

      const admin = await Admin.findOne({ email })
      if (!admin) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        })
      }

      // Check if account is locked
      if (admin.isLocked) {
        return res.status(423).json({
          success: false,
          message: "Account is temporarily locked due to too many failed login attempts",
        })
      }

      // Check if account is active
      if (!admin.isActive) {
        return res.status(401).json({
          success: false,
          message: "Account is deactivated",
        })
      }

      const isPasswordValid = await admin.comparePassword(password)
      if (!isPasswordValid) {
        await admin.incLoginAttempts()
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        })
      }

      // Reset login attempts on successful login
      await admin.resetLoginAttempts()

      const token = jwt.sign({ id: admin._id, email: admin.email, role: admin.role }, JWT_SECRET, { expiresIn: "24h" })

      res.json({
        success: true,
        message: "Login successful",
        data: {
          token,
          admin: {
            id: admin._id,
            firstName: admin.firstName,
            lastName: admin.lastName,
            email: admin.email,
            role: admin.role,
            permissions: admin.permissions,
          },
        },
      })
    } catch (error) {
      console.error("Admin login error:", error)
      res.status(500).json({
        success: false,
        message: "Login failed",
      })
    }
  },
)

// Get admin profile
router.get("/profile", authenticateAdmin, async (req, res) => {
  res.json({
    success: true,
    data: req.admin,
  })
})

// Create news article
router.post(
  "/news",
  authenticateAdmin,
  [
    body("title").trim().isLength({ min: 5, max: 200 }).withMessage("Title must be between 5 and 200 characters"),
    body("excerpt").trim().isLength({ min: 10, max: 300 }).withMessage("Excerpt must be between 10 and 300 characters"),
    body("content").trim().isLength({ min: 50 }).withMessage("Content must be at least 50 characters"),
    body("category")
      .isIn(["Technology", "Business", "Education", "Economics", "Innovation"])
      .withMessage("Invalid category"),
    body("author.name").trim().isLength({ min: 2 }).withMessage("Author name is required"),
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

      const newsData = {
        ...req.body,
        createdBy: req.admin._id,
      }

      const news = new News(newsData)
      await news.save()

      res.status(201).json({
        success: true,
        message: "News article created successfully",
        data: news,
      })
    } catch (error) {
      console.error("Create news error:", error)
      res.status(500).json({
        success: false,
        message: "Failed to create news article",
      })
    }
  },
)

// Get all news (including drafts) for admin
router.get("/news", authenticateAdmin, async (req, res) => {
  try {
    const page = Number.parseInt(req.query.page) || 1
    const limit = Number.parseInt(req.query.limit) || 10
    const status = req.query.status
    const category = req.query.category
    const skip = (page - 1) * limit

    const query = {}
    if (status) query.status = status
    if (category && category !== "All") query.category = category

    const news = await News.find(query)
      .populate("createdBy", "firstName lastName")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)

    const total = await News.countDocuments(query)

    res.json({
      success: true,
      data: {
        news,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total,
        },
      },
    })
  } catch (error) {
    console.error("Get admin news error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve news",
    })
  }
})

// Update news article
router.put("/news/:id", authenticateAdmin, async (req, res) => {
  try {
    const news = await News.findById(req.params.id)
    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News article not found",
      })
    }

    Object.assign(news, req.body)
    await news.save()

    res.json({
      success: true,
      message: "News article updated successfully",
      data: news,
    })
  } catch (error) {
    console.error("Update news error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to update news article",
    })
  }
})

// Delete news article
router.delete("/news/:id", authenticateAdmin, async (req, res) => {
  try {
    const news = await News.findById(req.params.id)
    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News article not found",
      })
    }

    await News.findByIdAndDelete(req.params.id)

    res.json({
      success: true,
      message: "News article deleted successfully",
    })
  } catch (error) {
    console.error("Delete news error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to delete news article",
    })
  }
})

// Dashboard statistics
router.get("/dashboard", authenticateAdmin, async (req, res) => {
  try {
    const [totalNews, publishedNews, draftNews, totalContacts, newContacts, totalDonations, pendingDonations] =
      await Promise.all([
        News.countDocuments(),
        News.countDocuments({ status: "published" }),
        News.countDocuments({ status: "draft" }),
        Contact.countDocuments(),
        Contact.countDocuments({ status: "new" }),
        Donation.countDocuments(),
        Donation.countDocuments({ status: "pending" }),
      ])

    const recentNews = await News.find()
      .populate("createdBy", "firstName lastName")
      .sort({ createdAt: -1 })
      .limit(5)
      .select("title status createdAt views")

    const recentContacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("name email purpose status createdAt")

    const recentDonations = await Donation.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("donorName donationType status createdAt")

    res.json({
      success: true,
      data: {
        stats: {
          news: { total: totalNews, published: publishedNews, draft: draftNews },
          contacts: { total: totalContacts, new: newContacts },
          donations: { total: totalDonations, pending: pendingDonations },
        },
        recent: {
          news: recentNews,
          contacts: recentContacts,
          donations: recentDonations,
        },
      },
    })
  } catch (error) {
    console.error("Dashboard error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to load dashboard data",
    })
  }
})

module.exports = router
