"use client"

import { useState } from "react"
import {
  ChevronDown,
  X,
  Menu,
  User,
  Settings,
  LogOut,
  Bell,
  MessageCircle,
  Heart,
  Stethoscope,
  Users,
  Building2,
  Calendar,
} from "lucide-react"
import logo from "../../public/logo.webp"
import { useLocation } from "react-router-dom"

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
    <nav className="bg-gradient-to-r from-white to-purple-50 border-b border-purple-100 sticky top-0 z-40 backdrop-blur-lg bg-white/95 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/logo.webp" className="w-20 h-20 text-white" alt="Shalom Health Care Services" />
          </div>

          {/* Desktop Navigation - Only show if not logged in */}
          {!isUserLoggedIn && (
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <a
                    key={item.name}
                    href={item.to}
                    className={`font-medium transition-colors duration-200 py-2 ${
                      isActive
                        ? "text-[#77658B] underline underline-offset-4"
                        : "text-gray-700 hover:text-[#77658B]"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          )}

          {/* User Profile Section - Show when logged in */}
          {isUserLoggedIn ? (
            <div className="flex items-center space-x-4">
              {/* Quick Actions for different roles */}
              <div className="hidden md:flex items-center space-x-3">
                {userRole === "Doctor" && (
                  <>
                    <button
                      className="p-2 text-gray-600 hover:text-[#77658B] hover:bg-purple-50 rounded-lg transition-colors duration-200"
                      title="Emergency Alerts"
                    >
                      <div className="relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                          3
                        </span>
                      </div>
                    </button>
                    <button
                      className="p-2 text-gray-600 hover:text-[#9AC15D] hover:bg-green-50 rounded-lg transition-colors duration-200"
                      title="Patient Messages"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </button>
                  </>
                )}

                {userRole === "Patient" && (
                  <>
                    <button
                      className="p-2 text-gray-600 hover:text-[#77658B] hover:bg-purple-50 rounded-lg transition-colors duration-200"
                      title="Notifications"
                    >
                      <div className="relative">
                        <Bell className="w-5 h-5" />
                        {notificationCount > 0 && (
                          <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#77658B] rounded-full text-xs text-white flex items-center justify-center">
                            {notificationCount}
                          </span>
                        )}
                      </div>
                    </button>
                    <button
                      className="p-2 text-gray-600 hover:text-[#9AC15D] hover:bg-green-50 rounded-lg transition-colors duration-200"
                      title="Care Team Messages"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </button>
                  </>
                )}

                {(userRole === "HR Manager" || userRole === "Admin") && (
                  <button
                    className="p-2 text-gray-600 hover:text-[#77658B] hover:bg-purple-50 rounded-lg transition-colors duration-200"
                    title="System Notifications"
                  >
                    <div className="relative">
                      <Bell className="w-5 h-5" />
                      {notificationCount > 0 && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#77658B] rounded-full text-xs text-white flex items-center justify-center">
                          {notificationCount}
                        </span>
                      )}
                    </div>
                  </button>
                )}
              </div>

              {/* User Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200"
                >
                  <div className="relative">
                    <img
                      src={userInfo.avatar || "/placeholder.svg"}
                      alt={userInfo.name}
                      className="w-8 h-8 rounded-full object-cover border-2 border-purple-200"
                    />
                    <div
                      className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${userInfo.statusColor} rounded-full border-2 border-white`}
                    ></div>
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-gray-900">{userInfo.name}</p>
                    <p className="text-xs text-gray-500">{userInfo.title}</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>

                {/* Dropdown Menu */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-purple-100 py-2 z-50">
                    {/* User Info Header */}
                    <div className="px-4 py-3 border-b border-purple-100">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={userInfo.avatar || "/placeholder.svg"}
                            alt={userInfo.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
                          />
                          <div
                            className={`absolute -bottom-1 -right-1 w-4 h-4 ${userInfo.statusColor} rounded-full border-2 border-white`}
                          ></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{userInfo.name}</h3>
                          <p className="text-sm text-gray-600">{userInfo.title}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className={`w-2 h-2 ${userInfo.statusColor} rounded-full`}></div>
                            <span className="text-xs text-gray-500">{userInfo.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Role-specific quick stats */}
                    <div className="px-4 py-3 border-b border-purple-100">
                      <div className="grid grid-cols-2 gap-3 text-center">
                        {userRole === "Doctor" && (
                          <>
                            <div className="bg-purple-50 rounded-lg p-2">
                              <div className="text-lg font-bold text-[#77658B]">14</div>
                              <div className="text-xs text-[#77658B]">Today's Patients</div>
                            </div>
                            <div className="bg-red-50 rounded-lg p-2">
                              <div className="text-lg font-bold text-red-600">3</div>
                              <div className="text-xs text-red-700">Critical Alerts</div>
                            </div>
                          </>
                        )}
                        {userRole === "Patient" && (
                          <>
                            <div className="bg-green-50 rounded-lg p-2">
                              <div className="text-lg font-bold text-[#9AC15D]">95%</div>
                              <div className="text-xs text-[#9AC15D]">Health Score</div>
                            </div>
                            <div className="bg-purple-50 rounded-lg p-2">
                              <div className="text-lg font-bold text-[#77658B]">Jan 15</div>
                              <div className="text-xs text-[#77658B]">Next Appointment</div>
                            </div>
                          </>
                        )}
                        {userRole === "HR Manager" && (
                          <>
                            <div className="bg-purple-50 rounded-lg p-2">
                              <div className="text-lg font-bold text-[#77658B]">247</div>
                              <div className="text-xs text-[#77658B]">Active Staff</div>
                            </div>
                            <div className="bg-green-50 rounded-lg p-2">
                              <div className="text-lg font-bold text-[#9AC15D]">12</div>
                              <div className="text-xs text-[#9AC15D]">Credentials Due</div>
                            </div>
                          </>
                        )}
                        {userRole === "Admin" && (
                          <>
                            <div className="bg-purple-50 rounded-lg p-2">
                              <div className="text-lg font-bold text-[#77658B]">87%</div>
                              <div className="text-xs text-[#77658B]">Bed Occupancy</div>
                            </div>
                            <div className="bg-green-50 rounded-lg p-2">
                              <div className="text-lg font-bold text-[#9AC15D]">99.9%</div>
                              <div className="text-xs text-[#9AC15D]">System Uptime</div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-purple-50 transition-colors duration-200">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700">My Profile</span>
                      </button>
                      <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-purple-50 transition-colors duration-200">
                        <Settings className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700">Settings</span>
                      </button>
                      {userRole === "Patient" && (
                        <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-purple-50 transition-colors duration-200">
                          <Heart className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-700">Health Dashboard</span>
                        </button>
                      )}
                      {(userRole === "Doctor" || userRole === "HR Manager" || userRole === "Admin") && (
                        <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-purple-50 transition-colors duration-200">
                          <Bell className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-700">Notifications</span>
                          {notificationCount > 0 && (
                            <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                              {notificationCount}
                            </span>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Logout */}
                    <div className="border-t border-purple-100 pt-2">
                      <button
                        onClick={() => {
                          setIsProfileOpen(false)
                          onLogout?.()
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-red-50 transition-colors duration-200 text-red-600"
                      >
                        <LogOut className="w-4 h-4" />
                        <span className="text-sm font-medium">Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
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
            className="lg:hidden p-2 text-gray-700 hover:text-[#77658B] transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-purple-200 bg-gradient-to-r from-white to-purple-50">
          <div className="px-4 py-4 space-y-3">
            {!isUserLoggedIn ? (
              <>
                {navigationItems.map((item) => {
                  const isActive = location.pathname === item.to;
                  return (
                    <a
                      key={item.name}
                      href={item.to}
                      className={`font-medium transition-colors duration-200 py-2 ${
                        isActive
                          ? "text-[#77658B] underline underline-offset-4"
                          : "text-gray-700 hover:text-[#77658B]"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  );
                })}
                <button
                  onClick={() => {
                    onBookNowClick?.()
                    setIsMenuOpen(false)
                  }}
                  className="w-full bg-[#77658B] text-white px-6 py-2 rounded-lg hover:bg-[#77658B]/90 transition-colors duration-200 font-medium mt-4 flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Now</span>
                </button>
                <button
                  onClick={() => {
                    onDemoClick?.()
                    setIsMenuOpen(false)
                  }}
                  className="w-full bg-[#9AC15D] text-white px-6 py-2 rounded-lg hover:bg-[#9AC15D]/90 transition-colors duration-200 font-medium"
                >
                  Try Demo
                </button>
              </>
            ) : (
              <div className="space-y-3">
                {/* Mobile User Info */}
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <img
                    src={userInfo.avatar || "/placeholder.svg"}
                    alt={userInfo.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-purple-200"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{userInfo.name}</p>
                    <p className="text-sm text-gray-600">{userInfo.title}</p>
                  </div>
                </div>

                {/* Mobile Menu Items */}
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-purple-50 rounded-lg transition-colors duration-200">
                  <User className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">My Profile</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-purple-50 rounded-lg transition-colors duration-200">
                  <Settings className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">Settings</span>
                </button>
                <button
                  onClick={() => {
                    onLogout?.()
                    setIsMenuOpen(false)
                  }}
                  className="w-full flex items-center space-x-3 p-3 text-left hover:bg-red-50 rounded-lg transition-colors duration-200 text-red-600"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Sign Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Click outside to close dropdown */}
      {isProfileOpen && <div className="fixed inset-0 z-40" onClick={() => setIsProfileOpen(false)} />}
    </nav>
  )
}
