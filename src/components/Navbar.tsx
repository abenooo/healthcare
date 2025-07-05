"use client"

import { useState } from "react"
import {
  X,
  Menu,
  User,
  Settings,
  LogOut,
  Heart,
  Stethoscope,
  Users,
  Building2,
  Calendar,
} from "lucide-react"
import Logo from "../../public/logo.webp"
import { Link, useLocation } from "react-router-dom"

interface NavbarProps {
  onLoginClick?: () => void
  onDemoClick?: () => void
  onBookNowClick?: () => void
  isLoggedIn?: boolean
  userRole?: "Doctor" | "Patient" | "HR Manager" | "Admin"
  onLogout?: () => void
  user?: any
}

const navigationItems = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "About", to: "/about" },
  { name: "FAQ", to: "/faq" },
  { name: "Contact", to: "/contact" },
  { name: "Blog", to: "/blog" },
  { name: "Careers", to: "/careers" },
]

export default function Navbar({
  onDemoClick,
  onBookNowClick,
  isLoggedIn = false,
  userRole,
  onLogout,
  user,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const location = useLocation()

  const isUserLoggedIn = isLoggedIn || !!user

  const getUserInfo = () => {
    switch (userRole) {
      case "Doctor":
        return {
          name: "Dr. Sarah Johnson",
          title: "Cardiologist",
          avatar:
            "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
          icon: Stethoscope,
          gradient: "from-[#77658B] to-[#9AC15D]",
          status: "On Call",
          statusColor: "bg-[#9AC15D]",
        }
      case "Patient":
        return {
          name: "John Smith",
          title: "Patient ID: #12345",
          avatar:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
          icon: Heart,
          gradient: "from-[#9AC15D] to-[#77658B]",
          status: "Active",
          statusColor: "bg-[#77658B]",
        }
      case "HR Manager":
        return {
          name: "Emily Davis",
          title: "HR Manager",
          avatar:
            "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
          icon: Users,
          gradient: "from-[#77658B] to-[#9AC15D]",
          status: "Available",
          statusColor: "bg-[#9AC15D]",
        }
      case "Admin":
        return {
          name: "System Admin",
          title: "Administrator",
          avatar:
            "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
          icon: Building2,
          gradient: "from-[#77658B] to-[#9AC15D]",
          status: "Online",
          statusColor: "bg-[#9AC15D]",
        }
      default:
        return {
          name: "User",
          title: "Guest",
          avatar: "",
          icon: User,
          gradient: "from-[#77658B] to-[#9AC15D]",
          status: "Active",
          statusColor: "bg-gray-500",
        }
    }
  }

  const userInfo = getUserInfo()

  const getNotificationCount = () => {
    switch (userRole) {
      case "Doctor":
        return 5
      case "Patient":
        return 2
      case "HR Manager":
        return 8
      case "Admin":
        return 3
      default:
        return 0
    }
  }

  const notificationCount = getNotificationCount()

  return (
    <>
      <nav className="bg-gradient-to-r from-white to-purple-50 border-b border-purple-100 sticky top-0 z-50 backdrop-blur-lg bg-white/95 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img
                src={Logo}
                alt="Shalom Health Care Services"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
            </div>

            {/* Desktop Navigation - Only show if not logged in */}
            {!isUserLoggedIn && (
              <div className="hidden lg:flex items-center space-x-8">
                {navigationItems.map((item) => {
                  const isActive =
                    location.pathname === item.to ||
                    (item.to !== "/" && location.pathname.startsWith(item.to));
                  return (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={`font-medium transition-colors duration-200 py-2
                        ${isActive
                          ? "text-[#77658B] underline underline-offset-4"
                          : "text-gray-700 hover:text-[#77658B] hover:underline hover:underline-offset-4"}
                      `}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            )}

            {/* User Profile Section - Show when logged in */}
            {isUserLoggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Welcome back, {userInfo.name}</span>
              </div>
            ) : (
              /* Action Buttons - Show when not logged in */
              <div className="hidden lg:flex items-center space-x-4">
                <button
                  onClick={onBookNowClick}
                  className="bg-[#77658B] text-white px-6 py-2 rounded-lg hover:bg-[#77658B]/90 transition-colors duration-200 font-medium flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Now</span>
                </button>
                <button
                  onClick={onDemoClick}
                  className="bg-[#9AC15D] text-white px-6 py-2 rounded-lg hover:bg-[#9AC15D]/90 transition-colors duration-200 font-medium"
                >
                  Try Demo
                </button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#77658B] transition-colors duration-200 z-50 relative"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-16 left-0 right-0 bottom-0 bg-white z-40 lg:hidden overflow-y-auto">
            <div className="px-4 py-6 space-y-4">
              {!isUserLoggedIn ? (
                <>
                  {navigationItems.map((item) => {
                    const isActive =
                      location.pathname === item.to ||
                      (item.to !== "/" && location.pathname.startsWith(item.to));
                    return (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={`block font-medium py-3 px-2 rounded-lg transition-colors duration-200
                          ${isActive
                            ? "bg-purple-100 text-[#77658B] underline underline-offset-4"
                            : "text-gray-700 hover:text-[#77658B] hover:underline hover:underline-offset-4 hover:bg-purple-50"}
                        `}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  
                  <div className="pt-4 space-y-3">
                    <button
                      onClick={() => {
                        onBookNowClick?.()
                        setIsMenuOpen(false)
                      }}
                      className="w-full bg-[#77658B] text-white px-6 py-3 rounded-lg hover:bg-[#77658B]/90 transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Now</span>
                    </button>
                    <button
                      onClick={() => {
                        onDemoClick?.()
                        setIsMenuOpen(false)
                      }}
                      className="w-full bg-[#9AC15D] text-white px-6 py-3 rounded-lg hover:bg-[#9AC15D]/90 transition-colors duration-200 font-medium"
                    >
                      Try Demo
                    </button>
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  {/* Mobile User Info */}
                  <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                    <img
                      src={userInfo.avatar || "/placeholder.svg"}
                      alt={userInfo.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{userInfo.name}</p>
                      <p className="text-sm text-gray-600">{userInfo.title}</p>
                    </div>
                  </div>

                  {/* Mobile Menu Items */}
                  <button className="w-full flex items-center space-x-3 p-4 text-left hover:bg-purple-50 rounded-lg transition-colors duration-200">
                    <User className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">My Profile</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-4 text-left hover:bg-purple-50 rounded-lg transition-colors duration-200">
                    <Settings className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">Settings</span>
                  </button>
                  <button
                    onClick={() => {
                      onLogout?.()
                      setIsMenuOpen(false)
                    }}
                    className="w-full flex items-center space-x-3 p-4 text-left hover:bg-red-50 rounded-lg transition-colors duration-200 text-red-600"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Click outside to close dropdown */}
      {isProfileOpen && <div className="fixed inset-0 z-40" onClick={() => setIsProfileOpen(false)} />}
    </>
  )
}