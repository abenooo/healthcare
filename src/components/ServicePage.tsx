"use client"

import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import { ArrowLeft, ChevronLeft, ChevronRight, Clock, CheckCircle } from "lucide-react"
import { servicesData } from "../data/servicesData"

export default function ServicePage() {
  const { id } = useParams<{ id: string }>()
  const service = servicesData.find((s) => s.id === id)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  console.log("id param:", id)
  console.log("service found:", service)

  if (!service) {
    return <div className="p-8 text-center text-2xl">Service not found.</div>
  }

  const IconComponent = service.icon

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Service Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="p-8">
            <div className="flex items-start space-x-6">
              <div className="bg-blue-100 p-4 rounded-2xl">
                <IconComponent className="w-12 h-12 text-blue-600" />
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{service.name}</h1>
                <p className="text-xl text-gray-600 mb-6">{service.description}</p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{service.availability}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Gallery */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Gallery</h2>

                {/* Main Image */}
                <div className="relative mb-6">
                  <img
                    src={service.images[selectedImageIndex] || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-96 object-cover rounded-xl"
                  />
                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setSelectedImageIndex((prev) => (prev === 0 ? service.images.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setSelectedImageIndex((prev) => (prev === service.images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-4">
                  {service.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative overflow-hidden rounded-lg transition-all ${
                        selectedImageIndex === index ? "ring-2 ring-blue-500 ring-offset-2" : "hover:opacity-80"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${service.name} ${index + 1}`}
                        className="w-full h-24 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="space-y-6">
            {/* Service Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About This Service</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{service.longDescription}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Availability</h4>
                <p className="text-gray-700">{service.availability}</p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Started Today</h3>
              <p className="text-gray-700 mb-6">
                Ready to learn more about our {service.name}? Contact us to discuss your specific needs and how we can
                help.
              </p>
              <button  className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-blue-700 transition-colors mb-3">
                Contact Us About This Service
              </button>
              <button className="w-full bg-white text-blue-600 border border-blue-600 py-3 px-6 rounded-xl font-medium hover:bg-blue-50 transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
