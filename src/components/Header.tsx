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
    <header className="bg-white border-b border-gray-100 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search patients, documents, or services..."
              className="pl-10 pr-4 py-2 w-96 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button className="p-2 text-white bg-gradient-to-r from-red-500 to-red-600 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg">
              <Phone className="w-4 h-4" />
            </button>
            <span className="text-sm font-medium text-red-600">Emergency</span>
          </div>
          
          <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <MessageCircle className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
          </button>
          
          <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
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