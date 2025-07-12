"use client"

import { Link } from "react-router-dom"

export default function Component() {
  const services = [
    {
      id: "in-home-service",
      name: "In-Home Service",
      description: "Personalized support for daily living and wellness at home.",
      tag: "Personalized Care",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      // duration: "Flexible",
    },
    {
      id: "respite-care-service",
      name: "Respite Care Service",
      description: "Short-term relief for families and caregivers.",
      tag: "Family Relief",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      // duration: "Flexible",
    },
    {
      id: "direct-support-professional",
      name: "Direct Support Professional",
      description: "Community and personal support for all ages with IDD.",
      tag: "Community Support",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      // duration: "Flexible",
    },
    {
      id: "host-home-provider",
      name: "Host Home Provider",
      description: "Supportive family environment for skill development.",
      tag: "Supportive Home",
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
      // duration: "Flexible",
    },
    {
      id: "companion-services",
      name: "Companion Services",
      description: "Emotional and physical support for well-being.",
      tag: "Companionship",
      image: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=600&q=80",
      // duration: "Flexible",
    },
    {
      id: "professional-behavioral-support",
      name: "Professional Behavioral Support",
      description: "Guidance for behavioral challenges and safety.",
      tag: "Behavioral Guidance",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
      // duration: "Flexible",
    },
    {
      id: "employment-specialist",
      name: "Employment Specialist",
      description: "Support for finding and keeping competitive jobs.",
      tag: "Workforce Support",
      image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
      // duration: "Flexible",
    },
    {
      id: "support-living-without-transportation",
      name: "Support Living Without Transportation",
      description: "Help with independent living and community access.",
      tag: "Independent Living",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      // duration: "Flexible",
    },
    {
      id: "day-habilitation",
      name: "Day Habilitation",
      description: "Safe, respectful place for activities and events.",
      tag: "Day Program",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      // duration: "Flexible",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f8fafc] py-16 px-4">
 {/* Hero Section */}
 <section className="pt-10 pb-20">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
        Discover Our Services at
        <br />
        <span className="text-[#6E439A]">Shalom Health Care</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
        Explore our range of personalized healthcare and support services designed to help you and your loved ones thrive.
      </p>
    </div>
  </div>
</section>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link to={`/service/${service.id}`} key={service.id}>
            <div
              className="group rounded-2xl border border-gray-200 bg-white p-0 flex flex-col shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-full px-4 py-1 text-sm font-medium flex items-center shadow">
                  {service.tag}
                </div>
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-base mb-4 truncate">{service.description}</p>
                <div className="flex items-center text-gray-600 text-sm mb-4 space-x-6 justify-center">
                  <div className="flex items-center space-x-1">
                    {/* <span role="img" aria-label="calendar">📅</span> */}
                    {/* <span>{service.duration}</span> */}
                  </div>
                </div>
                <div className="mt-auto">
                  <span
                    className="block w-full text-center py-2 rounded-xl font-semibold transition-all duration-200
                      text-white hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-purple-400
                      transform hover:scale-105"
                    style={{ backgroundColor: "#6E439A" }}
                  >
                    View Details
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
