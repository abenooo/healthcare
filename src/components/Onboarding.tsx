import React, { useState } from 'react';
import {
  UserPlus,
  CheckCircle,
  Clock,
  AlertTriangle,
  FileText,
  Upload,
  Download,
  Send,
  Eye,
  Edit,
  User,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Shield,
  Award,
  Briefcase,
  Heart,
  Users,
  Star,
  MessageCircle
} from 'lucide-react';

interface OnboardingProps {
  userRole: string;
}

const Onboarding: React.FC<OnboardingProps> = ({ userRole }) => {
  const [activeTab, setActiveTab] = useState('new_hires');
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);

  const newHires = [
    {
      id: 1,
      name: 'Dr. Amanda Foster',
      position: 'Cardiologist',
      department: 'Cardiology',
      startDate: '2024-02-01',
      email: 'amanda.foster@email.com',
      phone: '(555) 123-4567',
      address: '123 Medical Drive, Springfield',
      avatar: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      status: 'in_progress',
      completionPercentage: 65,
      onboardingSteps: [
        { step: 'Personal Information', status: 'completed', date: '2024-01-15' },
        { step: 'Employment Contract', status: 'completed', date: '2024-01-16' },
        { step: 'Background Check', status: 'completed', date: '2024-01-18' },
        { step: 'Medical License Verification', status: 'in_progress', date: null },
        { step: 'Hospital Orientation', status: 'pending', date: null },
        { step: 'Department Training', status: 'pending', date: null },
        { step: 'System Access Setup', status: 'pending', date: null }
      ],
      documents: [
        { name: 'Resume', status: 'uploaded', type: 'pdf' },
        { name: 'Medical License', status: 'pending_verification', type: 'pdf' },
        { name: 'Background Check', status: 'completed', type: 'pdf' },
        { name: 'Employment Contract', status: 'signed', type: 'pdf' }
      ],
      emergencyContact: {
        name: 'John Foster',
        relationship: 'Spouse',
        phone: '(555) 987-6543'
      }
    },
    {
      id: 2,
      name: 'Nurse Jennifer Martinez',
      position: 'Registered Nurse',
      department: 'Emergency',
      startDate: '2024-01-28',
      email: 'jennifer.martinez@email.com',
      phone: '(555) 234-5678',
      address: '456 Nursing Lane, Springfield',
      avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      status: 'completed',
      completionPercentage: 100,
      onboardingSteps: [
        { step: 'Personal Information', status: 'completed', date: '2024-01-10' },
        { step: 'Employment Contract', status: 'completed', date: '2024-01-11' },
        { step: 'Background Check', status: 'completed', date: '2024-01-12' },
        { step: 'Nursing License Verification', status: 'completed', date: '2024-01-14' },
        { step: 'Hospital Orientation', status: 'completed', date: '2024-01-20' },
        { step: 'Department Training', status: 'completed', date: '2024-01-22' },
        { step: 'System Access Setup', status: 'completed', date: '2024-01-23' }
      ],
      documents: [
        { name: 'Resume', status: 'uploaded', type: 'pdf' },
        { name: 'Nursing License', status: 'verified', type: 'pdf' },
        { name: 'Background Check', status: 'completed', type: 'pdf' },
        { name: 'Employment Contract', status: 'signed', type: 'pdf' }
      ],
      emergencyContact: {
        name: 'Maria Martinez',
        relationship: 'Mother',
        phone: '(555) 876-5432'
      }
    },
    {
      id: 3,
      name: 'David Thompson',
      position: 'Care Giver',
      department: 'Home Care',
      startDate: '2024-02-05',
      email: 'david.thompson@email.com',
      phone: '(555) 345-6789',
      address: '789 Care Street, Springfield',
      avatar: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      status: 'pending',
      completionPercentage: 25,
      onboardingSteps: [
        { step: 'Personal Information', status: 'completed', date: '2024-01-20' },
        { step: 'Employment Contract', status: 'pending', date: null },
        { step: 'Background Check', status: 'pending', date: null },
        { step: 'Certification Verification', status: 'pending', date: null },
        { step: 'Care Training', status: 'pending', date: null },
        { step: 'Patient Assignment', status: 'pending', date: null },
        { step: 'System Access Setup', status: 'pending', date: null }
      ],
      documents: [
        { name: 'Resume', status: 'uploaded', type: 'pdf' },
        { name: 'Care Certification', status: 'pending_upload', type: 'pdf' },
        { name: 'Background Check', status: 'not_started', type: 'pdf' },
        { name: 'Employment Contract', status: 'not_sent', type: 'pdf' }
      ],
      emergencyContact: {
        name: 'Sarah Thompson',
        relationship: 'Wife',
        phone: '(555) 765-4321'
      }
    }
  ];

  const patientOnboarding = [
    {
      id: 1,
      name: 'Robert Wilson',
      age: 75,
      condition: 'Post-Surgery Recovery',
      address: '321 Recovery Road, Springfield',
      phone: '(555) 456-7890',
      email: 'robert.wilson@email.com',
      avatar: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      status: 'in_progress',
      completionPercentage: 80,
      enrollmentDate: '2024-01-22',
      assignedCareGiver: 'Sarah Johnson',
      onboardingSteps: [
        { step: 'Initial Assessment', status: 'completed', date: '2024-01-22' },
        { step: 'Medical History Review', status: 'completed', date: '2024-01-23' },
        { step: 'Insurance Verification', status: 'completed', date: '2024-01-24' },
        { step: 'Care Plan Development', status: 'in_progress', date: null },
        { step: 'Care Giver Assignment', status: 'pending', date: null },
        { step: 'Service Scheduling', status: 'pending', date: null }
      ],
      documents: [
        { name: 'Medical History', status: 'completed', type: 'pdf' },
        { name: 'Insurance Card', status: 'uploaded', type: 'pdf' },
        { name: 'Emergency Contacts', status: 'completed', type: 'pdf' },
        { name: 'Care Agreement', status: 'pending_signature', type: 'pdf' }
      ],
      emergencyContact: {
        name: 'Linda Wilson',
        relationship: 'Daughter',
        phone: '(555) 654-3210'
      },
      medicalInfo: {
        primaryCondition: 'Post-Surgery Recovery',
        allergies: ['Penicillin'],
        medications: ['Pain medication', 'Antibiotics'],
        mobility: 'Limited - requires assistance'
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
      case 'verified':
      case 'signed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in_progress':
      case 'pending_verification':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pending':
      case 'pending_upload':
      case 'pending_signature':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'not_started':
      case 'not_sent':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
      case 'verified':
      case 'signed':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'in_progress':
      case 'pending_verification':
        return <Clock className="w-4 h-4 text-blue-600" />;
      case 'pending':
      case 'pending_upload':
      case 'pending_signature':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'not_started':
      case 'not_sent':
        return <AlertTriangle className="w-4 h-4 text-gray-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const OnboardingDetailModal = ({ candidate, onClose }: { candidate: any; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Onboarding Details</h2>
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
          {/* Candidate Header */}
          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <img
              src={candidate.avatar}
              alt={candidate.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">{candidate.name}</h3>
              <p className="text-gray-600">{candidate.position} • {candidate.department}</p>
              <div className="flex items-center space-x-4 mt-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(candidate.status)}`}>
                  {getStatusIcon(candidate.status)}
                  <span className="ml-1">{candidate.status.replace('_', ' ').charAt(0).toUpperCase() + candidate.status.replace('_', ' ').slice(1)}</span>
                </span>
                <span className="text-sm text-gray-600">Start Date: {candidate.startDate}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{candidate.completionPercentage}%</div>
              <div className="text-sm text-gray-500">Complete</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${candidate.completionPercentage}%` }}
            ></div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact Information</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span>{candidate.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span>{candidate.phone}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                  <span>{candidate.address}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Emergency Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-500" />
                  <span>{candidate.emergencyContact.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-gray-500" />
                  <span>{candidate.emergencyContact.relationship}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span>{candidate.emergencyContact.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Onboarding Steps */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Onboarding Progress</h4>
            <div className="space-y-3">
              {candidate.onboardingSteps.map((step: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(step.status)}
                    <span className="font-medium text-gray-900">{step.step}</span>
                  </div>
                  <div className="text-right">
                    {step.date && (
                      <span className="text-sm text-gray-500">{step.date}</span>
                    )}
                    <span className={`ml-3 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(step.status)}`}>
                      {step.status.replace('_', ' ').charAt(0).toUpperCase() + step.status.replace('_', ' ').slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Documents</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {candidate.documents.map((doc: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <span className="font-medium text-gray-900">{doc.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(doc.status)}`}>
                      {doc.status.replace('_', ' ').charAt(0).toUpperCase() + doc.status.replace('_', ' ').slice(1)}
                    </span>
                    {doc.status === 'uploaded' || doc.status === 'completed' || doc.status === 'signed' ? (
                      <button className="p-1 text-blue-600 hover:text-blue-800" title="View">
                        <Eye className="w-4 h-4" />
                      </button>
                    ) : (
                      <button className="p-1 text-gray-400" title="Not available">
                        <Eye className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4 border-t border-gray-200">
            <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Send className="w-4 h-4" />
              <span>Send Reminder</span>
            </button>
            <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>Contact</span>
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2">
              <Edit className="w-4 h-4" />
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const currentData = activeTab === 'new_hires' ? newHires : patientOnboarding;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <UserPlus className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Onboarding Management</h1>
            <p className="text-gray-600">Manage employee and patient onboarding processes</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-blue-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">In Progress</p>
                <p className="text-2xl font-bold text-blue-900">
                  {currentData.filter(item => item.status === 'in_progress').length}
                </p>
              </div>
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-medium">Completed</p>
                <p className="text-2xl font-bold text-green-900">
                  {currentData.filter(item => item.status === 'completed').length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-600 text-sm font-medium">Pending</p>
                <p className="text-2xl font-bold text-yellow-900">
                  {currentData.filter(item => item.status === 'pending').length}
                </p>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 text-sm font-medium">Total</p>
                <p className="text-2xl font-bold text-purple-900">{currentData.length}</p>
              </div>
              <Users className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('new_hires')}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              activeTab === 'new_hires'
                ? 'bg-teal-100 text-teal-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Employee Onboarding
          </button>
          <button
            onClick={() => setActiveTab('patients')}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              activeTab === 'patients'
                ? 'bg-teal-100 text-teal-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Patient Onboarding
          </button>
        </div>
      </div>

      {/* Onboarding List */}
      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <div className="space-y-4">
          {currentData.map((item) => (
            <div
              key={item.id}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>
                        {getStatusIcon(item.status)}
                        <span className="ml-1">{item.status.replace('_', ' ').charAt(0).toUpperCase() + item.status.replace('_', ' ').slice(1)}</span>
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{activeTab === 'new_hires' ? item.position : `Age: ${item.age}`}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{activeTab === 'new_hires' ? item.department : item.condition}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{activeTab === 'new_hires' ? `Start: ${item.startDate}` : `Enrolled: ${item.enrollmentDate}`}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4" />
                        <span>{item.completionPercentage}% Complete</span>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className="bg-teal-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${item.completionPercentage}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>
                        {item.onboardingSteps.filter((step: any) => step.status === 'completed').length} of {item.onboardingSteps.length} steps completed
                      </span>
                      {activeTab === 'new_hires' && (
                        <span>Next: {item.onboardingSteps.find((step: any) => step.status === 'in_progress' || step.status === 'pending')?.step}</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => setSelectedCandidate(item)}
                    className="p-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    className="p-2 text-green-600 hover:text-green-800 transition-colors duration-200"
                    title="Send Reminder"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                  <button
                    className="p-2 text-purple-600 hover:text-purple-800 transition-colors duration-200"
                    title="Contact"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                  <button
                    className="p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    title="Edit"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedCandidate && (
        <OnboardingDetailModal
          candidate={selectedCandidate}
          onClose={() => setSelectedCandidate(null)}
        />
      )}
    </div>
  );
};

export default Onboarding;