import React from 'react';
import { Bell, Search, MessageCircle, Phone } from 'lucide-react';

interface User {
  name: string;
  role: string;
  avatar: string;
}

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="bg-white border-b border-gray-100 px-4 md:px-6 py-3 md:py-4 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Search */}
        <div className="flex-1 flex items-center">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search patients, documents, or services..."
              className="pl-10 pr-4 py-2 w-full md:w-96 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-stretch md:items-center gap-3 md:gap-4">
          <div className="flex items-center space-x-2">
            <button className="p-2 text-white bg-gradient-to-r from-red-500 to-red-600 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg">
              <Phone className="w-4 h-4" />
            </button>
            <span className="text-sm font-medium text-red-600">Emergency 123</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <MessageCircle className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
            </button>
            
            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
          </div>
          
          <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">{user.role}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;