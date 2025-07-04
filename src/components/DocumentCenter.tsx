import React, { useState } from 'react';
import {
  FileText,
  Download,
  Eye,
  Upload,
  Search,
  Filter,
  Calendar,
  User,
  CheckCircle,
  Clock,
  AlertTriangle,
  Send,
  Edit,
  Trash2,
  Plus,
  FolderOpen,
  Shield,
  Heart,
  Users
} from 'lucide-react';

interface DocumentCenterProps {
  userRole: string;
  documentType?: 'patient' | 'employee';
}

const DocumentCenter: React.FC<DocumentCenterProps> = ({ userRole, documentType = 'patient' }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedDocument, setSelectedDocument] = useState<any>(null);

  const patientDocuments = [
    {
      id: 1,
      patientName: 'Maria Rodriguez 12',
      documentType: 'Medical History',
      fileName: 'medical_history_maria_rodriguez.pdf',
      uploadDate: '2024-01-20',
      lastModified: '2024-01-20',
      status: 'complete',
      size: '2.4 MB',
      uploadedBy: 'Dr. Sarah Johnson',
      category: 'medical',
      confidential: true,
      description: 'Complete medical history including allergies, medications, and previous treatments.'
    },
    {
      id: 2,
      patientName: 'James Wilson',
      documentType: 'Care Plan',
      fileName: 'care_plan_james_wilson.pdf',
      uploadDate: '2024-01-19',
      lastModified: '2024-01-21',
      status: 'pending_review',
      size: '1.8 MB',
      uploadedBy: 'Michael Chen',
      category: 'care_plan',
      confidential: true,
      description: 'Comprehensive care plan for dementia patient including daily routines and emergency contacts.'
    },
    {
      id: 3,
      patientName: 'Emily Davis',
      documentType: 'Insurance Information',
      fileName: 'insurance_emily_davis.pdf',
      uploadDate: '2024-01-18',
      lastModified: '2024-01-18',
      status: 'complete',
      size: '0.9 MB',
      uploadedBy: 'Lisa Anderson',
      category: 'administrative',
      confidential: false,
      description: 'Current insurance coverage details and authorization forms.'
    },
    {
      id: 4,
      patientName: 'Robert Brown',
      documentType: 'Assessment Report',
      fileName: 'assessment_robert_brown.pdf',
      uploadDate: '2024-01-17',
      lastModified: '2024-01-17',
      status: 'incomplete',
      size: '3.2 MB',
      uploadedBy: 'Jennifer White',
      category: 'assessment',
      confidential: true,
      description: 'Initial assessment report for new patient intake and service planning.'
    }
  ];

  const employeeDocuments = [
    {
      id: 1,
      employeeName: 'Sarah Johnson',
      documentType: 'Employment Contract',
      fileName: 'contract_sarah_johnson.pdf',
      uploadDate: '2024-01-15',
      lastModified: '2024-01-15',
      status: 'signed',
      size: '1.2 MB',
      uploadedBy: 'HR Department',
      category: 'contract',
      confidential: true,
      description: 'Signed employment contract with terms and conditions.'
    },
    {
      id: 2,
      employeeName: 'Michael Chen',
      documentType: 'Medical License',
      fileName: 'license_michael_chen.pdf',
      uploadDate: '2024-01-14',
      lastModified: '2024-01-14',
      status: 'verified',
      size: '0.8 MB',
      uploadedBy: 'Credentials Office',
      category: 'certification',
      confidential: false,
      description: 'Current medical license and certification documents.'
    },
    {
      id: 3,
      employeeName: 'Lisa Anderson',
      documentType: 'Background Check',
      fileName: 'background_lisa_anderson.pdf',
      uploadDate: '2024-01-13',
      lastModified: '2024-01-13',
      status: 'pending',
      size: '1.5 MB',
      uploadedBy: 'Security Department',
      category: 'background',
      confidential: true,
      description: 'Background verification and security clearance documentation.'
    }
  ];

  const documents = documentType === 'patient' ? patientDocuments : employeeDocuments;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete':
      case 'signed':
      case 'verified':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending_review':
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'incomplete':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
      case 'signed':
      case 'verified':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'pending_review':
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'incomplete':
        return <AlertTriangle className="w-4 h-4 text-red-600" />;
      default:
        return <FileText className="w-4 h-4 text-gray-600" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'medical':
        return <Heart className="w-5 h-5 text-red-500" />;
      case 'care_plan':
        return <Users className="w-5 h-5 text-blue-500" />;
      case 'administrative':
        return <FileText className="w-5 h-5 text-gray-500" />;
      case 'assessment':
        return <Eye className="w-5 h-5 text-purple-500" />;
      case 'contract':
        return <FileText className="w-5 h-5 text-blue-500" />;
      case 'certification':
        return <Shield className="w-5 h-5 text-green-500" />;
      case 'background':
        return <Shield className="w-5 h-5 text-orange-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  const filteredDocuments = documents.filter(doc => {
    if (activeFilter === 'all') return true;
    return doc.status === activeFilter;
  });

  const DocumentDetailModal = ({ document, onClose }: { document: any; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Document Details</h2>
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
          {/* Document Header */}
          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              {getCategoryIcon(document.category)}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{document.documentType}</h3>
              <p className="text-gray-600">
                {documentType === 'patient' ? `Patient: ${document.patientName}` : `Employee: ${document.employeeName}`}
              </p>
              <p className="text-sm text-gray-500">{document.fileName}</p>
            </div>
            <div className="text-right">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(document.status)}`}>
                {getStatusIcon(document.status)}
                <span className="ml-1">{document.status.replace('_', ' ').charAt(0).toUpperCase() + document.status.replace('_', ' ').slice(1)}</span>
              </span>
            </div>
          </div>

          {/* Document Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">File Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">File Size:</span>
                    <span className="font-medium">{document.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Upload Date:</span>
                    <span className="font-medium">{document.uploadDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Last Modified:</span>
                    <span className="font-medium">{document.lastModified}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Uploaded By:</span>
                    <span className="font-medium">{document.uploadedBy}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Security & Access</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Category:</span>
                    <span className="font-medium capitalize">{document.category.replace('_', ' ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Confidential:</span>
                    <span className={`font-medium ${document.confidential ? 'text-red-600' : 'text-green-600'}`}>
                      {document.confidential ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
            <p className="text-gray-700 text-sm leading-relaxed">{document.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4 border-t border-gray-200">
            <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>View Document</span>
            </button>
            <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
            {userRole === 'HR' && (
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2">
                <Edit className="w-4 h-4" />
                <span>Edit</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
            <FolderOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {documentType === 'patient' ? 'Patient Documents' : 'Employee Documents'}
            </h1>
            <p className="text-gray-600">
              {documentType === 'patient' 
                ? 'Manage patient medical records and care documentation'
                : 'Manage employee contracts, certifications, and HR documents'
              }
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-blue-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">Total Documents</p>
                <p className="text-2xl font-bold text-blue-900">{documents.length}</p>
              </div>
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-medium">Complete</p>
                <p className="text-2xl font-bold text-green-900">
                  {documents.filter(d => ['complete', 'signed', 'verified'].includes(d.status)).length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-600 text-sm font-medium">Pending Review</p>
                <p className="text-2xl font-bold text-yellow-900">
                  {documents.filter(d => ['pending_review', 'pending'].includes(d.status)).length}
                </p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-600 text-sm font-medium">Incomplete</p>
                <p className="text-2xl font-bold text-red-900">
                  {documents.filter(d => d.status === 'incomplete').length}
                </p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex space-x-2">
            {['all', 'complete', 'pending_review', 'incomplete'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  activeFilter === filter
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filter === 'all' ? 'All' : filter.replace('_', ' ').charAt(0).toUpperCase() + filter.replace('_', ' ').slice(1)}
              </button>
            ))}
          </div>

          <div className="flex space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search documents..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            {userRole === 'HR' && (
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
                <Upload className="w-4 h-4" />
                <span>Upload Document</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Documents List */}
      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <div className="space-y-4">
          {filteredDocuments.map((document) => (
            <div
              key={document.id}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {getCategoryIcon(document.category)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{document.documentType}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(document.status)}`}>
                        {getStatusIcon(document.status)}
                        <span className="ml-1">{document.status.replace('_', ' ').charAt(0).toUpperCase() + document.status.replace('_', ' ').slice(1)}</span>
                      </span>
                      {document.confidential && (
                        <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                          Confidential
                        </span>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>
                          {documentType === 'patient' ? document.patientName : document.employeeName}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Uploaded: {document.uploadDate}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>Size: {document.size}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>By: {document.uploadedBy}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-700 line-clamp-2">{document.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => setSelectedDocument(document)}
                    className="p-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    className="p-2 text-green-600 hover:text-green-800 transition-colors duration-200"
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  {userRole === 'HR' && (
                    <>
                      <button
                        className="p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-red-600 hover:text-red-800 transition-colors duration-200"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Document Detail Modal */}
      {selectedDocument && (
        <DocumentDetailModal
          document={selectedDocument}
          onClose={() => setSelectedDocument(null)}
        />
      )}
    </div>
  );
};

export default DocumentCenter;