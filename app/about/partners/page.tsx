"use client"

import React, { useEffect, useState } from "react"
import {
  Handshake,
  Users,
  Globe,
  TrendingUp,
  Target,
  CheckCircle,
  Star,
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
      subtitle: "Building Tomorrow Together",
      description:
        "Join our global network of partners and create meaningful impact through collaborative innovation and shared success.",
      video: "/videos/partners-hero-1.mp4",
      stats: "200+ Global Partners",
      highlight: "Strategic Alliance",
    },
    {
      title: "Innovation Ecosystem",
      subtitle: "Collaborative Growth Platform",
      description:
        "Connect with like-minded organizations to drive innovation, expand reach, and create value for communities worldwide.",
      video: "/videos/partners-hero-2.mp4",
      stats: "50+ Countries Connected",
      highlight: "Innovation Hub",
    },
    {
      title: "Mutual Success",
      subtitle: "Shared Vision, Shared Growth",
      description:
        "Experience the power of partnership where success is measured not just in profits, but in positive impact and sustainable growth.",
      video: "/videos/partners-hero-3.mp4",
      stats: "95% Partner Satisfaction",
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
      description: "Leverage cutting-edge technology and innovative solutions to stay ahead of the competition",
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
      description: "Unlock new revenue streams and business opportunities through strategic collaboration",
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
      partnerCount: "50+ Tech Partners",
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
      partnerCount: "100+ Channel Partners",
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
      partnerCount: "75+ Impact Partners",
    },
  ]

  const partnerLogos = [
    { name: "TechCorp", logo: "/images/logo1.png" },
    { name: "InnovateLab", logo: "/images/logo2.png" },
    { name: "GlobalSolutions", logo: "/images/logo3.png" },
    { name: "FutureWorks", logo: "/images/logo4.png" },
    { name: "DigitalBridge", logo: "/images/logo5.png" },
    { name: "SmartVentures", logo: "/images/logo6.png" },
    { name: "NextGen", logo: "/images/logo7.png" },
    { name: "CloudFirst", logo: "/images/logo8.png" },
  ]

  const partnerSuccess = [
    {
      company: "TechInnovate Solutions",
      industry: "Technology",
      logo: "/images/partners/techinnovate-logo.png",
      quote:
        "Our partnership with BrilliantMinds has opened doors to new markets and accelerated our growth by 300%. The collaborative approach and shared vision make this partnership truly exceptional.",
      achievement: "300% revenue growth",
      partnerSince: "2022",
      rating: 5,
      representative: "Sarah Chen, CEO",
    },
    {
      company: "Global Education Network",
      industry: "Education",
      logo: "/images/partners/globaledu-logo.png",
      quote:
        "Through this strategic alliance, we've been able to reach underserved communities worldwide and make quality education accessible to millions of learners.",
      achievement: "2M+ learners reached",
      partnerSince: "2021",
      rating: 5,
      representative: "Dr. Michael Rodriguez, Director",
    },
    {
      company: "Sustainable Futures Inc",
      industry: "Sustainability",
      logo: "/images/partners/sustainable-logo.png",
      quote:
        "The impact partnership has enabled us to scale our environmental initiatives and create lasting change in communities across 25 countries.",
      achievement: "25 countries impacted",
      partnerSince: "2023",
      rating: 5,
      representative: "Emma Thompson, Founder",
    },
  ]

  const impactMetrics = [
    {
      number: "200+",
      label: "Global Partners",
      description: "Strategic partnerships worldwide",
      icon: Handshake,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "50+",
      label: "Countries",
      description: "International market presence",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "95%",
      label: "Satisfaction Rate",
      description: "Partner satisfaction score",
      icon: Star,
      color: "from-purple-500 to-violet-500",
    },
    {
      number: "$50M+",
      label: "Partner Revenue",
      description: "Generated through partnerships",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
    },
  ]

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
                <button className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-sm sm:text-base rounded-full hover:shadow-2xl transition-all duration-300 btn-hover">
                  Become a Partner
                </button>
                <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-sm sm:text-base rounded-full hover:bg-white/30 transition-all duration-300 btn-hover">
                  Explore Partnerships
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

                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 btn-hover">
                    Learn More About {type.title}
                    <ArrowRight className="w-5 h-5 inline ml-2" />
                  </button>
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

      {/* Partner Logos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Trusted by Leading Organizations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a network of innovative companies and organizations that are shaping the future together
            </p>
          </div>

          <div className="section-reveal grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className="card-hover bg-gray-50 rounded-xl p-6 flex items-center justify-center h-24 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                  quality={85}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Success Stories */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Partner Success Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our partners have achieved remarkable growth and impact through strategic collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerSuccess.map((story, index) => (
              <div
                key={index}
                className="section-reveal card-hover bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                      <Building className="w-8 h-8 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{story.company}</h4>
                      <p className="text-blue-600 font-semibold">{story.industry}</p>
                      <p className="text-gray-500 text-sm">Partner since {story.partnerSince}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 italic mb-6 leading-relaxed">&ldquo;{story.quote}&rdquo;</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-green-600">{story.achievement}</span>
                  </div>

                  <p className="text-gray-600 text-sm">{story.representative}</p>
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

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Partnership Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real numbers that demonstrate the power and success of our partnership ecosystem
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Partner with Us?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-8" />
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
              Join our global network of partners and unlock new opportunities for growth, innovation, and positive
              impact. Together, we can build a better future.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-10 py-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300 btn-hover">
                Become a Partner
              </button>
              <button className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-indigo-900 transition-all duration-300 btn-hover">
                Download Partnership Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PartnersPage
