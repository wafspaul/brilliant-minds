"use client"

import React, { useEffect, useState } from "react"
import {
  BookOpen,
  Users,
  Globe,
  Award,
  TrendingUp,
  Video,
  MessageCircle,
  Star,
  Clock,
  Target,
  CheckCircle,
  UserCheck,
  Briefcase,
  Code,
  Lightbulb,
  Network,
  ArrowRight,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import "@/styles/skill-development-animations.scss"

const SkillDevelopmentPage = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Master Market-Relevant Skills",
      subtitle: "Self-Paced Learning Excellence",
      description:
        "Comprehensive skill development programs designed to equip freelancers and professionals with cutting-edge capabilities for the digital economy.",
      stats: "In Development",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "Interactive Learning Experience",
      subtitle: "Live Webinars & Workshops",
      description:
        "Connect with industry leaders through interactive sessions, gaining practical insights and networking opportunities from global experts.",
      stats: "Coming Soon",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Global Learning Community",
      subtitle: "Worldwide Knowledge Exchange",
      description:
        "Join a community of learners in Kenya and East Africa, sharing experiences and building professional networks across the region.",
      stats: "Kenya + East Africa",
    },
    {
      image:
        "https://images.unsplash.com/photo-1617900906639-cab7adceb499?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Certified Skill Pathways",
      subtitle: "Industry-Recognized Credentials",
      description:
        "Earn certificates that matter in today's job market, with pathways designed by industry professionals and validated by employers.",
      stats: "Mission-Driven",
    },
  ]

  const learningBenefits = [
    {
      icon: Target,
      title: "Personalized Learning Paths",
      description: "AI-driven curriculum tailored to your career goals and skill level",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Learn at your own pace with 24/7 access to all course materials",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: UserCheck,
      title: "Expert Mentorship",
      description: "One-on-one guidance from industry professionals and successful freelancers",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Industry Certifications",
      description: "Earn recognized credentials that boost your professional credibility",
      color: "from-orange-500 to-red-500",
    },
  ]

  const courseCategories = [
    {
      icon: Briefcase,
      title: "Freelancing Essentials",
      description: "Master the fundamentals of successful freelancing",
      image: "/placeholder.svg",
      gradient: "from-emerald-600/90 to-teal-600/90",
      courses: 12,
      duration: "40 hours",
      level: "Beginner to Advanced",
      skills: ["Client Communication", "Project Management", "Pricing Strategies", "Portfolio Building"],
      rating: 4.9,
      students: "Coming Soon",
    },
    {
      icon: Code,
      title: "Digital Tools Mastery",
      description: "Advanced proficiency in essential digital tools and platforms",
      image: "/placeholder.svg",
      gradient: "from-blue-600/90 to-indigo-600/90",
      courses: 18,
      duration: "60 hours",
      level: "Intermediate",
      skills: ["Design Software", "Development Tools", "Analytics Platforms", "Automation Tools"],
      rating: 4.8,
      students: "Coming Soon",
    },
    {
      icon: Users,
      title: "Professional Soft Skills",
      description: "Essential interpersonal and leadership capabilities",
      image: "/placeholder.svg",
      gradient: "from-purple-600/90 to-pink-600/90",
      courses: 15,
      duration: "35 hours",
      level: "All Levels",
      skills: ["Communication", "Leadership", "Problem Solving", "Time Management"],
      rating: 4.9,
      students: "Coming Soon",
    },
  ]

  const webinarFeatures = [
    {
      icon: MessageCircle,
      title: "Live Q&A Sessions",
      description: "Direct interaction with industry experts and get your questions answered in real-time",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Industry Insights",
      description: "Stay updated with the latest trends, technologies, and opportunities in your field",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Network,
      title: "Networking Opportunities",
      description: "Connect with like-minded professionals and expand your professional network",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Lightbulb,
      title: "Practical Case Studies",
      description: "Learn from real-world examples and apply knowledge to your own projects",
      color: "from-orange-500 to-red-500",
    },
  ]

  const impactMetrics = [
    {
      number: "6,000+",
      label: "People Reached",
      description: "Through our programs and platforms",
      icon: Users,
      color: "from-emerald-500 to-teal-500",
    },
    {
      number: "47",
      label: "Counties Mapped",
      description: "Kenya connectivity data coverage",
      icon: Globe,
      color: "from-blue-500 to-indigo-500",
    },
    {
      number: "2",
      label: "Live Platforms",
      description: "Kazi Pap and Kenya Connectivity Map",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "Kenya",
      label: "Home Base",
      description: "Built in Nairobi, for Africa",
      icon: UserCheck,
      color: "from-orange-500 to-red-500",
    },
  ]

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(heroInterval)
  }, [heroSlides.length])

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

      {/* Skill Development Hero - Simple Background Image */}
      <section className="stable-layout relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div key={index} className={`hero-background ${index === currentHeroIndex ? "active" : ""}`}>
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority={index === 0}
                quality={85}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-teal-800/70 to-emerald-900/80" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20 sm:pt-0 sm:text-center text-left">
          <div className="content-animate max-w-4xl mx-auto text-white">
            <div
              key={currentHeroIndex}
              className={`hero-content-slide space-y-4 sm:space-y-6 ${currentHeroIndex >= 0 ? "active" : ""}`}
            >
              <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-2 sm:mb-4">
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-emerald-400" />
                <span className="text-xs sm:text-sm font-medium">Skill Development</span>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {heroSlides[currentHeroIndex].title}
              </h1>

              <p className="text-base sm:text-xl md:text-2xl text-emerald-300 font-semibold">
                {heroSlides[currentHeroIndex].subtitle}
              </p>

              <p className="text-sm sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl sm:mx-auto">
                {heroSlides[currentHeroIndex].description}
              </p>

              <div className="flex items-center sm:justify-center space-x-4 sm:space-x-6 py-2 sm:py-4">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full px-4 py-2 sm:px-6 sm:py-3">
                  <span className="text-sm sm:text-lg font-bold text-white">{heroSlides[currentHeroIndex].stats}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center pt-2 sm:pt-4">
  <a href="/contact" className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm sm:text-base rounded-full hover:shadow-2xl transition-all duration-300 btn-hover">
    Get Notified at Launch
  </a>
  <a href="/contact" className="px-6 py-3 sm:px-8 sm:py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-sm sm:text-base rounded-full hover:bg-white/30 transition-all duration-300 btn-hover">
    Learn More
  </a>
</div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {heroSlides.map((_, index) => (
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Choose Our Skill Development</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive approach to skill development combines personalized learning paths, expert mentorship,
              and industry-recognized certifications to accelerate your professional growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningBenefits.map((benefit, index) => (
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

      {/* Course Categories */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Comprehensive Course Offerings</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of skill development courses designed to help you thrive in the digital
              economy
            </p>
          </div>

          <div className="space-y-16">
            {courseCategories.map((category, index) => (
              <div
                key={index}
                className={`section-reveal grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                      {React.createElement(category.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-emerald-600 font-semibold">
                        {category.courses} Courses • {category.duration}
                      </p>
                    </div>
                  </div>

                  <p className="text-xl text-gray-700 leading-relaxed">{category.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 pt-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-gray-700 font-semibold">{category.rating}</span>
                    </div>
                    <div className="text-gray-600">
                      <Users className="w-5 h-5 inline mr-2" />
                      {category.students} students
                    </div>
                    <div className="text-gray-600">
                      <Award className="w-5 h-5 inline mr-2" />
                      {category.level}
                    </div>
                  </div>

                  <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 btn-hover">
                    Learn More
                    <ArrowRight className="w-5 h-5 inline ml-2" />
                  </a>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      quality={85}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`} />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4">
                        <h4 className="text-white font-bold text-lg mb-2">{category.title}</h4>
                        <div className="flex items-center justify-between text-white/90 text-sm">
                          <span>{category.courses} Courses</span>
                          <span>{category.duration}</span>
                          <span>{category.students} Students</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Webinars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="section-reveal">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-800 to-teal-900 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Video className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-xl font-bold mb-2">Webinars Coming Soon</p>
                  <p className="text-white/80 text-sm">Live sessions with industry experts</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="section-reveal">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Interactive Learning Webinars</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mb-8" />
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Join our live interactive sessions led by industry leaders and experts. These webinars provide
                    valuable insights, practical tips, and the opportunity to connect with professionals worldwide.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {webinarFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="card-hover text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-100"
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        {React.createElement(feature.icon, { className: "w-6 h-6 text-white" })}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="inline-block px-10 py-5 border-2 border-emerald bg-emerald-500 text-white font-bold text-lg rounded-full hover:bg-white hover:text-emerald-900 transition-all duration-300 btn-hover"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon - Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Learning Events</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Workshops, webinars, and skill sessions are in the works. Register your interest and we will notify you
              when the first events go live.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300 btn-hover"
            >
              Get Notified
            </a>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Learning Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real metrics that demonstrate the effectiveness of our skill development programs
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
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Enhance Your Skills?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-8" />
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-12">
              Skill development programs for Kenyan freelancers and professionals are in the works. Register your
              interest now and be first to know when we launch.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/contact"
                className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300 btn-hover"
              >
                Get Notified at Launch
              </a>
              <a
                href="/contact"
                className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-emerald-900 transition-all duration-300 btn-hover"
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

export default SkillDevelopmentPage
