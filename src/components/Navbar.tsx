import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, ChevronDown, X, Menu, ArrowRight, Phone } from "lucide-react";

const navigationItems = [
  { name: "Services", to: "/#services" },
  { name: "About", to: "/about" },
  { name: "FAQ", to: "/faq" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar({ onLoginClick }: { onLoginClick?: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-lg bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900"><a href="/">Premier Healthcare</a></span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Contact Sales
            </button> */}
            <button
              onClick={onLoginClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Request Demo
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
