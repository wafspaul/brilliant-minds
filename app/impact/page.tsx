"use client"

import { useEffect, useState, useRef } from "react"
import { Users, Smartphone, Target, MapPin, Calendar, Building, Zap, Briefcase } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import "@/styles/impact-animation.scss"

const ImpactPage = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const [] = useState(new Set())

  const heroImages = [
    "/images/impact-hero-1.jpg",
    "/images/impact-hero-2.jpg",
    "/images/impact-hero-3.jpg",
    "/images/impact-hero-4.jpg",
  ]

  const impactStats = [
    {
      number: "12,650+",
      label: "Devices Distributed",
      description: "Digital devices provided to marginalized communities through our Digital Inclusion program",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      number: "8,750+",
      label: "Students and Professionals Trained",
      description: "Individuals equipped with digital skills through our E-Learning Revolution platform",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      number: "3,280+",
      label: "Verified Gigs Secured",
      description: "Legitimate work opportunities created through our Gig Economy Integration platform",
      icon: Briefcase,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
    },
    {
      number: "1,450+",
      label: "Co-Working Spaces Established",
      description: "Community spaces equipped with internet and devices for digital participation",
      icon: Building,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
  ]

  const successStories = [
    {
      name: "Amara Okafor",
      type: "Individual Beneficiary",
      location: "Lagos, Nigeria",
      program: "Digital Inclusion",
      story:
        "Received a refurbished laptop through our device donation program and gained internet access at a local co-working space",
      benefit: "Started her own digital marketing consultancy",
      achievement: "300% income increase in 8 months",
      image: "/images/connectivity.jpg",
      quote:
        "BrilliantMinds gave me the tools I needed to transform my life. The laptop and internet access opened doors I never knew existed.",
    },
    {
      name: "Carlos Rodriguez",
      type: "Individual Beneficiary",
      location: "Mexico City, Mexico",
      program: "E-Learning Revolution",
      story: "Completed web development courses through our microlearning platform while working as a street vendor",
      benefit: "Secured full-time employment as a software developer",
      achievement: "Career transformation in 12 months",
      image: "/images/gig-testimonial-2.jpg",
      quote:
        "The bite-sized lessons fit perfectly with my schedule. I could learn between customers and now I'm a certified developer.",
    },
    {
      name: "Priya Sharma",
      type: "Individual Beneficiary",
      location: "Mumbai, India",
      program: "Gig Economy Integration",
      story: "Found verified freelance graphic design opportunities through our AI-powered platform",
      benefit: "Built a sustainable freelance business",
      achievement: "Financial independence as single mother",
      image: "/images/gig-testimonial-3.jpg",
      quote:
        "The platform helped me avoid scams and find legitimate clients. I now support my family of 4 through freelancing.",
    },
    {
      name: "TechForward NGO",
      type: "Organization Beneficiary",
      location: "Nairobi, Kenya",
      program: "Partnership Program",
      story: "Partnered with BrilliantMinds to establish 5 community tech hubs in underserved areas",
      benefit: "Expanded their reach and impact significantly",
      achievement: "Served 2,000+ additional beneficiaries",
      image: "/images/coworking-spaces.jpg",
      quote:
        "Our partnership with BrilliantMinds amplified our impact. Together, we've transformed entire communities.",
    },
  ]

  const communityTransformations = [
    {
      title: "Maasailand Village, Kenya",
      description: "Complete digital transformation of a rural community",
      beforeImage: "/images/digital-hero-1.jpg",
      afterImage: "/images/coworking-spaces.jpg",
      stats: [
        { label: "Internet Access", value: "95%" },
        { label: "Digital Literacy", value: "80%" },
        { label: "Income Increase", value: "250%" },
      ],
      timeframe: "18 months",
    },
    {
      title: "São Paulo Urban School Initiative",
      description: "Modernizing education in underserved urban areas",
      beforeImage: "/images/elearning-hero-1.jpg",
      afterImage: "/images/content-sessions.jpg",
      stats: [
        { label: "Student Engagement", value: "400%" },
        { label: "Graduation Rate", value: "85%" },
        { label: "Tech Skills", value: "90%" },
      ],
      timeframe: "12 months",
    },
  ]

  const globalReach = [
    { region: "Africa", countries: 15, beneficiaries: "2.5M+", color: "text-blue-600" },
    { region: "Asia", countries: 12, beneficiaries: "1.8M+", color: "text-green-600" },
    { region: "Americas", countries: 18, beneficiaries: "1.2M+", color: "text-purple-600" },
    { region: "Europe", countries: 8, beneficiaries: "800K+", color: "text-orange-600" },
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
              Transforming communities through technology, education, and empowerment. See the real difference we&apos;re
              making in lives around the world.
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
              Real metrics that demonstrate the tangible difference we&spos;re making in communities worldwide
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

      {/* Success Stories */}
      <section id="success-stories" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testimonials from individuals and organizations that have benefited from BrilliantMinds programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="section-reveal card-hover bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full"
              >
                <div className="relative h-48">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-gray-700">{story.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{story.name}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{story.location}</span>
                  </div>
                  <div className="text-sm text-blue-600 font-semibold mb-3">{story.program}</div>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed italic">&ldquo;{story.quote}&rdquo;</p>
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs text-gray-600">Story:</span>
                      <p className="text-sm text-gray-700">{story.story}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-600">Benefit:</span>
                      <p className="text-sm font-semibold text-green-600">{story.benefit}</p>
                    </div>
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-xs text-purple-600 font-medium">{story.achievement}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Transformations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Community Transformations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Witness the dramatic positive changes in communities through our comprehensive programs
            </p>
          </div>

          <div className="space-y-20">
            {communityTransformations.map((transformation, index) => (
              <div
                key={index}
                className={`section-reveal grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{transformation.title}</h3>
                    <p className="text-xl text-gray-700 mb-6">{transformation.description}</p>
                    <div className="flex items-center text-gray-600 mb-8">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>Transformation completed in {transformation.timeframe}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    {transformation.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="card-hover text-center p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border border-green-100"
                      >
                        <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
                        <div className="text-sm text-gray-700">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="grid grid-cols-2 gap-4 h-96">
                    <div className="card-hover relative rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={transformation.beforeImage || "/placeholder.svg"}
                        alt="Before transformation"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                      <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Before
                      </div>
                    </div>
                    <div className="card-hover relative rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={transformation.afterImage || "/placeholder.svg"}
                        alt="After transformation"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                      <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        After
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                    <h3 className="text-4xl font-bold mb-2">53 Countries</h3>
                    <p className="text-xl text-gray-300">Across 4 Continents</p>
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
                <p className="text-gray-300">{region.countries} Countries</p>
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
  <button 
    onClick={() => window.location.href = '/contact'}
    className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300"
  >
    Join Our Mission
  </button>
  <button 
    onClick={() => window.location.href = '/contact'}
    className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300"
  >
    Partner With Us
  </button>
  <button 
    onClick={() => window.location.href = '/contact'}
    className="px-10 py-5 bg-white/20 backdrop-blur-lg text-white font-bold text-lg rounded-full hover:bg-white/30 transition-all duration-300"
  >
    Learn More
  </button>
</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ImpactPage
