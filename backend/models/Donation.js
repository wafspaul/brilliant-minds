const mongoose = require("mongoose")

const donationSchema = new mongoose.Schema(
  {
    donorName: {
      type: String,
      required: [true, "Donor name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    donorEmail: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email"],
    },
    donorPhone: {
      type: String,
      trim: true,
    },
    donationType: {
      type: String,
      required: [true, "Donation type is required"],
      enum: ["financial", "device", "volunteer-time", "skills", "resources", "other"],
    },

    // Financial donation (pledge/commitment - no actual payment processing)
    financialDetails: {
      amount: {
        type: Number,
        min: [1, "Amount must be at least 1"],
      },
      currency: {
        type: String,
        enum: ["USD", "KES", "EUR", "GBP"],
        default: "USD",
      },
      frequency: {
        type: String,
        enum: ["one-time", "monthly", "quarterly", "annually"],
        default: "one-time",
      },
      pledgeDate: Date,
      preferredPaymentMethod: {
        type: String,
        enum: ["bank-transfer", "mobile-money", "check", "other"],
      },
    },

    // Device donation
    deviceDetails: {
      deviceType: {
        type: String,
        enum: ["laptop", "desktop", "tablet", "smartphone", "router", "other"],
      },
      brand: String,
      model: String,
      condition: {
        type: String,
        enum: ["excellent", "good", "fair", "needs-repair"],
      },
      specifications: String,
      quantity: {
        type: Number,
        min: [1, "Quantity must be at least 1"],
      },
      estimatedValue: Number,
    },

    // Volunteer time donation
    volunteerDetails: {
      skillsOffered: [String],
      hoursPerWeek: {
        type: Number,
        min: [1, "Hours per week must be at least 1"],
      },
      duration: {
        type: String,
        enum: ["1-month", "3-months", "6-months", "1-year", "ongoing"],
      },
      availability: {
        type: String,
        enum: ["weekdays", "weekends", "evenings", "flexible"],
      },
      remote: {
        type: Boolean,
        default: true,
      },
      location: String,
    },

    // Skills donation (pro-bono services)
    skillsDetails: {
      serviceType: {
        type: String,
        enum: [
          "web-development",
          "graphic-design",
          "marketing",
          "legal",
          "accounting",
          "consulting",
          "training",
          "other",
        ],
      },
      description: String,
      estimatedHours: Number,
      estimatedValue: Number,
      timeline: String,
    },

    // Resources donation
    resourcesDetails: {
      resourceType: {
        type: String,
        enum: ["software-licenses", "books", "training-materials", "office-supplies", "other"],
      },
      description: String,
      quantity: Number,
      estimatedValue: Number,
    },

    // General fields
    message: {
      type: String,
      trim: true,
      maxlength: [500, "Message cannot exceed 500 characters"],
    },
    status: {
      type: String,
      enum: ["pending", "approved", "in-progress", "completed", "declined"],
      default: "pending",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
    notes: [
      {
        note: String,
        addedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Admin",
        },
        addedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    anonymous: {
      type: Boolean,
      default: false,
    },
    receiptRequested: {
      type: Boolean,
      default: false,
    },
    ipAddress: String,
    userAgent: String,
  },
  {
    timestamps: true,
  },
)

// Index for better query performance
donationSchema.index({ donationType: 1 })
donationSchema.index({ status: 1 })
donationSchema.index({ createdAt: -1 })

module.exports = mongoose.model("Donation", donationSchema)
