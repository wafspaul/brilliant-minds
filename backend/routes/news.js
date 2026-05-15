const express = require("express")
const News = require("../models/News")
const { body, validationResult } = require("express-validator")

const router = express.Router()

// Get all published news
router.get("/", async (req, res) => {
  try {
    const page = Number.parseInt(req.query.page) || 1
    const limit = Number.parseInt(req.query.limit) || 10
    const category = req.query.category
    const featured = req.query.featured
    const breaking = req.query.breaking
    const search = req.query.search
    const skip = (page - 1) * limit

    const query = { status: "published" }

    if (category && category !== "All") {
      query.category = category
    }

    if (featured === "true") {
      query.featured = true
    }

    if (breaking === "true") {
      query.breaking = true
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { excerpt: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
        { tags: { $in: [new RegExp(search, "i")] } },
      ]
    }

    const news = await News.find(query).sort({ publishedAt: -1 }).skip(skip).limit(limit).select("-content") // Exclude full content for list view

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
    console.error("Get news error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve news",
    })
  }
})

// Get single news article by slug
router.get("/:slug", async (req, res) => {
  try {
    const news = await News.findOne({
      slug: req.params.slug,
      status: "published",
    })

    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News article not found",
      })
    }

    // Increment views
    news.views += 1
    await news.save()

    res.json({
      success: true,
      data: news,
    })
  } catch (error) {
    console.error("Get news by slug error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve news article",
    })
  }
})

// Get featured news
router.get("/featured/articles", async (req, res) => {
  try {
    const limit = Number.parseInt(req.query.limit) || 3

    const featuredNews = await News.find({
      status: "published",
      featured: true,
    })
      .sort({ publishedAt: -1 })
      .limit(limit)
      .select("-content")

    res.json({
      success: true,
      data: featuredNews,
    })
  } catch (error) {
    console.error("Get featured news error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve featured news",
    })
  }
})

// Get breaking news
router.get("/breaking/articles", async (req, res) => {
  try {
    const limit = Number.parseInt(req.query.limit) || 5

    const breakingNews = await News.find({
      status: "published",
      breaking: true,
    })
      .sort({ publishedAt: -1 })
      .limit(limit)
      .select("title slug publishedAt")

    res.json({
      success: true,
      data: breakingNews,
    })
  } catch (error) {
    console.error("Get breaking news error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve breaking news",
    })
  }
})

// Get news categories with counts
router.get("/categories/list", async (req, res) => {
  try {
    const categories = await News.aggregate([
      { $match: { status: "published" } },
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ])

    // Add "All" category with total count
    const totalCount = await News.countDocuments({ status: "published" })
    const categoriesWithAll = [{ _id: "All", count: totalCount }, ...categories]

    res.json({
      success: true,
      data: categoriesWithAll,
    })
  } catch (error) {
    console.error("Get categories error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve categories",
    })
  }
})

// Get news statistics
router.get("/stats/overview", async (req, res) => {
  try {
    const totalArticles = await News.countDocuments({ status: "published" })
    const totalViews = await News.aggregate([
      { $match: { status: "published" } },
      { $group: { _id: null, totalViews: { $sum: "$views" } } },
    ])

    const categoryStats = await News.aggregate([
      { $match: { status: "published" } },
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ])

    const recentArticles = await News.find({ status: "published" })
      .sort({ publishedAt: -1 })
      .limit(5)
      .select("title slug publishedAt views")

    res.json({
      success: true,
      data: {
        totalArticles,
        totalViews: totalViews[0]?.totalViews || 0,
        categoryStats,
        recentArticles,
      },
    })
  } catch (error) {
    console.error("Get news stats error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve news statistics",
    })
  }
})

module.exports = router
