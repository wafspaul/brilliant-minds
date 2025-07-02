"use client"

import React, { useState, useEffect } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Users,
  ArrowRight,
  Headphones,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Building,
  Globe,
  Shield,
  Zap,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import Image from "next/image"
import "@/styles/contact-animations.scss"

const ContactPage = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)

  const heroContent = [
    {
      title: "Get In Touch With Us",
      subtitle: "Your Success is Our Priority",
      description:
        "We're here to help and answer any questions you might have. Connect with our team and discover how we can transform your digital journey together.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      stats: "24/7 Support Available",
      highlight: "Contact Us",
    },
    {
      title: "Let's Build Something Amazing",
      subtitle: "Partnership & Collaboration",
      description:
        "Join forces with BrilliantMinds to create innovative solutions that make a real difference in communities across Kenya and beyond.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      stats: "200+ Partnerships",
      highlight: "Collaborate",
    },
    {
      title: "Expert Support & Guidance",
      subtitle: "We're Here to Help",
      description:
        "Our dedicated team of experts is ready to provide you with personalized support and guidance for all your digital transformation needs.",
      image:
        "https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stats: "Expert Team Ready",
      highlight: "Get Support",
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

      {/* Contact Hero */}
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
          <div className="absolute z-10 inset-0 bg-gradient-to-r from-black/55 via-gray-900/60 to-black/65" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20 sm:pt-0 sm:text-center text-left">
          <div className="content-animate max-w-4xl mx-auto text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
            <div
              key={currentHeroIndex}
              className={`hero-content-slide space-y-4 sm:space-y-6 ${currentHeroIndex >= 0 ? "active" : ""}`}
            >
              <div className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-2 sm:mb-4 shadow-lg">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-400" />
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
                <button
                  onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-sm sm:text-base rounded-full hover:shadow-2xl transition-all duration-300 btn-hover"
                >
                  Get In Touch
                </button>
                <button
                  onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-sm sm:text-base rounded-full hover:bg-white/30 transition-all duration-300 btn-hover"
                >
                  View FAQ
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

      {/* Contact Form and Information */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="section-reveal">
              <ContactForm />
            </div>

            {/* Office Information */}
            <div className="section-reveal">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                        <p className="text-gray-600">
                          Westlands Business Center
                          <br />
                          Suite 205, 2nd Floor
                          <br />
                          Nairobi, Kenya 00100
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                        <p className="text-gray-600">+254 (0) 700 123 456</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                        <p className="text-gray-600">hello@brilliantminds.co.ke</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                        <p className="text-gray-600">
                          Monday - Friday: 8:00 AM - 6:00 PM EAT
                          <br />
                          Saturday: 9:00 AM - 2:00 PM EAT
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Response Time</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <Headphones className="w-5 h-5 text-green-600 mr-3" />
                        <span className="font-medium text-gray-900">General Inquiries</span>
                      </div>
                      <span className="text-green-600 font-semibold">24 hours</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="font-medium text-gray-900">Partnership Inquiries</span>
                      </div>
                      <span className="text-blue-600 font-semibold">48 hours</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                      <div className="flex items-center">
                        <MessageCircle className="w-5 h-5 text-red-600 mr-3" />
                        <span className="font-medium text-gray-900">Urgent Support</span>
                      </div>
                      <span className="text-red-600 font-semibold">2 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Choose BrilliantMinds?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re committed to delivering exceptional results and building lasting partnerships across Kenya and
              beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Trusted Partner",
                description: "Over 200+ successful partnerships across East Africa",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Zap,
                title: "Fast Response",
                description: "Quick turnaround times for all inquiries and projects",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Globe,
                title: "Local Expertise",
                description: "Deep understanding of Kenyan and African markets",
                color: "from-purple-500 to-violet-500",
              },
              {
                icon: Building,
                title: "Expert Team",
                description: "Industry-leading professionals based in Nairobi",
                color: "from-orange-500 to-red-500",
              },
            ].map((feature, index) => (
              <div key={index} className="section-reveal">
                <div className="card-hover text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    {React.createElement(feature.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Find Us in Nairobi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Nairobi&apos;s business district, Westlands
            </p>
          </div>

          <div className="section-reveal">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="h-96 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold mb-2">Nairobi, Kenya</h3>
                  <p className="text-xl">Westlands Business Center, Suite 205</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm font-semibold text-gray-700">We&apos;re Here!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about BrilliantMinds
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What services does BrilliantMinds offer in Kenya?",
                answer:
                  "BrilliantMinds offers comprehensive digital inclusion, e-learning platforms, gig economy integration, and skill development services specifically designed for Kenyan communities and businesses looking to thrive in the digital age.",
              },
              {
                question: "How quickly can I expect a response to my inquiry?",
                answer:
                  "We strive to respond to all inquiries within 24 hours during business days (Monday-Friday, 8 AM - 6 PM EAT). For urgent matters, we recommend calling our Nairobi office directly.",
              },
              {
                question: "Do you offer remote consultations across Kenya?",
                answer:
                  "Yes, we provide both in-person consultations in Nairobi and remote consultations to serve clients across Kenya. Our virtual meetings are conducted via secure platforms and can accommodate different time zones.",
              },
              {
                question: "How can I join the BrilliantMinds team in Nairobi?",
                answer:
                  "We're always looking for talented individuals to join our growing team in Nairobi. Visit our Careers page to view current openings or submit your resume for future opportunities in our Westlands office.",
              },
            ].map((faq, index) => (
              <div key={index} className="section-reveal">
                <div className="card-hover bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="section-reveal text-center mt-12">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <button
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 btn-hover"
            >
              Contact our support team
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center">
            <h2 className="text-4xl font-bold mb-6">Connect With Us</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              Follow us on social media for the latest updates and insights from Kenya&apos;s tech scene
            </p>

            <div className="flex justify-center space-x-6">
              {[
                { icon: Mail, label: "Email" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
              ].map((social, index) => (
                <button
                  key={index}
                  className="social-icon w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                >
                  {React.createElement(social.icon, { className: "w-6 h-6 text-white" })}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
