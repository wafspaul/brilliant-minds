"use client"

import React, { useEffect, useState, useRef } from "react"
import {
  Heart,
  Lightbulb,
  Users,
  Globe,
  Award,
  Zap,
  Handshake,
  ArrowRight,
  Quote,
  Star,
  MapPin,
  TrendingUp,
  BookOpen,
  Briefcase,
  Wifi,
  CheckCircle,
  Play,
  Pause,
} from "lucide-react"
import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import "@/styles/about-animations.scss"

const AboutPage = () => {
  const [currentValueIndex, setCurrentValueIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [currentTeamMember, setCurrentTeamMember] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace creative thinking and novel approaches to solve complex challenges facing underserved communities.",
      color: "from-yellow-400/20 to-orange-500/40",
      bgImage: "/images/value-innovation.jpg",
      stats: "50+ Innovative Solutions",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description:
        "We believe in the power of partnership and work closely with communities to create solutions that truly meet their needs.",
      color: "from-blue-400/20 to-purple-500/40",
      bgImage: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stats: "200+ Active Partners",
    },
    {
      icon: Zap,
      title: "Empowerment",
      description:
        "We focus on building capacity and empowering individuals to create lasting impact and self-sufficiency.",
      color: "from-green-400/20 to-teal-500/40",
      bgImage: "/images/value-empowerment.jpg",
      stats: "2.5M+ Lives Empowered",
    },
    {
      icon: Heart,
      title: "Equity",
      description:
        "We are committed to fair access and opportunity, ensuring our solutions address systemic barriers and promote inclusion.",
      color: "from-pink-400/20 to-red-500/40",
      bgImage: "/images/value-equity.jpg",
      stats: "95% Equity Score",
    },
  ]

  const teamMembers = [
    {
      name: "John Doe",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 15+ years in social impact technology. Former Google executive passionate about digital equity.",
      image: "/images/team-ceo.jpg",
      expertise: ["Strategic Leadership", "Social Impact", "Technology Innovation"],
      achievements: "Led 3 successful social enterprises",
      location: "San Francisco, CA",
    },
    {
      name: "Jane Doe",
      role: "Chief Technology Officer",
      bio: "AI and machine learning expert dedicated to creating accessible technology solutions for underserved communities.",
      image: "/images/team-cto.jpg",
      expertise: ["AI/ML", "Software Architecture", "Digital Accessibility"],
      achievements: "Published 25+ research papers",
      location: "Austin, TX",
    },
    {
      name: "David Smith",
      role: "Head of Community Impact",
      bio: "Community organizer and social entrepreneur with deep experience in grassroots development and digital inclusion.",
      image: "/images/team-community.jpg",
      expertise: ["Community Development", "Program Management", "Partnership Building"],
      achievements: "Impacted 500K+ individuals",
      location: "New York, NY",
    },
    {
      name: "Maria Rodriguez",
      role: "Director of Education",
      bio: "Former educator and curriculum designer focused on creating inclusive learning experiences for diverse populations.",
      image: "/images/team-education.jpg",
      expertise: ["Educational Design", "Curriculum Development", "Learning Analytics"],
      achievements: "Designed 100+ courses",
      location: "Mexico City, MX",
    },
  ]

  const impactMetrics = [
    { number: "25+", label: "Communities Served", icon: Users },
    { number: "10,000+", label: "People Empowered", icon: TrendingUp },
    { number: "45+", label: "Technology Centers", icon: Globe },
    { number: "18", label: "Countries Reached", icon: MapPin },
  ]

  const milestones = [
    {
      year: "2019",
      title: "Foundation Established",
      description: "BrilliantMinds was founded with a mission to bridge the digital divide",
      icon: Lightbulb,
    },
    {
      year: "2020",
      title: "First Digital Inclusion Program",
      description: "Launched our flagship program serving 1,000 individuals in underserved communities",
      icon: Wifi,
    },
    {
      year: "2021",
      title: "E-Learning Platform Launch",
      description: "Introduced innovative microlearning platform with 50+ courses",
      icon: BookOpen,
    },
    {
      year: "2022",
      title: "Gig Economy Integration",
      description: "Launched AI-powered platform connecting freelancers with verified opportunities",
      icon: Briefcase,
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded operations to 18 countries, impacting over 2.5M lives",
      icon: Globe,
    },
  ]

  // Value rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValueIndex((prev) => (prev + 1) % coreValues.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [coreValues.length])

  // Team rotation
  useEffect(() => {
    const teamInterval = setInterval(() => {
      setCurrentTeamMember((prev) => (prev + 1) % teamMembers.length)
    }, 5000)

    return () => clearInterval(teamInterval)
  }, [teamMembers.length])

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

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="About BrilliantMinds"
        subtitle="Transforming communities through technology and innovation, creating opportunities for underserved populations worldwide."
        primaryCTA={{
          text: "Join Our Mission",
          href: "#mission",
        }}
        secondaryCTA={{
          text: "Meet Our Team",
          href: "#team",
        }}
        backgroundType="image"
        backgroundSrc="/images/about-hero-bg.jpg"
      />

      {/* Mission & Vision Section */}
      <section id="mission" className="py-20 bg-white relative overflow-hidden">
        {/* Simplified background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="section-reveal space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-6" />
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  To empower marginalized communities by bridging the digital divide and fostering equitable
                  opportunities through innovation, collaboration, and sustainable solutions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <Quote className="w-8 h-8 text-blue-500 mb-4" />
                <p className="text-lg text-gray-700 italic mb-4">
                  &quot;We work tirelessly to create sustainable solutions that address real needs, build capacity
                  within communities, and create pathways to opportunity that might otherwise remain closed.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">BM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">BrilliantMinds Team</p>
                    <p className="text-sm text-gray-600">Collective Vision</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-reveal relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/mission-collaboration.jpg"
                  alt="Team collaboration"
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-purple-900/30" />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">2.5M+</p>
                    <p className="text-sm text-gray-600">Lives Impacted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="section-reveal mt-20">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What We Aspire To</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
              <p className="text-xl text-gray-700 leading-relaxed mb-12">
                A world where access to technology, education, and dignified work is universal and impactful for every
                individual and community.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Globe,
                    title: "Universal Access",
                    description: "Technology and education available to everyone, everywhere",
                  },
                  {
                    icon: Users,
                    title: "Community Empowerment",
                    description: "Local communities leading their own digital transformation",
                  },
                  {
                    icon: TrendingUp,
                    title: "Sustainable Impact",
                    description: "Long-term solutions that create lasting positive change",
                  },
                ].map((item, index) => (
                  <div key={index} className="card-hover bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" />
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">What We Stand For</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6" />
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our core values define how we work and guide our decisions as we pursue our mission of digital equity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Dynamic Value Display */}
            <div className="relative h-96 lg:h-[500px]">
              <div
                key={currentValueIndex}
                className={`value-showcase absolute inset-0 rounded-2xl overflow-hidden ${
                  currentValueIndex >= 0 ? "active" : ""
                }`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={coreValues[currentValueIndex].bgImage || "/placeholder.svg"}
                    alt={coreValues[currentValueIndex].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    quality={85}
                  />
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${coreValues[currentValueIndex].color} opacity-80`}
                />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-6">
                      {React.createElement(coreValues[currentValueIndex].icon, { className: "w-10 h-10" })}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{coreValues[currentValueIndex].title}</h3>
                    <p className="text-lg mb-6 max-w-md mx-auto">{coreValues[currentValueIndex].description}</p>
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-lg rounded-full px-4 py-2">
                      <Star className="w-4 h-4 mr-2" />
                      <span className="text-sm font-semibold">{coreValues[currentValueIndex].stats}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentValueIndex(index)}
                  className={`value-card p-6 rounded-xl cursor-pointer backdrop-blur-lg border ${
                    currentValueIndex === index ? "active" : ""
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mr-4`}
                    >
                      {React.createElement(value.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <h4 className="text-xl font-bold text-white">{value.title}</h4>
                  </div>
                  <p className="text-gray-200 text-sm mb-4">{value.description.substring(0, 100)}...</p>
                  <div className="flex items-center text-blue-300 text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Meet The Brilliant Minds</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team brings together expertise in technology, community development, education, and social
              impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Featured Team Member */}
            <div className="section-reveal relative">
              <div
                key={currentTeamMember}
                className={`team-showcase bg-white rounded-2xl shadow-xl overflow-hidden ${
                  currentTeamMember >= 0 ? "active" : ""
                }`}
              >
                <div className="relative h-80">
                  <Image
                    src={teamMembers[currentTeamMember].image || "/placeholder.svg"}
                    alt={teamMembers[currentTeamMember].name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{teamMembers[currentTeamMember].name}</h3>
                    <p className="text-blue-200">{teamMembers[currentTeamMember].role}</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-6">{teamMembers[currentTeamMember].bio}</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                      <span className="text-sm">{teamMembers[currentTeamMember].location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Award className="w-4 h-4 mr-2 text-purple-500" />
                      <span className="text-sm">{teamMembers[currentTeamMember].achievements}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {teamMembers[currentTeamMember].expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Grid */}
            <div className="section-reveal grid grid-cols-2 gap-4">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentTeamMember(index)}
                  className={`team-member-card cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                    currentTeamMember === index ? "active" : ""
                  }`}
                >
                  <div className="relative h-48">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white">
                      <h4 className="font-bold text-sm">{member.name}</h4>
                      <p className="text-xs text-gray-200">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="section-reveal bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-96">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1499540633125-484965b60031?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                autoPlay={isVideoPlaying}
              >
                <source src="/assets/team.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button
                  onClick={toggleVideo}
                  className="video-play-btn w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white"
                >
                  {isVideoPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                </button>
              </div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Meet Our Team</h3>
                <p className="text-gray-200">Discover the passionate individuals driving our mission forward</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to global impact - the milestones that shaped our mission.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600" />

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`section-reveal flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                  <div className="timeline-item bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center ${index % 2 === 0 ? "ml-auto mr-4" : "mr-auto ml-4"}`}
                      >
                        {React.createElement(milestone.icon, { className: "w-6 h-6 text-white" })}
                      </div>
                      <div className={index % 2 === 0 ? "text-right" : ""}>
                        <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                        <p className="text-blue-600 font-semibold">{milestone.year}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="w-6 h-6 bg-white border-4 border-blue-500 rounded-full" />
                </div>

                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/impact-background.jpg"
            alt="Impact background"
            fill
            sizes="100vw"
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Making A Difference</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6" />
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Real numbers that demonstrate the positive change we&apos;re creating in communities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div
                key={index}
                className="section-reveal impact-metric text-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.createElement(metric.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{metric.number}</h3>
                <p className="text-gray-200 font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Join Us In Making a Difference</h2>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Together, we can bridge digital divides and create opportunities for underserved communities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => window.location.href = '/get-involved'}
              className="px-8 py-4 bg-white text-purple-900 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg btn-hover"
            >
              Start Your Journey
            </button>
            <button 
              onClick={() => window.location.href = '/get-involved'}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300 btn-hover"
            >
              Support Our Mission
            </button>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
