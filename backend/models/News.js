const mongoose = require("mongoose")

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    excerpt: {
      type: String,
      required: [true, "Excerpt is required"],
      trim: true,
      maxlength: [300, "Excerpt cannot exceed 300 characters"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      trim: true,
    },
    featuredImage: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: ["Technology", "Business", "Education", "Economics", "Innovation", "All"],
      default: "Technology",
    },
    tags: [
      {
        type: String,
        trim: true,
        lowercase: true,
      },
    ],
    author: {
      name: {
        type: String,
        required: true,
      },
      bio: String,
      avatar: String,
      social: {
        twitter: String,
        linkedin: String,
      },
    },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
    publishedAt: {
      type: Date,
    },
    views: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    breaking: {
      type: Boolean,
      default: false,
    },
    readTime: {
      type: String,
      default: "5 min read",
    },
    seoTitle: {
      type: String,
      trim: true,
      maxlength: [60, "SEO title cannot exceed 60 characters"],
    },
    seoDescription: {
      type: String,
      trim: true,
      maxlength: [160, "SEO description cannot exceed 160 characters"],
    },
    comments: [
      {
        name: String,
        email: String,
        message: String,
        approved: {
          type: Boolean,
          default: false,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

// Generate slug from title before saving
newsSchema.pre("save", function (next) {
  if (this.isModified("title") && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/\s+/g, "-")
      .trim()
  }

  // Set publishedAt when status changes to published
  if (this.isModified("status") && this.status === "published" && !this.publishedAt) {
    this.publishedAt = new Date()
  }

  next()
})

// Index for better query performance
newsSchema.index({ slug: 1 })
newsSchema.index({ status: 1 })
newsSchema.index({ publishedAt: -1 })
newsSchema.index({ category: 1 })
newsSchema.index({ featured: 1 })
newsSchema.index({ breaking: 1 })

module.exports = mongoose.model("News", newsSchema)
