"use client"

import React, { useEffect, useState } from "react"
import {
  Users,
  Globe,
  TrendingUp,
  Target,
  CheckCircle,
  Star,
  Building,
  Zap,
  Heart,
  MapPin,
  Clock,
  DollarSign,
  Award,
  Coffee,
  Laptop,
  Headphones,
  Shield,
  BookOpen,
  Lightbulb,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import "@/styles/careers-animations.scss"

const CareersPage = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)

  const heroContent = [
    {
      title: "Build Your Future With Us",
      subtitle: "Where Innovation Meets Opportunity",
      description:
        "Join a team of passionate professionals who are shaping the future of digital transformation and making a real impact on communities worldwide.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      stats: "200+ Team Members",
      highlight: "Join Our Team",
    },
    {
      title: "Remote-First Culture",
      subtitle: "Work From Anywhere in the World",
      description:
        "Experience the freedom of remote work while collaborating with talented individuals from over 50 countries in a truly global environment.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      stats: "50+ Countries",
      highlight: "Remote First",
    },
    {
      title: "Growth & Development",
      subtitle: "Invest in Your Professional Journey",
      description:
        "Access unlimited learning opportunities, mentorship programs, and career advancement paths designed to help you reach your full potential.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      stats: "$5K Learning Budget",
      highlight: "Professional Growth",
    },
    {
      title: "Impact-Driven Mission",
      subtitle: "Make a Difference Every Day",
      description:
        "Be part of meaningful projects that create positive change in education, employment, and digital transformation across emerging markets.",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      stats: "1M+ Lives Impacted",
      highlight: "Meaningful Work",
    },
  ]

  const whyJoinUs = [
    {
      icon: Globe,
      title: "Global Impact",
      description: "Work on projects that create positive change in communities across the world",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Use cutting-edge technology and be at the forefront of digital transformation",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Join a diverse team of passionate professionals who support each other's growth",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Accelerate your career with mentorship, training, and advancement opportunities",
      color: "from-orange-500 to-red-500",
    },
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Market-leading salaries with equity participation and performance bonuses",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80",
      gradient: "from-green-600/90 to-emerald-600/90",
      features: [
        "Competitive base salary",
        "Equity participation program",
        "Annual performance bonuses",
        "Salary review every 6 months",
      ],
    },
    {
      icon: Shield,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs for you and your family",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      gradient: "from-blue-600/90 to-cyan-600/90",
      features: [
        "Premium health insurance",
        "Mental health support",
        "Fitness membership reimbursement",
        "Annual health checkups",
      ],
    },
    {
      icon: BookOpen,
      title: "Learning & Development",
      description: "Unlimited access to courses, conferences, and professional development resources",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80",
      gradient: "from-purple-600/90 to-violet-600/90",
      features: [
        "$5,000 annual learning budget",
        "Conference attendance support",
        "Internal mentorship program",
        "Skill development workshops",
      ],
    },
  ]

  const openPositions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$120K - $160K",
      description: "Build scalable systems that power our global platform and impact millions of users worldwide.",
      requirements: ["5+ years experience", "React/Node.js", "Cloud platforms", "System design"],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      salary: "$110K - $140K",
      description: "Drive product strategy and execution for our core platform serving users across emerging markets.",
      requirements: ["3+ years PM experience", "Data-driven mindset", "User research", "Agile methodology"],
      color: "from-green-500 to-green-600",
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "$90K - $120K",
      description: "Create intuitive and beautiful user experiences that make complex workflows simple and accessible.",
      requirements: ["4+ years design experience", "Figma/Sketch", "User research", "Design systems"],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      salary: "$130K - $170K",
      description:
        "Analyze user behavior and business metrics to drive data-informed decisions and product improvements.",
      requirements: ["PhD/Masters in relevant field", "Python/R", "Machine learning", "Statistical analysis"],
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$115K - $145K",
      description: "Build and maintain infrastructure that ensures our platform scales reliably across global markets.",
      requirements: ["4+ years DevOps experience", "AWS/GCP", "Kubernetes", "CI/CD pipelines"],
      color: "from-red-500 to-red-600",
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      salary: "$85K - $110K",
      description: "Develop and execute marketing strategies to grow our user base and brand presence globally.",
      requirements: ["3+ years marketing experience", "Digital marketing", "Analytics", "Content strategy"],
      color: "from-cyan-500 to-cyan-600",
    },
  ]

  const companyValues = [
    {
      icon: Heart,
      title: "People First",
      description: "We prioritize the wellbeing and growth of our team members above all else",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace creativity and encourage bold ideas that push boundaries",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Globe,
      title: "Global Mindset",
      description: "We think globally and act with cultural sensitivity and inclusiveness",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Target,
      title: "Impact Driven",
      description: "Every decision we make is guided by its potential to create positive change",
      color: "from-green-500 to-teal-500",
    },
  ]

  const perks = [
    { icon: Laptop, title: "Latest Equipment", description: "MacBook Pro and premium setup allowance" },
    { icon: Coffee, title: "Flexible Hours", description: "Work when you're most productive" },
    { icon: Headphones, title: "Quiet Workspace", description: "$1000 home office setup budget" },
    { icon: Clock, title: "Unlimited PTO", description: "Take time off when you need it" },
    { icon: Award, title: "Recognition Program", description: "Peer nominations and quarterly awards" },
    { icon: Building, title: "Team Retreats", description: "Annual company-wide gatherings" },
  ]

  const testimonials = [
    {
      name: "Sarah Brown",
      role: "Senior Software Engineer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "The learning opportunities here are incredible. I've grown more in 2 years than I did in my previous 5 years combined. The team truly cares about your development.",
      rating: 5,
      tenure: "2 years",
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      quote:
        "Working remotely while having such strong team collaboration has been amazing. The impact we're making on global education keeps me motivated every day.",
      rating: 5,
      tenure: "3 years",
    },
    {
      name: "Aisha Patel",
      role: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      quote:
        "The diversity of perspectives here is incredible. Every project challenges me to think differently and create solutions that work for users worldwide.",
      rating: 5,
      tenure: "1.5 years",
    },
  ]

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Careers Hero with Image Background */}
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
          <div className="absolute z-10 inset-0 bg-gradient-to-r from-black/60 via-gray-900/70 to-black/80" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20 sm:pt-0 sm:text-center text-left">
          <div className="content-animate max-w-4xl mx-auto text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
            <div
              key={currentHeroIndex}
              className={`hero-content-slide space-y-4 sm:space-y-6 ${currentHeroIndex >= 0 ? "active" : ""}`}
            >
            

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
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 sm:px-6 sm:py-3">
                  <span className="text-sm sm:text-lg font-bold text-white">{heroContent[currentHeroIndex].stats}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center pt-2 sm:pt-4">
  <button 
    onClick={() => {
      const openPositionsSection = document.querySelector('section.py-20.bg-white');
      if (openPositionsSection) {
        openPositionsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-sm sm:text-base hover:shadow-2xl transition-all duration-300 btn-hover"
  >
    View Open Positions
  </button>
  <button 
    onClick={() => window.location.href = '/about'}
    className="px-6 py-3 sm:px-8 sm:py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-sm sm:text-base hover:bg-white/30 transition-all duration-300 btn-hover"
  >
    Learn About Culture
  </button>
</div>
            </div>
          </div>
        </div>

        {/* Navigation Squares */}
        <div className="absolute bottom-8 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`nav-square ${index === currentHeroIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Join BrilliantMinds?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join a mission-driven company where your work creates meaningful impact while you grow professionally in a
              supportive, innovative environment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJoinUs.map((reason, index) => (
              <div
                key={index}
                className="section-reveal card-hover text-center p-8 bg-gradient-to-br from-gray-50 to-white shadow-xl border border-gray-100"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${reason.color} flex items-center justify-center mx-auto rounded-full mb-6`}
                >
                  {React.createElement(reason.icon, { className: "w-10 h-10 text-white" })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Benefits & Perks</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team with comprehensive benefits and perks that support your personal and
              professional life
            </p>
          </div>

          <div className="space-y-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`section-reveal grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center space-x-4 ">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600  flex items-center justify-center rounded-md">
                      {React.createElement(benefit.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{benefit.title}</h3>
                    </div>
                  </div>

                  <p className="text-xl text-gray-700 leading-relaxed">{benefit.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="relative h-80 overflow-hidden shadow-2xl">
                    <Image
                      src={benefit.image || "/placeholder.svg"}
                      alt={benefit.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover "
                      quality={85}
                    />
                    <div className={`absolute inset-0 `} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Perks Grid */}
          <div className="section-reveal mt-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Additional Perks</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {perks.map((perk, index) => (
                <div key={index} className="card-hover bg-white p-6 shadow-lg border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 rounded-xl">
                    {React.createElement(perk.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{perk.title}</h4>
                  <p className="text-gray-600 text-sm">{perk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our growing team and help us build the future of digital transformation and education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="section-reveal card-hover bg-gradient-to-br from-gray-50 to-white shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${position.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 text-sm font-semibold">
                      {position.department}
                    </span>
                    <span className="text-sm opacity-90">{position.type}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                  <div className="flex items-center space-x-4 text-sm opacity-90">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span>{position.salary}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">{position.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                    <div className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <div key={reqIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 hover:shadow-lg transition-all duration-300 btn-hover">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape the culture we&apos;ve built together
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="section-reveal card-hover bg-white p-8 text-center shadow-xl border border-gray-100"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-6 rounded-xl`}
                >
                  {React.createElement(value.icon, { className: "w-10 h-10 text-white" })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What Our Team Says</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our team members about their experience working at BrilliantMinds
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="section-reveal card-hover bg-gradient-to-br from-gray-50 to-white shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    quality={85}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1">
                    <span className="text-xs font-semibold text-gray-700">{testimonial.tenure}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-blue-600 font-semibold">{testimonial.role}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Join Our Mission?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-8" />
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
              Take the next step in your career and be part of a team that&apos;s making a real difference in the world.
              Apply today and help us build the future of digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => {
                const openPositionsSection = document.querySelector('section.py-20.bg-white');
                if (openPositionsSection) {
                  openPositionsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-10 py-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg hover:shadow-2xl transition-all duration-300 btn-hover"
            >
              View All Positions
            </button>
            <button 
              onClick={() => window.location.href = '/about'}
              className="px-10 py-5 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 btn-hover"
            >
              Learn About Culture
            </button>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CareersPage
