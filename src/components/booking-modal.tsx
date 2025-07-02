"use client"

import { useState } from "react"
import { X, Calendar, Clock, MapPin, Phone, Mail, User, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

interface Service {
  name: string
  description: string
  icon: any
  color: string
  image: string
  features: string[]
  availability: string
}

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  services: Service[]
}

const timeSlots = [
  "6:00 AM",
  "6:30 AM",
  "7:00 AM",
  "7:30 AM",
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
]

export default function BookingModal({ isOpen, onClose, services }: BookingModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [contactPreference, setContactPreference] = useState("")
  const [otherContactMethod, setOtherContactMethod] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
    contactPreference: "",
    otherContactMethod: "",
  })

  const totalSteps = 4

  if (!isOpen) return null

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service)
    handleNext()
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (field === "contactPreference") {
      setContactPreference(value)
      if (value !== "other") {
        setOtherContactMethod("")
        setFormData((prev) => ({ ...prev, otherContactMethod: "" }))
      }
    }
    if (field === "otherContactMethod") {
      setOtherContactMethod(value)
    }
  }

  const handleSubmit = () => {
    // Handle booking submission
    console.log("Booking submitted:", {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      ...formData,
    })
    setIsSubmitted(true)

    // Auto close after 3 seconds
    setTimeout(() => {
      onClose()
      // Reset form
      setCurrentStep(1)
      setSelectedService(null)
      setSelectedDate(null)
      setSelectedTime("")
      setIsSubmitted(false)
      setContactPreference("")
      setOtherContactMethod("")
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        notes: "",
        contactPreference: "",
        otherContactMethod: "",
      })
    }, 3000)
  }

  const generateCalendarDays = () => {
    const today = new Date()
    const days = []

    for (let i = 0; i < 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      days.push(date)
    }

    return days
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-[#77658B] to-[#9AC15D]">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-white">Book Healthcare Service</h2>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step === currentStep
                      ? "bg-white text-[#77658B]"
                      : step < currentStep
                        ? "bg-[#9AC15D] text-white"
                        : "bg-white/30 text-white"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-gray-200">
          <div
            className="h-full bg-gradient-to-r from-[#77658B] to-[#9AC15D] transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-20 h-20 bg-[#9AC15D] rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Successfully Submitted!</h3>
              <p className="text-gray-600 mb-2">Your booking request has been received.</p>
              <p className="text-gray-600 mb-6">
                We will contact you via{" "}
                {formData.contactPreference === "other" ? formData.otherContactMethod : formData.contactPreference} to
                confirm your appointment.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 max-w-md">
                <p className="text-sm text-gray-700">
                  <strong>Service:</strong> {selectedService?.name}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Date:</strong>{" "}
                  {selectedDate?.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Time:</strong> {selectedTime}
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Step 1: Select Service */}
              {currentStep === 1 && (
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a Service</h3>
                    <p className="text-gray-600">Choose the healthcare service you need</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                      <Card
                        key={index}
                        className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-2 hover:border-[#77658B]"
                        onClick={() => handleServiceSelect(service)}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${service.color}`}>
                              <service.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-sm font-semibold">{service.name}</CardTitle>
                              <Badge variant="secondary" className="text-xs mt-1">
                                {service.availability}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-sm mb-3">{service.description}</CardDescription>
                          <div className="space-y-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center text-xs text-gray-600">
                                <div className="w-1.5 h-1.5 bg-[#9AC15D] rounded-full mr-2" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Select Date & Time */}
              {currentStep === 2 && (
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Select Date & Time</h3>
                    <p className="text-gray-600">Choose your preferred appointment date and time</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Date Selection */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Select a date</h4>
                      <div className="grid grid-cols-7 gap-2">
                        {generateCalendarDays()
                          .slice(0, 21)
                          .map((date, index) => (
                            <button
                              key={index}
                              onClick={() => handleDateSelect(date)}
                              className={`p-3 text-sm rounded-lg border transition-colors ${
                                selectedDate?.toDateString() === date.toDateString()
                                  ? "bg-[#77658B] text-white border-[#77658B]"
                                  : "hover:bg-gray-50 border-gray-200"
                              }`}
                            >
                              <div className="font-medium">{date.getDate()}</div>
                              <div className="text-xs opacity-75">
                                {date.toLocaleDateString("en-US", { weekday: "short" })}
                              </div>
                            </button>
                          ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">
                        Available times {selectedDate && `on ${formatDate(selectedDate)}`}
                      </h4>
                      <div className="grid grid-cols-3 gap-2 max-h-80 overflow-y-auto">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => handleTimeSelect(time)}
                            disabled={!selectedDate}
                            className={`p-3 text-sm rounded-lg border transition-colors ${
                              selectedTime === time
                                ? "bg-[#9AC15D] text-white border-[#9AC15D]"
                                : selectedDate
                                  ? "hover:bg-gray-50 border-gray-200"
                                  : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Personal Information */}
              {currentStep === 3 && (
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Information</h3>
                    <p className="text-gray-600">Please fill in your details for the booking</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e :any) => handleInputChange("firstName", e.target.value)}
                          placeholder="Enter your first name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e :any) => handleInputChange("lastName", e.target.value)}
                          placeholder="Enter your last name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e :any) => handleInputChange("phone", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e :any) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e :any) => handleInputChange("address", e.target.value)}
                          placeholder="Enter your address"
                        />
                      </div>

                      <div>
                        <Label htmlFor="contactPreference">How can we reach you?</Label>
                        <select
                          id="contactPreference"
                          value={formData.contactPreference}
                          onChange={(e :any) => handleInputChange("contactPreference", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#77658B] focus:border-[#77658B]"
                        >
                          <option value="">Select preferred contact method</option>
                          <option value="email">Email</option>
                          <option value="phone">Phone</option>
                          <option value="text">Text Message</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {formData.contactPreference === "other" && (
                        <div>
                          <Label htmlFor="otherContactMethod">Please specify how we can reach you</Label>
                          <Input
                            id="otherContactMethod"
                            value={formData.otherContactMethod}
                            onChange={(e :any) => handleInputChange("otherContactMethod", e.target.value)}
                            placeholder="e.g., WhatsApp, Telegram, etc."
                          />
                        </div>
                      )}

                      <div>
                        <Label htmlFor="notes">Additional Notes (Optional)</Label>
                        <Textarea
                          id="notes"
                          value={formData.notes}
                          onChange={(e :any) => handleInputChange("notes", e.target.value)}
                          placeholder="Any special requirements or notes..."
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Booking Summary</h3>
                    <p className="text-gray-600">Please review your booking details</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {/* Service Details */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Service Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                          {selectedService && (
                            <div className="space-y-3">
                              <div className="flex items-center space-x-3">
                                <div className={`p-2 rounded-lg ${selectedService.color}`}>
                                  <selectedService.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <h4 className="font-medium">{selectedService.name}</h4>
                                  <p className="text-sm text-gray-600">{selectedService.description}</p>
                                </div>
                              </div>
                              <div className="pt-2 border-t">
                                <p className="text-sm font-medium text-gray-700 mb-2">Included Features:</p>
                                <div className="space-y-1">
                                  {selectedService.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center text-sm text-gray-600">
                                      <div className="w-1.5 h-1.5 bg-[#9AC15D] rounded-full mr-2" />
                                      {feature}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>

                      {/* Appointment Details */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Appointment Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <Calendar className="w-5 h-5 text-[#77658B]" />
                              <div>
                                <p className="font-medium">Date</p>
                                <p className="text-sm text-gray-600">
                                  {selectedDate?.toLocaleDateString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Clock className="w-5 h-5 text-[#9AC15D]" />
                              <div>
                                <p className="font-medium">Time</p>
                                <p className="text-sm text-gray-600">{selectedTime}</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Personal Information */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Personal Information</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <User className="w-5 h-5 text-gray-400" />
                            <div>
                              <p className="font-medium">
                                {formData.firstName} {formData.lastName}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-gray-400" />
                            <div>
                              <p className="text-sm text-gray-600">{formData.phone}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-gray-400" />
                            <div>
                              <p className="text-sm text-gray-600">{formData.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-gray-400" />
                            <div>
                              <p className="text-sm text-gray-600">{formData.address}</p>
                            </div>
                          </div>
                          {formData.contactPreference && (
                            <div className="flex items-center space-x-3">
                              <MessageCircle className="w-5 h-5 text-gray-400" />
                              <div>
                                <p className="text-sm text-gray-600">
                                  Preferred Contact:{" "}
                                  {formData.contactPreference === "other"
                                    ? formData.otherContactMethod
                                    : formData.contactPreference}
                                </p>
                              </div>
                            </div>
                          )}
                          {formData.notes && (
                            <div className="pt-2 border-t">
                              <p className="font-medium text-sm">Additional Notes:</p>
                              <p className="text-sm text-gray-600">{formData.notes}</p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">
              Step {currentStep} of {totalSteps}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {currentStep > 1 && (
              <Button variant="outline" onClick={handlePrevious} className="flex items-center space-x-2 bg-transparent">
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>
            )}

            {currentStep < totalSteps ? (
              <Button
                onClick={handleNext}
                disabled={
                  (currentStep === 1 && !selectedService) ||
                  (currentStep === 2 && (!selectedDate || !selectedTime)) ||
                  (currentStep === 3 &&
                    (!formData.firstName ||
                      !formData.lastName ||
                      !formData.phone ||
                      !formData.email ||
                      !formData.contactPreference ||
                      (formData.contactPreference === "other" && !formData.otherContactMethod)))
                }
                className="bg-[#77658B] hover:bg-[#77658B]/90 flex items-center space-x-2"
              >
                <span>Continue</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="bg-[#9AC15D] hover:bg-[#9AC15D]/90">
                Submit Booking
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
