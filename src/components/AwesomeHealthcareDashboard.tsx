"use client"

import { useState } from "react"
import {
  Home,
  Heart,
  Users,
  Shield,
  UserCheck,
  Brain,
  Building,
  Sun,
  Star,
  Clock,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
export default function ShalomHealthcareServices() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      name: "In-Home Service",
      description: "Personalized support for home activities, medication reminders, and goal setting to enhance daily living.",
      icon: Home,
      color: "bg-purple-600",
      image: "https://img1.wsimg.com/isteam/ip/7fa7a95e-2292-4c6d-a4ef-4e192b5175f9/download%20(2).jpg/:/cr=t:0%25,l:7.14%25,w:85.71%25,h:100%25/rs=w:600,h:300,cg:true",
      features: ["Skilled Nursing", "Medical Equipment", "24/7 Support"],
      availability: "24/7 Available",
    },
    {
      name: "Respite Care Service",
      description: "Short-term relief for families and caregivers, ensuring continuous care and support.",
      icon: Heart,
      color: "bg-green-500",
      image: "https://img1.wsimg.com/isteam/ip/7fa7a95e-2292-4c6d-a4ef-4e192b5175f9/images%20(1).jpg/:/cr=t:0%25,l:33.69%25,w:63%25,h:100%25/rs=w:600,h:300,cg:true",
      features: ["Personal Hygiene", "Meal Preparation", "Medication Reminders"],
      availability: "Flexible Hours",
    },
    {
      name: "Direct Support Professional",
      description: "Skilled DSPs help individuals with IDD participate in the community and daily activities.",
      icon: Users,
      color: "bg-purple-500",
      image: "https://img1.wsimg.com/isteam/stock/10918/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:1200,h:600,cg:true",
      features: ["Social Activities", "Transportation", "Light Housekeeping"],
      availability: "Daily Support",
    },
    {
      name: "Host Home Provider",
      description: "Experienced families provide a supportive home, helping develop life and social skills.",
      icon: Shield,
      color: "bg-green-600",
      image: "https://img1.wsimg.com/isteam/stock/73Ko0Kj/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:1200,h:600,cg:true",
      features: ["Short-term Care", "Family Relief", "Professional Support"],
      availability: "As Needed",
    },
    {
      name: "Companion Services",
      description: "Professional DSPs offer emotional and physical support, ensuring stability and well-being.",
      icon: UserCheck,
      color: "bg-purple-700",
      image: "https://img1.wsimg.com/isteam/stock/kaa8OOn/:/cr=t:12.54%25,l:0%25,w:100%25,h:74.91%25/rs=w:1200,h:600,cg:true",
      features: ["Chronic Disease Management", "Post-Surgery Care", "Rehabilitation"],
      availability: "Specialized Hours",
    },
    {
      name: "Professional Behavioral Support",
      description: "Education and support for chronic behavioral challenges, improving safety and relationships.",
      icon: Brain,
      color: "bg-green-700",
      image: "https://img1.wsimg.com/isteam/ip/7fa7a95e-2292-4c6d-a4ef-4e192b5175f9/download%20(5).jpg/:/cr=t:0%25,l:4.65%25,w:90.69%25,h:100%25/rs=w:600,h:300,cg:true",
      features: ["Memory Support", "Safety Monitoring", "Cognitive Activities"],
      availability: "Continuous Care",
    },
    {
      name: "Employment Specialist",
      description: "Guidance and support to help individuals find and keep competitive, integrated jobs.",
      icon: Heart,
      color: "bg-purple-800",
      image: "https://img1.wsimg.com/isteam/ip/7fa7a95e-2292-4c6d-a4ef-4e192b5175f9/download%20(3).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,h:300,cg:true",
      features: ["Pain Management", "Comfort Care", "Family Support"],
      availability: "24/7 Support",
    },
    {
      name: "Support Living Without Transportation",
      description: "Support for independent living and community access for those without reliable transport.",
      icon: Sun,
      color: "bg-green-800",
      image: "https://img1.wsimg.com/isteam/stock/111755/:/cr=t:12.49%25,l:0%25,w:100%25,h:75.02%25/rs=w:1200,h:600,cg:true",
      features: ["Health Screenings", "Nutrition Counseling", "Exercise Programs"],
      availability: "Scheduled",
    },
    {
      name: "Day Habilitation",
      description: "A safe, respectful place for indoor and outdoor activities, ensuring safety and enjoyment.",
      icon: Building,
      color: "bg-purple-900",
      image: "https://img1.wsimg.com/isteam/stock/7znb1Am/:/cr=t:12.54%25,l:0%25,w:100%25,h:74.91%25/rs=w:1200,h:600,cg:true",
      features: ["Care Planning", "Provider Coordination", "Health Monitoring"],
      availability: "Ongoing",
    },
  ]

  return (
    <section className="py-12 bg-gradient-to-br from-purple-50 to-green-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            {/* <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-4">
              <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                <img  src="/logo.webp" className="w-6 h-6 text-white" />
               
              </div>
            </div> */}
            <div>
              <h1 className="text-4xl font-bold text-purple-900 mb-2">HEALTH CARE SERVICES WE PROVIDE</h1>
              {/* <p className="text-lg text-purple-700 font-medium">HEALTH CARE SERVICES</p> */}
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing compassionate, professional healthcare services with a commitment to excellence and dignity for
            every individual we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 ${
                  hoveredCard === index ? "transform scale-105 shadow-2xl" : ""
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Header */}
                <div className="flex items-start space-x-4 p-6 pb-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${service.color}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Inner content card */}
                <div className="bg-gradient-to-br from-purple-50 to-green-50 rounded-2xl mx-6 mb-6 overflow-hidden border border-purple-100">
                  {/* Image */}
                  <div className="relative h-32 bg-gradient-to-br from-purple-100 to-green-100">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-purple-600" />
                      <span className="text-xs font-medium text-purple-700">{service.availability}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-purple-700">Service Features</span>
                    </div>

                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-purple-200">
                      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-xl font-medium text-sm hover:bg-purple-700 transition-colors duration-200">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      
      </div>
    </section>
  )
}
