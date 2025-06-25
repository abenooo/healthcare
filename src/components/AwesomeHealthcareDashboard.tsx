import React, { useState } from "react"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Video,
  Mic,
  Settings,
  Grid3X3,
  PhoneOff,
  Search,
  Send,
  TrendingUp,
  TrendingDown,
  Clock,
  ArrowDown,
  Heart,
  Activity,
  Users,
  Shield,
  Zap,
  Star,
} from "lucide-react"

export default function AwesomeHealthcareDashboard() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [hoveredDate, setHoveredDate] = useState<number | null>(null)
  const [hoveredDoctor, setHoveredDoctor] = useState<number | null>(null)
  const [message, setMessage] = useState("")
  const [isCallActive, setIsCallActive] = useState(false)

  // Calendar data
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const dates = [
    [null, null, null, null, null, null, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, null, null, null, null, null, null],
  ]

  // Doctors data
  const doctors = [
    {
      name: "Dr. James Lee",
      specialty: "Cardiology",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Dr. Ava Patel",
      specialty: "Neurology",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Orthopedics",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Dr. Sarah Wilson",
      specialty: "Pediatrics",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1594824475317-29bb4b1c8c8d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Dr. Daniel Harris",
      specialty: "Dermatology",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Dr. Alexandra Johnson",
      specialty: "Internal Medicine",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=100&h=100&fit=crop&crop=face",
    },
  ]

  // Messages data
  const messages = [
    {
      sender: "Patient",
      content: "Hi Dr. Thompson, I've been experiencing chest pain recently. Should I be concerned?",
      time: "2:30 PM",
      isDoctor: false,
    },
    {
      sender: "Dr. Thompson",
      content: "Hello, let's schedule some tests to determine the cause and ensure everything is okay.",
      time: "2:32 PM",
      isDoctor: true,
    },
  ]

  // Health metrics
  const healthMetrics = [
    { label: "Height", value: "5'10\" (178 cm)", category: "Physical", color: "blue" },
    { label: "Weight", value: "175 lbs (79 kg)", category: "Physical", color: "green" },
    { label: "BMI", value: "25.1", category: "Physical", color: "yellow" },
    { label: "Blood Pressure", value: "120/80 mmHg", category: "Vital Signs", trend: "stable", color: "red" },
    { label: "Heart Rate", value: "72 bpm", category: "Vital Signs", trend: "good", color: "pink" },
    { label: "Blood Glucose", value: "90 mg/dL", category: "Lab Results", trend: "good", color: "purple" },
  ]

  // Care coordination timeline
  const appointments = [
    {
      type: "Initial Consultation",
      date: "January 5, 2023",
      status: "completed",
      doctor: "Dr. Smith",
      icon: "👨‍⚕️",
    },
    {
      type: "Blood Test Results",
      date: "January 12, 2023",
      status: "completed",
      doctor: "Lab Tech",
      icon: "🧪",
    },
    {
      type: "Follow-up Appointment",
      date: "January 19, 2023",
      status: "upcoming",
      doctor: "Dr. Smith",
      icon: "📅",
    },
  ]

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
          {/* 1. Appointment Scheduling */}
          <div
            className={`group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer overflow-hidden ${
              hoveredCard === 0 ? "ring-2 ring-blue-500/50" : ""
            }`}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Appointment Scheduling</h3>
                  <p className="text-sm text-gray-600">Book with healthcare providers</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-inner">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">June 2024</h4>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-200 rounded-xl transition-colors">
                      <ChevronLeft className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded-xl transition-colors">
                      <ChevronRight className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-3">
                  {daysOfWeek.map((day) => (
                    <div key={day} className="text-xs font-medium text-gray-500 text-center py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {dates.flat().map((date, index) => (
                    <div
                      key={index}
                      className={`
                        h-10 flex items-center justify-center text-sm cursor-pointer rounded-xl transition-all duration-300
                        ${date === null ? "invisible" : ""}
                        ${date === 12 ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg" : "text-gray-700 hover:bg-blue-100"}
                        ${hoveredDate === date && date !== 12 ? "bg-blue-50 scale-110 shadow-md" : ""}
                        ${hoveredCard === 0 && date ? "hover:scale-110" : ""}
                      `}
                      onMouseEnter={() => setHoveredDate(date)}
                      onMouseLeave={() => setHoveredDate(null)}
                    >
                      {date}
                    </div>
                  ))}
                </div>

                {hoveredCard === 0 && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 animate-in slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center space-x-2 mb-3">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <p className="text-sm text-blue-800 font-semibold">Available Slots Today</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["9:00 AM", "2:00 PM", "4:30 PM"].map((time, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white text-blue-700 text-xs rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 2. Telemedicine Consultations */}
          <div
            className={`group relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer overflow-hidden ${
              hoveredCard === 1 ? "ring-2 ring-emerald-400/50" : ""
            }`}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Telemedicine Consultations</h3>
                  <p className="text-sm text-gray-600">Conduct virtual consultations with healthcare professionals</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl relative">
                {/* Video Interface */}
                <div className="aspect-video relative">
                  <img
                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop"
                    alt="Healthcare professional in video consultation"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Call Timer */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-xl text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="font-mono">00:18:06</span>
                    </div>
                  </div>

                  {/* Patient Thumbnail */}
                  <div className="absolute top-4 right-4 w-20 h-16 bg-gray-700 rounded-xl overflow-hidden shadow-lg border-2 border-white/20">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=64&fit=crop&crop=face"
                      alt="Patient"
                      className="object-cover"
                    />
                  </div>

                  {/* Doctor Info */}
                  <div className="absolute bottom-20 left-4 text-white">
                    <div className="bg-black/50 backdrop-blur-md rounded-xl p-3 border border-white/10">
                      <p className="font-semibold text-lg">Dr. Sarah Wilson</p>
                      <p className="text-sm text-gray-300">Internal Medicine</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs">4.9</span>
                        </div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-xs text-green-400">Online</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call Controls */}
                <div className="bg-gray-800 p-4">
                  <div className="flex items-center justify-center space-x-4">
                    <button className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-all duration-200 hover:scale-110">
                      <Grid3X3 className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-all duration-200 hover:scale-110">
                      <Video className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-3 bg-red-600 hover:bg-red-700 rounded-full transition-all duration-200 hover:scale-110 shadow-lg">
                      <PhoneOff className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-all duration-200 hover:scale-110">
                      <Mic className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-all duration-200 hover:scale-110">
                      <Settings className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                {/* Hover Overlay */}
                {hoveredCard === 1 && (
                  <div className="absolute inset-0 bg-emerald-600/10 flex items-center justify-center animate-in fade-in duration-300">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-white/20">
                      <div className="flex items-center justify-center space-x-3 mb-3">
                        <Shield className="w-6 h-6 text-emerald-600" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">HIPAA Compliant</p>
                          <p className="text-xs text-gray-600">Secure & Private</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>HD Quality</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Encrypted</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Session Stats */}
              {hoveredCard === 1 && (
                <div className="mt-4 grid grid-cols-3 gap-3 animate-in slide-in-from-bottom duration-500">
                  <div className="bg-emerald-50 p-3 rounded-xl text-center border border-emerald-200">
                    <p className="text-sm font-bold text-emerald-700">18:06</p>
                    <p className="text-xs text-emerald-600">Duration</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-xl text-center border border-blue-200">
                    <p className="text-sm font-bold text-blue-700">HD</p>
                    <p className="text-xs text-blue-600">Quality</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-xl text-center border border-yellow-200">
                    <p className="text-sm font-bold text-yellow-700">4.9★</p>
                    <p className="text-xs text-yellow-600">Rating</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 3. Healthcare Provider Directory */}
          <div
            className={`group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer overflow-hidden ${
              hoveredCard === 2 ? "ring-2 ring-purple-500/50" : ""
            }`}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Provider Directory</h3>
                  <p className="text-sm text-gray-600">Find healthcare specialists</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Search bar */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search specialists..."
                    className={`w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/50 backdrop-blur-sm transition-all duration-300 ${
                      hoveredCard === 2 ? "border-purple-300 shadow-lg bg-white/80" : ""
                    }`}
                  />
                </div>

                {/* Doctor grid */}
                <div className="grid grid-cols-2 gap-4">
                  {doctors.slice(0, 6).map((doctor, index) => (
                    <div
                      key={index}
                      className={`group/doctor p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                        hoveredDoctor === index
                          ? "bg-gradient-to-br from-purple-50 to-pink-50 scale-105 shadow-lg"
                          : "hover:bg-gray-50"
                      } ${hoveredCard === 2 ? "hover:shadow-md" : ""}`}
                      onMouseEnter={() => setHoveredDoctor(index)}
                      onMouseLeave={() => setHoveredDoctor(null)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="object-cover"
                          />
                          {hoveredDoctor === index && (
                            <div className="absolute inset-0 bg-purple-600/20 flex items-center justify-center">
                              <Heart className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-gray-900 truncate">{doctor.name}</p>
                          <p className="text-xs text-gray-600 truncate">{doctor.specialty}</p>
                          <div className="flex items-center space-x-1 mt-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-gray-500">{doctor.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {hoveredCard === 2 && (
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200 animate-in slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-4 h-4 text-purple-600" />
                      <p className="text-sm text-purple-800 font-semibold">500+ Verified Providers</p>
                    </div>
                    <p className="text-xs text-purple-600">All specialists available 24/7</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 4. Secure Messaging */}
          <div
            className={`group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer overflow-hidden ${
              hoveredCard === 3 ? "ring-2 ring-orange-500/50" : ""
            }`}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Secure Messaging</h3>
                  <p className="text-sm text-gray-600">HIPAA compliant chat</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 h-80 flex flex-col shadow-inner">
                {/* Messages */}
                <div className="flex-1 space-y-4 overflow-y-auto mb-4">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.isDoctor ? "justify-start" : "justify-end"} animate-in slide-in-from-bottom-1`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div
                        className={`max-w-xs px-4 py-3 rounded-2xl text-sm shadow-md ${
                          msg.isDoctor
                            ? "bg-white text-gray-800 border border-gray-200"
                            : "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                        } ${hoveredCard === 3 ? "shadow-lg" : ""}`}
                      >
                        <p className="leading-relaxed">{msg.content}</p>
                        <p className={`text-xs mt-2 ${msg.isDoctor ? "text-gray-500" : "text-blue-100"}`}>{msg.time}</p>
                      </div>
                    </div>
                  ))}

                  {hoveredCard === 3 && (
                    <div className="flex justify-start animate-in slide-in-from-left duration-700">
                      <div className="bg-white text-gray-800 border border-gray-200 max-w-xs px-4 py-3 rounded-2xl text-sm shadow-lg">
                        <div className="flex items-center space-x-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500">Dr. Thompson is typing...</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Message input */}
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className={`flex-1 px-4 py-3 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white/50 backdrop-blur-sm transition-all duration-300 ${
                      hoveredCard === 3 ? "border-orange-300 shadow-md bg-white/80" : ""
                    }`}
                  />
                  <button
                    className={`p-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl hover:shadow-lg transition-all duration-300 ${
                      hoveredCard === 3 ? "scale-110 shadow-orange-500/25" : ""
                    }`}
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>

                {hoveredCard === 3 && (
                  <div className="mt-3 text-xs text-green-600 flex items-center animate-in fade-in duration-500">
                    <Shield className="w-3 h-3 mr-2" />
                    End-to-end encrypted
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 5. Health Records Access */}
          <div
            className={`group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer overflow-hidden ${
              hoveredCard === 4 ? "ring-2 ring-teal-500/50" : ""
            }`}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Health Records</h3>
                  <p className="text-sm text-gray-600">Personal health data</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Health Metrics */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 shadow-inner">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-green-800 flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center mr-2">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      Health Metrics
                    </h4>
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {healthMetrics.slice(0, 6).map((metric, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          hoveredCard === 4 ? "hover:bg-green-100 hover:scale-105" : ""
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-green-700 font-medium">{metric.label}</span>
                          {metric.trend && (
                            <div className="text-green-600">
                              {metric.trend === "good" ? (
                                <TrendingUp className="w-3 h-3" />
                              ) : (
                                <TrendingDown className="w-3 h-3" />
                              )}
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-green-800 font-bold">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Tests */}
                <div className="space-y-3">
                  {[
                    { name: "Health Metrics", date: "Updated today", icon: "📊", color: "blue" },
                    { name: "Lab Results", date: "2 days ago", icon: "🧪", color: "purple" },
                  ].map((test, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                        hoveredCard === 4
                          ? `bg-${test.color}-50 hover:bg-${test.color}-100 shadow-md`
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{test.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{test.name}</p>
                          <p className="text-xs text-gray-500">{test.date}</p>
                        </div>
                      </div>
                      <ArrowDown className="w-4 h-4 text-gray-400 rotate-[-90deg]" />
                    </div>
                  ))}
                </div>

                {hoveredCard === 4 && (
                  <div className="p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl border border-teal-200 animate-in slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center space-x-2 mb-2">
                      <Activity className="w-4 h-4 text-teal-600" />
                      <p className="text-sm text-teal-800 font-semibold">Health Trends</p>
                    </div>
                    <p className="text-xs text-teal-600 mb-3">All metrics within optimal range</p>
                    <div className="flex space-x-1">
                      <div className="h-2 bg-green-400 rounded-full flex-1 animate-pulse"></div>
                      <div className="h-2 bg-green-400 rounded-full flex-1 animate-pulse delay-100"></div>
                      <div className="h-2 bg-yellow-400 rounded-full flex-1 animate-pulse delay-200"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 6. Care Coordination */}
          <div
            className={`group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer overflow-hidden ${
              hoveredCard === 5 ? "ring-2 ring-pink-500/50" : ""
            }`}
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Care Coordination</h3>
                  <p className="text-sm text-gray-600">Multi-provider care</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Timeline */}
                <div className="relative">
                  {appointments.map((appointment, index) => (
                    <div key={index} className="relative">
                      {/* Timeline line */}
                      {index < appointments.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-gray-200"></div>
                      )}

                      <div
                        className={`flex items-start space-x-4 pb-6 transition-all duration-300 ${
                          hoveredCard === 5 ? "hover:bg-gray-50 rounded-2xl p-3 -m-3" : ""
                        }`}
                      >
                        {/* Timeline dot */}
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg flex-shrink-0 shadow-lg transition-all duration-300 ${
                            appointment.status === "completed"
                              ? "bg-gradient-to-br from-green-400 to-green-500 text-white"
                              : "bg-gradient-to-br from-blue-400 to-blue-500 text-white"
                          } ${hoveredCard === 5 ? "scale-110" : ""}`}
                        >
                          {appointment.status === "completed" ? "✓" : appointment.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-semibold text-gray-900">{appointment.type}</h4>
                            {appointment.status === "upcoming" && (
                              <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 text-xs rounded-full font-medium">
                                Upcoming
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-600 mb-1">{appointment.doctor}</p>
                          <p className="text-xs text-gray-500 flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {appointment.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {hoveredCard === 5 && (
                  <div className="space-y-3 animate-in slide-in-from-bottom-2 duration-500">
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-purple-600" />
                        <p className="text-sm text-purple-800 font-semibold">Next Appointment</p>
                      </div>
                      <p className="text-xs text-purple-600">Follow-up consultation in 7 days</p>
                    </div>

                    <div className="flex items-center justify-center text-xs text-gray-500">
                      <div className="flex items-center space-x-2 animate-bounce">
                        <ArrowDown className="w-3 h-3" />
                        <span>Care journey continues</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
