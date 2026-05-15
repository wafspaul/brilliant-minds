"use client"

import React, { useEffect, useState } from "react"
import {
  Briefcase,
  Shield,
  Globe,
  Target,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  MapPin,
  Zap,
  Brain,
  DollarSign,
  AlertTriangle,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import "@/styles/gig-economy-animations.scss"

const GigEconomyPage = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)

  const heroContent = [
    {
      title: "Gig Economy Integration",
      subtitle: "AI-Powered Work Opportunities",
      description:
        "Connect with verified opportunities worldwide through our AI-powered platform that ensures fair, transparent, and secure freelancing experiences.",
      image: "/images/gig-hero-1.jpg",
      stats: "50K+ Verified Gigs",
      highlight: "Smart Matching",
    },
    {
      title: "Verified Security",
      subtitle: "Scam-Free Work Environment",
      description:
        "Advanced AI verification systems ensure every opportunity is legitimate, protecting freelancers from fraudulent activities and unsafe work conditions.",
      image: "/images/gig-hero-2.jpg",
      stats: "99.8% Scam Prevention",
      highlight: "Verified Security",
    },
    {
      title: "Global Access",
      subtitle: "Worldwide Opportunities",
      description:
        "Access international freelancing opportunities across multiple industries including HR, marketing, development, design, and more.",
      image: "/images/gig-hero-3.jpg",
      stats: "120+ Countries Served",
      highlight: "Global Reach",
    },
  ]

  const gigBenefits = [
    {
      icon: Target,
      title: "Smart Job Matching",
      description: "AI algorithms match freelancers with opportunities that align with their skills and preferences",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Verified Security",
      description: "Comprehensive verification system ensures all opportunities are legitimate and safe",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Access to both local digitization projects and international freelancing opportunities",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Personalized recommendations and skill development to advance your freelancing career",
      color: "from-orange-500 to-red-500",
    },
  ]

  const workSolutions = [
    {
      icon: MapPin,
      title: "Local Work Sourcing",
      description: "AI-powered identification of local digitization and transformation opportunities",
      image: "/images/local-work.jpg",
      gradient: "from-blue-600/90 to-cyan-600/90",
      features: [
        "Local government digital initiatives",
        "Small business digitization projects",
        "Community organization tech support",
        "Educational institution modernization",
      ],
      impact: "5,000+ local projects identified",
    },
    {
      icon: Globe,
      title: "International Work Sourcing",
      description: "Verified global opportunities across high-demand freelancing fields",
      image: "https://images.unsplash.com/photo-1588623731810-171b80f3c55e?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradient: "from-green-600/90 to-emerald-600/90",
      features: [
        "HR & Recruitment Services",
        "Marketing & Content Creation",
        "Software Development & QA",
        "Design & Creative Services",
      ],
      impact: "50,000+ international opportunities",
    },
    {
      icon: Brain,
      title: "Personalized Recommendations",
      description: "AI-driven job matching based on skills, experience, and career goals",
      image: "/images/ai-recommendations.jpg",
      gradient: "from-purple-600/90 to-violet-600/90",
      features: [
        "Skill-based job matching",
        "Real-time opportunity alerts",
        "Career growth recommendations",
        "Performance analytics dashboard",
      ],
      impact: "95% match accuracy rate",
    },
  ]

  const scamPrevention = [
    {
      icon: Shield,
      title: "Client Verification",
      description: "Multi-step verification process for all clients and job postings",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: DollarSign,
      title: "Payment Protection",
      description: "Secure escrow system ensures freelancers get paid for completed work",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: AlertTriangle,
      title: "Red Flag Detection",
      description: "AI-powered system identifies and flags potentially fraudulent opportunities",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock assistance for reporting issues and resolving disputes",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const impactMetrics = [
    {
      number: "50K+",
      label: "Verified Gigs",
      description: "Legitimate opportunities secured",
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "99.8%",
      label: "Scam Prevention",
      description: "Success rate in fraud detection",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "25K+",
      label: "Active Freelancers",
      description: "Professionals using our platform",
      icon: Users,
      color: "from-purple-500 to-violet-500",
    },
    {
      number: "120+",
      label: "Countries Served",
      description: "Global reach and opportunities",
      icon: Globe,
      color: "from-orange-500 to-red-500",
    },
  ]

  const successStories = [
    {
      name: "Sarah Johnson",
      role: "Digital Marketing Specialist",
      location: "Austin, Texas",
      image: "/images/gig-testimonial-1.jpg",
      quote:
        "The AI matching system connected me with clients that perfectly matched my skills. I've increased my income by 300% in just 6 months.",
      achievement: "300% income increase",
      rating: 5,
      category: "International Freelancing",
    },
    {
      name: "Marcus Chen",
      role: "Software Developer",
      location: "San Francisco, CA",
      image: "/images/gig-testimonial-2.jpg",
      quote:
        "The scam prevention features gave me confidence to pursue international projects. I've worked with clients from 15 different countries safely.",
      achievement: "15 countries, 0 scams",
      rating: 5,
      category: "Global Development",
    },
    {
      name: "Elena Rodriguez",
      role: "Graphic Designer",
      location: "Barcelona, Spain",
      image: "/images/gig-testimonial-3.jpg",
      quote:
        "Local digitization projects helped me build a strong portfolio while contributing to my community's digital transformation.",
      achievement: "50+ local projects completed",
      rating: 5,
      category: "Local Digitization",
    },
  ]

  const industryCategories = [
    { name: "HR & Recruiting", icon: Users, count: "2,500+ jobs" },
    { name: "Marketing", icon: TrendingUp, count: "8,200+ jobs" },
    { name: "Development", icon: Brain, count: "12,000+ jobs" },
    { name: "Design", icon: Star, count: "6,800+ jobs" },
    { name: "Customer Support", icon: Users, count: "4,100+ jobs" },
    { name: "Finance & Accounting", icon: DollarSign, count: "3,200+ jobs" },
    { name: "Writing & Content", icon: Star, count: "7,500+ jobs" },
    { name: "Data Entry", icon: Target, count: "5,900+ jobs" },
  ]

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroContent.length)
    }, 5000)

    return () => {
      clearInterval(heroInterval)
    }
  }, [heroContent.length])

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Gig Economy Hero - Simple Background Image */}
      <section className="stable-layout relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroContent.map((content, index) => (
            <div key={index} className={`hero-background ${index === currentHeroIndex ? "active" : ""}`}>
              <Image
                src={content.image || "/placeholder.svg"}
                alt={content.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority={index === 0}
                quality={85}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-blue-800/70 to-cyan-900/80" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20 sm:pt-0 sm:text-center text-left">
          <div className="content-animate max-w-4xl mx-auto text-white">
            <div
              key={currentHeroIndex}
              className={`hero-content-slide space-y-4 sm:space-y-6 ${currentHeroIndex >= 0 ? "active" : ""}`}
            >
              <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-2 sm:mb-4">
                <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-cyan-400" />
                <span className="text-xs sm:text-sm font-medium">{heroContent[currentHeroIndex].highlight}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {heroContent[currentHeroIndex].title}
              </h1>

              <p className="text-base sm:text-xl md:text-2xl text-cyan-300 font-semibold">
                {heroContent[currentHeroIndex].subtitle}
              </p>

              <p className="text-sm sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl sm:mx-auto">
                {heroContent[currentHeroIndex].description}
              </p>

              <div className="flex items-center sm:justify-center space-x-4 sm:space-x-6 py-2 sm:py-4">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full px-4 py-2 sm:px-6 sm:py-3">
                  <span className="text-sm sm:text-lg font-bold text-white">{heroContent[currentHeroIndex].stats}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center pt-2 sm:pt-4">
                <button className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm sm:text-base rounded-full hover:shadow-2xl transition-all duration-300 btn-hover">
                  Join Platform
                </button>
                <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-sm sm:text-base rounded-full hover:bg-white/30 transition-all duration-300 btn-hover">
                  Browse Gigs
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`nav-dot ${index === currentHeroIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </section>

      {/* Gig Economy Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Equitable Work Opportunities
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our advanced AI technology creates a fair marketplace where talent meets opportunity, ensuring every
              freelancer gains access to legitimate, well-paying gigs that match their skills and aspirations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {gigBenefits.map((benefit, index) => (
              <div
                key={index}
                className="section-reveal card-hover text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  {React.createElement(benefit.icon, { className: "w-10 h-10 text-white" })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Solutions */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Comprehensive Work Solutions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From local digitization projects to international freelancing opportunities, we connect you with the right
              work at the right time
            </p>
          </div>

          <div className="space-y-16">
            {workSolutions.map((solution, index) => (
              <div
                key={index}
                className={`section-reveal grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div
                    className={`inline-flex items-center bg-gradient-to-r ${solution.gradient} text-white rounded-full px-4 py-2 mb-4`}
                  >
                    {React.createElement(solution.icon, { className: "w-5 h-5 mr-2" })}
                    <span className="text-sm font-semibold">{solution.title}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{solution.title}</h3>
                  <p className="text-xl text-gray-700 leading-relaxed">{solution.description}</p>
                  <div className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="inline-flex items-center bg-green-50 rounded-full px-4 py-2">
                    <Zap className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm font-semibold text-green-600">{solution.impact}</span>
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      quality={85}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-20`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Popular Industry Categories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore opportunities across high-demand industries with verified clients and competitive rates
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryCategories.map((category, index) => (
              <div
                key={index}
                className="section-reveal card-hover bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.createElement(category.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scam Prevention */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Advanced Scam Prevention</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect yourself from fraudulent opportunities with our comprehensive verification system and AI-powered
              scam detection
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {scamPrevention.map((feature, index) => (
              <div
                key={index}
                className="section-reveal card-hover bg-white rounded-2xl p-8 text-center shadow-xl border border-gray-100"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  {React.createElement(feature.icon, { className: "w-10 h-10 text-white" })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Gig Economy Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real numbers that demonstrate how we&apos;re transforming the freelancing landscape
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div
                key={index}
                className="section-reveal card-hover bg-white rounded-2xl p-8 text-center shadow-xl border border-gray-100"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${metric.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  {React.createElement(metric.icon, { className: "w-10 h-10 text-white" })}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{metric.number}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{metric.label}</h3>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from freelancers who have transformed their careers with BrilliantMinds gig economy platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="section-reveal card-hover bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{story.name}</h4>
                    <p className="text-gray-600">{story.role}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{story.location}</span>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    {story.category}
                  </span>
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">&ldquo;{story.quote}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-green-600">{story.achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-800 to-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Career?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8" />
            <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of professionals who have found meaningful work through our AI-powered gig economy platform
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
  <button 
    onClick={() => window.location.href = '/contact'}
    className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300 btn-hover"
  >
    Join the Platform
  </button>
  <button 
    onClick={() => window.location.href = '/solutions/gig-economy'}
    className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300 btn-hover"
  >
    Explore Opportunities
  </button>
</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default GigEconomyPage
