import React, { useState } from 'react';
import {
  FileText,
  Upload,
  Download,
  Eye,
  Share2,
  Folder,
  Search,
  Filter,
  Calendar,
  User,
  CheckCircle,
  Clock,
  AlertTriangle,
  Star,
  MoreHorizontal,
  Edit,
  Trash2
} from 'lucide-react';

interface DocumentCenterProps {
  userRole: string;
}

const DocumentCenter: React.FC<DocumentCenterProps> = ({ userRole }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const getDocuments = () => {
    switch (userRole) {
      case 'Doctor':
        return [
          {
            id: 1,
            name: 'Patient Lab Results - John Smith',
            type: 'Lab Report',
            category: 'lab',
            date: '2024-01-15',
            size: '2.4 MB',
            status: 'Ready',
            patient: 'John Smith',
            urgent: false
          },
          {
            id: 2,
            name: 'Prescription - Emily Davis',
            type: 'Prescription',
            category: 'prescription',
            date: '2024-01-14',
            size: '156 KB',
            status: 'Sent',
            patient: 'Emily Davis',
            urgent: false
          },
          {
            id: 3,
            name: 'Medical History - Michael Chen',
            type: 'Medical Record',
            category: 'medical',
            date: '2024-01-13',
            size: '5.2 MB',
            status: 'Updated',
            patient: 'Michael Chen',
            urgent: true
          }
        ];
      case 'Patient':
        return [
          {
            id: 1,
            name: 'Blood Test Results',
            type: 'Lab Report',
            category: 'lab',
            date: '2024-01-15',
            size: '2.4 MB',
            status: 'Ready',
            doctor: 'Dr. Sarah Johnson',
            urgent: false
          },
          {
            id: 2,
            name: 'Prescription - Lisinopril',
            type: 'Prescription',
            category: 'prescription',
            date: '2024-01-10',
            size: '156 KB',
            status: 'Active',
            doctor: 'Dr. Sarah Johnson',
            urgent: false
          },
          {
            id: 3,
            name: 'Chest X-Ray Report',
            type: 'Imaging',
            category: 'imaging',
            date: '2024-01-05',
            size: '8.7 MB',
            status: 'Ready',
            doctor: 'Dr. Michael Chen',
            urgent: false
          }
        ];
      case 'HR Manager':
        return [
          {
            id: 1,
            name: 'Employment Contract - Dr. Wilson',
            type: 'Contract',
            category: 'contract',
            date: '2024-01-15',
            size: '1.2 MB',
            status: 'Signed',
            employee: 'Dr. James Wilson',
            urgent: false
          },
          {
            id: 2,
            name: 'NDA - Nurse Davis',
            type: 'Legal Document',
            category: 'legal',
            date: '2024-01-14',
            size: '456 KB',
            status: 'Pending',
            employee: 'Emily Davis',
            urgent: true
          },
          {
            id: 3,
            name: 'Performance Review - Dr. Johnson',
            type: 'Review',
            category: 'review',
            date: '2024-01-12',
            size: '2.1 MB',
            status: 'Completed',
            employee: 'Dr. Sarah Johnson',
            urgent: false
          }
        ];
      case 'Admin':
        return [
          {
            id: 1,
            name: 'System Backup Report',
            type: 'System Report',
            category: 'system',
            date: '2024-01-15',
            size: '15.3 MB',
            status: 'Completed',
            department: 'IT',
            urgent: false
          },
          {
            id: 2,
            name: 'Security Audit Results',
            type: 'Audit Report',
            category: 'security',
            date: '2024-01-14',
            size: '3.7 MB',
            status: 'Review Required',
            department: 'Security',
            urgent: true
          },
          {
            id: 3,
            name: 'Monthly Analytics Report',
            type: 'Analytics',
            category: 'analytics',
            date: '2024-01-13',
            size: '8.9 MB',
            status: 'Ready',
            department: 'Analytics',
            urgent: false
          }
        ];
      default:
        return [];
    }
  };

  const getCategories = () => {
    switch (userRole) {
      case 'Doctor':
        return [
          { id: 'all', name: 'All Documents', icon: FileText },
          { id: 'lab', name: 'Lab Reports', icon: FileText },
          { id: 'prescription', name: 'Prescriptions', icon: FileText },
          { id: 'medical', name: 'Medical Records', icon: FileText },
          { id: 'imaging', name: 'Imaging', icon: FileText }
        ];
      case 'Patient':
        return [
          { id: 'all', name: 'All Documents', icon: FileText },
          { id: 'lab', name: 'Lab Results', icon: FileText },
          { id: 'prescription', name: 'Prescriptions', icon: FileText },
          { id: 'imaging', name: 'Imaging', icon: FileText },
          { id: 'visit', name: 'Visit Summaries', icon: FileText }
        ];
      case 'HR Manager':
        return [
          { id: 'all', name: 'All Documents', icon: FileText },
          { id: 'contract', name: 'Contracts', icon: FileText },
          { id: 'legal', name: 'Legal Documents', icon: FileText },
          { id: 'review', name: 'Reviews', icon: FileText },
          { id: 'onboarding', name: 'Onboarding', icon: FileText }
        ];
      case 'Admin':
        return [
          { id: 'all', name: 'All Documents', icon: FileText },
          { id: 'system', name: 'System Reports', icon: FileText },
          { id: 'security', name: 'Security', icon: FileText },
          { id: 'analytics', name: 'Analytics', icon: FileText },
          { id: 'compliance', name: 'Compliance', icon: FileText }
        ];
      default:
        return [];
    }
  };

  const documents = getDocuments();
  const categories = getCategories();

  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'ready':
      case 'completed':
      case 'signed':
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
      case 'review required':
        return 'bg-yellow-100 text-yellow-800';
      case 'sent':
      case 'updated':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPageTitle = () => {
    switch (userRole) {
      case 'Doctor':
        return 'Medical Records';
      case 'Patient':
        return 'My Documents';
      case 'HR Manager':
        return 'Employee Documents';
      case 'Admin':
        return 'Document Center';
      default:
        return 'Documents';
    }
  };

  const getPageDescription = () => {
    switch (userRole) {
      case 'Doctor':
        return 'Access and manage patient medical records and documents';
      case 'Patient':
        return 'View and download your medical documents and records';
      case 'HR Manager':
        return 'Manage employee documents and HR paperwork';
      case 'Admin':
        return 'Centralized document management and system reports';
      default:
        return 'Manage your documents and files';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{getPageTitle()}</h1>
            <p className="text-gray-600">{getPageDescription()}</p>
          </div>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
          
          {(userRole === 'Doctor' || userRole === 'HR Manager' || userRole === 'Admin') && (
            <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200 flex items-center space-x-2">
              <Upload className="w-4 h-4" />
              <span>Upload Document</span>
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                    activeCategory === category.id
                      ? 'bg-amber-100 text-amber-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Stats */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Quick Stats</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Total Documents</span>
                <span className="font-medium">{documents.length}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Urgent</span>
                <span className="font-medium text-red-600">
                  {documents.filter(doc => doc.urgent).length}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">This Week</span>
                <span className="font-medium">
                  {documents.filter(doc => {
                    const docDate = new Date(doc.date);
                    const weekAgo = new Date();
                    weekAgo.setDate(weekAgo.getDate() - 7);
                    return docDate >= weekAgo;
                  }).length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Documents List */}
        <div className="lg:col-span-3 space-y-4">
          {filteredDocuments.map((document) => (
            <div key={document.id} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-gray-900">{document.name}</h4>
                      {document.urgent && (
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{document.type}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-gray-500 flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{document.date}</span>
                      </span>
                      <span className="text-xs text-gray-500">{document.size}</span>
                      {userRole === 'Doctor' && (
                        <span className="text-xs text-gray-500 flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{document.patient}</span>
                        </span>
                      )}
                      {userRole === 'Patient' && (
                        <span className="text-xs text-gray-500 flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{document.doctor}</span>
                        </span>
                      )}
                      {userRole === 'HR Manager' && (
                        <span className="text-xs text-gray-500 flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{document.employee}</span>
                        </span>
                      )}
                      {userRole === 'Admin' && (
                        <span className="text-xs text-gray-500 flex items-center space-x-1">
                          <Folder className="w-3 h-3" />
                          <span>{document.department}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(document.status)}`}>
                    {document.status}
                  </span>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200" title="View">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200" title="Download">
                      <Download className="w-4 h-4" />
                    </button>
                    {(userRole === 'Doctor' || userRole === 'HR Manager') && (
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200" title="Share">
                        <Share2 className="w-4 h-4" />
                      </button>
                    )}
                    {(userRole === 'Doctor' || userRole === 'HR Manager' || userRole === 'Admin') && (
                      <div className="relative">
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredDocuments.length === 0 && (
            <div className="bg-white rounded-xl p-12 border border-gray-100 text-center">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No documents found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentCenter;