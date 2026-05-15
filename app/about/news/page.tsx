"use client"

import React, { useEffect, useState } from "react"
import {
  Newspaper,
  Clock,
  User,
  Eye,
  MessageCircle,
  Calendar,
  Search,
  Filter,
  ArrowRight,
  Bookmark,
  Bell,
  Globe,
  Award,
  Users,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import "@/styles/news-animations.scss"

const NewsPage = () => {
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const featuredNews = [
    {
      id: 1,
      title: "AI Revolution in Education: How Machine Learning is Transforming Global Learning",
      excerpt:
        "Discover how artificial intelligence is reshaping educational landscapes across emerging markets, creating new opportunities for millions of learners worldwide.",
      image:
        "/images/ai.jpg",
      category: "Technology",
      author: "Dr. Sarah Brown",
      date: "2024-01-15",
      readTime: "8 min read",
      views: "12.5K",
      isBreaking: true,
    },
    {
      id: 2,
      title: "Remote Work Revolution: 50+ Countries Embrace Digital Nomad Economy",
      excerpt:
        "A comprehensive analysis of how remote work policies are creating new economic opportunities and reshaping traditional employment models globally.",
      image:
        "/images/work.jpg",
      category: "Business",
      author: "Marcus Rodriguez",
      date: "2024-01-14",
      readTime: "6 min read",
      views: "8.2K",
      isBreaking: false,
    },
    {
      id: 3,
      title: "Digital Skills Gap: $2.4 Trillion Opportunity in Emerging Markets",
      excerpt:
        "New research reveals massive economic potential as developing nations invest in digital literacy and technology infrastructure development.",
      image:
        "/images/digital.jpg",
      category: "Economics",
      author: "Aisha Patel",
      date: "2024-01-13",
      readTime: "10 min read",
      views: "15.7K",
      isBreaking: false,
    },
  ]

  const categories = [
    { name: "All", count: 156, color: "from-gray-500 to-gray-600" },
    { name: "Technology", count: 45, color: "from-blue-500 to-cyan-500" },
    { name: "Business", count: 38, color: "from-green-500 to-emerald-500" },
    { name: "Education", count: 32, color: "from-purple-500 to-violet-500" },
    { name: "Economics", count: 28, color: "from-orange-500 to-red-500" },
    { name: "Innovation", count: 13, color: "from-pink-500 to-rose-500" },
  ]

  const latestNews = [
    {
      id: 4,
      title: "Blockchain Technology Revolutionizes Supply Chain Management in Africa",
      excerpt: "How distributed ledger technology is solving transparency issues in African supply chains.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Technology",
      author: "James Okafor",
      date: "2024-01-12",
      readTime: "5 min read",
      views: "6.8K",
      comments: 24,
    },
    {
      id: 5,
      title: "Microfinance 3.0: Digital Lending Platforms Reach 100M Users",
      excerpt: "Revolutionary fintech solutions are providing financial access to previously underserved populations.",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Business",
      author: "Elena Vasquez",
      date: "2024-01-11",
      readTime: "7 min read",
      views: "9.1K",
      comments: 18,
    },
    {
      id: 6,
      title: "Green Energy Startups Secure $500M in Series A Funding",
      excerpt: "Renewable energy innovations attract major investment as climate tech sector accelerates growth.",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Innovation",
      author: "David Kim",
      date: "2024-01-10",
      readTime: "4 min read",
      views: "5.3K",
      comments: 12,
    },
    {
      id: 7,
      title: "Online Learning Platforms Report 300% Growth in Developing Nations",
      excerpt: "Educational technology adoption accelerates as internet infrastructure improves globally.",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Education",
      author: "Maria Santos",
      date: "2024-01-09",
      readTime: "6 min read",
      views: "7.9K",
      comments: 31,
    },
    {
      id: 8,
      title: "Cryptocurrency Adoption Surges 400% in Latin America",
      excerpt: "Digital currencies gain mainstream acceptance as inflation hedge and payment solution.",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Economics",
      author: "Carlos Mendez",
      date: "2024-01-08",
      readTime: "8 min read",
      views: "11.2K",
      comments: 45,
    },
    {
      id: 9,
      title: "Women Entrepreneurs Lead Tech Innovation in Southeast Asia",
      excerpt: "Female-founded startups drive technological advancement and economic growth across the region.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Business",
      author: "Priya Sharma",
      date: "2024-01-07",
      readTime: "9 min read",
      views: "8.7K",
      comments: 22,
    },
  ]


  const newsStats = [
    {
      number: "500K+",
      label: "Monthly Readers",
      description: "Global audience engagement",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "1,200+",
      label: "Articles Published",
      description: "Comprehensive news coverage",
      icon: Newspaper,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "50+",
      label: "Expert Contributors",
      description: "Industry thought leaders",
      icon: Award,
      color: "from-purple-500 to-violet-500",
    },
    {
      number: "25+",
      label: "Countries Covered",
      description: "Global news network",
      icon: Globe,
      color: "from-orange-500 to-red-500",
    },
  ]

  useEffect(() => {
    const featuredInterval = setInterval(() => {
      setCurrentFeaturedIndex((prev) => (prev + 1) % featuredNews.length)
    }, 6000)

    return () => clearInterval(featuredInterval)
  }, [featuredNews.length])

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const sections = document.querySelectorAll(".section-reveal")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const filteredNews =
    selectedCategory === "All" ? latestNews : latestNews.filter((news) => news.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* News Hero - Featured Articles Carousel */}
      <section className="stable-layout relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {featuredNews.map((news, index) => (
            <div key={index} className={`hero-background ${index === currentFeaturedIndex ? "active" : ""}`}>
              <Image
                src={news.image || "/placeholder.svg"}
                alt={news.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority={index === 0}
                quality={85}
              />
            </div>
          ))}
          <div className="absolute z-10 inset-0 bg-gradient-to-r from-black/40 via-gray-900/50 to-black/60" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20 sm:pt-0">
          <div className="content-animate max-w-6xl mx-auto text-white">
            <div
              key={currentFeaturedIndex}
              className={`hero-content-slide grid lg:grid-cols-2 gap-12 items-center ${
                currentFeaturedIndex >= 0 ? "active" : ""
              }`}
            >
              {/* Left Content */}
              <div className="space-y-6 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
                <div className="flex items-center space-x-4">
                  {featuredNews[currentFeaturedIndex].isBreaking && (
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                      BREAKING
                    </div>
                  )}
                  <div className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1">
                    <span className="text-sm font-medium">{featuredNews[currentFeaturedIndex].category}</span>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  {featuredNews[currentFeaturedIndex].title}
                </h1>

                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                  {featuredNews[currentFeaturedIndex].excerpt}
                </p>

                <div className="flex items-center space-x-6 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{featuredNews[currentFeaturedIndex].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredNews[currentFeaturedIndex].date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredNews[currentFeaturedIndex].readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>{featuredNews[currentFeaturedIndex].views}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 btn-hover">
                    Read Full Article
                  </button>
                  <button className="px-8 py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 btn-hover">
                    Share Article
                  </button>
                </div>
              </div>

              {/* Right Content - Article Preview */}
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4">More Featured Stories</h3>
                  <div className="space-y-4">
                    {featuredNews
                      .filter((_, index) => index !== currentFeaturedIndex)
                      .slice(0, 2)
                      .map((news, index) => (
                        <div
                          key={index}
                          className="flex space-x-4 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={news.image || "/placeholder.svg"}
                              alt={news.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm line-clamp-2 mb-1">{news.title}</h4>
                            <div className="flex items-center space-x-2 text-xs text-gray-300">
                              <span>{news.author}</span>
                              <span>•</span>
                              <span>{news.readTime}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Indicators */}
        <div className="absolute bottom-8 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {featuredNews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentFeaturedIndex(index)}
              className={`nav-indicator ${index === currentFeaturedIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </section>

      {/* Breaking News Ticker */}
      <section className="bg-red-600 text-white py-3 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="bg-white text-red-600 px-3 py-1 rounded font-bold text-sm mr-4 flex-shrink-0">BREAKING</div>
            <div className="breaking-news-scroll">
              <span className="mr-8">
                AI Revolution in Education: How Machine Learning is Transforming Global Learning
              </span>
              <span className="mr-8">Remote Work Revolution: 50+ Countries Embrace Digital Nomad Economy</span>
              <span className="mr-8">Digital Skills Gap: $2.4 Trillion Opportunity in Emerging Markets</span>
            </div>
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.name
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Filter className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Latest News & Insights</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest developments in technology, business, and innovation from around the world
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article) => (
              <article
                key={article.id}
                className="section-reveal card-hover bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    quality={85}
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 cursor-pointer hover:bg-white transition-colors">
                    <Bookmark className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{article.comments}</span>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center space-x-1">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 btn-hover">
              Load More Articles
            </button>
          </div>
        </div>
      </section>


      {/* News Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our News Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering trusted news and insights to a global audience of professionals and decision-makers
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newsStats.map((stat, index) => (
              <div
                key={index}
                className="section-reveal card-hover bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center shadow-xl border border-gray-100"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  {React.createElement(stat.icon, { className: "w-10 h-10 text-white" })}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bell className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Stay Informed</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-8" />
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Get the latest news, insights, and analysis delivered directly to your inbox. Join 100,000+ professionals
              who trust our newsletter.
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full text-white border-amber-50 border-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 btn-hover">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-300 mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default NewsPage
