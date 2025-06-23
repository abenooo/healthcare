import React, { useState } from 'react';
import {
  Settings,
  Users,
  Stethoscope,
  DollarSign,
  Workflow,
  Shield,
  Bell,
  Globe,
  Database,
  Key,
  BarChart3,
  Activity,
  Lock,
  Server,
  Zap
} from 'lucide-react';

interface AdminSettingsProps {
  userRole: string;
}

const AdminSettings: React.FC<AdminSettingsProps> = ({ userRole }) => {
  const [activeSection, setActiveSection] = useState('users');

  // Role-specific content
  const getPageTitle = () => {
    switch (userRole) {
      case 'Admin':
        return 'System Administration';
      case 'Doctor':
        return 'Practice Settings';
      case 'HR Manager':
        return 'HR System Settings';
      default:
        return 'Settings';
    }
  };

  const getPageDescription = () => {
    switch (userRole) {
      case 'Admin':
        return 'Configure platform settings and manage system preferences';
      case 'Doctor':
        return 'Manage your practice settings and preferences';
      case 'HR Manager':
        return 'Configure HR system settings and workflows';
      default:
        return 'Manage your settings and preferences';
    }
  };

  const getAdminSections = () => {
    const baseSections = [
      { id: 'users', name: 'User Management', icon: Users },
      { id: 'analytics', name: 'Analytics', icon: BarChart3 }
    ];

    const roleSpecificSections = {
      'Admin': [
        { id: 'services', name: 'Service Configuration', icon: Stethoscope },
        { id: 'pricing', name: 'Pricing & Billing', icon: DollarSign },
        { id: 'workflows', name: 'System Workflows', icon: Workflow },
        { id: 'security', name: 'Security Settings', icon: Shield },
        { id: 'notifications', name: 'Notifications', icon: Bell },
        { id: 'integrations', name: 'Integrations', icon: Globe },
        { id: 'system', name: 'System Settings', icon: Database }
      ],
      'Doctor': [
        { id: 'practice', name: 'Practice Settings', icon: Stethoscope },
        { id: 'notifications', name: 'Notifications', icon: Bell },
        { id: 'security', name: 'Security', icon: Shield }
      ],
      'HR Manager': [
        { id: 'workflows', name: 'HR Workflows', icon: Workflow },
        { id: 'notifications', name: 'Notifications', icon: Bell },
        { id: 'security', name: 'Security', icon: Shield }
      ]
    };

    return [...baseSections, ...(roleSpecificSections[userRole as keyof typeof roleSpecificSections] || [])];
  };

  const adminSections = getAdminSections();

  const renderUserManagement = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {userRole === 'Admin' ? '1,247' : userRole === 'Doctor' ? '156' : '89'}
          </h3>
          <p className="text-gray-600 text-sm">
            {userRole === 'Admin' ? 'Total Users' : userRole === 'Doctor' ? 'Patients' : 'Staff Members'}
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {userRole === 'Admin' ? '89' : userRole === 'Doctor' ? '12' : '15'}
          </h3>
          <p className="text-gray-600 text-sm">
            {userRole === 'Admin' ? 'Active Doctors' : userRole === 'Doctor' ? 'Today\'s Appointments' : 'Active Staff'}
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">99.9%</h3>
          <p className="text-gray-600 text-sm">System Uptime</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-rose-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">A+</h3>
          <p className="text-gray-600 text-sm">Security Score</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {userRole === 'Admin' ? 'User Roles & Permissions' : 'Access Management'}
          </h3>
          {userRole === 'Admin' && (
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Add New Role
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">
              {userRole === 'Admin' ? 'Admin' : userRole === 'Doctor' ? 'Doctor' : 'HR Manager'}
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {userRole === 'Admin' ? (
                <>
                  <li>• Full system access</li>
                  <li>• User management</li>
                  <li>• System configuration</li>
                  <li>• Billing management</li>
                </>
              ) : userRole === 'Doctor' ? (
                <>
                  <li>• Patient management</li>
                  <li>• Medical records access</li>
                  <li>• Prescription writing</li>
                  <li>• Appointment scheduling</li>
                </>
              ) : (
                <>
                  <li>• Staff management</li>
                  <li>• Document management</li>
                  <li>• Onboarding workflows</li>
                  <li>• HR analytics</li>
                </>
              )}
            </ul>
          </div>
          
          {userRole === 'Admin' && (
            <>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Doctor</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Patient management</li>
                  <li>• Medical records access</li>
                  <li>• Prescription writing</li>
                  <li>• Appointment scheduling</li>
                </ul>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Staff</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Patient check-in</li>
                  <li>• Appointment scheduling</li>
                  <li>• Document management</li>
                  <li>• Basic reporting</li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {userRole === 'Doctor' ? '156' : '2,847'}
          </h3>
          <p className="text-gray-600 text-sm">
            {userRole === 'Doctor' ? 'Total Patients' : 'Platform Users'}
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {userRole === 'Doctor' ? '95%' : '98.5%'}
          </h3>
          <p className="text-gray-600 text-sm">
            {userRole === 'Doctor' ? 'Patient Satisfaction' : 'System Performance'}
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {userRole === 'Doctor' ? '12' : '1,234'}
          </h3>
          <p className="text-gray-600 text-sm">
            {userRole === 'Doctor' ? 'Appointments Today' : 'Daily Transactions'}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          {userRole === 'Doctor' ? 'Practice Analytics' : 'System Analytics'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              {userRole === 'Doctor' ? 'Patient Metrics' : 'Usage Metrics'}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-sm text-gray-700">
                  {userRole === 'Doctor' ? 'New Patients This Month' : 'Active Users'}
                </span>
                <span className="font-medium">{userRole === 'Doctor' ? '23' : '1,247'}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-sm text-gray-700">
                  {userRole === 'Doctor' ? 'Appointments Completed' : 'Documents Processed'}
                </span>
                <span className="font-medium">{userRole === 'Doctor' ? '156' : '3,456'}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <span className="text-sm text-gray-700">
                  {userRole === 'Doctor' ? 'Prescriptions Written' : 'API Calls'}
                </span>
                <span className="font-medium">{userRole === 'Doctor' ? '89' : '45,678'}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              {userRole === 'Doctor' ? 'Performance Metrics' : 'System Health'}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-sm text-gray-700">
                  {userRole === 'Doctor' ? 'Patient Satisfaction' : 'Uptime'}
                </span>
                <span className="font-medium text-green-600">
                  {userRole === 'Doctor' ? '4.9/5' : '99.9%'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-sm text-gray-700">
                  {userRole === 'Doctor' ? 'Average Wait Time' : 'Response Time'}
                </span>
                <span className="font-medium text-blue-600">
                  {userRole === 'Doctor' ? '8 min' : '45ms'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <span className="text-sm text-gray-700">
                  {userRole === 'Doctor' ? 'Follow-up Rate' : 'Error Rate'}
                </span>
                <span className="font-medium text-purple-600">
                  {userRole === 'Doctor' ? '92%' : '0.01%'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Security Configuration</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Authentication Settings</h4>
            <div className="space-y-4">
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Two-Factor Authentication</span>
                <input type="checkbox" className="toggle" defaultChecked />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Password Complexity</span>
                <input type="checkbox" className="toggle" defaultChecked />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Session Timeout</span>
                <input type="checkbox" className="toggle" defaultChecked />
              </label>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Data Protection</h4>
            <div className="space-y-4">
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Data Encryption</span>
                <input type="checkbox" className="toggle" defaultChecked />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Audit Logging</span>
                <input type="checkbox" className="toggle" defaultChecked />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Backup Encryption</span>
                <input type="checkbox" className="toggle" defaultChecked />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'users':
        return renderUserManagement();
      case 'analytics':
        return renderAnalytics();
      case 'security':
        return renderSecuritySettings();
      case 'services':
        return <div className="bg-white rounded-xl p-6 border border-gray-100"><p>Service configuration coming soon...</p></div>;
      case 'pricing':
        return <div className="bg-white rounded-xl p-6 border border-gray-100"><p>Pricing settings coming soon...</p></div>;
      case 'workflows':
        return <div className="bg-white rounded-xl p-6 border border-gray-100"><p>Workflow configuration coming soon...</p></div>;
      case 'notifications':
        return <div className="bg-white rounded-xl p-6 border border-gray-100"><p>Notification settings coming soon...</p></div>;
      case 'integrations':
        return <div className="bg-white rounded-xl p-6 border border-gray-100"><p>Integration settings coming soon...</p></div>;
      case 'system':
        return <div className="bg-white rounded-xl p-6 border border-gray-100"><p>System settings coming soon...</p></div>;
      case 'practice':
        return <div className="bg-white rounded-xl p-6 border border-gray-100"><p>Practice settings coming soon...</p></div>;
      default:
        return renderUserManagement();
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl flex items-center justify-center">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{getPageTitle()}</h1>
            <p className="text-gray-600">{getPageDescription()}</p>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {adminSections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 text-sm ${
                  activeSection === section.id
                    ? 'bg-gray-100 text-gray-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{section.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
};

export default AdminSettings;