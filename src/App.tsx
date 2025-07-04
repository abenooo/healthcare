"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Dashboard from "./components/Dashboard"
import HRModule from "./components/HRModule"
import PatientPortal from "./components/PatientPortal"
import DocumentCenter from "./components/DocumentCenter"
import Onboarding from "./components/Onboarding"
import Contact from "./components/Contact"
import Component from "./components/Services.tsx"
import FAQ from "./components/FAQ"
import Careers from "./components/Careers.tsx"
import About from "./components/About.tsx"
import BlogPage from "./components/BlogPage.tsx"

import Navbar from "./components/Navbar"
import LoginModal from "./components/LoginModal"
import ServiceApprovals from "./components/ServiceApprovals"
import { Menu, Calendar, Heart, Stethoscope, Sun, Building, UserCheck, Shield, Brain, Home, Users } from "lucide-react"
import Footer from "./components/Footer"
import BookingModal from "./components/booking-modal"
import ServicePage from "./components/ServicePage"
import ProgressNotesTable from "./components/ProgressNotesTable"


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [user, setUser] = useState<any>(null)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showDemoSelection, setShowDemoSelection] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [showProgressNote, setShowProgressNote] = useState(false)

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

  const handleMenuItemClick = (tabId: string) => {
    if (tabId === "progress-note") {
      setShowProgressNote(true)
      return
    }
    setActiveTab(tabId)
    if (isMobileSidebarOpen) {
      toggleMobileSidebar()
    }
  }

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard setActiveTab={setActiveTab} userRole={user?.role} />
      case "assigned-patients":
        return <PatientPortal userRole={user?.role} />
      // case "services":
        // return <Services userRole={user?.role} />
      case "hr":
        return <HRModule userRole={user?.role} />
      case "patient-documents":
        return <DocumentCenter userRole={user?.role} documentType="patient" />
      case "employee-documents":
        return <DocumentCenter userRole={user?.role} documentType="employee" />
      case "onboarding":
        return <Onboarding userRole={user?.role} />
      case "reports":
        return <Dashboard setActiveTab={setActiveTab} userRole={user?.role} />
      case "service-approvals":
        return <ServiceApprovals userRole={user?.role} />
      default:
        return <Dashboard setActiveTab={setActiveTab} userRole={user?.role} />
    }
  }

  // Demo role selection modal - Updated for 2 roles
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
          Experience our healthcare management system from different user perspectives
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <button
            onClick={() => handleDemoLogin("Care Giver")}
            className="p-6 border-2 border-blue-200 rounded-xl text-left hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Stethoscope className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Care Giver Portal</h3>
                <p className="text-blue-600 font-medium">Patient care & service delivery</p>
                <p className="text-sm text-gray-600 mt-1">
                  Manage assigned patients, provide services, and submit for approval
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <Users className="w-4 h-4 mr-2 text-blue-500" />
                <span>View assigned patients</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Heart className="w-4 h-4 mr-2 text-blue-500" />
                <span>Provide healthcare services</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <UserCheck className="w-4 h-4 mr-2 text-blue-500" />
                <span>Submit services for HR approval</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                <span>Track service history & schedules</span>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleDemoLogin("HR")}
            className="p-6 border-2 border-purple-200 rounded-xl text-left hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">HR Management Portal</h3>
                <p className="text-purple-600 font-medium">Staff & patient administration</p>
                <p className="text-sm text-gray-600 mt-1">Manage employees, approve services, and oversee operations</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <Shield className="w-4 h-4 mr-2 text-purple-500" />
                <span>Approve care giver services</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Building className="w-4 h-4 mr-2 text-purple-500" />
                <span>Employee & patient onboarding</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-2 text-purple-500" />
                <span>Send reminders & manage documents</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users className="w-4 h-4 mr-2 text-purple-500" />
                <span>Staff management & analytics</span>
              </div>
            </div>
          </button>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4 text-center">System Workflow:</h4>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="text-center flex-1">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600 font-semibold">1</span>
              </div>
              <span className="font-medium">
                Care Giver
                <br />
                provides service
              </span>
            </div>
            <div className="flex-1 h-px bg-gray-300 mx-4 relative">
              <div className="absolute right-0 top-0 w-2 h-2 bg-gray-400 rounded-full transform translate-x-1 -translate-y-0.5"></div>
            </div>
            <div className="text-center flex-1">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-purple-600 font-semibold">2</span>
              </div>
              <span className="font-medium">
                HR reviews
                <br />& approves
              </span>
            </div>
            <div className="flex-1 h-px bg-gray-300 mx-4 relative">
              <div className="absolute right-0 top-0 w-2 h-2 bg-gray-400 rounded-full transform translate-x-1 -translate-y-0.5"></div>
            </div>
            <div className="text-center flex-1">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 font-semibold">3</span>
              </div>
              <span className="font-medium">
                Service
                <br />
                completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const services = [
    {
      name: "In-Home Service",
      description:
        "Personalized support for home activities, medication reminders, and goal setting to enhance daily living.",
      icon: Home,
      color: "bg-purple-600",
      image:
        "https://img1.wsimg.com/isteam/ip/7fa7a95e-2292-4c6d-a4ef-4e192b5175f9/download%20(2).jpg/:/cr=t:0%25,l:7.14%25,w:85.71%25,h:100%25/rs=w:600,h:300,cg:true",
      features: ["Skilled Nursing", "Medical Equipment", "24/7 Support"],
      availability: "24/7 Available",
    },
    {
      name: "Respite Care Service",
      description: "Short-term relief for families and caregivers, ensuring continuous care and support.",
      icon: Heart,
      color: "bg-green-500",
      image:
        "https://img1.wsimg.com/isteam/ip/7fa7a95e-2292-4c6d-a4ef-4e192b5175f9/images%20(1).jpg/:/cr=t:0%25,l:33.69%25,w:63%25,h:100%25/rs=w:600,h:300,cg:true",
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
      image:
        "https://img1.wsimg.com/isteam/stock/73Ko0Kj/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:1200,h:600,cg:true",
      features: ["Short-term Care", "Family Relief", "Professional Support"],
      availability: "As Needed",
    },
    {
      name: "Companion Services",
      description: "Professional DSPs offer emotional and physical support, ensuring stability and well-being.",
      icon: UserCheck,
      color: "bg-purple-700",
      image:
        "https://img1.wsimg.com/isteam/stock/kaa8OOn/:/cr=t:12.54%25,l:0%25,w:100%25,h:74.91%25/rs=w:1200,h:600,cg:true",
      features: ["Chronic Disease Management", "Post-Surgery Care", "Rehabilitation"],
      availability: "Specialized Hours",
    },
    {
      name: "Professional Behavioral Support",
      description: "Education and support for chronic behavioral challenges, improving safety and relationships.",
      icon: Brain,
      color: "bg-green-700",
      image:
        "https://img1.wsimg.com/isteam/ip/7fa7a95e-2292-4c6d-a4ef-4e192b5175f9/download%20(5).jpg/:/cr=t:0%25,l:4.65%25,w:90.69%25/rs=w:600,h:300,cg:true",
      features: ["Memory Support", "Safety Monitoring", "Cognitive Activities"],
      availability: "Continuous Care",
    },
    {
      name: "Employment Specialist",
      description: "Guidance and support to help individuals find and keep competitive, integrated jobs.",
      icon: Heart,
      color: "bg-purple-800",
      image:
        "https://img1.wsimg.com/isteam/ip/7fa7a95e-2292-4c6d-a4ef-4e192b5175f9/download%20(3).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,h:300,cg:true",
      features: ["Pain Management", "Comfort Care", "Family Support"],
      availability: "24/7 Support",
    },
    {
      name: "Support Living Without Transportation",
      description: "Support for independent living and community access for those without reliable transport.",
      icon: Sun,
      color: "bg-green-800",
      image:
        "https://img1.wsimg.com/isteam/stock/111755/:/cr=t:12.49%25,l:0%25,w:100%25,h:75.02%25/rs=w:1200,h:600,cg:true",
      features: ["Health Screenings", "Nutrition Counseling", "Exercise Programs"],
      availability: "Scheduled",
    },
    {
      name: "Day Habilitation",
      description: "A safe, respectful place for indoor and outdoor activities, ensuring safety and enjoyment.",
      icon: Building,
      color: "bg-purple-900",
      image:
        "https://img1.wsimg.com/isteam/stock/7znb1Am/:/cr=t:12.54%25,l:0%25,w:100%25,h:74.91%25/rs=w:1200,h:600,cg:true",
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
          <BookingModal isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} services={services} />
        )}

        <Routes>
          <Route path="/" element={<LandingPage onLogin={handleLogin} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Component />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/careers" element={<Careers />} />
          
          {/* <Route path="/progress-notes" element={<ProgressNotesTable />} /> */}
          
          <Route path="/service/:id" element={<ServicePage />} />
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
                    {user.role === "Care Giver" && "Care Giver Dashboard"}
                    {user.role === "HR" && "HR Management System"}
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
                    <option value="Care Giver">🩺 Care Giver Portal</option>
                    <option value="HR">👥 HR Management</option>
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
              <Route path="/service/:id" element={<ServicePage />} />
              {user?.role === "Care Giver" && (
                <Route path="/progress-notes" element={<ProgressNotesTable />} />
              )}
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
      {showBookingModal && (
        <BookingModal isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} services={services} />
      )}
    </Router>
  )
}

export default App