"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Dashboard from "./components/Dashboard"
import Services from "./components/Services"
import HRModule from "./components/HRModule"
import PatientPortal from "./components/PatientPortal"
import DocumentCenter from "./components/DocumentCenter"
import Onboarding from "./components/Onboarding"
import Contact from "./components/Contact"
import FAQ from "./components/FAQ"
import Navbar from "./components/Navbar"
import LoginModal from "./components/LoginModal"
import { Menu, Calendar, Heart, Stethoscope, Sun, Building, UserCheck, Shield, Brain,Home, Users } from "lucide-react"
import Footer from "./components/Footer"
import BookingModal from "./components/booking-modal"

interface Props {
  userRole: string
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [user, setUser] = useState<any>(null)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showDemoSelection, setShowDemoSelection] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)

  const handleLogin = (userData: any) => {
    setUser(userData)
    setIsAuthenticated(true)
    setShowLoginModal(false)
    setShowDemoSelection(false)
  }

  const handleDemoLogin = (role: string) => {
    const demoUser = {
      name: `Demo ${role}`,
      role: role,
      avatar: `https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2`,
      isDemo: true,
    }
    setUser(demoUser)
    setIsAuthenticated(true)
    setShowDemoSelection(false)
    setActiveTab("dashboard")
  }

  const handleLogout = () => {
    setUser(null)
    setIsAuthenticated(false)
    setActiveTab("dashboard")
    setShowDemoSelection(false)
  }

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen)
  }

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard setActiveTab={setActiveTab} userRole={user?.role} />
      case "services":
        return <Services userRole={user?.role} />
      case "hr":
        return <HRModule userRole={user?.role} />
      case "patients":
        return <PatientPortal userRole={user?.role} />
      case "documents":
        return <DocumentCenter userRole={user?.role} />
      case "onboarding":
        return <Onboarding userRole={user?.role} />
      default:
        return <Dashboard setActiveTab={setActiveTab} userRole={user?.role} />
    }
  }

  // Demo role selection modal
  const DemoRoleSelection = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Choose Your Role to Demo</h2>
          <button
            onClick={() => setShowDemoSelection(false)}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-gray-600 mb-8 text-center">
          Experience our healthcare platform from different user perspectives
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            onClick={() => handleDemoLogin("Doctor")}
            className="p-6 border-2 border-blue-200 rounded-xl text-left hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Doctor Portal</h3>
                <p className="text-blue-600 font-medium">Clinical workflows & patient management</p>
                <p className="text-sm text-gray-600">Manage patients, appointments, and medical records</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleDemoLogin("Patient")}
            className="p-6 border-2 border-rose-200 rounded-xl text-left hover:border-rose-400 hover:bg-rose-50 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-rose-100 rounded-xl flex items-center justify-center group-hover:bg-rose-200 transition-colors">
                <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Patient Portal</h3>
                <p className="text-rose-600 font-medium">Health records & care access</p>
                <p className="text-sm text-gray-600">View records, book appointments, and manage care</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleDemoLogin("HR Manager")}
            className="p-6 border-2 border-purple-200 rounded-xl text-left hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">HR Manager</h3>
                <p className="text-purple-600 font-medium">Staff management & workforce</p>
                <p className="text-sm text-gray-600">Manage employees, documents, and HR processes</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleDemoLogin("Admin")}
            className="p-6 border-2 border-gray-200 rounded-xl text-left hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">System Admin</h3>
                <p className="text-gray-600 font-medium">System administration & settings</p>
                <p className="text-sm text-gray-600">Configure system settings and manage users</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )

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

  if (!isAuthenticated) {
    return (
      <Router>
        <Navbar
          onLoginClick={() => setShowLoginModal(true)}
          onDemoClick={() => setShowDemoSelection(true)}
          onBookNowClick={() => setShowBookingModal(true)}
        />

        {showLoginModal && <LoginModal onLogin={handleLogin} onClose={() => setShowLoginModal(false)} />}
        {showDemoSelection && <DemoRoleSelection />}
        {showBookingModal && (
          <BookingModal
            isOpen={showBookingModal}
            onClose={() => setShowBookingModal(false)}
            services={services}
          />
        )}

        <Routes>
          <Route path="/" element={<LandingPage onLogin={handleLogin} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </Router>
    )
  }

  return (
    <Router>
      <Navbar
        onLoginClick={() => setShowLoginModal(true)}
        onDemoClick={() => setShowDemoSelection(true)}
        onBookNowClick={() => setShowBookingModal(true)}
        onLogout={handleLogout}
        user={user}
      />
      <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileSidebar}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
          aria-label="Open sidebar"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>

        {/* Sidebar (works for both mobile and desktop) */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          userRole={user?.role}
          isMobileOpen={isMobileSidebarOpen}
          onMobileToggle={toggleMobileSidebar}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <Header user={user} />
          {/* Demo Role Switcher - Only show for demo users */}
          {user?.isDemo && (
            <div className="bg-white shadow-sm border-b border-gray-100 p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Left Side: Title */}
                <div className="flex items-center space-x-3 min-w-0">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">
                    {user.role === "Doctor" && "Clinical Dashboard"}
                    {user.role === "Patient" && "Patient Portal"}
                    {user.role === "HR Manager" && "HR Management System"}
                    {user.role === "Admin" && "Hospital Administration"}
                  </h1>
                  <span className="flex-shrink-0 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
                    Demo Mode
                  </span>
                </div>
                {/* Right Side: Role Switcher */}
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 hidden sm:inline">Switch Role:</span>
                  <select
                    value={user.role}
                    onChange={(e) => handleDemoLogin(e.target.value)}
                    className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="Doctor">👨‍⚕️ Doctor Portal</option>
                    <option value="Patient">🏥 Patient Portal</option>
                    <option value="HR Manager">👥 HR Manager</option>
                    <option value="Admin">⚙️ System Admin</option>
                  </select>
                </div>
              </div>
            </div>
          )}
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={renderContent()} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
      {showBookingModal && (
        <BookingModal
          isOpen={showBookingModal}
          onClose={() => setShowBookingModal(false)}
          services={services}
        />
      )}
    </Router>
  )
}

export default App
