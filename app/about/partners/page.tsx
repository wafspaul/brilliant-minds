"use client"

import React, { useEffect, useState } from "react"
import {
  Handshake,
  Users,
  Globe,
  TrendingUp,
  Target,
  CheckCircle,
  Building,
  Zap,
  Heart,
  ArrowRight,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import "@/styles/partners-animations.scss"

const PartnersPage = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)

  const heroContent = [
    {
      title: "Strategic Partnerships",
      subtitle: "Building Together",
      description:
        "We are open to partnerships with NGOs, county governments, corporates, and academic institutions who want to expand digital access and opportunity in Kenya.",
      video: "/videos/partners-hero-1.mp4",
      stats: "Kenya + East Africa",
      highlight: "Strategic Alliance",
    },
    {
      title: "Shared Mission",
      subtitle: "Collaborative Growth",
      description:
        "If your organisation works in digital inclusion, workforce development, or education, we have tools and platforms that can extend your reach.",
      video: "/videos/partners-hero-2.mp4",
      stats: "Open to Collaboration",
      highlight: "Shared Mission",
    },
    {
      title: "Mutual Success",
      subtitle: "Shared Vision, Shared Growth",
      description:
        "The best partnerships are simple. You bring your network and context. We bring our platforms and technical capacity. Together we create something that helps real people.",
      video: "/videos/partners-hero-3.mp4",
      stats: "Let's Talk",
      highlight: "Mutual Growth",
    },
  ]

  const partnershipBenefits = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Expand your market presence through our international network and established channels",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Innovation Access",
      description: "Access cutting-edge technology and practical solutions to stay ahead of your competition",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Shared Resources",
      description: "Access shared expertise, resources, and knowledge to accelerate your business growth",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Open new revenue streams and business opportunities through strategic collaboration",
      color: "from-orange-500 to-red-500",
    },
  ]

  const partnershipTypes = [
    {
      icon: Building,
      title: "Technology Partners",
      description: "Integrate and enhance our platform capabilities through technology collaboration",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
      gradient: "from-blue-600/20 to-cyan-600/50",
      features: [
        "API integration and development",
        "White-label solutions",
        "Technical support and training",
        "Co-innovation opportunities",
      ],
      partnerCount: "Open for Tech Partners",
    },
    {
      icon: Handshake,
      title: "Channel Partners",
      description: "Expand market reach through our extensive distribution and sales network",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      gradient: "from-green-600/20 to-emerald-600/50",
      features: [
        "Sales enablement tools",
        "Marketing co-op programs",
        "Lead sharing and referrals",
        "Joint go-to-market strategies",
      ],
      partnerCount: "Open for Channel Partners",
    },
    {
      icon: Heart,
      title: "Impact Partners",
      description: "Create positive social impact through mission-aligned partnerships and initiatives",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      gradient: "from-purple-600/20 to-violet-600/50",
      features: [
        "Social impact initiatives",
        "Community development programs",
        "Educational partnerships",
        "Sustainability projects",
      ],
      partnerCount: "Open for Impact Partners",
    },
  ]

  // Partner logos, success stories, and impact metrics not yet available

  const partnershipProcess = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Discuss your goals, challenges, and how we can create mutual value",
      icon: Users,
    },
    {
      step: "02",
      title: "Partnership Design",
      description: "Develop a customized partnership framework that aligns with both organizations",
      icon: Target,
    },
    {
      step: "03",
      title: "Agreement & Launch",
      description: "Finalize partnership terms and launch collaborative initiatives",
      icon: Zap,
    },
    {
      step: "04",
      title: "Ongoing Success",
      description: "Continuous support, optimization, and growth of the partnership",
      icon: TrendingUp,
    },
  ]

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroContent.length)
    }, 6000)

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Partners Hero with Video Background */}
      <section className="stable-layout relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Videos */}
        <div className="absolute inset-0">
          {heroContent.map((content, index) => (
            <div key={index} className={`hero-background ${index === currentHeroIndex ? "active" : ""}`}>
              <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src={content.video} type="video/mp4" />
              </video>
            </div>
          ))}
          <div className="absolute z-10 inset-0 bg-gradient-to-r from-black/80 via-indigo-900/85 to-purple-900/80" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20 sm:pt-0 sm:text-center text-left">
          <div className="content-animate max-w-4xl mx-auto text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
            <div
              key={currentHeroIndex}
              className={`hero-content-slide space-y-4 sm:space-y-6 ${currentHeroIndex >= 0 ? "active" : ""}`}
            >
              <div className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-2 sm:mb-4 shadow-lg">
                <Handshake className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-400" />
                <span className="text-xs sm:text-sm font-medium">{heroContent[currentHeroIndex].highlight}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {heroContent[currentHeroIndex].title}
              </h1>

              <p className="text-base sm:text-xl md:text-2xl text-blue-300 font-semibold">
                {heroContent[currentHeroIndex].subtitle}
              </p>

              <p className="text-sm sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl sm:mx-auto">
                {heroContent[currentHeroIndex].description}
              </p>

              <div className="flex items-center sm:justify-center space-x-4 sm:space-x-6 py-2 sm:py-4">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full px-4 py-2 sm:px-6 sm:py-3">
                  <span className="text-sm sm:text-lg font-bold text-white">{heroContent[currentHeroIndex].stats}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center pt-2 sm:pt-4">
                <a href="/contact" className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-sm sm:text-base rounded-full hover:shadow-2xl transition-all duration-300 btn-hover">
                  Get in Touch
                </a>
                <a href="#partnership-process" className="px-6 py-3 sm:px-8 sm:py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-sm sm:text-base rounded-full hover:bg-white/30 transition-all duration-300 btn-hover">
                  How It Works
                </a>
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

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Partnership Benefits</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover the advantages of partnering with BrilliantMinds and how we can create mutual success through
              strategic collaboration and shared innovation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div
                key={index}
                className="section-reveal card-hover text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl border border-gray-100"
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

      {/* Partnership Types */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Partnership Opportunities</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore different types of partnerships designed to create value, drive innovation, and achieve shared
              success
            </p>
          </div>

          <div className="space-y-16">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className={`section-reveal grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                      {React.createElement(type.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{type.title}</h3>
                      <p className="text-blue-600 font-semibold">{type.partnerCount}</p>
                    </div>
                  </div>

                  <p className="text-xl text-gray-700 leading-relaxed">{type.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 btn-hover">
                    Discuss {type.title}
                    <ArrowRight className="w-5 h-5 inline ml-2" />
                  </a>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={type.image || "/placeholder.svg"}
                      alt={type.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      quality={85}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient}`} />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4">
                        <h4 className="text-white font-bold text-lg mb-2">{type.title}</h4>
                        <p className="text-white/90 text-sm">{type.partnerCount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Partnership Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How to Become a Partner</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined partnership process ensures a smooth journey from initial consultation to ongoing success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipProcess.map((step, index) => (
              <div
                key={index}
                className="section-reveal card-hover text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  {React.createElement(step.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Partner with Us?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-8" />
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
              Join our network of partners and open new opportunities for growth, innovation, and positive
              impact. Together, we can build a better future.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/contact" className="px-10 py-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300 btn-hover">
                Start a Conversation
              </a>
              <a href="mailto:hello@brilliantminds.co.ke?subject=Partnership Inquiry" className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-indigo-900 transition-all duration-300 btn-hover">
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PartnersPage
