import React, { useState } from 'react';
import {
  User,
  Calendar,
  FileText,
  Pill,
  CreditCard,
  MessageCircle,
  Download,
  Upload,
  Heart,
  Activity,
  Clock,
  CheckCircle,
  Stethoscope,
  TrendingUp,
  AlertTriangle,
  Phone,
  Video,
  Star
} from 'lucide-react';

interface PatientPortalProps {
  userRole: string;
}

const PatientPortal: React.FC<PatientPortalProps> = ({ userRole }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Role-specific content
  const getPageTitle = () => {
    switch (userRole) {
      case 'Doctor':
        return 'Patient Management';
      case 'Patient':
        return 'My Health Portal';
      case 'HR Manager':
        return 'Employee Health Overview';
      case 'Admin':
        return 'Patient System Overview';
      default:
        return 'Patient Portal';
    }
  };

  const getPageDescription = () => {
    switch (userRole) {
      case 'Doctor':
        return 'Manage patient records and provide care';
      case 'Patient':
        return 'Access your health information and manage care';
      case 'HR Manager':
        return 'Monitor employee health and wellness programs';
      case 'Admin':
        return 'Oversee patient management system';
      default:
        return 'Manage your health information and care';
    }
  };

  const patientTabs = [
    { id: 'overview', name: 'Overview', icon: User },
    { id: 'appointments', name: userRole === 'Doctor' ? 'Patient Appointments' : 'My Appointments', icon: Calendar },
    { id: 'records', name: userRole === 'Doctor' ? 'Patient Records' : 'My Records', icon: FileText },
    { id: 'prescriptions', name: userRole === 'Doctor' ? 'Prescriptions' : 'My Prescriptions', icon: Pill },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'messages', name: 'Messages', icon: MessageCircle }
  ];

  const upcomingAppointments = [
    {
      date: '2024-01-15',
      time: '10:00 AM',
      doctor: userRole === 'Patient' ? 'Dr. Sarah Johnson' : 'John Smith',
      type: 'Cardiology Consultation',
      status: 'Confirmed'
    },
    {
      date: '2024-01-22',
      time: '2:30 PM',
      doctor: userRole === 'Patient' ? 'Dr. Michael Chen' : 'Emily Davis',
      type: 'Follow-up Visit',
      status: 'Pending'
    }
  ];

  const medicalRecords = [
    {
      date: '2024-01-10',
      type: 'Lab Results',
      title: 'Blood Test - Complete Panel',
      status: 'Ready',
      doctor: 'Dr. Sarah Johnson'
    },
    {
      date: '2024-01-05',
      type: 'Imaging',
      title: 'Chest X-Ray',
      status: 'Ready',
      doctor: 'Dr. Michael Chen'
    },
    {
      date: '2024-01-01',
      type: 'Visit Summary',
      title: 'Annual Physical Examination',
      status: 'Ready',
      doctor: 'Dr. Sarah Johnson'
    }
  ];

  const prescriptions = [
    {
      medication: 'Lisinopril 10mg',
      prescribed: '2024-01-01',
      refills: 2,
      status: 'Active',
      doctor: 'Dr. Sarah Johnson'
    },
    {
      medication: 'Metformin 500mg',
      prescribed: '2024-01-01',
      refills: 1,
      status: 'Active',
      doctor: 'Dr. Sarah Johnson'
    },
    {
      medication: 'Atorvastatin 20mg',
      prescribed: '2023-12-15',
      refills: 0,
      status: 'Needs Refill',
      doctor: 'Dr. Michael Chen'
    }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Health Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">120/80</h3>
          <p className="text-gray-600 text-sm">Blood Pressure</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">72</h3>
          <p className="text-gray-600 text-sm">Heart Rate</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">95%</h3>
          <p className="text-gray-600 text-sm">Health Score</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">7.5h</h3>
          <p className="text-gray-600 text-sm">Avg Sleep</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left">
            <Calendar className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-medium text-gray-900">
              {userRole === 'Doctor' ? 'Schedule Patient' : 'Book Appointment'}
            </h4>
            <p className="text-sm text-gray-600">
              {userRole === 'Doctor' ? 'Schedule patient visit' : 'Schedule a visit'}
            </p>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left">
            <Upload className="w-6 h-6 text-green-600 mb-2" />
            <h4 className="font-medium text-gray-900">
              {userRole === 'Doctor' ? 'Upload Results' : 'Upload Document'}
            </h4>
            <p className="text-sm text-gray-600">
              {userRole === 'Doctor' ? 'Upload test results' : 'Share medical files'}
            </p>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left">
            <MessageCircle className="w-6 h-6 text-purple-600 mb-2" />
            <h4 className="font-medium text-gray-900">
              {userRole === 'Doctor' ? 'Message Patient' : 'Message Doctor'}
            </h4>
            <p className="text-sm text-gray-600">
              {userRole === 'Doctor' ? 'Contact patient' : 'Ask questions'}
            </p>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left">
            <Pill className="w-6 h-6 text-orange-600 mb-2" />
            <h4 className="font-medium text-gray-900">
              {userRole === 'Doctor' ? 'Prescribe Medication' : 'Refill Prescription'}
            </h4>
            <p className="text-sm text-gray-600">
              {userRole === 'Doctor' ? 'Write prescription' : 'Request refills'}
            </p>
          </button>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {userRole === 'Doctor' ? 'Today\'s Appointments' : 'Upcoming Appointments'}
        </h3>
        <div className="space-y-4">
          {upcomingAppointments.slice(0, 2).map((appointment, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">{appointment.type}</h4>
                  <p className="text-sm text-gray-600">
                    {userRole === 'Doctor' ? `Patient: ${appointment.doctor}` : appointment.doctor}
                  </p>
                  <p className="text-sm text-gray-600">{appointment.date} at {appointment.time}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    appointment.status === 'Confirmed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {appointment.status}
                  </span>
                  {userRole === 'Doctor' && (
                    <button className="p-2 text-blue-600 hover:text-blue-800">
                      <Video className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Health Insights for Doctors */}
      {userRole === 'Doctor' && (
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Patient Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">85%</div>
              <div className="text-sm text-blue-700">Treatment Success Rate</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">4.9/5</div>
              <div className="text-sm text-green-700">Patient Satisfaction</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-sm text-purple-700">Patients Today</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderAppointments = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {userRole === 'Doctor' ? 'Patient Appointments' : 'My Appointments'}
          </h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            {userRole === 'Doctor' ? 'Schedule Patient' : 'Book New Appointment'}
          </button>
        </div>
        
        <div className="space-y-4">
          {upcomingAppointments.map((appointment, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{appointment.type}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {userRole === 'Doctor' ? `Patient: ${appointment.doctor}` : appointment.doctor}
                  </p>
                  <p className="text-sm text-gray-600">{appointment.date} at {appointment.time}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    appointment.status === 'Confirmed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {appointment.status}
                  </span>
                  <div className="flex items-center space-x-2">
                    {userRole === 'Doctor' && (
                      <>
                        <button className="p-2 text-green-600 hover:text-green-800" title="Start Video Call">
                          <Video className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-blue-600 hover:text-blue-800" title="Call Patient">
                          <Phone className="w-4 h-4" />
                        </button>
                      </>
                    )}
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      {userRole === 'Doctor' ? 'View Details' : 'Reschedule'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMedicalRecords = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {userRole === 'Doctor' ? 'Patient Medical Records' : 'My Medical Records'}
          </h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
            <Upload className="w-4 h-4" />
            <span>{userRole === 'Doctor' ? 'Upload Results' : 'Upload Document'}</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {medicalRecords.map((record, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{record.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{record.type}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-gray-600">{record.date}</span>
                    {userRole === 'Patient' && (
                      <span className="text-sm text-gray-600">Dr: {record.doctor}</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {record.status}
                  </span>
                  <button className="p-2 text-blue-600 hover:text-blue-800">
                    <Download className="w-4 h-4" />
                  </button>
                  {userRole === 'Doctor' && (
                    <button className="p-2 text-gray-600 hover:text-gray-800">
                      <FileText className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPrescriptions = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          {userRole === 'Doctor' ? 'Patient Prescriptions' : 'My Prescriptions'}
        </h3>
        
        <div className="space-y-4">
          {prescriptions.map((prescription, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{prescription.medication}</h4>
                  <p className="text-sm text-gray-600 mt-1">Prescribed: {prescription.prescribed}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-gray-600">Refills remaining: {prescription.refills}</span>
                    {userRole === 'Patient' && (
                      <span className="text-sm text-gray-600">Prescribed by: {prescription.doctor}</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    prescription.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {prescription.status}
                  </span>
                  {prescription.status === 'Needs Refill' && (
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors duration-200">
                      {userRole === 'Doctor' ? 'Renew' : 'Request Refill'}
                    </button>
                  )}
                  {userRole === 'Doctor' && (
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Edit
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'appointments':
        return renderAppointments();
      case 'records':
        return renderMedicalRecords();
      case 'prescriptions':
        return renderPrescriptions();
      case 'billing':
        return <div className="bg-white rounded-xl p-6 border border-gray-100"><p>Billing information coming soon...</p></div>;
      case 'messages':
        return <div className="bg-white rounded-xl p-6 border border-gray-100"><p>Message center coming soon...</p></div>;
      default:
        return renderOverview();
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{getPageTitle()}</h1>
            <p className="text-gray-600">{getPageDescription()}</p>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex space-x-2 overflow-x-auto">
          {patientTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-rose-100 text-rose-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{tab.name}</span>
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

export default PatientPortal;