const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const path = require("path")

// Load environment variables
dotenv.config()

const app = express()

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  }),
)
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true, limit: "10mb" }))

// Static files for uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/brilliantminds", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err))

// Import routes
const contactRoutes = require("./routes/contact")
const donationRoutes = require("./routes/donations")
const newsRoutes = require("./routes/news")
const adminRoutes = require("./routes/admin")

// Use routes
app.use("/api/contact", contactRoutes)
app.use("/api/donations", donationRoutes)
app.use("/api/news", newsRoutes)
app.use("/api/admin", adminRoutes)

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "BrilliantMinds API is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.stack)
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.message : "Internal server error",
  })
})

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found",
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`)
  console.log(`📱 Frontend URL: ${process.env.FRONTEND_URL || "http://localhost:3000"}`)
})

module.exports = app
