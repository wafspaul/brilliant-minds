"use client"

import React, { useEffect, useState } from "react"
import {
  Wifi,
  Smartphone,
  Building,
  Users,
  Globe,
  CheckCircle,
  Lightbulb,
  HandHeart,
  Network,
  Signal,
  Zap,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import "@/styles/digital-inclusion-animations.scss"

const DigitalInclusionPage = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0)

  const heroContent = [
    {
      title: "Digital Inclusion",
      subtitle: "Bridging the Digital Divide",
      description:
        "Providing devices, internet connectivity, and access to co-working spaces for marginalized communities to enable digital participation.",
      image: "/images/digital-hero-1.jpg",
      stats: "47 Counties Mapped",
    },
    {
      title: "Smart Connectivity",
      subtitle: "AI-Powered Network Solutions",
      description:
        "Using artificial intelligence to identify connectivity gaps and optimize network infrastructure for underserved communities.",
      image: "/images/digital-hero-2.jpg",
      stats: "AI-Driven Gap Analysis",
    },
    {
      title: "Community Hubs",
      subtitle: "Spaces for Digital Growth",
      description:
        "Establishing co-working spaces equipped with high-speed internet and modern devices for community access and collaboration.",
      image: "/images/digital-hero-3.jpg",
      stats: "Nairobi + Counties",
    },
  ]

  const inclusionBenefits = [
    {
      icon: Smartphone,
      title: "Device Donation",
      description: "Partnering with organizations to supply digital devices to those who need them most",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Wifi,
      title: "Internet Connectivity",
      description: "Collaborating with telecom providers to extend affordable and reliable connectivity",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Network,
      title: "AI Mapping Solutions",
      description: "Real-time analysis of regions with low connectivity and tailored support proposals",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Building,
      title: "Co-Working Spaces",
      description: "Directory of spaces equipped with internet and devices for community access",
      color: "from-orange-500 to-red-500",
    },
  ]

  const keyFeatures = [
    {
      icon: Smartphone,
      title: "Device Donation Program",
      description: "Comprehensive device refurbishment and distribution network",
      image: "/images/device-donation.jpg",
      gradient: "from-blue-600/90 to-cyan-600/90",
      features: [
        "Laptop & Computer Donations",
        "Mobile Device Distribution",
        "Tablet Programs",
        "Accessibility Equipment",
      ],
      impact: "Connecting communities across Kenya",
    },
    {
      icon: Wifi,
      title: "Internet Connectivity",
      description: "Affordable and reliable internet access for underserved communities",
      image: "/images/connectivity.jpg",
      gradient: "from-green-600/90 to-emerald-600/90",
      features: ["Telecom Partnerships", "Community Wi-Fi", "Satellite Internet", "Mobile Hotspots"],
      impact: "47 counties mapped with live data",
    },
    {
      icon: Network,
      title: "AI Mapping Solutions",
      description: "Real-time analysis and optimization of digital infrastructure",
      image: "/images/ai-mapping.jpg",
      gradient: "from-purple-600/90 to-violet-600/90",
      features: ["Coverage Analysis", "Infrastructure Planning", "Community Needs Assessment", "Resource Optimization"],
      impact: "Real-time network optimization",
    },
    {
      icon: Building,
      title: "Co-Working Spaces",
      description: "Modern workspaces with technology access and community support",
      image: "/images/coworking-spaces.jpg",
      gradient: "from-orange-600/90 to-red-600/90",
      features: ["High-Speed Internet", "Modern Equipment", "Training Programs", "Community Events"],
      impact: "Community spaces in planning",
    },
  ]

  const impactMetrics = [
    {
      number: "47",
      label: "Counties Mapped",
      description: "Every county in Kenya covered by our connectivity map",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "6,000+",
      label: "People Reached",
      description: "Individuals reached across our programs and platforms",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "2",
      label: "Live Platforms",
      description: "Kazi Pap and the Kenya Connectivity Map, both in production",
      icon: Building,
      color: "from-purple-500 to-violet-500",
    },
    {
      number: "More",
      label: "On the Way",
      description: "Digital inclusion tools actively in development",
      icon: Signal,
      color: "from-orange-500 to-red-500",
    },
  ]


  const partnershipOptions = [
    {
      icon: HandHeart,
      title: "Device Partnership",
      description: "Partner with us to refurbish and distribute technology",
      benefits: ["Corporate CSR Impact", "Tax Benefits", "Brand Recognition", "Employee Engagement"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Connectivity Partnership",
      description: "Collaborate to extend internet access to underserved areas",
      benefits: ["Market Expansion", "Infrastructure Sharing", "Government Relations", "Social Impact"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation Partnership",
      description: "Co-develop AI solutions for digital inclusion challenges",
      benefits: ["Technology Development", "Research Collaboration", "IP Sharing", "Market Leadership"],
      color: "from-purple-500 to-violet-500",
    },
  ]

  // Hero rotation
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroContent.length)
    }, 5000)

    return () => clearInterval(heroInterval)
  }, [heroContent.length])

  // Feature rotation
  useEffect(() => {
    const featureInterval = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % keyFeatures.length)
    }, 4000)

    return () => clearInterval(featureInterval)
  }, [keyFeatures.length])

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

      <section className="stable-layout relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background Images */}
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
          <div className="absolute z-10 inset-0 bg-gradient-to-br from-blue-900/85 via-cyan-800/80 to-purple-900/85" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="floating-element absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            >
              <div className="w-2 h-2 bg-cyan-400/30 rounded-full" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Content Side */}
            <div className="text-white space-y-8">
              <div className="content-animate space-y-6">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-4">
                  <Wifi className="w-4 h-4 mr-2 pulse-icon" />
                  <span className="text-sm font-medium">Digital Innovation Solution</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  {heroContent[currentHeroIndex].title}
                </h1>

                <p className="text-2xl text-cyan-300 font-semibold">{heroContent[currentHeroIndex].subtitle}</p>

                <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                  {heroContent[currentHeroIndex].description}
                </p>

                <div className="flex items-center space-x-6 py-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full px-6 py-3">
                    <span className="text-lg font-bold">{heroContent[currentHeroIndex].stats}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-cyan-300">
                    <Signal className="w-5 h-5 pulse-icon" />
                    <span className="text-sm font-medium">Live Impact</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
  <a
    href="https://kenya-connectivity-map.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 btn-hover"
  >
    View Live Map
  </a>
  <a
    href="/contact"
    className="px-8 py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 btn-hover"
  >
    Partner with Us
  </a>
</div>
              </div>
            </div>

            {/* Visual Side - Enhanced */}
            <div className="relative hidden lg:block">
              <div className="relative h-[500px]">
                {/* Main Feature Display */}
                <div
                  key={currentFeatureIndex}
                  className={`feature-showcase absolute inset-0 rounded-2xl overflow-hidden shadow-2xl ${
                    currentFeatureIndex >= 0 ? "active" : ""
                  }`}
                >
                  <Image
                    src={keyFeatures[currentFeatureIndex].image || "/placeholder.svg"}
                    alt={keyFeatures[currentFeatureIndex].title}
                    fill
                    sizes="50vw"
                    className="object-cover"
                    quality={85}
                  />
                  <div className={`absolute inset-0}`} />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="bg-white/10 backdrop-blur-lg rounded-full p-3 w-fit mb-4">
                      {React.createElement(keyFeatures[currentFeatureIndex].icon, {
                        className: "w-8 h-8 text-white",
                      })}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{keyFeatures[currentFeatureIndex].title}</h3>
                    <p className="text-gray-200 mb-4">{keyFeatures[currentFeatureIndex].description}</p>
                    <div className="flex items-center text-cyan-300">
                      <Zap className="w-4 h-4 mr-2" />
                      <span className="text-sm font-semibold">{keyFeatures[currentFeatureIndex].impact}</span>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">47</p>
                    <p className="text-xs text-cyan-300">Counties</p>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">Live</p>
                    <p className="text-xs text-cyan-300">Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Navigation */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`nav-dot ${index === currentHeroIndex ? "active" : ""}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2">
            <div className="w-2 h-4 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Digital Inclusion Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Bridging the Digital Divide</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              In today&apos;s digital world, access to technology is no longer a luxury—it&apos;s a necessity. Our Digital
              Inclusion initiative focuses on providing device access, connectivity, and technical support to
              marginalized communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {inclusionBenefits.map((benefit, index) => (
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

      {/* Key Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Digital Inclusion Solutions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to eliminate digital barriers and create opportunities for all
            </p>
          </div>

          <div className="space-y-16">
            {keyFeatures.map((feature, index) => (
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
                    {React.createElement(feature.icon, { className: "w-5 h-5 mr-2" })}
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
                  <div className="inline-flex items-center bg-green-50 rounded-full px-4 py-2">
                    <Zap className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm font-semibold text-green-600">{feature.impact}</span>
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="card-hover relative">
                    <div className="relative h-80 overflow-hidden rounded-2xl shadow-2xl">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Digital Inclusion Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real metrics that demonstrate the tangible difference we&apos;re making in bridging the digital divide
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

      {/* Impact in Progress */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">The Work in Progress</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              We are early stage. The platforms are live. The stories are building. Check back as the numbers grow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://kazipap.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg hover:shadow-xl transition-all duration-300"
              >
                Try Kazi Pap
              </a>
              <a
                href="https://kenya-connectivity-map.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-xl transition-all duration-300"
              >
                View Connectivity Map
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Join Our Digital Inclusion Initiative</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8" />
            <p className="text-xl text-gray-200 max-w-4xl mx-auto">
              Together, we can bridge the digital divide and create opportunities for all communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partnershipOptions.map((option, index) => (
              <div
                key={index}
                className="section-reveal card-hover bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  {React.createElement(option.icon, { className: "w-10 h-10 text-white" })}
                </div>
                <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                <p className="text-gray-200 mb-6">{option.description}</p>
                <div className="space-y-2">
                  {option.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-gray-200 text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="section-reveal text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/about/partners"
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300 btn-hover"
              >
                Become a Partner
              </a>
              <a
                href="/contact"
                className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 btn-hover"
              >
                Donate a Device
              </a>
              <a
                href="/contact"
                className="px-10 py-5 bg-white/20 backdrop-blur-lg text-white font-bold text-lg rounded-full hover:bg-white/30 transition-all duration-300 btn-hover"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DigitalInclusionPage
