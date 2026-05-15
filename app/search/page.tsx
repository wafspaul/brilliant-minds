"use client"

import React, { useEffect, useState, Suspense } from "react"
import {
  Search,
  Filter,
  Clock,
  TrendingUp,
  FileText,
  Users,
  Lightbulb,
  Building,
  Globe,
  ArrowRight,
  Zap,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import "@/styles/search-animations.scss"

// This component handles the search params safely
const SearchContent = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentQuery, setCurrentQuery] = useState("")
  const [filteredResults, setFilteredResults] = useState<typeof searchData>([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isLoading, setIsLoading] = useState(true)

  // Mock search data
  const searchData = [
    {
      id: 1,
      title: "Digital Inclusion Solutions",
      description:
        "Providing devices, internet connectivity, and access to co-working spaces for marginalized communities.",
      category: "Solutions",
      type: "Page",
      url: "/solutions/digital-inclusion",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["digital", "inclusion", "devices", "connectivity", "co-working"],
      lastUpdated: "2024-01-15",
    },
    {
      id: 2,
      title: "E-Learning Revolution",
      description:
        "Innovative microlearning platform that makes education accessible, engaging, and effective for learners worldwide.",
      category: "Solutions",
      type: "Page",
      url: "/solutions/e-learning",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["e-learning", "education", "microlearning", "interactive", "courses"],
      lastUpdated: "2024-01-14",
    },
    {
      id: 3,
      title: "Gig Economy Integration",
      description:
        "AI-powered platforms to provide equitable and verified work opportunities for freelancers worldwide.",
      category: "Solutions",
      type: "Page",
      url: "/solutions/gig-economy",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["gig economy", "freelancing", "AI", "work opportunities", "verification"],
      lastUpdated: "2024-01-13",
    },
    {
      id: 4,
      title: "Skill Development Programs",
      description: "Self-paced, tailored sessions designed to equip freelancers with market-relevant skills.",
      category: "Solutions",
      type: "Page",
      url: "/solutions/skill-development",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["skills", "development", "training", "freelancing", "webinars"],
      lastUpdated: "2024-01-12",
    },
    {
      id: 5,
      title: "About BrilliantMinds",
      description: "Learn about our mission to empower marginalized communities through technology and innovation.",
      category: "About",
      type: "Page",
      url: "/about",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["about", "mission", "vision", "team", "innovation"],
      lastUpdated: "2024-01-11",
    },
    {
      id: 6,
      title: "Partnership Opportunities",
      description: "Join our global network of partners and create meaningful impact through collaborative innovation.",
      category: "About",
      type: "Page",
      url: "/about/partners",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["partners", "collaboration", "innovation", "global", "network"],
      lastUpdated: "2024-01-10",
    },
    {
      id: 7,
      title: "Career Opportunities",
      description: "Join a team of passionate professionals who are shaping the future of digital transformation.",
      category: "About",
      type: "Page",
      url: "/about/careers",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["careers", "jobs", "remote work", "team", "opportunities"],
      lastUpdated: "2024-01-09",
    },
    {
      id: 8,
      title: "Latest News & Updates",
      description:
        "Stay informed with the latest developments in technology, business, and innovation from around the world.",
      category: "News",
      type: "Page",
      url: "/about/news",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["news", "updates", "technology", "business", "innovation"],
      lastUpdated: "2024-01-08",
    },
    {
      id: 9,
      title: "AI Revolution in Education",
      description: "How artificial intelligence is reshaping educational landscapes across emerging markets.",
      category: "News",
      type: "Article",
      url: "/about/news#article-1",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["AI", "education", "technology", "emerging markets", "learning"],
      lastUpdated: "2024-01-07",
    },
    {
      id: 10,
      title: "Remote Work Revolution",
      description: "50+ Countries embrace digital nomad economy and remote work policies.",
      category: "News",
      type: "Article",
      url: "/about/news#article-2",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tags: ["remote work", "digital nomad", "economy", "policies", "global"],
      lastUpdated: "2024-01-06",
    },
  ]

  const categories = [
    { name: "All", count: searchData.length, icon: Globe },
    { name: "Solutions", count: searchData.filter((item) => item.category === "Solutions").length, icon: Lightbulb },
    { name: "About", count: searchData.filter((item) => item.category === "About").length, icon: Users },
    { name: "News", count: searchData.filter((item) => item.category === "News").length, icon: FileText },
  ]

  const popularSearches = [
    "Digital inclusion",
    "E-learning platform",
    "Freelancing opportunities",
    "Skill development",
    "Remote work",
    "AI technology",
    "Partnership",
    "Career opportunities",
  ]

  const searchSuggestions = [
    "Try searching for 'digital inclusion' or 'e-learning'",
    "Look for 'freelancing' or 'gig economy'",
    "Search 'careers' or 'partnership opportunities'",
    "Try 'AI' or 'technology solutions'",
  ]

  // Get search query from URL on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const query = urlParams.get("q") || ""
      setCurrentQuery(query)
      setSearchQuery(query)

      setIsLoading(true)
      setTimeout(() => {
        performSearch(query)
        setIsLoading(false)
      }, 800)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredResults([])
      return
    }

    const results = searchData.filter((item) => {
      const searchTerms = query.toLowerCase().split(" ")
      const searchableText = `${item.title} ${item.description} ${item.tags.join(" ")}`.toLowerCase()

      return searchTerms.some(
        (term) => searchableText.includes(term) || item.tags.some((tag) => tag.toLowerCase().includes(term)),
      )
    })

    // Sort by relevance (simple scoring)
    const scoredResults = results
      .map((item) => {
        const searchTerms = query.toLowerCase().split(" ")
        let score = 0

        searchTerms.forEach((term) => {
          if (item.title.toLowerCase().includes(term)) score += 3
          if (item.description.toLowerCase().includes(term)) score += 2
          if (item.tags.some((tag) => tag.toLowerCase().includes(term))) score += 1
        })

        return { ...item, score }
      })
      .sort((a, b) => b.score - a.score)

    setFilteredResults(scoredResults)
  }

  const handleNewSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const url = `/search?q=${encodeURIComponent(searchQuery.trim())}`
      window.history.pushState({}, '', url)
      setCurrentQuery(searchQuery.trim())
      
      // Simulate loading
      setIsLoading(true)
      setTimeout(() => {
        performSearch(searchQuery.trim())
        setIsLoading(false)
      }, 800)
    }
  }

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
  }

  const getFilteredResults = () => {
    if (selectedCategory === "All") {
      return filteredResults
    }
    return filteredResults.filter((item) => item.category === selectedCategory)
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Page":
        return Building
      case "Article":
        return FileText
      default:
        return FileText
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Page":
        return "from-blue-500 to-cyan-500"
      case "Article":
        return "from-green-500 to-emerald-500"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

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
  }, [filteredResults])

  const displayResults = getFilteredResults()

  return (
    <>
      {/* Search Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {currentQuery ? `Search Results for "${currentQuery}"` : "Search BrilliantMinds"}
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              {currentQuery
                ? `Found ${displayResults.length} result${displayResults.length !== 1 ? "s" : ""}`
                : "Discover our solutions, news, and opportunities"}
            </p>

            {/* Search Form */}
            <form onSubmit={handleNewSearch} className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for solutions, news, careers..."
                  className="w-full pl-12 pr-4 py-4 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-white/70 rounded-full focus:outline-none focus:border-cyan-400/50 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleCategoryFilter(category.name)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.name
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {React.createElement(category.icon, { className: "w-4 h-4" })}
                  <span>
                    {category.name} ({category.count})
                  </span>
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Filter</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {isLoading ? (
            // Loading State
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
                    <div className="flex space-x-4">
                      <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0" />
                      <div className="flex-1 space-y-3">
                        <div className="h-6 bg-gray-200 rounded w-3/4" />
                        <div className="h-4 bg-gray-200 rounded w-full" />
                        <div className="h-4 bg-gray-200 rounded w-2/3" />
                        <div className="flex space-x-2">
                          <div className="h-6 bg-gray-200 rounded w-16" />
                          <div className="h-6 bg-gray-200 rounded w-20" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : displayResults.length > 0 ? (
            // Results Found
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {displayResults.map((result, index) => (
                  <div
                    key={result.id}
                    className="section-reveal search-result-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    style={{ "--index": index } as React.CSSProperties}
                  >
                    <div className="p-6">
                      <div className="flex space-x-4">
                        <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={result.image || "/placeholder.svg"}
                            alt={result.title}
                            fill
                            className="object-cover"
                            quality={85}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <div
                                className={`w-6 h-6 bg-gradient-to-r ${getTypeColor(result.type)} rounded-full flex items-center justify-center`}
                              >
                                {React.createElement(getTypeIcon(result.type), { className: "w-3 h-3 text-white" })}
                              </div>
                              <span className="text-sm font-medium text-gray-600">{result.type}</span>
                              <span className="text-gray-400">•</span>
                              <span className="text-sm text-gray-500">{result.category}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-400">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">{new Date(result.lastUpdated).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                            <a href={result.url}>{result.title}</a>
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">{result.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {result.tags.slice(0, 3).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                              {result.tags.length > 3 && (
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                                  +{result.tags.length - 3} more
                                </span>
                              )}
                            </div>
                            <a
                              href={result.url}
                              className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
                            >
                              <span>View</span>
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : currentQuery ? (
            // No Results Found
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-2xl shadow-lg p-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">No results found</h2>
                <p className="text-gray-600 mb-8">
                  We couldn&apos;t find anything matching &ldquo;{currentQuery}&rdquo;. Try adjusting your search or browse our
                  suggestions below.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Suggestions</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {searchSuggestions.map((suggestion, index) => (
                        <div key={index} className="p-4 bg-blue-50 rounded-lg text-left">
                          <div className="flex items-center space-x-2">
                            <Lightbulb className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <p className="text-sm text-blue-800">{suggestion}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Searches</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {popularSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSearchQuery(search)
                            const url = `/search?q=${encodeURIComponent(search)}`
                            window.history.pushState({}, '', url)
                            setCurrentQuery(search)
                            setIsLoading(true)
                            setTimeout(() => {
                              performSearch(search)
                              setIsLoading(false)
                            }, 800)
                          }}
                          className="px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full transition-colors text-sm"
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Initial State (no search query)
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl shadow-lg p-12">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover BrilliantMinds</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Search through our solutions, news, career opportunities, and more
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                      Popular Searches
                    </h3>
                    <div className="space-y-2">
                      {popularSearches.slice(0, 4).map((search, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSearchQuery(search)
                            const url = `/search?q=${encodeURIComponent(search)}`
                            window.history.pushState({}, '', url)
                            setCurrentQuery(search)
                            setIsLoading(true)
                            setTimeout(() => {
                              performSearch(search)
                              setIsLoading(false)
                            }, 800)
                          }}
                          className="block w-full text-left px-4 py-2 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-700 rounded-lg transition-colors"
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-green-600" />
                      Quick Access
                    </h3>
                    <div className="space-y-2">
                      <a
                        href="/solutions"
                        className="block px-4 py-2 bg-gray-50 hover:bg-green-50 text-gray-700 hover:text-green-700 rounded-lg transition-colors"
                      >
                        Our Solutions
                      </a>
                      <a
                        href="/about/careers"
                        className="block px-4 py-2 bg-gray-50 hover:bg-green-50 text-gray-700 hover:text-green-700 rounded-lg transition-colors"
                      >
                        Career Opportunities
                      </a>
                      <a
                        href="/about/news"
                        className="block px-4 py-2 bg-gray-50 hover:bg-green-50 text-gray-700 hover:text-green-700 rounded-lg transition-colors"
                      >
                        Latest News
                      </a>
                      <a
                        href="/about/partners"
                        className="block px-4 py-2 bg-gray-50 hover:bg-green-50 text-gray-700 hover:text-green-700 rounded-lg transition-colors"
                      >
                        Partnership Opportunities
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

// Loading fallback component
const SearchFallback = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="pt-24 pb-12 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-12 bg-white/20 rounded-lg mb-6 animate-pulse"></div>
          <div className="h-6 bg-white/20 rounded-lg mb-8 max-w-md mx-auto animate-pulse"></div>
          <div className="max-w-2xl mx-auto">
            <div className="h-16 bg-white/20 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-8 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex gap-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-12 w-24 bg-gray-200 rounded-full animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 animate-pulse"></div>
            <div className="h-8 bg-gray-200 rounded-lg mb-4 max-w-sm mx-auto animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded-lg mb-8 max-w-lg mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Main SearchPage component with Suspense
const SearchPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Suspense fallback={<SearchFallback />}>
        <SearchContent />
      </Suspense>
      <Footer />
    </div>
  )
}

export default SearchPage