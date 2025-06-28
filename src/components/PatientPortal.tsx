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
  Star,
  Thermometer,
  Weight,
  Zap,
  Eye,
  MapPin,
  Shield
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
        return 'Patient Management System';
      case 'Patient':
        return 'MyHealth Portal';
      case 'HR Manager':
        return 'Employee Health Dashboard';
      case 'Admin':
        return 'Patient Administration';
      default:
        return 'Patient Portal';
    }
  };

  const getPageDescription = () => {
    switch (userRole) {
      case 'Doctor':
        return 'Comprehensive patient care management and clinical workflows';
      case 'Patient':
        return 'Access your complete health record, care team, and medical services';
      case 'HR Manager':
        return 'Monitor employee health programs and occupational wellness';
      case 'Admin':
        return 'Oversee patient services, quality metrics, and system operations';
      default:
        return 'Manage your health information and care';
    }
  };

  const patientTabs = [
    { id: 'overview', name: 'Health Overview', icon: Heart },
    { id: 'appointments', name: userRole === 'Doctor' ? 'Patient Schedule' : 'My Appointments', icon: Calendar },
    { id: 'records', name: userRole === 'Doctor' ? 'Medical Records' : 'Health Records', icon: FileText },
    { id: 'medications', name: userRole === 'Doctor' ? 'Medication Management' : 'My Medications', icon: Pill },
    { id: 'billing', name: 'Billing & Insurance', icon: CreditCard },
    { id: 'messages', name: 'Care Team Messages', icon: MessageCircle }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      date: '2024-01-15',
      time: '10:00 AM',
      provider: userRole === 'Patient' ? 'Dr. Sarah Johnson, MD' : 'Maria Rodriguez',
      specialty: 'Cardiology',
      type: 'Follow-up Visit',
      location: 'Cardiology Clinic - Room 302',
      status: 'Confirmed',
      mrn: 'MRN: 123456789',
      reason: 'Post-surgical follow-up, wound check'
    },
    {
      id: 2,
      date: '2024-01-22',
      time: '2:30 PM',
      provider: userRole === 'Patient' ? 'Dr. Michael Chen, MD' : 'James Wilson',
      specialty: 'Endocrinology',
      type: 'Consultation',
      location: 'Specialty Clinic - Room 415',
      status: 'Pending Confirmation',
      mrn: 'MRN: 123456789',
      reason: 'Diabetes management review'
    }
  ];

  const medicalRecords = [
    {
      id: 1,
      date: '2024-01-10',
      type: 'Laboratory Results',
      title: 'Comprehensive Metabolic Panel',
      status: 'Abnormal - Requires Follow-up',
      provider: 'Dr. Sarah Johnson',
      category: 'Lab',
      priority: 'high',
      summary: 'Elevated glucose levels detected'
    },
    {
      id: 2,
      date: '2024-01-08',
      type: 'Imaging Study',
      title: 'Chest X-Ray - PA & Lateral',
      status: 'Normal',
      provider: 'Dr. Michael Chen',
      category: 'Radiology',
      priority: 'normal',
      summary: 'Clear lung fields, normal heart size'
    },
    {
      id: 3,
      date: '2024-01-05',
      type: 'Progress Note',
      title: 'Cardiology Consultation',
      status: 'Completed',
      provider: 'Dr. Sarah Johnson',
      category: 'Clinical',
      priority: 'normal',
      summary: 'Post-operative recovery progressing well'
    },
    {
      id: 4,
      date: '2024-01-01',
      type: 'Procedure Report',
      title: 'Cardiac Catheterization',
      status: 'Completed',
      provider: 'Dr. Robert Williams',
      category: 'Procedure',
      priority: 'normal',
      summary: 'Successful PCI with stent placement'
    }
  ];

  const medications = [
    {
      id: 1,
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      prescribed: '2024-01-01',
      prescriber: 'Dr. Sarah Johnson',
      refills: 2,
      status: 'Active',
      indication: 'Hypertension',
      nextRefill: '2024-02-15',
      pharmacy: 'CVS Pharmacy - Main St'
    },
    {
      id: 2,
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily with meals',
      prescribed: '2024-01-01',
      prescriber: 'Dr. Michael Chen',
      refills: 3,
      status: 'Active',
      indication: 'Type 2 Diabetes',
      nextRefill: '2024-02-01',
      pharmacy: 'CVS Pharmacy - Main St'
    },
    {
      id: 3,
      name: 'Atorvastatin',
      dosage: '20mg',
      frequency: 'Once daily at bedtime',
      prescribed: '2023-12-15',
      prescriber: 'Dr. Sarah Johnson',
      refills: 0,
      status: 'Refill Needed',
      indication: 'High Cholesterol',
      nextRefill: 'Overdue',
      pharmacy: 'CVS Pharmacy - Main St'
    }
  ];

  const vitalSigns = [
    { label: 'Blood Pressure', value: '128/82', unit: 'mmHg', status: 'elevated', lastUpdated: '2 hours ago' },
    { label: 'Heart Rate', value: '72', unit: 'bpm', status: 'normal', lastUpdated: '2 hours ago' },
    { label: 'Temperature', value: '98.6', unit: '°F', status: 'normal', lastUpdated: '2 hours ago' },
    { label: 'Weight', value: '165', unit: 'lbs', status: 'normal', lastUpdated: '1 week ago' },
    { label: 'Oxygen Saturation', value: '98', unit: '%', status: 'normal', lastUpdated: '2 hours ago' },
    { label: 'BMI', value: '24.2', unit: '', status: 'normal', lastUpdated: '1 week ago' }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Health Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-red-600" />
            </div>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Stable</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">Good</h3>
          <p className="text-gray-600 text-sm">Overall Health</p>
          <p className="text-xs text-gray-500 mt-2">Last assessment: Today</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Monitor</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">128/82</h3>
          <p className="text-gray-600 text-sm">Blood Pressure</p>
          <p className="text-xs text-gray-500 mt-2">Slightly elevated</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">On Track</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">3/4</h3>
          <p className="text-gray-600 text-sm">Medications Taken</p>
          <p className="text-xs text-gray-500 mt-2">Today's compliance</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Upcoming</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">Jan 15</h3>
          <p className="text-gray-600 text-sm">Next Appointment</p>
          <p className="text-xs text-gray-500 mt-2">Dr. Johnson - Cardiology</p>
        </div>
      </div>

      {/* Vital Signs */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Current Vital Signs</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {vitalSigns.map((vital, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <div className={`w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ${
                vital.status === 'normal' ? 'bg-green-100' :
                vital.status === 'elevated' ? 'bg-yellow-100' : 'bg-red-100'
              }`}>
                {vital.label.includes('Blood') && <Heart className="w-4 h-4 text-red-600" />}
                {vital.label.includes('Heart') && <Activity className="w-4 h-4 text-blue-600" />}
                {vital.label.includes('Temperature') && <Thermometer className="w-4 h-4 text-orange-600" />}
                {vital.label.includes('Weight') && <Weight className="w-4 h-4 text-purple-600" />}
                {vital.label.includes('Oxygen') && <Zap className="w-4 h-4 text-green-600" />}
                {vital.label.includes('BMI') && <TrendingUp className="w-4 h-4 text-blue-600" />}
              </div>
              <div className="text-lg font-bold text-gray-900">{vital.value}</div>
              <div className="text-xs text-gray-600">{vital.unit}</div>
              <div className="text-xs text-gray-500 mt-1">{vital.label}</div>
              <div className="text-xs text-gray-400 mt-1">{vital.lastUpdated}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Care Team */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Care Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
                alt="Dr. Sarah Johnson"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">Dr. Sarah Johnson</h4>
                <p className="text-sm text-gray-600">Cardiologist</p>
                <div className="flex items-center space-x-1 mt-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-500">4.9 rating</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors">
                Message
              </button>
              <button className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                <Phone className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <img
                src="https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
                alt="Dr. Michael Chen"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">Dr. Michael Chen</h4>
                <p className="text-sm text-gray-600">Endocrinologist</p>
                <div className="flex items-center space-x-1 mt-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-500">4.8 rating</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors">
                Message
              </button>
              <button className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                <Phone className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <img
                src="https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
                alt="Nurse Emily Davis"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">Emily Davis, RN</h4>
                <p className="text-sm text-gray-600">Care Coordinator</p>
                <div className="flex items-center space-x-1 mt-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-500">4.9 rating</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors">
                Message
              </button>
              <button className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                <Phone className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
              <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-900">Lab results available</p>
                <p className="text-xs text-gray-600">Comprehensive Metabolic Panel - Review required</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-900">Prescription refilled</p>
                <p className="text-xs text-gray-600">Lisinopril 10mg - Ready for pickup</p>
                <p className="text-xs text-gray-500">Yesterday</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
              <Calendar className="w-5 h-5 text-purple-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-900">Appointment confirmed</p>
                <p className="text-xs text-gray-600">Jan 15 with Dr. Johnson - Cardiology follow-up</p>
                <p className="text-xs text-gray-500">2 days ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Health Alerts</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-yellow-900">Blood pressure elevated</p>
                <p className="text-xs text-yellow-700">Consider lifestyle modifications and follow-up</p>
                <button className="text-xs text-yellow-800 underline mt-1">View recommendations</button>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <Pill className="w-5 h-5 text-red-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-red-900">Medication refill overdue</p>
                <p className="text-xs text-red-700">Atorvastatin prescription needs renewal</p>
                <button className="text-xs text-red-800 underline mt-1">Request refill</button>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-900">Annual screening due</p>
                <p className="text-xs text-blue-700">Mammogram and colonoscopy recommended</p>
                <button className="text-xs text-blue-800 underline mt-1">Schedule screening</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAppointments = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {userRole === 'Doctor' ? 'Patient Appointments' : 'My Appointments'}
          </h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            {userRole === 'Doctor' ? 'Schedule Patient' : 'Book Appointment'}
          </button>
        </div>
        
        <div className="space-y-4">
          {upcomingAppointments.map((appointment) => (
            <div key={appointment.id} className="p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold text-gray-900">{appointment.type}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      appointment.status === 'Confirmed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    {userRole === 'Doctor' ? `Patient: ${appointment.provider}` : appointment.provider}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">{appointment.specialty}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{appointment.date} at {appointment.time}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{appointment.location}</span>
                    </span>
                  </div>
                  {userRole === 'Patient' && (
                    <p className="text-xs text-gray-500 mt-2">{appointment.mrn}</p>
                  )}
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Reason:</strong> {appointment.reason}
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  {userRole === 'Doctor' && (
                    <>
                      <button className="p-2 text-green-600 hover:text-green-800 border border-green-200 rounded hover:bg-green-50 transition-colors" title="Start Video Call">
                        <Video className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-blue-600 hover:text-blue-800 border border-blue-200 rounded hover:bg-blue-50 transition-colors" title="Call Patient">
                        <Phone className="w-4 h-4" />
                      </button>
                    </>
                  )}
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-2 border border-blue-200 rounded hover:bg-blue-50 transition-colors">
                    {userRole === 'Doctor' ? 'View Chart' : 'Manage'}
                  </button>
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
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {userRole === 'Doctor' ? 'Patient Medical Records' : 'My Health Records'}
          </h3>
          <div className="flex items-center space-x-3">
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Records</option>
              <option>Lab Results</option>
              <option>Imaging</option>
              <option>Clinical Notes</option>
              <option>Procedures</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
              <Upload className="w-4 h-4" />
              <span>{userRole === 'Doctor' ? 'Add Record' : 'Upload Document'}</span>
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          {medicalRecords.map((record) => (
            <div key={record.id} className="p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold text-gray-900">{record.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      record.priority === 'high' ? 'bg-red-100 text-red-800' :
                      record.status === 'Normal' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {record.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      record.category === 'Lab' ? 'bg-purple-100 text-purple-700' :
                      record.category === 'Radiology' ? 'bg-blue-100 text-blue-700' :
                      record.category === 'Clinical' ? 'bg-green-100 text-green-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {record.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{record.type}</p>
                  <p className="text-sm text-gray-700 mb-2">{record.summary}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{record.date}</span>
                    {userRole === 'Patient' && (
                      <span>Provider: {record.provider}</span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <button className="p-2 text-blue-600 hover:text-blue-800 border border-blue-200 rounded hover:bg-blue-50 transition-colors" title="View">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-green-600 hover:text-green-800 border border-green-200 rounded hover:bg-green-50 transition-colors" title="Download">
                    <Download className="w-4 h-4" />
                  </button>
                  {userRole === 'Doctor' && (
                    <button className="p-2 text-purple-600 hover:text-purple-800 border border-purple-200 rounded hover:bg-purple-50 transition-colors" title="Add Note">
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

  const renderMedications = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {userRole === 'Doctor' ? 'Patient Medications' : 'My Medications'}
          </h3>
          {userRole === 'Doctor' && (
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Prescribe Medication
            </button>
          )}
        </div>
        
        <div className="space-y-4">
          {medications.map((medication) => (
            <div key={medication.id} className="p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold text-gray-900">{medication.name} {medication.dosage}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      medication.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {medication.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Frequency:</strong> {medication.frequency}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Indication:</strong> {medication.indication}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 text-sm text-gray-500">
                    <div>
                      <span className="font-medium">Prescribed:</span> {medication.prescribed}
                    </div>
                    <div>
                      <span className="font-medium">Prescriber:</span> {medication.prescriber}
                    </div>
                    <div>
                      <span className="font-medium">Refills:</span> {medication.refills} remaining
                    </div>
                    <div>
                      <span className="font-medium">Pharmacy:</span> {medication.pharmacy}
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className={`text-sm ${
                      medication.status === 'Refill Needed' ? 'text-red-600 font-medium' : 'text-gray-600'
                    }`}>
                      Next refill: {medication.nextRefill}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  {medication.status === 'Refill Needed' && (
                    <button className="bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700 transition-colors duration-200">
                      {userRole === 'Doctor' ? 'Renew' : 'Request Refill'}
                    </button>
                  )}
                  {userRole === 'Doctor' && (
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-2 border border-blue-200 rounded hover:bg-blue-50 transition-colors">
                      Modify
                    </button>
                  )}
                  <button className="p-2 text-gray-600 hover:text-gray-800 border border-gray-200 rounded hover:bg-gray-50 transition-colors" title="View Details">
                    <Eye className="w-4 h-4" />
                  </button>
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
      case 'medications':
        return renderMedications();
      case 'billing':
        return <div className="bg-white rounded-xl p-6 border border-gray-100"><p>Billing and insurance information coming soon...</p></div>;
      case 'messages':
        return <div className="bg-white rounded-xl p-6 border border-gray-100"><p>Secure messaging with care team coming soon...</p></div>;
      default:
        return renderOverview();
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
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