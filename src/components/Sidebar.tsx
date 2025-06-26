import React from 'react';
import { 
  LayoutDashboard, 
  Stethoscope, 
  Users, 
  FileText, 
  UserCheck, 
  Heart,
  Settings,
  Shield,
  Calendar,
  CreditCard,
  MessageCircle,
  Pill,
  Activity,
  BarChart3
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userRole: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, userRole }) => {
  // Define menu items based on user role
  const getMenuItems = () => {
    switch (userRole) {
      case 'Doctor':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, color: 'text-blue-600' },
          { id: 'services', label: 'Medical Services', icon: Stethoscope, color: 'text-emerald-600' },
          { id: 'patients', label: 'Patient Management', icon: Heart, color: 'text-rose-600' },
          { id: 'documents', label: 'Medical Records', icon: FileText, color: 'text-amber-600' },
          { id: 'analytics', label: 'Analytics', icon: BarChart3, color: 'text-purple-600' }
        ];
      case 'Patient':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, color: 'text-blue-600' },
          { id: 'services', label: 'Book Services', icon: Calendar, color: 'text-emerald-600' },
          { id: 'patients', label: 'My Health', icon: Heart, color: 'text-rose-600' },
          { id: 'documents', label: 'My Documents', icon: FileText, color: 'text-amber-600' },
          { id: 'billing', label: 'Billing', icon: CreditCard, color: 'text-green-600' },
          { id: 'messages', label: 'Messages', icon: MessageCircle, color: 'text-blue-600' }
        ];
      case 'HR Manager':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, color: 'text-blue-600' },
          { id: 'hr', label: 'HR Management', icon: Users, color: 'text-purple-600' },
          { id: 'documents', label: 'Employee Documents', icon: FileText, color: 'text-amber-600' },
          { id: 'onboarding', label: 'Onboarding', icon: UserCheck, color: 'text-teal-600' },
          { id: 'analytics', label: 'HR Analytics', icon: BarChart3, color: 'text-indigo-600' }
        ];
      case 'Admin':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, color: 'text-blue-600' },
          { id: 'admin', label: 'System Settings', icon: Settings, color: 'text-gray-600' },
          { id: 'hr', label: 'HR Overview', icon: Users, color: 'text-purple-600' },
          { id: 'documents', label: 'Document Center', icon: FileText, color: 'text-amber-600' },
          { id: 'analytics', label: 'System Analytics', icon: BarChart3, color: 'text-indigo-600' },
          { id: 'security', label: 'Security', icon: Shield, color: 'text-red-600' }
        ];
      default:
        return [
          { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, color: 'text-blue-600' }
        ];
    }
  };

  const menuItems = getMenuItems();

  // Sidebar header text based on role
  const portalName = {
    'Doctor': 'Doctor Portal',
    'Patient': 'Patient Portal',
    'HR Manager': 'HR Portal',
    'Admin': 'Admin Portal'
  }[userRole] || 'Portal';

  return (
    <div className="w-64 bg-white shadow-xl border-r border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              HealthCare Pro
            </h2>
            <p className="text-sm text-gray-500">{portalName}</p>
          </div>
        </div>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon 
                    className={`w-5 h-5 transition-colors duration-200 ${
                      isActive ? item.color : 'text-gray-400 group-hover:text-gray-600'
                    }`} 
                  />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;