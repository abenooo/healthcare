import React, { useState, useEffect } from 'react';
import {
  Heart,
  Calendar,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Star,
  Activity,
  AlertTriangle,
  CheckCircle,
  User,
  FileText,
  Pill,
  Thermometer,
  TrendingUp,
  Eye,
  Edit,
  Plus,
  Filter,
  Search
} from 'lucide-react';
// import ProgressNoteSidebar from "./ProgressNoteSidebar"; // adjust path as needed

import ProgressNoteModal from "./ProgressNoteSidebar"
import ProgressNotesTable from "./ProgressNotesTable";

interface PatientPortalProps {
  userRole: string;
}

const STORAGE_KEY = "progress_notes";
const demoNotes = [
  {
    clientName: "Elliott Bryant",
    service: "Quis sit in cupidit",
    hours: 67,
    condition: "Quo magni ipsum con",
    date: "7/4/2025",
    status: "Pending",
  },
  {
    clientName: "Aimee Kane",
    service: "Quidem explicabo Ut",
    hours: 33,
    condition: "Aut harum non illo i",
    date: "7/4/2025, 1:42:00 AM",
    status: "Pending",
  },
  {
    clientName: "Maryam Cote",
    service: "Consequatur Dolorem",
    hours: 13,
    condition: "Laboriosam repellen",
    date: "7/4/2025, 1:39:58 AM",
    status: "Pending",
  },
  // ...add more demo notes as needed
];

const PatientPortal: React.FC<PatientPortalProps> = ({ userRole }) => {
  const [activeTab, setActiveTab] = useState('assigned');
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [showProgressNote, setShowProgressNote] = useState(false);

  const assignedPatients = [
    {
      id: 1,
      name: 'Maria Rodriguez',
      age: 78,
      condition: 'Diabetes Type 2',
      address: '123 Oak Street, Springfield',
      phone: '(555) 123-4567',
      emergencyContact: 'Carlos Rodriguez (Son) - (555) 987-6543',
      lastVisit: '2024-01-18',
      nextAppointment: '2024-01-25',
      status: 'stable',
      priority: 'medium',
      careLevel: 'moderate',
      avatar: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      medications: ['Metformin 500mg', 'Lisinopril 10mg', 'Aspirin 81mg'],
      allergies: ['Penicillin', 'Shellfish'],
      notes: 'Patient requires insulin monitoring every 2 hours. Family very supportive.',
      vitals: {
        bloodPressure: '140/90',
        heartRate: '72 bpm',
        temperature: '98.6°F',
        bloodSugar: '145 mg/dL'
      },
      recentServices: [
        { date: '2024-01-18', service: 'Medication Management', duration: '2 hours', status: 'completed' },
        { date: '2024-01-15', service: 'Meal Preparation', duration: '3 hours', status: 'completed' }
      ]
    },
    {
      id: 2,
      name: 'James Wilson',
      age: 82,
      condition: 'Mild Dementia',
      address: '456 Pine Avenue, Springfield',
      phone: '(555) 234-5678',
      emergencyContact: 'Susan Wilson (Daughter) - (555) 876-5432',
      lastVisit: '2024-01-20',
      nextAppointment: '2024-01-27',
      status: 'needs_attention',
      priority: 'high',
      careLevel: 'intensive',
      avatar: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      medications: ['Donepezil 10mg', 'Vitamin D', 'Multivitamin'],
      allergies: ['None known'],
      notes: 'Patient shows signs of confusion in the evening. Requires constant supervision.',
      vitals: {
        bloodPressure: '130/85',
        heartRate: '68 bpm',
        temperature: '98.2°F',
        bloodSugar: 'N/A'
      },
      recentServices: [
        { date: '2024-01-20', service: 'Companion Care', duration: '6 hours', status: 'completed' },
        { date: '2024-01-17', service: 'Behavioral Support', duration: '4 hours', status: 'completed' }
      ]
    },
    {
      id: 3,
      name: 'Emily Davis',
      age: 45,
      condition: 'Intellectual Disability',
      address: '789 Maple Drive, Springfield',
      phone: '(555) 345-6789',
      emergencyContact: 'Robert Davis (Father) - (555) 765-4321',
      lastVisit: '2024-01-19',
      nextAppointment: '2024-01-26',
      status: 'stable',
      priority: 'medium',
      careLevel: 'moderate',
      avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      medications: ['Seizure medication', 'Vitamin supplements'],
      allergies: ['Latex'],
      notes: 'Patient enjoys social activities and responds well to routine. Very friendly and cooperative.',
      vitals: {
        bloodPressure: '120/80',
        heartRate: '75 bpm',
        temperature: '98.4°F',
        bloodSugar: 'N/A'
      },
      recentServices: [
        { date: '2024-01-19', service: 'Community Activities', duration: '5 hours', status: 'completed' },
        { date: '2024-01-16', service: 'Transportation', duration: '2 hours', status: 'completed' }
      ]
    }
  ];

  const todaySchedule = [
    {
      id: 1,
      patientName: 'Maria Rodriguez',
      avatar: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      time: '09:00 AM',
      service: 'Medication Management',
      address: '123 Oak Street, Springfield',
      status: 'upcoming',
      phone: '(555) 123-4567',
    },
    {
      id: 2,
      patientName: 'James Wilson',
      avatar: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      time: '11:30 AM',
      service: 'Companion Care',
      address: '456 Pine Avenue, Springfield',
      status: 'upcoming',
      phone: '(555) 234-5678',
    },
    {
      id: 3,
      patientName: 'Emily Davis',
      avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      time: '02:00 PM',
      service: 'Community Activities',
      address: '789 Maple Drive, Springfield',
      status: 'upcoming',
      phone: '(555) 345-6789',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'needs_attention':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      case 'low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'stable':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'needs_attention':
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case 'critical':
        return <AlertTriangle className="w-4 h-4 text-red-600" />;
      default:
        return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  const PatientDetailModal = ({ patient, onClose }: { patient: any; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Patient Details</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          {/* Patient Header */}
          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <img
              src={patient.avatar}
              alt={patient.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">{patient.name}</h3>
              <p className="text-gray-600">Age: {patient.age} • {patient.condition}</p>
              <div className="flex items-center space-x-4 mt-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(patient.status)}`}>
                  {getStatusIcon(patient.status)}
                  <span className="ml-1">{patient.status.replace('_', ' ').charAt(0).toUpperCase() + patient.status.replace('_', ' ').slice(1)}</span>
                </span>
                <span className={`text-sm font-medium ${getPriorityColor(patient.priority)}`}>
                  {patient.priority.toUpperCase()} PRIORITY
                </span>
                <span className="text-sm text-gray-600">Care Level: {patient.careLevel}</span>
              </div>
            </div>
          </div>

          {/* Patient Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Contact Information</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                  <span>{patient.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span>{patient.phone}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <User className="w-4 h-4 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Emergency Contact:</p>
                    <p>{patient.emergencyContact}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Medical Information</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-gray-700">Medications:</p>
                  <ul className="list-disc list-inside text-gray-600 ml-2">
                    {patient.medications.map((med: string, index: number) => (
                      <li key={index}>{med}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Allergies:</p>
                  <p className="text-gray-600">{patient.allergies.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Vitals */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Current Vitals</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <p className="text-xs text-blue-600 font-medium">Blood Pressure</p>
                <p className="text-lg font-bold text-blue-900">{patient.vitals.bloodPressure}</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg text-center">
                <p className="text-xs text-green-600 font-medium">Heart Rate</p>
                <p className="text-lg font-bold text-green-900">{patient.vitals.heartRate}</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg text-center">
                <p className="text-xs text-orange-600 font-medium">Temperature</p>
                <p className="text-lg font-bold text-orange-900">{patient.vitals.temperature}</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg text-center">
                <p className="text-xs text-purple-600 font-medium">Blood Sugar</p>
                <p className="text-lg font-bold text-purple-900">{patient.vitals.bloodSugar}</p>
              </div>
            </div>
          </div>

          {/* Care Notes */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Care Notes</h4>
            <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 p-4 rounded-lg">{patient.notes}</p>
          </div>

          {/* Recent Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Recent Services</h4>
            <div className="space-y-3">
              {patient.recentServices.map((service: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{service.service}</p>
                    <p className="text-sm text-gray-600">Duration: {service.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{service.date}</p>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      {service.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4 border-t border-gray-200">
            <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Schedule Service</span>
            </button>
            <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>Contact Family</span>
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2">
              <Edit className="w-4 h-4" />
              <span>Update Notes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Add this state for notes
  const [notes, setNotes] = useState(demoNotes);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (stored.length) setNotes(stored);
  }, [showProgressNote]); // reload when modal closes

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {userRole === 'Care Giver' ? 'Assigned Patients 123' : 'Patient Management'}
            </h1>
            <p className="text-gray-600">
              {userRole === 'Care Giver' 
                ? 'Manage your assigned patients and provide quality care'
                : 'Overview of all patients in the system'
              }
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-blue-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">Total Patients</p>
                <p className="text-2xl font-bold text-blue-900">{assignedPatients.length}</p>
              </div>
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-medium">Stable</p>
                <p className="text-2xl font-bold text-green-900">
                  {assignedPatients.filter(p => p.status === 'stable').length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-600 text-sm font-medium">Need Attention</p>
                <p className="text-2xl font-bold text-yellow-900">
                  {assignedPatients.filter(p => p.status === 'needs_attention').length}
                </p>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 text-sm font-medium">High Priority</p>
                <p className="text-2xl font-bold text-purple-900">
                  {assignedPatients.filter(p => p.priority === 'high').length}
                </p>
              </div>
              <Star className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('assigned')}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                activeTab === 'assigned'
                  ? 'bg-pink-100 text-pink-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Assigned Patients 
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                activeTab === 'schedule'
                  ? 'bg-pink-100 text-pink-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Today's Schedule 
            </button>
          </div>

          <div className="flex space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search patients..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Patients List or Today's Schedule */}
      {activeTab === 'assigned' ? (
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="space-y-4">
            {assignedPatients.map((patient) => (
              <div
                key={patient.id}
                className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <img
                      src={patient.avatar}
                      alt={patient.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{patient.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(patient.status)}`}>
                          {getStatusIcon(patient.status)}
                          <span className="ml-1">{patient.status.replace('_', ' ').charAt(0).toUpperCase() + patient.status.replace('_', ' ').slice(1)}</span>
                        </span>
                        <span className={`text-xs font-medium ${getPriorityColor(patient.priority)}`}>
                          {patient.priority.toUpperCase()} PRIORITY
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>Age: {patient.age}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Activity className="w-4 h-4" />
                          <span>{patient.condition}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>Next: {patient.nextAppointment}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Heart className="w-4 h-4" />
                          <span>Care Level: {patient.careLevel}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2 text-sm">
                        <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{patient.address}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => setSelectedPatient(patient)}
                      className="p-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 text-green-600 hover:text-green-800 transition-colors duration-200"
                      title="Schedule Service"
                    >
                      <Calendar className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 text-purple-600 hover:text-purple-800 transition-colors duration-200"
                      title="Contact"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                      title="Edit Notes"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowProgressNote(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <FileText className="w-4 h-4" />
            <span>Add Progress Note</span>
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Today's Schedule</h2>
          <div className="space-y-4">
            {todaySchedule.length === 0 ? (
              <div className="text-center text-gray-500 py-12">
                <Calendar className="mx-auto mb-2 w-10 h-10 text-gray-300" />
                <p>No appointments scheduled for today.</p>
              </div>
            ) : (
              todaySchedule.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.avatar}
                      alt={item.patientName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.patientName}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{item.time}</span>
                        <span>•</span>
                        <span>{item.service}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{item.address}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      className="p-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      title="Call"
                      onClick={() => window.open(`tel:${item.phone}`)}
                    >
                      <Phone className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 text-green-600 hover:text-green-800 transition-colors duration-200"
                      title="Mark as Done"
                    >
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Patient Detail Modal */}
      {selectedPatient && (
        <PatientDetailModal
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}

      {/* <ProgressNoteSidebar
        open={showProgressNote}
        onClose={() => setShowProgressNote(false)}
        patients={assignedPatients.map(p => ({ id: p.id, name: p.name }))}
        hourlyAmount={25} // or your dynamic value
        onSubmit={(data) => {
          // handle the submitted progress note here (e.g., send to backend, show toast, etc.)
          alert("Progress note sent to HR!");
        }}
      /> */}
      {userRole === "Care Giver" && (
  <ProgressNoteModal open={showProgressNote} onClose={() => setShowProgressNote(false)} />
)}

      {/* Progress Notes Table */}
      <div className="mt-10">
        <ProgressNotesTable />
      </div>
    </div>
  );
};

export default PatientPortal;