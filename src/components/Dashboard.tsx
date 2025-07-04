import React from 'react';
import {
  Calendar,
  Users,
  Activity,
  TrendingUp,
  Heart,
  Stethoscope,
  FileText,
  Clock,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Star,
  Phone,
  Video,
  MessageCircle,
  Pill,
  BarChart3,
  UserPlus,
  Shield,
  Thermometer,
  Zap,
  Brain,
  Eye,
  Bone,
  Download,
  Upload
} from 'lucide-react';

interface DashboardProps {
  userRole: string;
  setActiveTab?: (tab: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ userRole, setActiveTab }) => {
  const getDashboardTitle = () => {
    switch (userRole) {
      case 'Doctor':
        return 'Clinical Dashboard';
      case 'Patient':
        return 'Patient Portal';
      case 'HR Manager':
        return 'Staff Management';
      case 'Admin':
        return 'Hospital Administration';
      case 'Care Giver':
        return 'Care Giver Dashboard';
      default:
        return 'Dashboard';
    }
  };

  const getDashboardDescription = () => {
    switch (userRole) {
      case 'Doctor':
        return 'Manage patient care, clinical workflows, and medical documentation';
      case 'Patient':
        return 'Access your health records, appointments, and care team';
      case 'HR Manager':
        return 'Oversee medical staff, credentials, and workforce management';
      case 'Admin':
        return 'Monitor hospital operations, compliance, and system performance';
      case 'Care Giver':
        return 'Manage patient care and communication';
      default:
        return 'Welcome to your healthcare dashboard';
    }
  };

  const getMetrics = () => {
    switch (userRole) {
      case 'Doctor':
        return [
          { title: "Today's Patients", value: "14", icon: Users, color: "blue", change: "Next: Room 302 - 2:30 PM", urgent: false },
          { title: "Critical Alerts", value: "3", icon: AlertTriangle, color: "red", change: "2 High Priority", urgent: true },
          { title: "Pending Orders", value: "7", icon: FileText, color: "orange", change: "Lab results awaiting review", urgent: false },
          { title: "Avg Response Time", value: "8 min", icon: Clock, color: "green", change: "↓2 min from last week", urgent: false }
        ];
      case 'Patient':
        return [
          { title: "Next Appointment", value: "Jan 15", icon: Calendar, color: "blue", change: "Dr. Johnson - Cardiology", urgent: false },
          { title: "Vital Signs", value: "Normal", icon: Heart, color: "green", change: "Last updated: Today 9:00 AM", urgent: false },
          { title: "Active Medications", value: "4", icon: Pill, color: "purple", change: "1 refill needed", urgent: true },
          { title: "Test Results", value: "2 New", icon: FileText, color: "amber", change: "Blood work completed", urgent: false }
        ];
      case 'HR Manager':
        return [
          { title: "Active Staff", value: "247", icon: Users, color: "blue", change: "3 new hires this week", urgent: false },
          { title: "Credential Expiry", value: "12", icon: Shield, color: "red", change: "Require immediate attention", urgent: true },
          { title: "Shift Coverage", value: "98%", icon: Clock, color: "green", change: "2 open shifts remaining", urgent: false },
          { title: "Training Due", value: "23", icon: FileText, color: "orange", change: "Mandatory compliance training", urgent: false }
        ];
      case 'Admin':
        return [
          { title: "Bed Occupancy", value: "87%", icon: Activity, color: "blue", change: "234/270 beds occupied", urgent: false },
          { title: "ER Wait Time", value: "12 min", icon: Clock, color: "green", change: "↓5 min from yesterday", urgent: false },
          { title: "Revenue Today", value: "$847K", icon: DollarSign, color: "purple", change: "+12% vs last Monday", urgent: false },
          { title: "System Alerts", value: "2", icon: AlertTriangle, color: "red", change: "Network connectivity issues", urgent: true }
        ];
      case 'Care Giver':
        return [
          { title: "Assigned Patients", value: "5", icon: Users, color: "blue", change: "New patient assigned", urgent: false },
          { title: "Completed Tasks", value: "12", icon: CheckCircle, color: "green", change: "New task completed", urgent: false },
          { title: "Communication", value: "20", icon: MessageCircle, color: "purple", change: "New message received", urgent: false },
          { title: "Patient Satisfaction", value: "95%", icon: Star, color: "yellow", change: "New feedback received", urgent: false }
        ];
      default:
        return [];
    }
  };

  const getRecentActivity = () => {
    switch (userRole) {
      case 'Doctor':
        return [
          { time: "2:15 PM", action: "Lab results reviewed for Maria Rodriguez (Room 305)", type: "lab", priority: "normal" },
          { time: "1:45 PM", action: "Discharge orders completed for John Smith", type: "discharge", priority: "normal" },
          { time: "1:30 PM", action: "CRITICAL: Patient in Room 312 - BP 180/110", type: "alert", priority: "critical" },
          { time: "12:50 PM", action: "Prescription sent to pharmacy for Emily Chen", type: "prescription", priority: "normal" },
          { time: "12:30 PM", action: "Consultation note added for David Wilson", type: "note", priority: "normal" }
        ];
      case 'Patient':
        return [
          { time: "Today", action: "Lab results available - Blood Chemistry Panel", type: "results", priority: "normal" },
          { time: "Yesterday", action: "Prescription refill approved - Lisinopril 10mg", type: "prescription", priority: "normal" },
          { time: "2 days ago", action: "Appointment confirmed with Dr. Johnson (Jan 15)", type: "appointment", priority: "normal" },
          { time: "3 days ago", action: "Secure message from Dr. Chen regarding test results", type: "message", priority: "normal" },
          { time: "1 week ago", action: "Annual physical examination completed", type: "visit", priority: "normal" }
        ];
      case 'HR Manager':
        return [
          { time: "10:30 AM", action: "Dr. Sarah Martinez - Medical license renewed", type: "credential", priority: "normal" },
          { time: "9:45 AM", action: "URGENT: 3 nurses needed for night shift (ICU)", type: "staffing", priority: "urgent" },
          { time: "9:15 AM", action: "Background check completed for new hire - RN Position", type: "hiring", priority: "normal" },
          { time: "8:30 AM", action: "Mandatory training reminder sent to 23 staff members", type: "training", priority: "normal" },
          { time: "Yesterday", action: "Performance review scheduled for Dr. Williams", type: "review", priority: "normal" }
        ];
      case 'Admin':
        return [
          { time: "2:00 PM", action: "Emergency generator test completed successfully", type: "maintenance", priority: "normal" },
          { time: "1:30 PM", action: "HIPAA compliance audit - 2 minor findings", type: "compliance", priority: "urgent" },
          { time: "12:45 PM", action: "New patient admission - ICU bed assigned", type: "admission", priority: "normal" },
          { time: "11:20 AM", action: "Pharmacy inventory restocked - Critical medications", type: "supply", priority: "normal" },
          { time: "10:15 AM", action: "Network maintenance completed - All systems operational", type: "system", priority: "normal" }
        ];
      case 'Care Giver':
        return [
          { time: "Today", action: "New patient assigned", type: "assignment", priority: "normal" },
          { time: "Yesterday", action: "Task completed", type: "task", priority: "normal" },
          { time: "2 days ago", action: "Message received", type: "communication", priority: "normal" },
          { time: "3 days ago", action: "Feedback received", type: "feedback", priority: "normal" }
        ];
      default:
        return [];
    }
  };

  const getUpcomingItems = () => {
    switch (userRole) {
      case 'Doctor':
        return [
          { time: "2:30 PM", title: "Maria Rodriguez - Room 302", type: "Post-op follow-up", specialty: "Cardiology", priority: "normal" },
          { time: "3:00 PM", title: "James Wilson - Room 315", type: "Consultation", specialty: "Neurology", priority: "urgent" },
          { time: "3:30 PM", title: "Sarah Davis - ER Bay 3", type: "Emergency consult", specialty: "Emergency", priority: "critical" },
          { time: "4:00 PM", title: "Multidisciplinary Team Meeting", type: "Conference", specialty: "ICU", priority: "normal" }
        ];
      case 'Patient':
        return [
          { time: "Jan 15, 10:00 AM", title: "Cardiology Follow-up", type: "Dr. Sarah Johnson", location: "Cardiology Clinic - 3rd Floor" },
          { time: "Jan 22, 2:30 PM", title: "Lab Work", type: "Fasting Blood Panel", location: "Laboratory - 1st Floor" },
          { time: "Feb 1, 9:00 AM", title: "Physical Therapy", type: "Session #3", location: "Rehabilitation Center" },
          { time: "Feb 15, 11:00 AM", title: "Endocrinology Consult", type: "Dr. Michael Chen", location: "Specialty Clinic - 4th Floor" }
        ];
      case 'HR Manager':
        return [
          { time: "Tomorrow", title: "New Nurse Orientation", type: "3 RNs starting", department: "Medical-Surgical Unit" },
          { time: "Jan 20", title: "Medical Staff Meeting", type: "Monthly review", department: "All Departments" },
          { time: "Jan 25", title: "Credentialing Committee", type: "Physician privileges review", department: "Medical Staff Office" },
          { time: "Feb 1", title: "Annual Competency Testing", type: "All nursing staff", department: "Education Department" }
        ];
      case 'Admin':
        return [
          { time: "Tonight 11 PM", title: "System Maintenance", type: "EMR upgrade deployment", impact: "2-hour downtime" },
          { time: "Tomorrow", title: "Joint Commission Survey", type: "Accreditation review", impact: "Hospital-wide" },
          { time: "Jan 20", title: "Board of Directors Meeting", type: "Quarterly review", impact: "Executive team" },
          { time: "Jan 25", title: "Emergency Drill", type: "Fire safety exercise", impact: "All departments" }
        ];
      case 'Care Giver':
        return [
          { time: "Today", title: "New patient assigned", type: "assignment", priority: "normal" },
          { time: "Today", title: "Task assigned", type: "task", priority: "normal" },
          { time: "Today", title: "Message received", type: "communication", priority: "normal" },
          { time: "Today", title: "Feedback received", type: "feedback", priority: "normal" }
        ];
      default:
        return [];
    }
  };

  const metrics = getMetrics();
  const recentActivity = getRecentActivity();
  const upcomingItems = getUpcomingItems();

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      red: 'bg-red-50 text-red-600',
      amber: 'bg-amber-50 text-amber-600',
      orange: 'bg-orange-50 text-orange-600',
      purple: 'bg-purple-50 text-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'border-l-4 border-red-500 bg-red-50';
      case 'urgent':
        return 'border-l-4 border-orange-500 bg-orange-50';
      default:
        return 'border-l-4 border-gray-200 bg-white';
    }
  };

  return (
    <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6 w-full max-w-full overflow-x-hidden">
      {/* Header */}
      <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-100 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 truncate">{getDashboardTitle()}</h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2 truncate">{getDashboardDescription()}</p>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="text-right min-w-0">
              <p className="text-xs sm:text-sm text-gray-500 truncate">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'short', 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-sm sm:text-lg font-semibold text-gray-900">
                {new Date().toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
            {userRole === 'Doctor' && (
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm text-gray-600">On Call</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Critical Alerts Banner */}
      {userRole === 'Doctor' && (
        <div className="bg-red-50 border border-red-200 rounded-lg sm:rounded-xl p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <h3 className="text-sm sm:text-base font-semibold text-red-900 truncate">Critical Patient Alert</h3>
                <p className="text-xs sm:text-sm text-red-700 truncate">Patient in Room 312 requires immediate attention</p>
              </div>
            </div>
            <button className="w-full sm:w-auto bg-red-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm">
              Respond
            </button>
          </div>
        </div>
      )}

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className={`bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border shadow-sm hover:shadow-md transition-shadow duration-200 ${
              metric.urgent ? 'border-red-200 bg-red-50' : 'border-gray-100'
            }`}>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center ${getColorClasses(metric.color)}`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                {metric.urgent && <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-2 truncate">{metric.title}</p>
              <p className={`text-xs ${metric.urgent ? 'text-red-600 font-medium' : 'text-gray-500'} truncate`}>
                {metric.change}
              </p>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-100 shadow-sm">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Recent Activity 123</h3>
          <div className="space-y-2 sm:space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className={`p-3 sm:p-4 rounded-lg transition-colors duration-200 hover:bg-gray-50 ${getPriorityColor(activity.priority)}`}>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="flex-shrink-0">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.priority === 'critical' ? 'bg-red-500' :
                      activity.priority === 'urgent' ? 'bg-orange-500' : 'bg-blue-500'
                    }`}></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-900 break-words">{activity.action}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-1 space-y-1 sm:space-y-0">
                      <span className="text-xs text-gray-500">{activity.time}</span>
                      <span className={`text-xs px-2 py-1 rounded-full inline-block w-fit ${
                        activity.type === 'alert' ? 'bg-red-100 text-red-700' :
                        activity.type === 'lab' ? 'bg-blue-100 text-blue-700' :
                        activity.type === 'prescription' ? 'bg-green-100 text-green-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {activity.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Items */}
        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-100 shadow-sm">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
            {userRole === 'Doctor' ? 'Today\'s Schedule' : 
             userRole === 'Patient' ? 'Upcoming Appointments' :
             userRole === 'HR Manager' ? 'Upcoming Events' : 'Scheduled Activities'}
          </h3>
          <div className="space-y-3 sm:space-y-4">
            {upcomingItems.map((item, index) => (
              <div key={index} className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 text-xs sm:text-sm truncate flex-1 mr-2">{item.title}</h4>
                  {userRole === 'Doctor' && 'priority' in item && item.priority === 'critical' && (
                    <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 flex-shrink-0" />
                  )}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 truncate">{item.type}</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
                  <span className="text-xs text-gray-500">{item.time}</span>
                  {userRole === 'Doctor' && (
                    <div className="flex items-center space-x-1">
                      <button className="p-1 text-green-600 hover:text-green-800" title="Start Video Call">
                        <Video className="w-3 h-3" />
                      </button>
                      <button className="p-1 text-blue-600 hover:text-blue-800" title="Call">
                        <Phone className="w-3 h-3" />
                      </button>
                      <button className="p-1 text-purple-600 hover:text-purple-800" title="Message">
                        <MessageCircle className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-100 shadow-sm">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
          {userRole === 'Doctor' && (
            <>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Patient Chart</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Lab Orders</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <Pill className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Prescriptions</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Schedule</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <Video className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Telemedicine</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Secure Messages</span>
              </button>
            </>
          )}

          {userRole === 'Patient' && (
            <>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Book Appointment</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Test Results</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <Pill className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Medications</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Message Provider</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Pay Bills</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Health Tracker</span>
              </button>
            </>
          )}

          {userRole === 'HR Manager' && (
            <>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <UserPlus className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Hire Staff</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Credentials</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Scheduling</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Reports</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Policies</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Compliance</span>
              </button>
            </>
          )}

          {userRole === 'Admin' && (
            <>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Bed Management</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Analytics</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Security</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">User Management</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Compliance</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Clinical Systems</span>
              </button>
            </>
          )}

          {userRole === 'Care Giver' && (
            <>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Add Progress Note</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Assigned Patients</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Today's Schedule</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <Download className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Download Form</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Upload Signed Form</span>
              </button>
              <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 block">Contact HR</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;