"use client"

import { Home, Heart, Users, Shield, Brain, Briefcase, UserCheck, Car, Building } from "lucide-react"
import { Link } from "react-router-dom"

export default function Component() {
  const services = [
    {
      id: "in-home-service",
      name: "In-Home Service",
      description: "Personalized support for home activities, medication reminders, and goal setting to enhance daily living.",
      icon: <span role="img" aria-label="Healthcare" className="text-5xl">🏥</span>,
    },
    {
      id: "respite-care-service",
      name: "Respite Care Service",
      description: "Short-term relief for families and caregivers, ensuring continuous care and support.",
      icon: <span role="img" aria-label="Heart" className="text-5xl">💖</span>,
    },
    {
      id: "direct-support-professional",
      name: "Direct Support ",
      description: "Skilled DSPs help individuals with IDD participate in the community and daily activities.",
      icon: <span role="img" aria-label="Users" className="text-5xl">🧑‍🤝‍🧑</span>,
    },
    {
      id: "host-home-provider",
      name: "Host Home Provider",
      description: "Experienced families provide a supportive home, helping develop life and social skills.",
      icon: <span role="img" aria-label="Shield" className="text-5xl">🏠</span>,
    },
    {
      id: "companion-services",
      name: "Companion Services",
      description: "Professional DSPs offer emotional and physical support, ensuring stability and well-being.",
      icon: <span role="img" aria-label="UserCheck" className="text-5xl">🤝</span>,
    },
    {
      id: "professional-behavioral-support",
      name: "Professional Behavioral ",
      description: "Education and support for chronic behavioral challenges, improving safety and relationships.",
      icon: <span role="img" aria-label="Brain" className="text-5xl">🧠</span>,
    },
    {
      id: "employment-specialist",
      name: "Employment Specialist",
      description: "Guidance and support to help individuals find and keep competitive, integrated jobs.",
      icon: <span role="img" aria-label="Briefcase" className="text-5xl">💼</span>,
    },
    {
      id: "support-living-without-transportation",
      name: "Support Living Without Transportation",
      description: "Support for independent living and community access for those without reliable transport.",
      icon: <span role="img" aria-label="Car" className="text-5xl">🚗</span>,
    },
    {
      id: "day-habilitation",
      name: "Day Habilitation",
      description: "A safe, respectful place for indoor and outdoor activities, ensuring safety and enjoyment.",
      icon: <span role="img" aria-label="Building" className="text-5xl">🏢</span>,
    },
  ]

  return (
    <div className="min-h-screen bg-[#f8fafc] py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link to={`/service/${service.id}`} key={service.id}>
            <div
              className="rounded-2xl border border-gray-200 bg-white p-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg"
              style={{ minHeight: 260 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-600 text-base">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
