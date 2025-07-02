"use client"

import React, { useEffect, useState } from "react"
import { BookOpen, Play, Award, Clock, Target, CheckCircle, Star, Brain, Globe } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import "@/styles/elearning-animations.scss"

const ELearningPage = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)

  const heroContent = [
    {
      title: "E-Learning Revolution",
      subtitle: "Transform Your Learning Experience",
      description:
        "Innovative microlearning platform that makes education accessible, engaging, and effective for learners worldwide.",
      image:
        "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stats: "150K+ Skills Certified",
      highlight: "Bite-sized Learning",
    },
    {
      title: "Interactive Education",
      subtitle: "Engaging Learning for Everyone",
      description:
        "Interactive features including quizzes, videos, and progress tracking that make learning fun and memorable.",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      stats: "95% Completion Rate",
      highlight: "Interactive Content",
    },
    {
      title: "Global Learning Community",
      subtitle: "Learn from Anywhere, Anytime",
      description:
        "Join a worldwide community of learners with courses covering academic topics, professional skills, and freelancing basics.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      stats: "50+ Countries Served",
      highlight: "Global Access",
    },
  ]

  const platformFeatures = [
    {
      title: "Content Sessions",
      description: "Bite-sized learning modules designed for maximum retention and engagement",
      image: "/images/content-sessions.jpg",
      features: [
        "Optimized for mobile learning on the go",
        "5-15 minute focused sessions",
        "Adaptive learning paths",
        "Perfect for busy learning schedules",
      ],
      gradient: "from-blue-600/90 to-cyan-600/90",
      device: "tablet",
    },
    {
      title: "Interactive Features",
      description: "Engaging elements that make learning fun and effective with real-time feedback",
      image: "/images/interactive-features.jpg",
      features: [
        "Interactive videos with embedded questions",
        "Gamified learning experiences",
        "Real-time progress tracking",
        "Peer collaboration tools",
      ],
      gradient: "from-green-600/90 to-emerald-600/90",
      device: "mobile",
    },
    {
      title: "Content Areas",
      description: "Comprehensive course catalog covering academic subjects, professional skills, and freelancing",
      image: "/images/content-areas.jpg",
      features: [
        "Academic subjects for all levels",
        "Professional development courses",
        "Freelancing and entrepreneurship",
        "Industry-specific certifications",
      ],
      gradient: "from-purple-600/90 to-violet-600/90",
      device: "desktop",
    },
  ]

  const learningBenefits = [
    {
      icon: Clock,
      title: "Learn at Your Pace",
      description: "Flexible scheduling that adapts to your lifestyle and learning preferences",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "Enhanced Retention",
      description: "Scientifically-proven microlearning techniques for better knowledge retention",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      title: "Achievement Based",
      description: "Earn certificates and badges as you progress through your learning journey",
      color: "from-purple-500 to-violet-500",
    },
  ]

  const impactMetrics = [
    {
      number: "150K+",
      label: "Skills Certified",
      description: "Learners who completed courses",
      icon: Award,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "95%",
      label: "Completion Rate",
      description: "Course completion success rate",
      icon: Target,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "500+",
      label: "Courses Available",
      description: "Diverse learning opportunities",
      icon: BookOpen,
      color: "from-purple-500 to-violet-500",
    },
    {
      number: "50+",
      label: "Countries Served",
      description: "Global learning community",
      icon: Globe,
      color: "from-orange-500 to-red-500",
    },
  ]

  const successStories = [
    {
      name: "Jessica Williams",
      role: "Marketing Professional",
      image: "/images/elearning-testimonial-1.jpg",
      quote:
        "The bite-sized lessons fit perfectly into my busy schedule. I was able to complete a digital marketing certification while working full-time.",
      achievement: "Completed 5 courses in 3 months",
      rating: 5,
    },
    {
      name: "David Johnson",
      role: "Software Developer",
      image: "/images/elearning-testimonial-2.jpg",
      quote:
        "The interactive coding challenges and real-world projects helped me transition from a different field into tech successfully.",
      achievement: "Career change in 6 months",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Freelance Designer",
      image: "/images/elearning-testimonial-3.jpg",
      quote:
        "The freelancing courses taught me not just design skills, but also how to run a successful business. My income doubled!",
      achievement: "200% income increase",
      rating: 5,
    },
  ]

  // Hero rotation
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroContent.length)
    }, 5000)

    return () => clearInterval(heroInterval)
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

  const DeviceFrame = ({ device, children }: { device: string; children: React.ReactNode }) => {
    const deviceClasses = {
      desktop: "w-full max-w-4xl mx-auto",
      tablet: "w-full max-w-md mx-auto",
      mobile: "w-full max-w-xs mx-auto",
    }

    return (
      <div className={`device-frame ${deviceClasses[device as keyof typeof deviceClasses]}`}>
        {device === "desktop" && (
          <div className="bg-gray-800 rounded-t-lg p-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
          </div>
        )}
        <div
          className={`bg-white rounded-lg overflow-hidden shadow-2xl ${
            device === "desktop" ? "rounded-t-none" : ""
          } ${device === "tablet" ? "border-8 border-gray-800" : ""} ${
            device === "mobile" ? "border-4 border-gray-800 rounded-3xl" : ""
          }`}
        >
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* E-Learning Hero - Simple Background Image */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-cyan-900/80" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20 sm:pt-0 sm:text-center text-left">
          <div className="content-animate max-w-4xl mx-auto text-white">
            <div
              key={currentHeroIndex}
              className={`hero-content-slide space-y-4 sm:space-y-6 ${currentHeroIndex >= 0 ? "active" : ""}`}
            >
              <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-2 sm:mb-4">
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-cyan-400" />
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

              

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center pt-2 sm:pt-4">
                <button className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm sm:text-base rounded-full hover:shadow-2xl transition-all duration-300 btn-hover">
                  Start Learning
                </button>
                <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-sm sm:text-base rounded-full hover:bg-white/30 transition-all duration-300 btn-hover">
                  Browse Courses
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

      {/* Learning Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Microlearning Platform for Fun Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our innovative approach to education makes learning enjoyable and effective. Start your pace with content
              designed for maximum retention.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningBenefits.map((benefit, index) => (
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

      {/* Platform Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Platform Features</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the powerful features that make our e-learning platform the perfect choice for modern learners
            </p>
          </div>

          <div className="space-y-16">
            {platformFeatures.map((feature, index) => (
              <div
                key={index}
                className={`section-reveal grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div
                    className={`inline-flex items-center bg-gradient-to-r ${feature.gradient} text-white rounded-full px-4 py-2 mb-4`}
                  >
                    <span className="text-sm font-semibold">{feature.title}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-xl text-gray-700 leading-relaxed">{feature.description}</p>
                  <div className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <DeviceFrame device={feature.device}>
                    <div className="relative h-80">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        quality={85}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20`} />
                    </div>
                  </DeviceFrame>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform in Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">See the Platform in Action</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our intuitive learning interface designed for engaging and effective learning
            </p>
          </div>

          <div className="section-reveal">
            <DeviceFrame device="desktop">
              <div className="relative h-96 bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-20 h-20 mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-2">Interactive Learning Dashboard</h3>
                  <p className="text-lg opacity-90">Click to see our platform in action</p>
                </div>
              </div>
            </DeviceFrame>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Learning Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real numbers that demonstrate the effectiveness of our e-learning platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from learners who have transformed their careers with BrilliantMinds
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="section-reveal card-hover bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 mr-4">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      fill
                      sizes="64px"
                      className="rounded-full object-cover"
                      quality={85}
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{story.name}</h4>
                    <p className="text-gray-600">{story.role}</p>
                  </div>
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
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Ready to Transform Your Learning Experience?</h2>
            <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of learners who have discovered the power of microlearning with BrilliantMinds
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300 btn-hover">
                Start Learning Today
              </button>
              <button className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 btn-hover">
                Browse Course Catalog
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ELearningPage
