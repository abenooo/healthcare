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
      name: "Home Health Care",
      description: "Comprehensive medical care in the comfort of your home with skilled nursing professionals.",
      icon: Home,
      color: "bg-purple-600",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center",
      features: ["Skilled Nursing", "Medical Equipment", "24/7 Support"],
      availability: "24/7 Available",
    },
    {
      name: "Personal Care Services",
      description: "Assistance with daily living activities to maintain independence and dignity.",
      icon: Heart,
      color: "bg-green-500",
      image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29uYWwlMjBjYXJlfGVufDB8fDB8fHww?w=300&h=200&fit=crop&crop=center",
      features: ["Personal Hygiene", "Meal Preparation", "Medication Reminders"],
      availability: "Flexible Hours",
    },
    {
      name: "Companion Care",
      description: "Social interaction and emotional support to enhance quality of life.",
      icon: Users,
      color: "bg-purple-500",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=center",
      features: ["Social Activities", "Transportation", "Light Housekeeping"],
      availability: "Daily Support",
    },
    {
      name: "Respite Care",
      description: "Temporary relief care for family caregivers and primary care providers.",
      icon: Shield,
      color: "bg-green-600",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop&crop=center",
      features: ["Short-term Care", "Family Relief", "Professional Support"],
      availability: "As Needed",
    },
    {
      name: "Specialized Care",
      description: "Expert care for specific medical conditions and chronic illnesses.",
      icon: UserCheck,
      color: "bg-purple-700",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=200&fit=crop&crop=center",
      features: ["Chronic Disease Management", "Post-Surgery Care", "Rehabilitation"],
      availability: "Specialized Hours",
    },
    {
      name: "Memory Care",
      description: "Specialized support for individuals with Alzheimer's and dementia.",
      icon: Brain,
      color: "bg-green-700",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop&crop=center",
      features: ["Memory Support", "Safety Monitoring", "Cognitive Activities"],
      availability: "Continuous Care",
    },
    {
      name: "Palliative Care",
      description: "Comfort-focused care to improve quality of life for serious illnesses.",
      icon: Heart,
      color: "bg-purple-800",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop&crop=center",
      features: ["Pain Management", "Comfort Care", "Family Support"],
      availability: "24/7 Support",
    },
    {
      name: "Wellness Programs",
      description: "Preventive care and wellness services to maintain optimal health.",
      icon: Sun,
      color: "bg-green-800",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300&h=200&fit=crop&crop=center",
      features: ["Health Screenings", "Nutrition Counseling", "Exercise Programs"],
      availability: "Scheduled",
    },
    {
      name: "Care Coordination",
      description: "Comprehensive care management and coordination with healthcare providers.",
      icon: Building,
      color: "bg-purple-900",
      image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=300&h=200&fit=crop&crop=center",
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
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-green-400 fill-current" />
                        <span className="text-sm font-medium text-gray-600">4.9</span>
                      </div>
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

        {/* Contact CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto border border-purple-100">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Contact Shalom Healthcare Services today to discuss your care needs and create a personalized care plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </button>
              <button className="border-2 border-purple-300 text-purple-700 px-8 py-3 rounded-xl font-semibold hover:border-purple-400 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </button>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Serving communities with compassionate care</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
