import React from 'react';
import {
  Calendar,
  Upload,
  MessageCircle,
  Phone,
  Activity,
  Users,
  Clock,
  TrendingUp,
  FileText,
  Heart,
  Shield,
  Zap,
  Stethoscope,
  UserCheck,
  Settings,
  CreditCard,
  Pill,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  Star,
  Award
} from 'lucide-react';

interface DashboardProps {
  setActiveTab: (tab: string) => void;
  userRole: string;
}

const Dashboard: React.FC<DashboardProps> = ({ setActiveTab, userRole }) => {
  // Role-specific dashboard content
  const getDashboardContent = () => {
    switch (userRole) {
      case 'Doctor':
        return renderDoctorDashboard();
      case 'Patient':
        return renderPatientDashboard();
      case 'HR Manager':
        return renderHRDashboard();
      case 'Admin':
        return renderAdminDashboard();
      default:
        return renderDoctorDashboard();
    }
  };

  const renderDoctorDashboard = () => {
    const quickActions = [
      {
        title: 'View Patients',
        description: 'Manage patient records and appointments',
        icon: Heart,
        color: 'from-rose-500 to-rose-600',
        action: () => setActiveTab('patients')
      },
      {
        title: 'Schedule Appointment',
        description: 'Book new patient appointments',
        icon: Calendar,
        color: 'from-blue-500 to-blue-600',
        action: () => setActiveTab('services')
      },
      {
        title: 'Medical Records',
        description: 'Access patient medical history',
        icon: FileText,
        color: 'from-emerald-500 to-emerald-600',
        action: () => setActiveTab('documents')
      },
      {
        title: 'Prescriptions',
        description: 'Manage patient medications',
        icon: Pill,
        color: 'from-purple-500 to-purple-600',
        action: () => {}
      }
    ];

    const stats = [
      {
        title: 'Today\'s Patients',
        value: '12',
        change: '+3',
        icon: Users,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
      },
      {
        title: 'Appointments',
        value: '8',
        change: '+2',
        icon: Calendar,
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50'
      },
      {
        title: 'Prescriptions',
        value: '15',
        change: '+5',
        icon: Pill,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
      },
      {
        title: 'Patient Satisfaction',
        value: '4.9/5',
        change: '+0.2',
        icon: Star,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50'
      }
    ];

    return { quickActions, stats, title: 'Doctor Dashboard', subtitle: 'Manage your patients and medical practice' };
  };

  const renderPatientDashboard = () => {
    const quickActions = [
      {
        title: 'Book Appointment',
        description: 'Schedule a visit with your doctor',
        icon: Calendar,
        color: 'from-blue-500 to-blue-600',
        action: () => setActiveTab('services')
      },
      {
        title: 'View Health Records',
        description: 'Access your medical history',
        icon: FileText,
        color: 'from-emerald-500 to-emerald-600',
        action: () => setActiveTab('documents')
      },
      {
        title: 'Health Tracking',
        description: 'Monitor your health metrics',
        icon: Activity,
        color: 'from-purple-500 to-purple-600',
        action: () => setActiveTab('patients')
      },
      {
        title: 'Message Doctor',
        description: 'Contact your healthcare provider',
        icon: MessageCircle,
        color: 'from-rose-500 to-rose-600',
        action: () => setActiveTab('messages')
      }
    ];

    const stats = [
      {
        title: 'Health Score',
        value: '94%',
        change: '+2%',
        icon: Heart,
        color: 'text-rose-600',
        bgColor: 'bg-rose-50'
      },
      {
        title: 'Next Appointment',
        value: 'Jan 15',
        change: '3 days',
        icon: Calendar,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
      },
      {
        title: 'Active Prescriptions',
        value: '3',
        change: 'Current',
        icon: Pill,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
      },
      {
        title: 'Last Checkup',
        value: 'Dec 20',
        change: '26 days ago',
        icon: Stethoscope,
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50'
      }
    ];

    return { quickActions, stats, title: 'Patient Portal', subtitle: 'Manage your health and medical care' };
  };

  const renderHRDashboard = () => {
    const quickActions = [
      {
        title: 'Staff Management',
        description: 'Manage employee records and performance',
        icon: Users,
        color: 'from-purple-500 to-purple-600',
        action: () => setActiveTab('hr')
      },
      {
        title: 'Document Signing',
        description: 'Manage employee document signatures',
        icon: FileText,
        color: 'from-emerald-500 to-emerald-600',
        action: () => setActiveTab('documents')
      },
      {
        title: 'New Employee',
        description: 'Start onboarding process',
        icon: UserCheck,
        color: 'from-blue-500 to-blue-600',
        action: () => setActiveTab('onboarding')
      },
      {
        title: 'HR Analytics',
        description: 'View workforce insights',
        icon: BarChart3,
        color: 'from-indigo-500 to-indigo-600',
        action: () => setActiveTab('analytics')
      }
    ];

    const stats = [
      {
        title: 'Total Employees',
        value: '245',
        change: '+12',
        icon: Users,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
      },
      {
        title: 'Pending Documents',
        value: '8',
        change: '-3',
        icon: FileText,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50'
      },
      {
        title: 'New Hires',
        value: '5',
        change: 'This month',
        icon: UserCheck,
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50'
      },
      {
        title: 'Satisfaction',
        value: '4.7/5',
        change: '+0.3',
        icon: Award,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
      }
    ];

    return { quickActions, stats, title: 'HR Management Dashboard', subtitle: 'Manage staff and human resources' };
  };

  const renderAdminDashboard = () => {
    const quickActions = [
      {
        title: 'System Settings',
        description: 'Configure platform settings',
        icon: Settings,
        color: 'from-gray-500 to-gray-600',
        action: () => setActiveTab('admin')
      },
      {
        title: 'User Management',
        description: 'Manage system users and permissions',
        icon: Users,
        color: 'from-blue-500 to-blue-600',
        action: () => setActiveTab('hr')
      },
      {
        title: 'System Analytics',
        description: 'View platform performance metrics',
        icon: BarChart3,
        color: 'from-purple-500 to-purple-600',
        action: () => setActiveTab('analytics')
      },
      {
        title: 'Security Center',
        description: 'Monitor security and compliance',
        icon: Shield,
        color: 'from-red-500 to-red-600',
        action: () => setActiveTab('security')
      }
    ];

    const stats = [
      {
        title: 'System Uptime',
        value: '99.9%',
        change: 'Excellent',
        icon: Zap,
        color: 'text-green-600',
        bgColor: 'bg-green-50'
      },
      {
        title: 'Active Users',
        value: '1,247',
        change: '+45',
        icon: Users,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
      },
      {
        title: 'Security Alerts',
        value: '0',
        change: 'All clear',
        icon: Shield,
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50'
      },
      {
        title: 'Performance',
        value: '98%',
        change: '+2%',
        icon: TrendingUp,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
      }
    ];

    return { quickActions, stats, title: 'Admin Dashboard', subtitle: 'System administration and management' };
  };

  const { quickActions, stats, title, subtitle } = getDashboardContent();

  const recentActivities = [
    {
      action: userRole === 'Patient' ? 'Appointment confirmed' : 'New patient registration',
      patient: userRole === 'Patient' ? 'Dr. Sarah Johnson' : 'John Smith',
      time: '2 minutes ago',
      type: 'appointment'
    },
    {
      action: userRole === 'Patient' ? 'Lab results available' : 'Lab results uploaded',
      patient: userRole === 'Patient' ? 'Blood Test Results' : 'Sarah Johnson',
      time: '15 minutes ago',
      type: 'document'
    },
    {
      action: userRole === 'Patient' ? 'Prescription refilled' : 'Prescription renewed',
      patient: userRole === 'Patient' ? 'Lisinopril 10mg' : 'Emily Davis',
      time: '1 hour ago',
      type: 'prescription'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-blue-100 text-lg">{subtitle}</p>
          </div>
          <div className="hidden md:block">
            <Shield className="w-24 h-24 text-white opacity-20" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                onClick={action.action}
                className="bg-white rounded-2xl p-6 text-left hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-gray-600 text-sm">{action.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Statistics */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Today's Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="flex items-center space-x-1 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">{stat.change}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Recent Activities</h3>
            <Activity className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.patient}</p>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">System Status</h3>
            <Zap className="w-5 h-5 text-green-500" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Platform Status</span>
              <span className="text-sm font-medium text-green-600">Operational</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">API Response Time</span>
              <span className="text-sm font-medium text-green-600">45ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Database Health</span>
              <span className="text-sm font-medium text-green-600">Excellent</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Security Score</span>
              <span className="text-sm font-medium text-blue-600">A+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;