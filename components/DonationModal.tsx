"use client"

import type React from "react"
import { useState } from "react"
import { X, DollarSign, Smartphone, Clock, Award, Package, Heart, CheckCircle, AlertCircle } from "lucide-react"

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
  donationType: "financial" | "device" | "volunteer-time" | "skills" | "resources" | "other"
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose, donationType }) => {
  const [formData, setFormData] = useState({
    donorName: "",
    donorEmail: "",
    donorPhone: "",
    message: "",
    anonymous: false,
    receiptRequested: false,

    // Financial
    amount: "",
    currency: "USD",
    frequency: "one-time",
    preferredPaymentMethod: "bank-transfer",

    // Device
    deviceType: "laptop",
    brand: "",
    model: "",
    condition: "good",
    specifications: "",
    quantity: "1",
    estimatedValue: "",

    // Volunteer
    skillsOffered: "",
    hoursPerWeek: "",
    duration: "3-months",
    availability: "flexible",
    remote: true,
    location: "",

    // Skills
    serviceType: "web-development",
    description: "",
    estimatedHours: "",
    skillsEstimatedValue: "",
    timeline: "",

    // Resources
    resourceType: "software-licenses",
    resourceDescription: "",
    resourceQuantity: "",
    resourceEstimatedValue: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Prepare donation data based on type
      interface DonationData {
        donorName: string;
        donorEmail: string;
        donorPhone: string;
        donationType: "financial" | "device" | "volunteer-time" | "skills" | "resources" | "other";
        message: string;
        anonymous: boolean;
        receiptRequested: boolean;
        financialDetails?: {
          amount: number;
          currency: string;
          frequency: string;
          preferredPaymentMethod: string;
          pledgeDate: Date;
        };
        deviceDetails?: {
          deviceType: string;
          brand: string;
          model: string;
          condition: string;
          specifications: string;
          quantity: number;
          estimatedValue?: number;
        };
        volunteerDetails?: {
          skillsOffered: string[];
          hoursPerWeek: number;
          duration: string;
          availability: string;
          remote: boolean;
          location: string;
        };
        skillsDetails?: {
          serviceType: string;
          description: string;
          estimatedHours?: number;
          estimatedValue?: number;
          timeline: string;
        };
        resourcesDetails?: {
          resourceType: string;
          description: string;
          quantity?: number;
          estimatedValue?: number;
        };
      }

      const donationData: DonationData = {
        donorName: formData.donorName,
        donorEmail: formData.donorEmail,
        donorPhone: formData.donorPhone,
        donationType,
        message: formData.message,
        anonymous: formData.anonymous,
        receiptRequested: formData.receiptRequested,
      }

      // Add type-specific data
      switch (donationType) {
        case "financial":
          donationData.financialDetails = {
            amount: Number.parseFloat(formData.amount),
            currency: formData.currency,
            frequency: formData.frequency,
            preferredPaymentMethod: formData.preferredPaymentMethod,
            pledgeDate: new Date(),
          }
          break
        case "device":
          donationData.deviceDetails = {
            deviceType: formData.deviceType,
            brand: formData.brand,
            model: formData.model,
            condition: formData.condition,
            specifications: formData.specifications,
            quantity: Number.parseInt(formData.quantity),
            estimatedValue: formData.estimatedValue ? Number.parseFloat(formData.estimatedValue) : undefined,
          }
          break
        case "volunteer-time":
          donationData.volunteerDetails = {
            skillsOffered: formData.skillsOffered.split(",").map((s) => s.trim()),
            hoursPerWeek: Number.parseInt(formData.hoursPerWeek),
            duration: formData.duration,
            availability: formData.availability,
            remote: formData.remote,
            location: formData.location,
          }
          break
        case "skills":
          donationData.skillsDetails = {
            serviceType: formData.serviceType,
            description: formData.description,
            estimatedHours: formData.estimatedHours ? Number.parseInt(formData.estimatedHours) : undefined,
            estimatedValue: formData.skillsEstimatedValue
              ? Number.parseFloat(formData.skillsEstimatedValue)
              : undefined,
            timeline: formData.timeline,
          }
          break
        case "resources":
          donationData.resourcesDetails = {
            resourceType: formData.resourceType,
            description: formData.resourceDescription,
            quantity: formData.resourceQuantity ? Number.parseInt(formData.resourceQuantity) : undefined,
            estimatedValue: formData.resourceEstimatedValue
              ? Number.parseFloat(formData.resourceEstimatedValue)
              : undefined,
          }
          break
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/donations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donationData),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          onClose()
        }, 3000)
      } else {
        throw new Error(result.message || "Failed to submit donation")
      }
    } catch (error) {
      console.error("Donation error:", error)
      setError(error instanceof Error ? error.message : "Failed to submit donation")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  const getDonationIcon = () => {
    switch (donationType) {
      case "financial":
        return DollarSign
      case "device":
        return Smartphone
      case "volunteer-time":
        return Clock
      case "skills":
        return Award
      case "resources":
        return Package
      default:
        return Heart
    }
  }

  const getDonationTitle = () => {
    switch (donationType) {
      case "financial":
        return "Financial Donation"
      case "device":
        return "Device Donation"
      case "volunteer-time":
        return "Volunteer Time"
      case "skills":
        return "Skills Donation"
      case "resources":
        return "Resources Donation"
      default:
        return "Other Donation"
    }
  }

  const IconComponent = getDonationIcon()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <IconComponent className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{getDonationTitle()}</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600">
                Your donation has been submitted successfully. We&apos;ll contact you soon with next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="donorName"
                      value={formData.donorName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="donorEmail"
                      value={formData.donorEmail}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="donorPhone"
                    value={formData.donorPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+254 700 123 456"
                  />
                </div>
              </div>

              {/* Type-specific fields */}
              {donationType === "financial" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Financial Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Amount *</label>
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        required
                        min="1"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                      <select
                        name="currency"
                        value={formData.currency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="USD">USD ($)</option>
                        <option value="KES">KES (KSh)</option>
                        <option value="EUR">EUR (€)</option>
                        <option value="GBP">GBP (£)</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Frequency</label>
                      <select
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="one-time">One-time</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="annually">Annually</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Payment Method</label>
                      <select
                        name="preferredPaymentMethod"
                        value={formData.preferredPaymentMethod}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="bank-transfer">Bank Transfer</option>
                        <option value="mobile-money">Mobile Money</option>
                        <option value="check">Check</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {donationType === "device" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Device Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Device Type *</label>
                      <select
                        name="deviceType"
                        value={formData.deviceType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="laptop">Laptop</option>
                        <option value="desktop">Desktop</option>
                        <option value="tablet">Tablet</option>
                        <option value="smartphone">Smartphone</option>
                        <option value="router">Router</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Condition *</label>
                      <select
                        name="condition"
                        value={formData.condition}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="needs-repair">Needs Repair</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                      <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Apple, Dell, HP..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                      <input
                        type="text"
                        name="model"
                        value={formData.model}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="MacBook Pro, Inspiron..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Quantity *</label>
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        required
                        min="1"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Specifications</label>
                    <textarea
                      name="specifications"
                      value={formData.specifications}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="RAM, storage, processor, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Value (Optional)</label>
                    <input
                      type="number"
                      name="estimatedValue"
                      value={formData.estimatedValue}
                      onChange={handleInputChange}
                      min="0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="500"
                    />
                  </div>
                </div>
              )}

              {donationType === "volunteer-time" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Volunteer Details</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Skills Offered *</label>
                    <input
                      type="text"
                      name="skillsOffered"
                      value={formData.skillsOffered}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Web development, Teaching, Marketing (comma separated)"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Hours per Week *</label>
                      <input
                        type="number"
                        name="hoursPerWeek"
                        value={formData.hoursPerWeek}
                        onChange={handleInputChange}
                        required
                        min="1"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="1-month">1 Month</option>
                        <option value="3-months">3 Months</option>
                        <option value="6-months">6 Months</option>
                        <option value="1-year">1 Year</option>
                        <option value="ongoing">Ongoing</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                      <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="weekdays">Weekdays</option>
                        <option value="weekends">Weekends</option>
                        <option value="evenings">Evenings</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location (if not remote)</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nairobi, Kenya"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="remote"
                      checked={formData.remote}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label className="ml-2 text-sm text-gray-700">I can work remotely</label>
                  </div>
                </div>
              )}

              {donationType === "skills" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Skills Details</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="web-development">Web Development</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="marketing">Marketing</option>
                      <option value="legal">Legal</option>
                      <option value="accounting">Accounting</option>
                      <option value="consulting">Consulting</option>
                      <option value="training">Training</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Describe the services you can provide..."
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Hours</label>
                      <input
                        type="number"
                        name="estimatedHours"
                        value={formData.estimatedHours}
                        onChange={handleInputChange}
                        min="1"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="40"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Value</label>
                      <input
                        type="number"
                        name="skillsEstimatedValue"
                        value={formData.skillsEstimatedValue}
                        onChange={handleInputChange}
                        min="0"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="2000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                      <input
                        type="text"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="2-4 weeks"
                      />
                    </div>
                  </div>
                </div>
              )}

              {donationType === "resources" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Resource Details</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Resource Type *</label>
                    <select
                      name="resourceType"
                      value={formData.resourceType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="software-licenses">Software Licenses</option>
                      <option value="books">Books</option>
                      <option value="training-materials">Training Materials</option>
                      <option value="office-supplies">Office Supplies</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                    <textarea
                      name="resourceDescription"
                      value={formData.resourceDescription}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Describe the resources you want to donate..."
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                      <input
                        type="number"
                        name="resourceQuantity"
                        value={formData.resourceQuantity}
                        onChange={handleInputChange}
                        min="1"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="10"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Value</label>
                      <input
                        type="number"
                        name="resourceEstimatedValue"
                        value={formData.resourceEstimatedValue}
                        onChange={handleInputChange}
                        min="0"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Any additional information or special requests..."
                />
              </div>

              {/* Options */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="anonymous"
                    checked={formData.anonymous}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="ml-2 text-sm text-gray-700">Make this donation anonymous</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="receiptRequested"
                    checked={formData.receiptRequested}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="ml-2 text-sm text-gray-700">I would like a receipt for this donation</label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Donation"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default DonationModal
