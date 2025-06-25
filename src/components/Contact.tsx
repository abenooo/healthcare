"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input" 
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Activity, Phone, Mail, MapPin, Clock, Send, MessageCircle, HeadphonesIcon, Navigation } from "lucide-react"


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const branchLocations = [
    {
      name: "New York Health Center",
      address: "123 Health Avenue, Suite 200, Downtown City, NY 10001",
      phone: "+1 (555) 123-4567",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      name: "Angeles Wellness Clinic",
      address: "Care Lane, Floor 3, 456 Sunset Boulevard, Los Angeles, CA 90210",
      phone: "+1 (555) 234-5678",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      name: "Harbor Health Center",
      address: "Medical 300 Seaport Boulevard, Boston, Suite MA 02210",
      phone: "+1 (555) 345-6789",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Get in Touch with
              <br />
              <span className="text-green-500">HealthWell</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              We're here to help you with any questions about our services, appointments, or healthcare solutions. Reach
              out to us anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <Send className="h-8 w-8 text-green-500 mr-3" />
                  Send Message
                </h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter Your Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2 h-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter Your Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-2 h-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Your Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 h-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 min-h-[120px] border-gray-300 focus:border-green-500 focus:ring-green-500 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-dark text-white h-12 text-lg font-semibold"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <HeadphonesIcon className="h-8 w-8 text-green-500 mr-3" />
                  Contact Help Center
                </h2>
                <p className="text-gray-600">Multiple ways to reach our healthcare support team.</p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone Support</h3>
                    <p className="text-gray-600 mb-2">Available 24/7 for urgent healthcare needs</p>
                    <div className="space-y-1">
                      <p className="text-green-600 font-semibold">+1 (555) 123-4567</p>
                      <p className="text-green-600 font-semibold">+1 (555) 234-5678</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Support</h3>
                    <p className="text-gray-600 mb-2">Get detailed responses within 24 hours</p>
                    <div className="space-y-1">
                      <p className="text-blue-600 font-semibold">admin@healthwell.com</p>
                      <p className="text-blue-600 font-semibold">help@healthwell.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Main Office</h3>
                    <p className="text-gray-600 mb-2">Visit us for in-person consultations</p>
                    <p className="text-purple-600 font-semibold">
                      Care Lane, Floor 3, 456 Sunset Boulevard,
                      <br />
                      Los Angeles, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                      <p className="text-green-600 font-semibold">Emergency: 24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>

            
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-700">Our Locations</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Branch Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find a HealthWell location near you. We have multiple healthcare centers to serve you better.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branchLocations.map((location, index) => (
              <Card
                key={index}
                className={`${location.bgColor} ${location.borderColor} border-2 hover:shadow-xl transition-all duration-300 group`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Activity className="h-8 w-8 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-gray-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{location.address}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-600 flex-shrink-0" />
                      <p className="text-gray-900 font-semibold">{location.phone}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex space-x-3">
                      <Button size="sm" className="flex-1 bg-primary hover:bg-primary-dark text-white">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-primary text-primary hover:bg-primary-light"
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-50 border-t-4 border-red-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
                <Phone className="h-10 w-10 text-red-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Emergency Contact</h2>
              <p className="text-xl text-gray-600 mb-8">
                For urgent medical situations, please contact our 24/7 emergency hotline immediately.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-red-600 mb-2">Emergency Hotline</h3>
                  <p className="text-3xl font-bold text-gray-900 mb-2">911</p>
                  <p className="text-gray-600">For life-threatening emergencies</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-green-600 mb-2">HealthWell Urgent Care</h3>
                  <p className="text-3xl font-bold text-gray-900 mb-2">+1 (555) 999-0000</p>
                  <p className="text-gray-600">24/7 healthcare support</p>
                </div>
              </div>
            </div>

            <p className="text-gray-600">
              <strong>Note:</strong> For non-emergency medical questions, please use our regular contact methods above.
              Our healthcare professionals are available to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Start Your Health Journey?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Don't wait to take control of your health. Book an appointment today and experience the HealthWell
            difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg">
              Book Appointment
              <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary-light px-8 py-4 text-lg"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Activity className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">HealthWell</span>
              </div>
              <p className="text-gray-400 mb-6">Transforming healthcare through technology and compassionate care.</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-gray-400">hello@healthwell.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-gray-400">123 Health St, Medical City</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/" className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Telemedicine
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Health Monitoring
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Prescription Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Wellness Programs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Emergency Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} HealthWell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
