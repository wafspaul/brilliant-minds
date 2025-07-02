"use client"

import React from "react"

import { useEffect, useState } from "react"
import {
  Wifi,
  BookOpen,
  Briefcase,
  TrendingUp,
  Users,
  Globe,
  Smartphone,
  Award,
  CheckCircle,
  ArrowRight,
  Play,
  Target,
  Shield,
  Brain,
  MapPin,
  Clock,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import "@/styles/solutions-animations.scss"

const SolutionsPage = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0)

  const heroImages = [
    "/images/solutions-hero-1.jpg",
    "/images/solutions-hero-2.jpg",
    "/images/solutions-hero-3.jpg",
    "/images/solutions-hero-4.jpg",
  ]

  const solutions = [
    {
      id: "digital-inclusion",
      icon: Wifi,
      title: "Digital Inclusion",
      subtitle: "Bridging the Digital Divide",
      description:
        "Providing devices, internet connectivity, and access to co-working spaces for marginalized communities to enable digital participation.",
      image: "/images/digital-inclusion-solution.jpg",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      features: [
        {
          icon: Smartphone,
          title: "Device Donation",
          description: "Partnering with organizations to supply digital devices",
        },
        {
          icon: Wifi,
          title: "Internet Connectivity",
          description: "Collaborating with telecom providers for affordable connectivity",
        },
        {
          icon: Brain,
          title: "AI Mapping Solutions",
          description: "Real-time analysis of regions with low connectivity",
        },
        {
          icon: MapPin,
          title: "Co-Working Spaces",
          description: "Directory of spaces equipped with internet and devices",
        },
      ],
      stats: { number: "2.5M+", label: "People Connected" },
    },
    {
      id: "e-learning",
      icon: BookOpen,
      title: "E-Learning Revolution",
      subtitle: "Transforming Education",
      description:
        "Developing innovative microlearning platforms for fun and engaging education that makes quality learning accessible to everyone.",
      image: "/images/elearning-solution.jpg",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      features: [
        {
          icon: Clock,
          title: "Short Content Sessions",
          description: "Bite-sized lessons for effective learning",
        },
        {
          icon: Play,
          title: "Interactive Features",
          description: "Quizzes, videos, and progress tracking",
        },
        {
          icon: BookOpen,
          title: "Content Areas",
          description: "Academic topics, professional skills, and freelancing basics",
        },
        {
          icon: Award,
          title: "Certifications",
          description: "Industry-recognized certificates upon completion",
        },
      ],
      stats: { number: "150K+", label: "Skills Certified" },
    },
    {
      id: "gig-economy",
      icon: Briefcase,
      title: "Gig Economy Integration",
      subtitle: "Verified Work Opportunities",
      description:
        "AI-powered platforms to provide equitable and verified work opportunities for freelancers with scam prevention and skill matching.",
      image: "/images/gig-economy-solution.jpg",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      features: [
        {
          icon: MapPin,
          title: "Local Work Sourcing",
          description: "AI solutions to identify local digitization opportunities",
        },
        {
          icon: Globe,
          title: "International Work",
          description: "Verified gigs in high-demand fields worldwide",
        },
        {
          icon: Target,
          title: "Job Recommendations",
          description: "Personalized matches based on skills and preferences",
        },
        {
          icon: Shield,
          title: "Scam Prevention",
          description: "Automated checks to ensure safe work environments",
        },
      ],
      stats: { number: "95%", label: "Success Rate" },
    },
    {
      id: "skill-development",
      icon: TrendingUp,
      title: "Skill Development",
      subtitle: "Market-Relevant Training",
      description:
        "Self-paced, tailored sessions designed to equip freelancers with market-relevant skills through courses and webinars.",
      image: "/images/skill-development-solution.jpg",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      features: [
        {
          icon: BookOpen,
          title: "Course Offerings",
          description: "Freelancing essentials, digital tools, and soft skills",
        },
        {
          icon: Users,
          title: "Live Webinars",
          description: "Interactive sessions with industry leaders",
        },
        {
          icon: Globe,
          title: "Global Exposure",
          description: "Insights and trends from international freelancers",
        },
        {
          icon: Award,
          title: "Certifications",
          description: "Industry-recognized credentials for career advancement",
        },
      ],
      stats: { number: "50+", label: "Countries Served" },
    },
  ]

  const impactCards = [
    {
      title: "Real-World Transformation",
      description: "AI enables communities to improve their efficiency, profitability and sustainability outcomes.",
      image: "/images/impact-transformation.jpg",
      gradient: "from-blue-600/30 to-purple-600/50",
    },
    {
      title: "Digital Innovation Hub",
      description: "Creating comprehensive digital solutions that address real community challenges.",
      image: "/images/gig-testimonial-2.jpg",
      gradient: "from-green-600/30 to-teal-600/50",
    },
    {
      title: "Enterprise-Grade Solutions",
      description: "Scalable platforms designed to grow with communities and organizations.",
      image: "/images/enterprise-solutions.jpg",
      gradient: "from-purple-600/30 to-pink-600/50",
    },
    {
      title: "Smart Community Solutions",
      description: "IoT and AI solutions for building smarter, more connected communities.",
      image: "/images/smart-community.jpg",
      gradient: "from-orange-600/30 to-red-600/50",
    },
    {
      title: "Global Business Services",
      description: "Comprehensive consulting and implementation services worldwide.",
      image: "/images/global-services.jpg",
      gradient: "from-indigo-600/30 to-blue-600/50",
    },
    {
      title: "Future-Ready Infrastructure",
      description: "Building tomorrow's digital infrastructure for sustainable growth.",
      image: "/images/interactive-features.jpg",
      gradient: "from-teal-600/30 to-cyan-600/50",
    },
  ]

  const successStories = [
    {
      title: "Rural School Transformation",
      description:
        "A remote village school gained access to high-speed internet and digital devices, increasing student engagement by 300%.",
      image: "/images/gig-testimonial-3.jpg",
      impact: "300% increase in engagement",
      location: "Rural Kenya",
    },
    {
      title: "From Student to Developer",
      description:
        "Our e-learning platform helped Maria transition from unemployment to becoming a senior software developer in 8 months.",
      image: "/images/developer-success.jpg",
      impact: "Career transformation",
      location: "São Paulo, Brazil",
    },
    {
      title: "Community Tech Hub",
      description:
        "A local community center became a thriving tech hub, providing digital services to over 5,000 residents monthly.",
      image: "/images/tech-hub-success.jpg",
      impact: "5,000+ monthly users",
      location: "Nairobi, Kenya",
    },
  ]

  // Hero image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  // Solution rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSolutionIndex((prev) => (prev + 1) % solutions.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [solutions.length])

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

      {/* Hero Section */}
      <section className="stable-layout relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div key={index} className={`hero-background ${index === currentHeroIndex ? "active" : ""}`}>
              <Image
                src={image || "/placeholder.svg"}
                alt="Hero background"
                fill
                sizes="100vw"
                className="object-cover"
                priority={index === 0}
                quality={85}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-purple-900/60 to-indigo-900/70" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="content-animate max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transforming communities through digital empowerment, education, and economic opportunities. Comprehensive
              solutions designed to create lasting change.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="#solutions-overview"
                className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Explore Solutions
              </a>
              <a
                href="#success-stories"
                className="px-10 py-5 rounded-full bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-lg hover:bg-white/30 transition-all duration-300"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`nav-dot ${index === currentHeroIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </section>

      {/* Solutions Overview */}
      <section id="solutions-overview" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Comprehensive Digital Transformation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A holistic approach to digital inclusion that addresses the key challenges facing underserved communities
              through innovative technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`section-reveal card-hover ${solution.bgColor} p-8 text-center border border-gray-100 shadow-lg`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{solution.stats.number}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{solution.title}</h3>
                <p className="text-gray-600 text-sm">{solution.description.substring(0, 100)}...</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Solutions Showcase */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Solutions in Detail</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore each solution and see how we&apos;re creating lasting impact in communities worldwide
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Dynamic Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${solutions[currentSolutionIndex].color}  flex items-center justify-center`}
                >
                  {React.createElement(solutions[currentSolutionIndex].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{solutions[currentSolutionIndex].title}</h3>
                  <p className="text-lg text-blue-600 font-semibold">{solutions[currentSolutionIndex].subtitle}</p>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">{solutions[currentSolutionIndex].description}</p>

              <div className="grid grid-cols-2 gap-4">
                {solutions[currentSolutionIndex].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100  flex items-center justify-center flex-shrink-0 mt-1">
                      {React.createElement(feature.icon, { className: "w-4 h-4 text-blue-600" })}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                      <p className="text-gray-600 text-xs">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-lg  flex items-center justify-center">
                  {React.createElement(solutions[currentSolutionIndex].icon, { className: "w-6 h-6 text-blue-600" })}
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{solutions[currentSolutionIndex].stats.number}</p>
                  <p className="text-sm text-gray-600">{solutions[currentSolutionIndex].stats.label}</p>
                </div>
              </div>
            </div>

            {/* Dynamic Image */}
            <div className="relative h-96 lg:h-[500px]">
              <div className="absolute inset-0  overflow-hidden shadow-2xl">
                <Image
                  src={solutions[currentSolutionIndex].image || "/placeholder.svg"}
                  alt={solutions[currentSolutionIndex].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
              </div>
            </div>
          </div>

          {/* Solution Navigation */}
          <div className="flex justify-center mt-12 space-x-4">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSolutionIndex(index)}
                className={`w-3 h-3 transition-all duration-300 ${
                  index === currentSolutionIndex ? "bg-blue-500 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Cards Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Real Impact Solutions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Discover how our comprehensive solutions create measurable impact across communities worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactCards.map((card, index) => (
              <div
                key={index}
                className="section-reveal card-hover relative h-80  overflow-hidden shadow-xl group cursor-pointer"
              >
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  quality={85}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`} />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-gray-200 mb-4">{card.description}</p>
                  <div className="flex items-center text-white font-semibold">
                    <span className="text-sm">Find Out More</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real transformations happening in communities around the world through our solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="section-reveal card-hover bg-white  overflow-hidden shadow-lg border border-gray-100 h-full"
              >
                <div className="relative h-48">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm  px-3 py-1">
                    <span className="text-xs font-semibold text-gray-700">{story.location}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm font-semibold text-green-600">{story.impact}</span>
                    </div>
                    <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                      Read Full Story →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/solutions-cta-bg.jpg"
            alt="Transform your community"
            fill
            sizes="100vw"
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-indigo-900/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="section-reveal text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">Ready to Transform Your Community?</h2>
            <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Partner with BrilliantMinds to bring digital empowerment, education, and economic opportunities to your
              community. Let&apos;s create lasting change together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => window.location.href = '/contact'}
              className="px-10 py-5 bg-white text-blue-900 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg cursor-pointer"
            >
              Start Your Transformation
            </button>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Schedule Consultation
            </button>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SolutionsPage
