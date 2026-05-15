"use client"

import React, { useEffect, useState } from "react"
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Cookie,
  Users,
  Globe,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertTriangle,
  Info,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import "@/styles/privacy-animations.scss"

const PrivacyPage = () => {
  const [activeSection, setActiveSection] = useState("privacy-policy")

  const heroContent = {
    title: "Privacy & Legal Information",
    subtitle: "Your Trust, Our Commitment",
    description:
      "At BrilliantMinds, we are committed to protecting your privacy and ensuring transparency in how we collect, use, and safeguard your personal information.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    stats: "GDPR Compliant",
    highlight: "Privacy First",
  }

  const navigationSections = [
    {
      id: "privacy-policy",
      title: "Privacy Policy",
      icon: Shield,
      description: "How we collect, use, and protect your data",
    },
    {
      id: "terms-of-service",
      title: "Terms of Service",
      icon: FileText,
      description: "Terms and conditions for using our platform",
    },
    {
      id: "cookie-policy",
      title: "Cookie Policy",
      icon: Cookie,
      description: "Information about cookies and tracking technologies",
    },
  ]

  const privacyPrinciples = [
    {
      icon: Lock,
      title: "Data Security",
      description: "We use industry-standard encryption and security measures to protect your information",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear and honest communication about our data practices and policies",
    },
    {
      icon: Users,
      title: "User Control",
      description: "You have full control over your data with options to access, modify, or delete",
    },
    {
      icon: Globe,
      title: "Global Compliance",
      description: "We comply with international privacy laws including GDPR, CCPA, and local regulations",
    },
  ]

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "privacy@brilliantminds.com",
      description: "For privacy-related inquiries",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Monday to Friday, 9 AM - 6 PM EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Innovation Drive, Tech City, TC 12345",
      description: "Our headquarters",
    },
  ]

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

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

      {/* Privacy Hero */}
      <section className="stable-layout relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={heroContent.image || "/placeholder.svg"}
            alt={heroContent.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-gray-900/90 to-black/85" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20 sm:pt-0 sm:text-center text-left">
          <div className="content-animate max-w-4xl mx-auto text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-2 sm:mb-4 shadow-lg">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-400" />
                <span className="text-xs sm:text-sm font-medium">{heroContent.highlight}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {heroContent.title}
              </h1>

              <p className="text-base sm:text-xl md:text-2xl text-blue-300 font-semibold">{heroContent.subtitle}</p>

              <p className="text-sm sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl sm:mx-auto">
                {heroContent.description}
              </p>

              <div className="flex items-center sm:justify-center space-x-4 sm:space-x-6 py-2 sm:py-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full px-4 py-2 sm:px-6 sm:py-3">
                  <span className="text-sm sm:text-lg font-bold text-white">{heroContent.stats}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center pt-2 sm:pt-4">
                <button
                  onClick={() => scrollToSection("privacy-policy")}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-sm sm:text-base rounded-full hover:shadow-2xl transition-all duration-300 btn-hover"
                >
                  Read Privacy Policy
                </button>
                <button
                  onClick={() => scrollToSection("contact-section")}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-sm sm:text-base rounded-full hover:bg-white/30 transition-all duration-300 btn-hover"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Sections */}
      <section className="py-12 border-b border-gray-200 sticky top-0 z-40 backdrop-blur-lg bg-white/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {React.createElement(section.icon, { className: "w-5 h-5" })}
                <span>{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Privacy Principles</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide how we handle your personal information and maintain your trust
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <div
                key={index}
                className="section-reveal card-hover text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  {React.createElement(principle.icon, { className: "w-10 h-10 text-white" })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy-policy" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <Shield className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">Privacy Policy</h2>
              </div>
              <div className="text-gray-600 mb-6">
                <p className="text-sm">Last updated: January 15, 2024</p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      We collect information you provide directly to us, such as when you create an account, use our
                      services, or contact us for support.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Personal Information includes:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Name, email address, and contact information</li>
                        <li>Profile information and preferences</li>
                        <li>Payment and billing information</li>
                        <li>Communications with our support team</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>We use the information we collect to provide, maintain, and improve our services, including:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 text-green-800">Service Delivery</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-green-700">
                          <li>Processing transactions</li>
                          <li>Providing customer support</li>
                          <li>Personalizing your experience</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 text-purple-800">Communication</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-purple-700">
                          <li>Sending service updates</li>
                          <li>Marketing communications</li>
                          <li>Security notifications</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      We do not sell, trade, or otherwise transfer your personal information to third parties without
                      your consent, except as described in this policy.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <div className="flex items-center">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                        <p className="text-yellow-800 font-semibold">
                          We may share information in cases of legal compliance, business transfers, or with your
                          explicit consent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      We implement appropriate technical and organizational measures to protect your personal
                      information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Lock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <h4 className="font-semibold">Encryption</h4>
                        <p className="text-sm">End-to-end encryption</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <h4 className="font-semibold">Secure Storage</h4>
                        <p className="text-sm">Protected data centers</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Eye className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <h4 className="font-semibold">Access Control</h4>
                        <p className="text-sm">Limited authorized access</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>You have the right to access, update, or delete your personal information. You may also:</p>
                    <div className="space-y-3">
                      {[
                        "Request a copy of your personal data",
                        "Correct inaccurate or incomplete information",
                        "Delete your account and associated data",
                        "Opt-out of marketing communications",
                        "Restrict processing of your data",
                      ].map((right, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span>{right}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service Section */}
      <section id="terms-of-service" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <FileText className="w-8 h-8 text-green-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">Terms of Service</h2>
              </div>
              <div className="text-gray-600 mb-6">
                <p className="text-sm">Last updated: January 15, 2024</p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h3>
                  <p className="text-gray-700">
                    By accessing and using BrilliantMinds services, you accept and agree to be bound by the terms and
                    provision of this agreement.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Permission is granted to temporarily use BrilliantMinds services for personal, non-commercial
                      transitory viewing only.
                    </p>
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-red-800">This license does not include:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-red-700">
                        <li>Modifying or copying the materials</li>
                        <li>Using materials for commercial purposes</li>
                        <li>Attempting to reverse engineer any software</li>
                        <li>Removing copyright or proprietary notations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>When you create an account with us, you must provide accurate and complete information.</p>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-blue-800">Account Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-blue-700">
                        <li>Maintain the security of your password</li>
                        <li>Accept responsibility for all activities under your account</li>
                        <li>Notify us immediately of unauthorized use</li>
                        <li>Provide accurate registration information</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Prohibited Uses</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>You may not use our service:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        {[
                          "For unlawful purposes",
                          "To transmit harmful content",
                          "To harass other users",
                          "To violate intellectual property",
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        {[
                          "To spam or phish users",
                          "To distribute malware",
                          "To impersonate others",
                          "To collect user data",
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Service Availability</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      We strive to maintain service availability but cannot guarantee uninterrupted access. We reserve
                      the right to modify or discontinue services with notice.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <div className="flex items-center">
                        <Info className="w-5 h-5 text-yellow-600 mr-2" />
                        <p className="text-yellow-800">
                          Scheduled maintenance and updates may temporarily affect service availability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Policy Section */}
      <section id="cookie-policy" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="section-reveal max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <Cookie className="w-8 h-8 text-purple-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">Cookie Policy</h2>
              </div>
              <div className="text-gray-600 mb-6">
                <p className="text-sm">Last updated: January 15, 2024</p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h3>
                  <p className="text-gray-700">
                    Cookies are small text files that are placed on your computer or mobile device when you visit our
                    website. They help us provide you with a better experience by remembering your preferences and
                    understanding how you use our site.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="font-semibold text-blue-800 mb-3">Essential Cookies</h4>
                      <p className="text-blue-700 text-sm mb-3">
                        Required for the website to function properly. Cannot be disabled.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-blue-600">
                        <li>Authentication cookies</li>
                        <li>Security cookies</li>
                        <li>Load balancing cookies</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-6">
                      <h4 className="font-semibold text-green-800 mb-3">Analytics Cookies</h4>
                      <p className="text-green-700 text-sm mb-3">
                        Help us understand how visitors interact with our website.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-green-600">
                        <li>Google Analytics</li>
                        <li>Usage statistics</li>
                        <li>Performance metrics</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-6">
                      <h4 className="font-semibold text-purple-800 mb-3">Functional Cookies</h4>
                      <p className="text-purple-700 text-sm mb-3">
                        Remember your preferences and provide enhanced features.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-purple-600">
                        <li>Language preferences</li>
                        <li>Theme settings</li>
                        <li>Form data</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-6">
                      <h4 className="font-semibold text-orange-800 mb-3">Marketing Cookies</h4>
                      <p className="text-orange-700 text-sm mb-3">
                        Used to deliver relevant advertisements and track campaign effectiveness.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-orange-600">
                        <li>Ad targeting</li>
                        <li>Social media integration</li>
                        <li>Campaign tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>You can control and manage cookies in several ways:</p>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold mb-3">Browser Settings</h4>
                      <p className="text-sm mb-3">
                        Most browsers allow you to control cookies through their settings preferences.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Globe className="w-6 h-6 text-blue-600" />
                          </div>
                          <p className="font-medium">Chrome</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Globe className="w-6 h-6 text-orange-600" />
                          </div>
                          <p className="font-medium">Firefox</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Globe className="w-6 h-6 text-blue-600" />
                          </div>
                          <p className="font-medium">Safari</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Globe className="w-6 h-6 text-blue-600" />
                          </div>
                          <p className="font-medium">Edge</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>We may use third-party services that place cookies on your device:</p>
                    <div className="space-y-3">
                      {[
                        { name: "Google Analytics", purpose: "Website analytics and performance tracking" },
                        { name: "Social Media Plugins", purpose: "Social sharing and integration features" },
                        { name: "Customer Support", purpose: "Live chat and support functionality" },
                        { name: "Payment Processors", purpose: "Secure payment processing" },
                      ].map((service, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold">{service.name}</p>
                            <p className="text-sm text-gray-600">{service.purpose}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Contact Our Privacy Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our privacy practices? Our dedicated privacy team is here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="section-reveal card-hover text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  {React.createElement(contact.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-blue-600 font-semibold mb-2">{contact.info}</p>
                <p className="text-gray-600 text-sm">{contact.description}</p>
              </div>
            ))}
          </div>

          <div className="section-reveal mt-16 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Privacy Policy Question</option>
                    <option>Data Access Request</option>
                    <option>Data Deletion Request</option>
                    <option>Cookie Policy Question</option>
                    <option>Terms of Service Question</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your privacy-related question or concern..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg hover:shadow-xl transition-all duration-300 btn-hover"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PrivacyPage
