"use client"

import React, { useEffect, useState } from "react"
import {
  Heart,
  Users,
  Handshake,
  DollarSign,
  Smartphone,
  Award,
  Target,
  Globe,
  Building,
  UserPlus,
  Gift,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  MapPin,
  Zap,
  Shield,
  BadgeIcon as Certificate,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import DonationModal from "@/components/DonationModal"
import Image from "next/image"
import "@/styles/get-involved-animations.scss"

const GetInvolvedPage = () => {
  const [currentImpactIndex, setCurrentImpactIndex] = useState(0)
  const [currentVolunteerIndex, setCurrentVolunteerIndex] = useState(0)
  const [donationAmount, setDonationAmount] = useState(50)
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)

  const involvementWays = [
    {
      icon: Heart,
      title: "Donate",
      subtitle: "Fund Digital Transformation",
      description:
        "Your contributions make our work possible. Choose the way you'd like to support communities worldwide.",
      color: "from-red-500 to-pink-500",
      bgImage: "/images/value-equity.jpg",
      stats: "$2.5M+ Raised",
      features: ["Financial Donations", "Device Donations", "Recurring Support", "Corporate Matching"],
    },
    {
      icon: Users,
      title: "Volunteer",
      subtitle: "Share Your Skills",
      description: "Join our global community of volunteers and contribute your expertise to meaningful projects.",
      color: "from-blue-500 to-cyan-500",
      bgImage:
        "https://images.unsplash.com/photo-1461532257246-777de18cd58b?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stats: "5,000+ Volunteers",
      features: ["Skill-Based Volunteering", "Remote Opportunities", "Local Chapters", "Leadership Roles"],
    },
    {
      icon: Handshake,
      title: "Partner",
      subtitle: "Strategic Collaboration",
      description: "Partner with BrilliantMinds to create meaningful impact through strategic collaboration.",
      color: "from-purple-500 to-indigo-500",
      bgImage:
        "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stats: "200+ Partners",
      features: ["Corporate Partnerships", "NGO Collaboration", "Government Relations", "Academic Alliances"],
    },
  ]

  const donationImpacts = [
    {
      amount: 25,
      impact: "Provides internet access for 1 student for 1 month",
      icon: Globe,
      color: "text-blue-500",
    },
    {
      amount: 50,
      impact: "Funds a complete digital literacy workshop",
      icon: Users,
      color: "text-green-500",
    },
    {
      amount: 100,
      impact: "Supplies a refurbished laptop to a student",
      icon: Smartphone,
      color: "text-purple-500",
    },
    {
      amount: 250,
      impact: "Establishes a community tech hub for 1 month",
      icon: Building,
      color: "text-orange-500",
    },
    {
      amount: 500,
      impact: "Trains 10 community members in digital skills",
      icon: Award,
      color: "text-red-500",
    },
    {
      amount: 1000,
      impact: "Launches a complete digital inclusion program",
      icon: Target,
      color: "text-indigo-500",
    },
  ]

  const volunteerOpportunities = [
    {
      title: "Digital Mentor",
      description: "Guide individuals through their digital transformation journey",
      commitment: "2-4 hours/week",
      location: "Remote",
      skills: ["Communication", "Patience", "Basic Tech"],
      image: "/images/volunteer-mentor.jpg",
      impact: "50+ mentees supported",
    },
    {
      title: "Content Creator",
      description: "Develop educational materials and resources for our platforms",
      commitment: "5-10 hours/week",
      location: "Remote",
      skills: ["Writing", "Design", "Video Editing"],
      image: "/images/volunteer-creator.jpg",
      impact: "100+ resources created",
    },
    {
      title: "Community Facilitator",
      description: "Lead workshops and training sessions in local communities",
      commitment: "Weekend events",
      location: "On-site",
      skills: ["Public Speaking", "Leadership", "Cultural Sensitivity"],
      image: "/images/volunteer-facilitator.jpg",
      impact: "25+ workshops led",
    },
    {
      title: "Tech Support Specialist",
      description: "Provide technical assistance and troubleshooting support",
      commitment: "Flexible hours",
      location: "Remote/Hybrid",
      skills: ["Technical Expertise", "Problem Solving", "Customer Service"],
      image: "/images/volunteer-tech.jpg",
      impact: "500+ issues resolved",
    },
  ]

  const corporatePrograms = [
    {
      icon: Gift,
      title: "Sponsored Programs",
      description: "Fund specific initiatives that align with your company's values and mission",
      features: [
        "Custom program development",
        "Brand visibility and recognition",
        "Employee engagement opportunities",
        "Impact reporting and metrics",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: UserPlus,
      title: "Employee Engagement",
      description: "Engage your workforce in meaningful volunteer opportunities and skill-sharing",
      features: [
        "Team building through service",
        "Skills-based volunteering programs",
        "Corporate volunteer days",
        "Professional development through giving",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Strategic Partnerships",
      description: "Long-term collaborations that create sustainable impact and business value",
      features: [
        "Joint program development",
        "Technology and resource sharing",
        "Market expansion opportunities",
        "Thought leadership positioning",
      ],
      color: "from-purple-500 to-violet-500",
    },
  ]

  const successStories = [
    {
      name: "Sarah Martinez",
      role: "Corporate Partner Lead",
      company: "TechCorp Solutions",
      image: "/images/success-story-1.jpg",
      quote:
        "Our partnership with BrilliantMinds has transformed how we approach corporate social responsibility. We've seen incredible engagement from our employees and measurable impact in communities.",
      impact: "Funded 50+ digital literacy programs",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Volunteer Coordinator",
      company: "Independent Volunteer",
      image: "/images/success-story-2.jpg",
      quote:
        "Volunteering with BrilliantMinds has been incredibly rewarding. I've been able to use my tech skills to directly help people in my community gain digital literacy.",
      impact: "Trained 200+ community members",
      rating: 5,
    },
  ]

  // Impact rotation
  useEffect(() => {
    const impactInterval = setInterval(() => {
      setCurrentImpactIndex((prev) => (prev + 1) % donationImpacts.length)
    }, 3000)

    return () => clearInterval(impactInterval)
  }, [donationImpacts.length])

  // Volunteer rotation
  useEffect(() => {
    const volunteerInterval = setInterval(() => {
      setCurrentVolunteerIndex((prev) => (prev + 1) % volunteerOpportunities.length)
    }, 4000)

    return () => clearInterval(volunteerInterval)
  }, [volunteerOpportunities.length])

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

      {/* Hero Section with Video Background */}
      <section className="stable-layout relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="hero-video-bg">
            <source src="/assets/bg2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-pink-900/80" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="content-animate max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Get Involved with{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                BrilliantMinds
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join our mission to empower the next generation through technology and education. Together, we can create
              lasting change in communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="#ways-to-help"
                className="px-10 py-5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-lg hover:shadow-2xl transition-all duration-300 btn-hover"
              >
                Start Making Impact
              </a>
              <a
                href="/contact"
                className="px-10 py-5 rounded-full bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-lg hover:bg-white/30 transition-all duration-300 btn-hover"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2">
            <div className="scroll-dot w-2 h-4 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section id="ways-to-help" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Ways to Get Involved</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how you can contribute to our mission through various opportunities tailored to your interests
              and abilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {involvementWays.map((way, index) => (
              <div
                key={index}
                className="section-reveal involvement-card relative h-112 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
                onClick={() => {
                  if (way.title === "Donate") {
                    setIsDonationModalOpen(true)
                  }
                }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={way.bgImage || "/placeholder.svg"}
                    alt={way.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    quality={85}
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${way.color} opacity-85`} />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center mb-6">
                      {React.createElement(way.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{way.title}</h3>
                    <p className="text-lg text-white/90 mb-4">{way.subtitle}</p>
                    <p className="text-white/80 mb-6">{way.description}</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-bold text-lg">{way.stats}</span>
                      <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
                    </div>
                    <div className="space-y-2">
                      {way.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-white/90 text-sm">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="section-reveal space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Partnership Opportunities</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-6" />
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Join forces with BrilliantMinds to create meaningful impact through strategic partnerships. Our
                  collaborative approach ensures mutual benefit and sustainable change.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: "Strategic Alignment",
                    description: "We align with your goals while maximizing community impact",
                  },
                  {
                    icon: Shield,
                    title: "Resource Sharing",
                    description: "Combine resources and expertise to amplify our collective impact",
                  },
                  {
                    icon: Zap,
                    title: "Brand Association",
                    description: "Associate your brand with meaningful social impact and innovation",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      {React.createElement(item.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 btn-hover">
                Become a Partner
              </button>
            </div>

            <div className="section-reveal relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/partnership-meeting.jpg"
                  alt="Partnership meeting"
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-purple-900/30" />
              </div>

              {/* Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">200+</p>
                  <p className="text-sm text-gray-600">Active Partners</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-600">$5M+</p>
                  <p className="text-sm text-gray-600">Partnership Value</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Portal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Donation Portal</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your contributions make our work possible. Choose the way you&apos;d like to support communities
              worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Financial Donations */}
            <div className="section-reveal bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 border border-pink-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Financial Donations</h3>
                  <p className="text-gray-600">Direct funding for our programs and initiatives</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Donation Amount</label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="25"
                      max="1000"
                      step="25"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(Number(e.target.value))}
                      className="donation-slider flex-1 h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-2xl font-bold text-pink-600">${donationAmount}</span>
                  </div>
                </div>

                <div
                  key={currentImpactIndex}
                  className="impact-card-animate bg-white rounded-xl p-6 border border-pink-200"
                >
                  <div className="flex items-center mb-3">
                    {React.createElement(donationImpacts[currentImpactIndex].icon, {
                      className: `w-6 h-6 ${donationImpacts[currentImpactIndex].color}`,
                    })}
                    <span className="ml-2 font-bold text-gray-900">
                      ${donationImpacts[currentImpactIndex].amount} Impact
                    </span>
                  </div>
                  <p className="text-gray-700">{donationImpacts[currentImpactIndex].impact}</p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[25, 50, 100].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setDonationAmount(amount)}
                      className={`py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                        donationAmount === amount
                          ? "bg-pink-500 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setIsDonationModalOpen(true)}
                  className="w-full py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 btn-hover"
                >
                  Donate Now
                </button>
              </div>
            </div>

            {/* Device Donations */}
            <div className="section-reveal bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Device Donations</h3>
                  <p className="text-gray-600">Donate devices to bridge the digital divide</p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Smartphone,
                    title: "Laptops & Computers",
                    description: "Working computers for students and professionals",
                    count: "500+ needed",
                  },
                  {
                    icon: Smartphone,
                    title: "Tablets & Mobile Devices",
                    description: "Portable devices for mobile learning",
                    count: "300+ needed",
                  },
                  {
                    icon: Globe,
                    title: "Networking Equipment",
                    description: "Routers and modems for connectivity",
                    count: "100+ needed",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white rounded-xl border border-blue-200"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        {React.createElement(item.icon, { className: "w-5 h-5 text-blue-600" })}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-blue-600">{item.count}</span>
                  </div>
                ))}

                <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 btn-hover">
                  Donate Devices
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Volunteer With Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Join our global community of volunteers and contribute your expertise to meaningful projects that create
              lasting impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Featured Volunteer Opportunity */}
            <div className="relative h-96">
              <div
                key={currentVolunteerIndex}
                className={`volunteer-showcase absolute inset-0 rounded-2xl overflow-hidden shadow-2xl ${
                  currentVolunteerIndex >= 0 ? "active" : ""
                }`}
              >
                <Image
                  src={volunteerOpportunities[currentVolunteerIndex].image || "/placeholder.svg"}
                  alt={volunteerOpportunities[currentVolunteerIndex].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-900/80 to-teal-900/80" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {volunteerOpportunities[currentVolunteerIndex].title}
                  </h3>
                  <p className="text-gray-200 mb-4">{volunteerOpportunities[currentVolunteerIndex].description}</p>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center text-white text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{volunteerOpportunities[currentVolunteerIndex].commitment}</span>
                      </div>
                      <div className="flex items-center text-white text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{volunteerOpportunities[currentVolunteerIndex].location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-green-300 font-semibold">
                        {volunteerOpportunities[currentVolunteerIndex].impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Volunteer Benefits */}
            <div className="section-reveal space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Volunteer Benefits</h3>
                <p className="text-xl text-gray-700 mb-8">
                  Make a difference while developing your skills and expanding your network.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: "Skill Development",
                    description: "Enhance your professional skills through meaningful work",
                  },
                  {
                    icon: Users,
                    title: "Global Network",
                    description: "Connect with like-minded professionals worldwide",
                  },
                  {
                    icon: Heart,
                    title: "Personal Fulfillment",
                    description: "Experience the joy of making a real difference",
                  },
                  {
                    icon: Certificate,
                    title: "Recognition",
                    description: "Receive certificates and recommendations for your contributions",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      {React.createElement(benefit.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 btn-hover">
                Apply to Volunteer
              </button>
            </div>
          </div>

          {/* Volunteer Navigation */}
          <div className="flex justify-center space-x-4">
            {volunteerOpportunities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVolunteerIndex(index)}
                className={`nav-dot ${index === currentVolunteerIndex ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Collaboration */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Corporate Collaboration</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Partner with BrilliantMinds to align your corporate social responsibility goals with meaningful community
              impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {corporatePrograms.map((program, index) => (
              <div
                key={index}
                className="section-reveal card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center mb-6`}
                >
                  {React.createElement(program.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="section-reveal text-center mt-12">
            <button className="px-10 py-5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-lg rounded-full hover:shadow-lg transition-all duration-300 btn-hover">
              Explore Partnership Options
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our partners and volunteers about their experience making a difference with BrilliantMinds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="section-reveal card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
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
                    <p className="text-sm text-blue-600 font-semibold">{story.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">&ldquo;{story.quote}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-green-600">{story.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/final-cta-bg.jpg"
            alt="Final CTA background"
            fill
            sizes="100vw"
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-pink-900/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="section-reveal text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">Ready to Make a Difference?</h2>
            <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of individuals and organizations who are already creating positive change in communities
              worldwide. Your contribution, no matter the size, makes a real difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => setIsDonationModalOpen(true)}
                className="px-10 py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300 btn-hover"
              >
                Get Started Today
              </button>
              <button
                onClick={() => (window.location.href = "/contact")}
                className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300 btn-hover"
              >
                Contact Us
              </button>
              <button
                onClick={() => (window.location.href = "/contact")}
                className="px-10 py-5 bg-white/20 backdrop-blur-lg text-white font-bold text-lg rounded-full hover:bg-white/30 transition-all duration-300 btn-hover"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Modal */}
      <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)} donationType={"financial"} />

      <Footer />
    </div>
  )
}

export default GetInvolvedPage
