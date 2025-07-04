"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  LayoutDashboard,
  Stethoscope,
  Users,
  FileText,
  Heart,
  Shield,
  BarChart3,
  X,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  UserPlus,
  Plus,
  Edit,
  Trash2,
} from "lucide-react"
import ProgressNoteModal from "./ProgressNoteSidebar"
import { useNavigate } from "react-router-dom"
import { CgWebsite } from "react-icons/cg"
import { TbJoinBevel } from "react-icons/tb"

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  userRole: string
  isMobileOpen?: boolean
  onMobileToggle?: () => void
}

const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  userRole,
  isMobileOpen = false,
  onMobileToggle,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const [showProgressNote, setShowProgressNote] = useState(false)
  const navigate = useNavigate()

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  // Handle swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && isMobileOpen && onMobileToggle) {
      onMobileToggle()
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileOpen && onMobileToggle) {
        onMobileToggle()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isMobileOpen, onMobileToggle])

  // Define menu items based on user role
  const getMenuItems = () => {
    switch (userRole) {
      case "Care Giver":
        return [
          { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, color: "text-blue-600", shortLabel: "Dash" },
          { id: "assigned-patients", label: "Assigned Patients", icon: Heart, color: "text-rose-600", shortLabel: "Patients" },
          // { id: "services", label: "Provide Services", icon: Stethoscope, color: "text-emerald-600", shortLabel: "Services" },
          { id: "progress-note", label: "Progress Note", icon: FileText, color: "text-blue-600", shortLabel: "Progress" },
        ]
      case "HR":
        return [
          { id: "hr", label: "Dashboard", icon: Users, color: "text-purple-600", shortLabel: "HR" },
          { id: "service-approvals", label: "Service Approvals", icon: ClipboardCheck, color: "text-orange-600", shortLabel: "Approvals" },
          { id: "patient-documents", label: "Patient Documents", icon: FileText, color: "text-amber-600", shortLabel: "Patient Docs" },
          { id: "employee-documents", label: "Employee Documents", icon: FileText, color: "text-green-600", shortLabel: "Employee Docs" },
          { id: "onboarding", label: "Onboarding", icon: UserPlus, color: "text-teal-600", shortLabel: "Onboard" },
          { id: "blog", label: "Blog", icon: CgWebsite, color: "text-teal-600", shortLabel: "Blog" },
          { id: "careers", label: "Careers", icon: TbJoinBevel, color: "text-teal-600", shortLabel: "Careers" },
          { id: "reports", label: "Reports & Analytics", icon: BarChart3, color: "text-indigo-600", shortLabel: "Reports" },
        ]
      default:
        return [
          { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, color: "text-blue-600", shortLabel: "Dash" },
        ]
    }
  }

  const menuItems = getMenuItems()

  // Sidebar header text based on role
  const portalName =
    {
      "Care Giver": "Care Giver Portal",
      "HR": "HR Management Portal",
    }[userRole] || "Portal"

  const handleMenuItemClick = (tabId: string) => {
    if (tabId === "progress-note") {
      navigate("/progress-notes")
      if (onMobileToggle) onMobileToggle()
      return
    }
    setActiveTab(tabId)
    if (onMobileToggle) onMobileToggle()
  }

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
          onClick={onMobileToggle}
          aria-label="Close sidebar"
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          transform transition-all duration-300 ease-in-out
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          ${isCollapsed && !isMobileOpen ? "lg:w-16" : "w-64 sm:w-72 lg:w-64"}
          bg-white shadow-xl border-r border-gray-100
          flex flex-col
          ${isMobileOpen ? "max-w-[85vw] sm:max-w-sm" : ""}
        `}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Header */}
        <div className={`p-3 sm:p-4 lg:p-6 border-b border-gray-100 ${isCollapsed && !isMobileOpen ? "lg:px-2" : ""}`}>
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center space-x-3 ${isCollapsed && !isMobileOpen ? "lg:justify-center lg:space-x-0" : ""}`}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className={`${isCollapsed && !isMobileOpen ? "lg:hidden" : ""} min-w-0 flex-1`}>
                <h2 className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent truncate">
                  Shalom HealthCare
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 truncate">{portalName}</p>
              </div>
            </div>

            {/* Desktop Collapse Button */}
            <button
              onClick={toggleCollapse}
              className="hidden lg:flex p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>

            {/* Mobile Close Button */}
            <button
              onClick={onMobileToggle}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`flex-1 p-2 sm:p-3 lg:p-4 overflow-y-auto ${isCollapsed && !isMobileOpen ? "lg:px-2" : ""}`}>
          <ul className="space-y-1 sm:space-y-2" role="menubar">
            {menuItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeTab === item.id

              return (
                <li key={item.id} role="none">
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`
                      w-full flex items-center space-x-3 px-2 sm:px-3 lg:px-4 py-2.5 sm:py-3 
                      rounded-xl text-left transition-all duration-200 group
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                      ${
                        isActive
                          ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 shadow-sm"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }
                      ${isCollapsed && !isMobileOpen ? "lg:justify-center lg:px-2" : ""}
                    `}
                    role="menuitem"
                    tabIndex={0}
                    aria-current={isActive ? "page" : undefined}
                    title={isCollapsed && !isMobileOpen ? item.label : undefined}
                  >
                    <Icon
                      className={`
                        w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200 flex-shrink-0
                        ${isActive ? item.color : "text-gray-400 group-hover:text-gray-600"}
                      `}
                    />
                    <span
                      className={`
                      font-medium text-sm sm:text-base truncate
                      ${isCollapsed && !isMobileOpen ? "lg:hidden" : ""}
                    `}
                    >
                      {item.label}
                    </span>

                    {/* Tooltip for collapsed state */}
                    {isCollapsed && !isMobileOpen && (
                      <div className="hidden lg:group-hover:block absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap z-50">
                        {item.label}
                      </div>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className={`p-3 sm:p-4 border-t border-gray-100 ${isCollapsed && !isMobileOpen ? "lg:hidden" : ""}`}>
          {/* Mobile Footer */}
          <div className="lg:hidden text-center">
            <p className="text-xs text-gray-500">Swipe left to close</p>
          </div>

          {/* Desktop Footer */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>v2.1.0</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Online</span>
              </div>
            </div>
          </div>

      
        </div>

        {/* Resize Handle for Desktop */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-blue-500 transition-colors duration-200 opacity-0 hover:opacity-100"></div>
      </div>

      {/* Mobile Bottom Navigation (Alternative for very small screens) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-30 sm:hidden">
        <div className="flex justify-around py-2">
          {menuItems.slice(0, 5).map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id

            return (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item.id)}
                className={`
                  flex flex-col items-center space-y-1 px-2 py-1 rounded-lg transition-colors duration-200
                  ${isActive ? "text-blue-600" : "text-gray-500"}
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.shortLabel}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Progress Note Sidebar */}
      {userRole === "Care Giver" && (
  <ProgressNoteModal open={showProgressNote} onClose={() => setShowProgressNote(false)} />
)}
    </>
  )
}

export default Sidebar