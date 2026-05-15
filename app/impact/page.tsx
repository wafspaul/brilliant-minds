"use client"

import { useEffect, useState, useRef } from "react"
import { Users, Smartphone, Target, MapPin, Building, Zap } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import "@/styles/impact-animation.scss"

const ImpactPage = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  // (removed unused state)

  const heroImages = [
    "/images/impact-hero-1.jpg",
    "/images/impact-hero-2.jpg",
    "/images/impact-hero-3.jpg",
    "/images/impact-hero-4.jpg",
  ]

  const impactStats = [
    {
      number: "6,000+",
      label: "People Reached",
      description: "Individuals reached across our programs and platforms since we started",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      number: "47",
      label: "Counties Mapped",
      description: "Every county in Kenya covered by the live connectivity and infrastructure map",
      icon: MapPin,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      number: "2",
      label: "Live Platforms",
      description: "Kazi Pap for AI job matching and the Kenya Connectivity Map, both live in production",
      icon: Smartphone,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
    },
    {
      number: "More",
      label: "On the Way",
      description: "E-learning and skill development platforms are in active development — watch this space",
      icon: Building,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
  ]


  const globalReach = [
    { region: "Kenya", countries: 47, beneficiaries: "6,000+", color: "text-blue-600" },
    { region: "East Africa", countries: 0, beneficiaries: "Expanding", color: "text-green-600" },
    { region: "Africa", countries: 0, beneficiaries: "The Goal", color: "text-purple-600" },
    { region: "Global", countries: 0, beneficiaries: "The Vision", color: "text-orange-600" },
  ]

  const futureGoals = [
    {
      icon: Target,
      title: "10M+ Empowered",
      description: "Reach 10 million individuals by 2030 with comprehensive digital empowerment programs",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Building,
      title: "1,000+ Tech Hubs",
      description: "Establish community technology centers in underserved areas worldwide",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "100% Digital Equity",
      description: "Eliminate the digital divide through innovative solutions and partnerships",
      color: "from-purple-500 to-violet-500",
    },
  ]

  // Simple counter component
  const CounterAnimation = ({ value }: { value: string }) => {
    const [count, setCount] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)
    const numericValue = Number.parseInt(value.replace(/[^\d]/g, ""))
    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasStarted && numericValue) {
            setHasStarted(true)
            let start = 0
            const increment = numericValue / 60
            const timer = setInterval(() => {
              start += increment
              if (start >= numericValue) {
                setCount(numericValue)
                clearInterval(timer)
              } else {
                setCount(Math.floor(start))
              }
            }, 50)
          }
        },
        { threshold: 0.5 },
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return () => observer.disconnect()
    }, [hasStarted, numericValue])

    return (
      <span ref={ref} className="counter">
        {count.toLocaleString()}
        {value.includes("+") ? "+" : ""}
      </span>
    )
  }

  // Hero image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [heroImages.length])

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
          <div className="absolute z-10 inset-0 bg-gradient-to-r from-blue-900/70 via-purple-900/60 to-indigo-900/70" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="content-animate max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Impact</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Grounded in Kenya. Building toward Africa. Real platforms, real data, real work.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="#impact-numbers"
                className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-2xl transition-all duration-300"
              >
                View Our Numbers
              </a>
              <a
                href="#success-stories"
                className="px-10 py-5 rounded-full bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-lg hover:bg-white/30 transition-all duration-300"
              >
                Read Success Stories
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

      {/* Impact Numbers */}
      <section id="impact-numbers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Impact Metrics</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Real metrics that demonstrate the tangible difference we&apos;re making in communities worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className={`section-reveal card-hover ${stat.bgColor} rounded-2xl p-8 text-center border border-gray-100 shadow-lg`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  <CounterAnimation value={stat.number} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact in Progress */}
      <section id="success-stories" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">The Work in Progress</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              We are early stage. The platforms are live. The stories are building. Check back as the numbers grow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://kazipap.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 text-white font-bold text-lg hover:shadow-xl transition-all duration-300"
              >
                Try Kazi Pap
              </a>
              <a
                href="https://kenya-connectivity-map.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg hover:shadow-xl transition-all duration-300"
              >
                View Connectivity Map
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Global Reach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Making a difference across continents with localized solutions and global impact
            </p>
          </div>

          <div className="section-reveal mb-16">
            <div className="relative bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl p-8 backdrop-blur-lg border border-white/10">
              <div className="text-center mb-8">
                <Image
                  src="/images/global-reach-1.jpg"
                  alt="Global network visualization"
                  width={1200}
                  height={800}
                  className="w-full h-64 object-cover rounded-xl opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-4xl font-bold mb-2">47 Counties</h3>
                    <p className="text-xl text-gray-300">All of Kenya. That&apos;s where we start.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {globalReach.map((region, index) => (
              <div
                key={index}
                className="section-reveal card-hover bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
              >
                <div className={`text-4xl font-bold mb-2 ${region.color}`}>{region.beneficiaries}</div>
                <h3 className="text-xl font-semibold mb-2">{region.region}</h3>
                <p className="text-gray-300">{region.countries > 0 ? `${region.countries} Counties` : "Next frontier"}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Vision for the Future</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8" />
            <p className="text-xl text-gray-200 max-w-4xl mx-auto">
              Ambitious goals that will shape the next decade of digital empowerment and community transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {futureGoals.map((goal, index) => (
              <div
                key={index}
                className="section-reveal card-hover bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center h-full"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${goal.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <goal.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{goal.title}</h3>
                <p className="text-gray-200 leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>

          <div className="section-reveal text-center">
            <h3 className="text-3xl font-bold mb-8">Help Us Reach These Goals</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/contact"
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300"
              >
                Join Our Mission
              </a>
              <a
                href="/get-involved"
                className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ImpactPage
