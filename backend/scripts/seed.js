const mongoose = require("mongoose")
const dotenv = require("dotenv")
const Admin = require("../models/Admin")
const News = require("../models/News")

dotenv.config()

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/brilliantminds")
    console.log("Connected to MongoDB")

    // Clear existing data
    await Admin.deleteMany({})
    await News.deleteMany({})
    console.log("Cleared existing data")

    // Create admin user
    const admin = new Admin({
      firstName: process.env.ADMIN_FIRST_NAME || "Admin",
      lastName: process.env.ADMIN_LAST_NAME || "User",
      email: process.env.ADMIN_EMAIL || "admin@brilliantminds.co.ke",
      password: process.env.ADMIN_PASSWORD || "admin123456",
      role: "super-admin",
      permissions: {
        news: { create: true, read: true, update: true, delete: true },
        donations: { read: true, update: true, delete: true },
        contacts: { read: true, update: true, delete: true },
        users: { create: true, read: true, update: true, delete: true },
      },
    })

    await admin.save()
    console.log("✅ Admin user created")

    // Create sample news articles
    const sampleNews = [
      {
        title: "AI Revolution in Education: How Machine Learning is Transforming Global Learning",
        excerpt:
          "Discover how artificial intelligence is reshaping educational landscapes across emerging markets, creating new opportunities for millions of learners worldwide.",
        content: `
          <p>Artificial Intelligence is revolutionizing the education sector in unprecedented ways. From personalized learning experiences to automated grading systems, AI is making education more accessible and effective for students worldwide.</p>
          
          <h2>Key Developments</h2>
          <p>Recent developments in AI-powered education include:</p>
          <ul>
            <li>Adaptive learning platforms that adjust to individual student needs</li>
            <li>AI tutors providing 24/7 support</li>
            <li>Automated essay grading and feedback systems</li>
            <li>Predictive analytics for student performance</li>
          </ul>
          
          <h2>Impact on Emerging Markets</h2>
          <p>In emerging markets, AI is particularly transformative, providing access to quality education in areas where traditional resources are limited.</p>
        `,
        featuredImage: "/images/ai-education.jpg",
        category: "Technology",
        author: {
          name: "Dr. Sarah Brown",
          bio: "AI researcher and education technology expert",
          avatar: "/images/authors/sarah-brown.jpg",
        },
        status: "published",
        featured: true,
        breaking: true,
        readTime: "8 min read",
        tags: ["ai", "education", "machine-learning", "emerging-markets"],
        createdBy: admin._id,
        publishedAt: new Date("2024-01-15"),
      },
      {
        title: "Remote Work Revolution: 50+ Countries Embrace Digital Nomad Economy",
        excerpt:
          "A comprehensive analysis of how remote work policies are creating new economic opportunities and reshaping traditional employment models globally.",
        content: `
          <p>The remote work revolution has fundamentally changed how we think about employment, location, and work-life balance. Over 50 countries have now introduced digital nomad visas and policies.</p>
          
          <h2>Global Adoption</h2>
          <p>Countries leading the digital nomad movement include:</p>
          <ul>
            <li>Estonia with its Digital Nomad Visa</li>
            <li>Portugal's D7 Visa program</li>
            <li>Barbados Welcome Stamp</li>
            <li>Dubai's Virtual Working Program</li>
          </ul>
          
          <h2>Economic Impact</h2>
          <p>The economic benefits of digital nomadism are substantial, with remote workers contributing billions to local economies while maintaining their international careers.</p>
        `,
        featuredImage: "/images/remote-work.jpg",
        category: "Business",
        author: {
          name: "Marcus Rodriguez",
          bio: "Business analyst and remote work advocate",
          avatar: "/images/authors/marcus-rodriguez.jpg",
        },
        status: "published",
        featured: true,
        readTime: "6 min read",
        tags: ["remote-work", "digital-nomad", "economy", "global-trends"],
        createdBy: admin._id,
        publishedAt: new Date("2024-01-14"),
      },
      {
        title: "Digital Skills Gap: $2.4 Trillion Opportunity in Emerging Markets",
        excerpt:
          "New research reveals massive economic potential as developing nations invest in digital literacy and technology infrastructure development.",
        content: `
          <p>A new study reveals that addressing the digital skills gap in emerging markets could unlock $2.4 trillion in economic value over the next decade.</p>
          
          <h2>The Challenge</h2>
          <p>Despite rapid technological advancement, many emerging markets face significant challenges:</p>
          <ul>
            <li>Limited access to quality digital education</li>
            <li>Infrastructure gaps in rural areas</li>
            <li>Lack of industry-relevant training programs</li>
            <li>Gender disparities in tech education</li>
          </ul>
          
          <h2>The Opportunity</h2>
          <p>Investing in digital skills development could transform entire economies, creating millions of jobs and fostering innovation across sectors.</p>
        `,
        featuredImage: "/images/digital-skills.jpg",
        category: "Economics",
        author: {
          name: "Aisha Patel",
          bio: "Economic development researcher",
          avatar: "/images/authors/aisha-patel.jpg",
        },
        status: "published",
        featured: true,
        readTime: "10 min read",
        tags: ["digital-skills", "emerging-markets", "economic-development", "education"],
        createdBy: admin._id,
        publishedAt: new Date("2024-01-13"),
      },
      {
        title: "Blockchain Technology Revolutionizes Supply Chain Management in Africa",
        excerpt: "How distributed ledger technology is solving transparency issues in African supply chains.",
        content: `
          <p>Blockchain technology is transforming supply chain management across Africa, bringing unprecedented transparency and efficiency to complex logistics networks.</p>
          
          <h2>Key Applications</h2>
          <p>African companies are implementing blockchain for:</p>
          <ul>
            <li>Agricultural product traceability</li>
            <li>Diamond and mineral certification</li>
            <li>Pharmaceutical supply chain verification</li>
            <li>Cross-border trade facilitation</li>
          </ul>
        `,
        featuredImage: "/images/blockchain-africa.jpg",
        category: "Technology",
        author: {
          name: "James Okafor",
          bio: "Blockchain technology consultant",
          avatar: "/images/authors/james-okafor.jpg",
        },
        status: "published",
        readTime: "5 min read",
        tags: ["blockchain", "supply-chain", "africa", "technology"],
        createdBy: admin._id,
        publishedAt: new Date("2024-01-12"),
      },
      {
        title: "Microfinance 3.0: Digital Lending Platforms Reach 100M Users",
        excerpt:
          "Revolutionary fintech solutions are providing financial access to previously underserved populations.",
        content: `
          <p>Digital microfinance platforms have reached a milestone of 100 million users globally, revolutionizing access to financial services for underserved populations.</p>
          
          <h2>Platform Growth</h2>
          <p>Leading platforms have seen exponential growth through:</p>
          <ul>
            <li>Mobile-first lending solutions</li>
            <li>AI-powered credit scoring</li>
            <li>Blockchain-based transparency</li>
            <li>Partnership with traditional banks</li>
          </ul>
        `,
        featuredImage: "/images/microfinance.jpg",
        category: "Business",
        author: {
          name: "Elena Vasquez",
          bio: "Fintech industry analyst",
          avatar: "/images/authors/elena-vasquez.jpg",
        },
        status: "published",
        readTime: "7 min read",
        tags: ["microfinance", "fintech", "digital-lending", "financial-inclusion"],
        createdBy: admin._id,
        publishedAt: new Date("2024-01-11"),
      },
    ]

    for (const newsData of sampleNews) {
      const news = new News(newsData)
      await news.save()
    }

    console.log("✅ Sample news articles created")
    console.log("\n🎉 Database seeded successfully!")
    console.log("\n📧 Admin Login Details:")
    console.log(`Email: ${admin.email}`)
    console.log(`Password: ${process.env.ADMIN_PASSWORD || "admin123456"}`)
    console.log("\n🚀 You can now start the server with: npm run dev")
  } catch (error) {
    console.error("❌ Seeding failed:", error)
  } finally {
    await mongoose.disconnect()
    console.log("Disconnected from MongoDB")
    process.exit(0)
  }
}

seedData()
