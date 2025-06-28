import React, { useState } from "react";
import { 
  Shield, 
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
  Building2
} from "lucide-react";

interface NavbarProps {
  onLoginClick?: () => void;
  onDemoClick?: () => void;
  isLoggedIn?: boolean;
  userRole?: 'Doctor' | 'Patient' | 'HR Manager' | 'Admin';
  onLogout?: () => void;
  user?: any;
}

const navigationItems = [
  { name: "Services", to: "/#services" },
  { name: "About", to: "/about" },
  { name: "FAQ", to: "/faq" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar({ onLoginClick, onDemoClick, isLoggedIn = false, userRole, onLogout, user }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const isUserLoggedIn = isLoggedIn || !!user;

  const getUserInfo = () => {
    switch (userRole) {
      case 'Doctor':
        return {
          name: 'Dr. Sarah Johnson',
          title: 'Cardiologist',
          avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
          icon: Stethoscope,
          gradient: 'from-blue-500 to-cyan-500',
          status: 'On Call',
          statusColor: 'bg-green-500'
        };
      case 'Patient':
        return {
          name: 'John Smith',
          title: 'Patient ID: #12345',
          avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
          icon: Heart,
          gradient: 'from-rose-500 to-pink-500',
          status: 'Active',
          statusColor: 'bg-blue-500'
        };
      case 'HR Manager':
        return {
          name: 'Emily Davis',
          title: 'HR Manager',
          avatar: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
          icon: Users,
          gradient: 'from-purple-500 to-indigo-500',
          status: 'Available',
          statusColor: 'bg-green-500'
        };
      case 'Admin':
        return {
          name: 'System Admin',
          title: 'Administrator',
          avatar: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
          icon: Building2,
          gradient: 'from-gray-500 to-slate-600',
          status: 'Online',
          statusColor: 'bg-green-500'
        };
      default:
        return {
          name: 'User',
          title: 'Guest',
          avatar: '',
          icon: User,
          gradient: 'from-gray-500 to-gray-600',
          status: 'Active',
          statusColor: 'bg-gray-500'
        };
    }
  };

  const userInfo = getUserInfo();

  const getNotificationCount = () => {
    switch (userRole) {
      case 'Doctor':
        return 5; // Critical alerts, lab results, etc.
      case 'Patient':
        return 2; // Appointment reminders, test results
      case 'HR Manager':
        return 8; // Staff notifications, compliance alerts
      case 'Admin':
        return 3; // System alerts, security notifications
      default:
        return 0;
    }
  };

  const notificationCount = getNotificationCount();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-lg bg-white/95 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              <a href="/">
                {isUserLoggedIn ? (
                  userRole === 'Doctor' ? 'MedConnect Pro' :
                  userRole === 'Patient' ? 'MyHealth Portal' :
                  userRole === 'HR Manager' ? 'StaffCare System' :
                  userRole === 'Admin' ? 'HospitalOS' : 'Premier Healthcare'
                ) : 'Premier Healthcare'}
              </a>
            </span>
          </div>

          {/* Desktop Navigation - Only show if not logged in */}
          {!isUserLoggedIn && (
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.to}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}

          {/* User Profile Section - Show when logged in */}
          {isUserLoggedIn ? (
            <div className="flex items-center space-x-4">
              {/* Quick Actions for different roles */}
              <div className="hidden md:flex items-center space-x-3">
                {userRole === 'Doctor' && (
                  <>
                    <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200" title="Emergency Alerts">
                      <div className="relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                          3
                        </span>
                      </div>
                    </button>
                    <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200" title="Patient Messages">
                      <MessageCircle className="w-5 h-5" />
                    </button>
                  </>
                )}

                {userRole === 'Patient' && (
                  <>
                    <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200" title="Notifications">
                      <div className="relative">
                        <Bell className="w-5 h-5" />
                        {notificationCount > 0 && (
                          <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full text-xs text-white flex items-center justify-center">
                            {notificationCount}
                          </span>
                        )}
                      </div>
                    </button>
                    <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200" title="Care Team Messages">
                      <MessageCircle className="w-5 h-5" />
                    </button>
                  </>
                )}

                {(userRole === 'HR Manager' || userRole === 'Admin') && (
                  <button className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200" title="System Notifications">
                    <div className="relative">
                      <Bell className="w-5 h-5" />
                      {notificationCount > 0 && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full text-xs text-white flex items-center justify-center">
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
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="relative">
                    <img
                      src={userInfo.avatar}
                      alt={userInfo.name}
                      className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${userInfo.statusColor} rounded-full border-2 border-white`}></div>
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-gray-900">{userInfo.name}</p>
                    <p className="text-xs text-gray-500">{userInfo.title}</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>

                {/* Dropdown Menu */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                    {/* User Info Header */}
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={userInfo.avatar}
                            alt={userInfo.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${userInfo.statusColor} rounded-full border-2 border-white`}></div>
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
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="grid grid-cols-2 gap-3 text-center">
                        {userRole === 'Doctor' && (
                          <>
                            <div className="bg-blue-50 rounded-lg p-2">
                              <div className="text-lg font-bold text-blue-600">14</div>
                              <div className="text-xs text-blue-700">Today's Patients</div>
                            </div>
                            <div className="bg-red-50 rounded-lg p-2">
                              <div className="text-lg font-bold text-red-600">3</div>
                              <div className="text-xs text-red-700">Critical Alerts</div>
                            </div>
                          </>
                        )}
                        {userRole === 'Patient' && (
                          <>
                            <div className="bg-green-50 rounded-lg p-2">
                              <div className="text-lg font-bold text-green-600">95%</div>
                              <div className="text-xs text-green-700">Health Score</div>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-2">
                              <div className="text-lg font-bold text-blue-600">Jan 15</div>
                              <div className="text-xs text-blue-700">Next Appointment</div>
                            </div>
                          </>
                        )}
                        {userRole === 'HR Manager' && (
                          <>
                            <div className="bg-purple-50 rounded-lg p-2">
                              <div className="text-lg font-bold text-purple-600">247</div>
                              <div className="text-xs text-purple-700">Active Staff</div>
                            </div>
                            <div className="bg-orange-50 rounded-lg p-2">
                              <div className="text-lg font-bold text-orange-600">12</div>
                              <div className="text-xs text-orange-700">Credentials Due</div>
                            </div>
                          </>
                        )}
                        {userRole === 'Admin' && (
                          <>
                            <div className="bg-blue-50 rounded-lg p-2">
                              <div className="text-lg font-bold text-blue-600">87%</div>
                              <div className="text-xs text-blue-700">Bed Occupancy</div>
                            </div>
                            <div className="bg-green-50 rounded-lg p-2">
                              <div className="text-lg font-bold text-green-600">99.9%</div>
                              <div className="text-xs text-green-700">System Uptime</div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700">My Profile</span>
                      </button>
                      <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200">
                        <Settings className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700">Settings</span>
                      </button>
                      {userRole === 'Patient' && (
                        <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200">
                          <Heart className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-700">Health Dashboard</span>
                        </button>
                      )}
                      {(userRole === 'Doctor' || userRole === 'HR Manager' || userRole === 'Admin') && (
                        <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200">
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
                    <div className="border-t border-gray-100 pt-2">
                      <button
                        onClick={() => {
                          setIsProfileOpen(false);
                          onLogout?.();
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
            /* Login Button - Show when not logged in */
            <div className="hidden lg:flex items-center space-x-4">
              {/* <button
                onClick={onLoginClick}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Login
              </button> */}
              <button
                onClick={onDemoClick}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium"
              >
                Try Demo
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {!isUserLoggedIn ? (
              <>
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.to}
                    className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button
                  onClick={() => {
                    onLoginClick?.();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium mt-4"
                >
                  Login
                </button>
              </>
            ) : (
              <div className="space-y-3">
                {/* Mobile User Info */}
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <img
                    src={userInfo.avatar}
                    alt={userInfo.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{userInfo.name}</p>
                    <p className="text-sm text-gray-600">{userInfo.title}</p>
                  </div>
                </div>

                {/* Mobile Menu Items */}
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <User className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">My Profile</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <Settings className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">Settings</span>
                </button>
                <button
                  onClick={() => {
                    onLogout?.();
                    setIsMenuOpen(false);
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
      {isProfileOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsProfileOpen(false)}
        />
      )}
    </nav>
  );
}