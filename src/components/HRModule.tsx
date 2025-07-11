import React, { useState } from 'react';
import {
  Users,
  UserPlus,
  Calendar,
  TrendingUp,
  Clock,
  DollarSign,
  MessageSquare,
  Award,
  Target,
  Briefcase,
  FileText,
  Download,
  Eye,
  CheckCircle,
  PenTool,
  Upload,
  AlertCircle,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Send,
  RefreshCw
} from 'lucide-react';

interface HRModuleProps {
  userRole: string;
}

const HRModule: React.FC<HRModuleProps> = ({ userRole }) => {
  const [activeSection, setActiveSection] = useState('staff');

  const staffData = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Cardiologist',
      department: 'Cardiology',
      status: 'Active',
      avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      documentsStatus: {
        contract: 'signed',
        nda: 'signed',
        handbook: 'signed',
        w4: 'pending',
        background_check: 'signed',
        medical_license: 'signed'
      },
      joinDate: '2023-01-15',
      salary: '$185,000',
      performance: 4.8
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      role: 'Neurologist',
      department: 'Neurology',
      status: 'Active',
      avatar: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      documentsStatus: {
        contract: 'signed',
        nda: 'signed',
        handbook: 'pending',
        w4: 'signed',
        background_check: 'signed',
        medical_license: 'signed'
      },
      joinDate: '2023-03-20',
      salary: '$175,000',
      performance: 4.6
    },
    {
      id: 3,
      name: 'Nurse Emily Davis',
      role: 'Head Nurse',
      department: 'Emergency',
      status: 'Active',
      avatar: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      documentsStatus: {
        contract: 'signed',
        nda: 'signed',
        handbook: 'signed',
        w4: 'signed',
        background_check: 'signed',
        medical_license: 'signed'
      },
      joinDate: '2022-11-10',
      salary: '$85,000',
      performance: 4.9
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      role: 'Psychiatrist',
      department: 'Mental Health',
      status: 'Onboarding',
      avatar: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      documentsStatus: {
        contract: 'pending',
        nda: 'pending',
        handbook: 'not_sent',
        w4: 'not_sent',
        background_check: 'pending',
        medical_license: 'not_sent'
      },
      joinDate: '2024-01-20',
      salary: '$165,000',
      performance: null
    }
  ];

  const employeeDocuments = [
    {
      id: 1,
      employeeName: 'Dr. Sarah Johnson',
      documentType: 'Employment Contract',
      status: 'Signed',
      signedDate: '2024-01-15',
      sentDate: '2024-01-10',
      documentUrl: '#',
      signedBy: 'Dr. Sarah Johnson',
      ipAddress: '192.168.1.100',
      timestamp: '2024-01-15 14:30:22'
    },
    {
      id: 2,
      employeeName: 'Dr. Sarah Johnson',
      documentType: 'Non-Disclosure Agreement',
      status: 'Signed',
      signedDate: '2024-01-15',
      sentDate: '2024-01-10',
      documentUrl: '#',
      signedBy: 'Dr. Sarah Johnson',
      ipAddress: '192.168.1.100',
      timestamp: '2024-01-15 14:32:15'
    },
    {
      id: 3,
      employeeName: 'Dr. Michael Chen',
      documentType: 'Employee Handbook Acknowledgment',
      status: 'Pending Signature',
      signedDate: null,
      sentDate: '2024-01-12',
      documentUrl: '#',
      signedBy: null,
      ipAddress: null,
      timestamp: null
    },
    {
      id: 4,
      employeeName: 'Dr. James Wilson',
      documentType: 'Employment Contract',
      status: 'Pending Signature',
      signedDate: null,
      sentDate: '2024-01-18',
      documentUrl: '#',
      signedBy: null,
      ipAddress: null,
      timestamp: null
    },
    {
      id: 5,
      employeeName: 'Nurse Emily Davis',
      documentType: 'W-4 Tax Form',
      status: 'Signed',
      signedDate: '2024-01-08',
      sentDate: '2024-01-05',
      documentUrl: '#',
      signedBy: 'Emily Davis',
      ipAddress: '192.168.1.105',
      timestamp: '2024-01-08 09:15:33'
    },
    {
      id: 6,
      employeeName: 'Dr. Sarah Johnson',
      documentType: 'Background Check Authorization',
      status: 'Signed',
      signedDate: '2024-01-16',
      sentDate: '2024-01-10',
      documentUrl: '#',
      signedBy: 'Dr. Sarah Johnson',
      ipAddress: '192.168.1.100',
      timestamp: '2024-01-16 10:45:12'
    }
  ];

  const jobPostings = [
    {
      title: 'Senior Cardiologist',
      department: 'Cardiology',
      type: 'Full-time',
      applications: 12,
      status: 'Active',
      posted: '2024-01-10',
      salary: '$180,000 - $220,000'
    },
    {
      title: 'Registered Nurse',
      department: 'Emergency',
      type: 'Full-time',
      applications: 28,
      status: 'Active',
      posted: '2024-01-08',
      salary: '$75,000 - $95,000'
    },
    {
      title: 'Medical Administrator',
      department: 'Administration',
      type: 'Part-time',
      applications: 15,
      status: 'Review',
      posted: '2024-01-05',
      salary: '$45,000 - $55,000'
    }
  ];

  const hrSections = [
    { id: 'staff', name: 'Staff Management', icon: Users },
    { id: 'documents', name: 'Employee Documents', icon: FileText },
    { id: 'recruitment', name: 'Recruitment', icon: UserPlus }
  ];

  const getDocumentStatusColor = (status: string) => {
    switch (status) {
      case 'signed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'not_sent':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDocumentStatusIcon = (status: string) => {
    switch (status) {
      case 'signed':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'not_sent':
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const totalStaff = staffData.length;
  const onboardingStaff = staffData.filter(s => s.status === 'Onboarding').length;
  const activeStaff = staffData.filter(s => s.status === 'Active').length;
  const avgSalary = staffData.length
    ? Math.round(
        staffData.reduce((sum, s) => sum + Number(s.salary.replace(/[^0-9.-]+/g, "")), 0) / staffData.length
      )
    : 0;
  const avgPerformance = staffData.filter(s => s.performance).length
    ? (
        staffData.filter(s => s.performance).reduce((sum, s) => sum + (s.performance || 0), 0) /
        staffData.filter(s => s.performance).length
      ).toFixed(1)
    : "N/A";

  const renderStaffManagement = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{totalStaff}</h3>
          <p className="text-gray-600 text-sm">Total Staff</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{activeStaff}</h3>
          <p className="text-gray-600 text-sm">Active Staff</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{onboardingStaff}</h3>
          <p className="text-gray-600 text-sm">Onboarding</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-amber-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{avgPerformance}/5</h3>
          <p className="text-gray-600 text-sm">Avg. Performance</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Staff Directory</h3>
          <div className="flex space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search staff..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Add New Staff
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          {staffData.map((staff) => (
            <div key={staff.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-center space-x-4">
                <img
                  src={staff.avatar}
                  alt={staff.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{staff.name}</h4>
                  <p className="text-sm text-gray-600">{staff.role} • {staff.department}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-gray-500">Joined: {staff.joinDate}</span>
                    <span className="text-xs text-gray-500">Salary: {staff.salary}</span>
                    {staff.performance && (
                      <span className="text-xs text-gray-500">Rating: {staff.performance}/5</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  staff.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {staff.status}
                </span>
                <button 
                  onClick={() => setActiveSection('documents')}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View Documents
                </button>
                <div className="relative">
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEmployeeDocuments = () => (
    <div className="space-y-6">
      {/* Document Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">18</h3>
          <p className="text-gray-600 text-sm">Documents Signed</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">5</h3>
          <p className="text-gray-600 text-sm">Pending Signatures</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">23</h3>
          <p className="text-gray-600 text-sm">Total Documents</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
              <PenTool className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">78%</h3>
          <p className="text-gray-600 text-sm">Completion Rate</p>
        </div>
      </div>

      {/* Employee Document Status */}
      <div className="bg-white rounded-xl p-6 border border-gray-100">
      
        
        <div className="space-y-4">
          {staffData.map((staff) => (
            <div key={staff.id} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={staff.avatar}
                    alt={staff.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{staff.name}</h4>
                    <p className="text-sm text-gray-600">{staff.role}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  staff.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {staff.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {Object.entries(staff.documentsStatus).map(([docType, status]) => (
                  <div key={docType} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      {getDocumentStatusIcon(status)}
                      <span className="text-sm font-medium capitalize">{docType.replace('_', ' ')}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDocumentStatusColor(status)}`}>
                      {status === 'signed' ? 'Signed' : 
                       status === 'pending' ? 'Pending' : 'Signed'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Document History with Enhanced Details */}
      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Document History & Audit Trail</h3>
        
        <div className="space-y-4">
          {employeeDocuments.map((doc) => (
            <div key={doc.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{doc.documentType}</h4>
                    <p className="text-sm text-gray-600">{doc.employeeName}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-gray-500">Sent: {doc.sentDate}</span>
                      {doc.signedDate && (
                        <span className="text-xs text-gray-500">Signed: {doc.signedDate}</span>
                      )}
                      {doc.signedBy && (
                        <span className="text-xs text-gray-500">By: {doc.signedBy}</span>
                      )}
                    </div>
                    {doc.timestamp && (
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-gray-400">IP: {doc.ipAddress}</span>
                        <span className="text-xs text-gray-400">Time: {doc.timestamp}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    doc.status === 'Signed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {doc.status}
                  </span>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200" title="View Document">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200" title="Download">
                      <Download className="w-4 h-4" />
                    </button>
                    {doc.status === 'Pending Signature' && (
                      <>
                        <button className="p-2 text-blue-600 hover:text-blue-800 transition-colors duration-200" title="Send Reminder">
                          <Send className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-green-600 hover:text-green-800 transition-colors duration-200" title="Resend">
                          <RefreshCw className="w-4 h-4" />
                        </button>
                      </>
                    )}
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200" title="Edit">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Signature Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Signature Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Dr. Sarah Johnson signed Background Check Authorization</p>
                <p className="text-xs text-gray-500">2 hours ago • IP: 192.168.1.100</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Employment Contract sent to Dr. James Wilson</p>
                <p className="text-xs text-gray-500">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Emily Davis completed W-4 Tax Form</p>
                <p className="text-xs text-gray-500">1 day ago • IP: 192.168.1.105</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Document Templates</h3>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900">Employment Contract</h4>
              <p className="text-sm text-blue-700">Used 45 times • Last updated: Jan 2024</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-900">Non-Disclosure Agreement</h4>
              <p className="text-sm text-green-700">Used 23 times • Last updated: Dec 2023</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <h4 className="font-medium text-purple-900">Employee Handbook</h4>
              <p className="text-sm text-purple-700">Used 67 times • Last updated: Jan 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRecruitment = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">12</h3>
          <p className="text-gray-600 text-sm">Open Positions</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
              <UserPlus className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">55</h3>
          <p className="text-gray-600 text-sm">Applications</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">8</h3>
          <p className="text-gray-600 text-sm">Interviews Scheduled</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Active Job Postings</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Post New Job
          </button>
        </div>
        
        <div className="space-y-4">
          {jobPostings.map((job, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{job.title}</h4>
                  <p className="text-sm text-gray-600">{job.department} • {job.type}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-gray-500">Posted: {job.posted}</span>
                    <span className="text-xs text-gray-500">Salary: {job.salary}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">{job.applications} applications</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    job.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {job.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPerformance = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">4.7/5</h3>
          <p className="text-gray-600 text-sm">Avg. Performance</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">89%</h3>
          <p className="text-gray-600 text-sm">Goals Achieved</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">+12%</h3>
          <p className="text-gray-600 text-sm">Improvement</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Training & Development</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Ongoing Training Programs</h4>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="font-medium text-blue-900">Emergency Response Protocol</p>
                <p className="text-sm text-blue-700">32 participants</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="font-medium text-green-900">Patient Communication Skills</p>
                <p className="text-sm text-green-700">28 participants</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="font-medium text-purple-900">Medical Equipment Training</p>
                <p className="text-sm text-purple-700">15 participants</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Certifications Due</h4>
            <div className="space-y-3">
              <div className="p-3 border border-amber-200 bg-amber-50 rounded-lg">
                <p className="font-medium text-amber-900">CPR Certification</p>
                <p className="text-sm text-amber-700">12 staff members</p>
              </div>
              <div className="p-3 border border-red-200 bg-red-50 rounded-lg">
                <p className="font-medium text-red-900">DEA License Renewal</p>
                <p className="text-sm text-red-700">3 doctors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'staff':
        return renderStaffManagement();
      case 'documents':
        return renderEmployeeDocuments();
      case 'recruitment':
        return renderRecruitment();
      case 'performance':
        return renderPerformance();
      default:
        return renderStaffManagement();
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">HR Management</h1>
            <p className="text-gray-600">Manage staff, digital documents, and performance tracking</p>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex space-x-4">
          {hrSections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-100'
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

export default HRModule;