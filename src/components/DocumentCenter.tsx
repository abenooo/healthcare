import React, { useState } from 'react';
import {
  FileText,
  Upload,
  Download,
  Eye,
  PenTool,
  CheckCircle,
  Clock,
  AlertCircle,
  Folder,
  Search,
  Filter,
  Share,
  Edit,
  Trash2
} from 'lucide-react';
import jsPDF from "jspdf"; // Install with: npm install jspdf

interface DocumentCenterProps {
  userRole: string;
}

const DocumentCenter: React.FC<DocumentCenterProps> = ({ userRole }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    insuranceProvider: "",
    insuranceId: "",
    primaryPhysician: "",
    allergies: "",
    medications: "",
    medicalHistory: "",
    emergencyName: "",
    emergencyRelation: "",
    emergencyPhone: "",
  });
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  // Role-specific content
  const getPageTitle = () => {
    switch (userRole) {
      case 'Doctor':
        return 'Medical Records Center';
      case 'Patient':
        return 'My Documents';
      case 'HR Manager':
        return 'Employee Document Center';
      case 'Admin':
        return 'System Document Center';
      default:
        return 'Document Center';
    }
  };

  const getPageDescription = () => {
    switch (userRole) {
      case 'Doctor':
        return 'Manage patient medical records and documents';
      case 'Patient':
        return 'Access and manage your personal medical documents';
      case 'HR Manager':
        return 'Manage employee documents and digital signatures';
      case 'Admin':
        return 'Oversee all system documents and templates';
      default:
        return 'Manage documents and digital signatures';
    }
  };

  const documentTabs = [
    { id: 'all', name: 'All Documents', count: 24 },
    { id: 'pending', name: userRole === 'Doctor' ? 'Pending Review' : 'Pending Signature', count: 3 },
    { id: 'signed', name: userRole === 'Doctor' ? 'Completed' : 'Signed', count: 18 },
    { id: 'templates', name: 'Templates', count: 12 }
  ];

  const documents = [
    {
      id: 1,
      name: userRole === 'Patient' ? 'My Lab Results - Blood Test' : 'Patient Lab Results - John Smith',
      type: userRole === 'Doctor' ? 'Lab Results' : 'Medical Record',
      status: 'Completed',
      signedDate: '2024-01-12',
      size: '2.3 MB',
      category: 'signed',
      doctor: userRole === 'Patient' ? 'Dr. Sarah Johnson' : null
    },
    {
      id: 2,
      name: userRole === 'HR Manager' ? 'Employment Contract - Dr. Sarah Johnson' : 'Consent Form',
      type: userRole === 'HR Manager' ? 'Contract' : 'Consent Form',
      status: 'Pending Signature',
      sentDate: '2024-01-10',
      size: '1.8 MB',
      category: 'pending',
      doctor: userRole === 'Patient' ? 'Dr. Michael Chen' : null
    },
    {
      id: 3,
      name: userRole === 'Patient' ? 'Prescription - Lisinopril' : 'Privacy Policy Agreement - Emily Davis',
      type: userRole === 'Patient' ? 'Prescription' : 'Agreement',
      status: 'Completed',
      signedDate: '2024-01-08',
      size: '956 KB',
      category: 'signed',
      doctor: userRole === 'Patient' ? 'Dr. Sarah Johnson' : null
    },
    {
      id: 4,
      name: userRole === 'Doctor' ? 'Treatment Plan - Michael Chen' : 'Medical Release Form',
      type: userRole === 'Doctor' ? 'Treatment Plan' : 'Release Form',
      status: 'Draft',
      createdDate: '2024-01-05',
      size: '1.2 MB',
      category: 'pending',
      doctor: userRole === 'Patient' ? 'Dr. Emily Davis' : null
    },
    {
      id: 5,
      name: userRole === 'HR Manager' ? 'NDA Template - Standard' : 'Insurance Form Template',
      type: 'Template',
      status: 'Template',
      createdDate: '2024-01-01',
      size: '800 KB',
      category: 'templates',
      doctor: null
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
      case 'Signed':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'Pending Signature':
      case 'Pending Review':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'Draft':
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
      case 'Template':
        return <Folder className="w-4 h-4 text-blue-600" />;
      default:
        return <FileText className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
      case 'Signed':
        return 'bg-green-100 text-green-800';
      case 'Pending Signature':
      case 'Pending Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Draft':
        return 'bg-gray-100 text-gray-800';
      case 'Template':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredDocuments = activeTab === 'all' 
    ? documents 
    : documents.filter(doc => doc.category === activeTab);

  // Handle form field changes
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Generate PDF
  const handleGeneratePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Patient Registration Form", 10, 15);
    doc.setFontSize(12);

    let y = 25;
    doc.text(`Name: ${formData.firstName} ${formData.lastName}`, 10, y);
    y += 8;
    doc.text(`DOB: ${formData.dob}`, 10, y);
    y += 8;
    doc.text(`Gender: ${formData.gender}`, 10, y);
    y += 8;
    doc.text(`Marital Status: ${formData.maritalStatus}`, 10, y);
    y += 8;
    doc.text(`Address: ${formData.address}, ${formData.city}, ${formData.state} ${formData.zip}`, 10, y);
    y += 8;
    doc.text(`Phone: ${formData.phone}`, 10, y);
    y += 8;
    doc.text(`Email: ${formData.email}`, 10, y);
    y += 8;
    doc.text(`Insurance Provider: ${formData.insuranceProvider}`, 10, y);
    y += 8;
    doc.text(`Insurance ID: ${formData.insuranceId}`, 10, y);
    y += 8;
    doc.text(`Primary Physician: ${formData.primaryPhysician}`, 10, y);
    y += 8;
    doc.text(`Allergies: ${formData.allergies}`, 10, y);
    y += 8;
    doc.text(`Medications: ${formData.medications}`, 10, y);
    y += 8;
    doc.text(`Medical History: ${formData.medicalHistory}`, 10, y);
    y += 8;
    doc.text(`Emergency Contact: ${formData.emergencyName} (${formData.emergencyRelation}) - ${formData.emergencyPhone}`, 10, y);

    const pdfBlob = doc.output("blob");
    setPdfUrl(URL.createObjectURL(pdfBlob));
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
        
        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
          >
            <Upload className="w-4 h-4" />
            <span>Upload Document 123</span>
          </button>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center space-x-2"
            onClick={() => { setShowForm(true); setFormStep(1); }}
          >
            <PenTool className="w-4 h-4" />
            <span>Fill Patient Form</span>
          </button>
          {(userRole === 'Doctor' || userRole === 'HR Manager' || userRole === 'Admin') && (
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2">
              <PenTool className="w-4 h-4" />
              <span>Create Document</span>
            </button>
          )}
          {(userRole === 'HR Manager' || userRole === 'Admin') && (
            <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2">
              <Folder className="w-4 h-4" />
              <span>New Template</span>
            </button>
          )}
        </div>
      </div>

      {/* Multi-step Patient Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={() => setShowForm(false)}
            >✕</button>
            <h2 className="text-2xl font-bold mb-4">Patient Registration (Step {formStep}/3)</h2>
            <form
              onSubmit={e => {
                e.preventDefault();
                if (formStep < 3) setFormStep(formStep + 1);
                else {
                  handleGeneratePDF();
                  setShowForm(false);
                }
              }}
            >
              {formStep === 1 && (
                <>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="block mb-1">First Name</label>
                      <input name="firstName" value={formData.firstName} onChange={handleFormChange} className="mb-3 w-full border rounded p-2" required />
                    </div>
                    <div className="flex-1">
                      <label className="block mb-1">Last Name</label>
                      <input name="lastName" value={formData.lastName} onChange={handleFormChange} className="mb-3 w-full border rounded p-2" required />
                    </div>
                  </div>
                  <label className="block mb-1">Date of Birth</label>
                  <input type="date" name="dob" value={formData.dob} onChange={handleFormChange} className="mb-3 w-full border rounded p-2" required />
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="block mb-1">Gender</label>
                      <select name="gender" value={formData.gender} onChange={handleFormChange} className="mb-3 w-full border rounded p-2" required>
                        <option value="">Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="flex-1">
                      <label className="block mb-1">Marital Status</label>
                      <select name="maritalStatus" value={formData.maritalStatus} onChange={handleFormChange} className="mb-3 w-full border rounded p-2">
                        <option value="">Select</option>
                        <option>Single</option>
                        <option>Married</option>
                        <option>Divorced</option>
                        <option>Widowed</option>
                      </select>
                    </div>
                  </div>
                  <label className="block mb-1">Address</label>
                  <input name="address" value={formData.address} onChange={handleFormChange} className="mb-3 w-full border rounded p-2" required />
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="block mb-1">City</label>
                      <input name="city" value={formData.city} onChange={handleFormChange} className="mb-3 w-full border rounded p-2" required />
                    </div>
                    <div className="flex-1">
                      <label className="block mb-1">State</label>
                      <input name="state" value={formData.state} onChange={handleFormChange} className="mb-3 w-full border rounded p-2" required />
                    </div>
                    <div className="flex-1">
                      <label className="block mb-1">Zip</label>
                      <input name="zip" value={formData.zip} onChange={handleFormChange} className="mb-3 w-full border rounded p-2" required />
                    </div>
                  </div>
                  <label className="block mb-1">Phone</label>
                  <input name="phone" value={formData.phone} onChange={handleFormChange} className="mb-3 w-full border rounded p-2" required />
                  <label className="block mb-1">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleFormChange} className="mb-3 w-full border rounded p-2" required />
                </>
              )}
              {formStep === 2 && (
                <>
                  <label className="block mb-1">Insurance Provider</label>
                  <input name="insuranceProvider" value={formData.insuranceProvider} onChange={handleFormChange} className="mb-3 w-full border rounded p-2" />
                  <label className="block mb-1">Insurance ID</label>
                  <input name="insuranceId" value={formData.insuranceId} onChange={handleFormChange} className="mb-3 w-full border rounded p-2" />
                  <label className="block mb-1">Primary Physician</label>
                  <input name="primaryPhysician" value={formData.primaryPhysician} onChange={handleFormChange} className="mb-3 w-full border rounded p-2" />
                  <label className="block mb-1">Allergies</label>
                  <input name="allergies" value={formData.allergies} onChange={handleFormChange} className="mb-3 w-full border rounded p-2" />
                  <label className="block mb-1">Current Medications</label>
                  <input name="medications" value={formData.medications} onChange={handleFormChange} className="mb-3 w-full border rounded p-2" />
                  <label className="block mb-1">Medical History</label>
                  <textarea name="medicalHistory" value={formData.medicalHistory} onChange={handleFormChange} className="mb-3 w-full border rounded p-2" rows={3} />
                </>
              )}
              {formStep === 3 && (
                <>
                  <label className="block mb-1">Emergency Contact Name</label>
                  <input name="emergencyName" value={formData.emergencyName} onChange={handleFormChange} className="mb-3 w-full border rounded p-2" required />
                  <label className="block mb-1">Relationship</label>
                  <input name="emergencyRelation" value={formData.emergencyRelation} onChange={handleFormChange} className="mb-3 w-full border rounded p-2" required />
                  <label className="block mb-1">Emergency Contact Phone</label>
                  <input name="emergencyPhone" value={formData.emergencyPhone} onChange={handleFormChange} className="mb-3 w-full border rounded p-2" required />
                </>
              )}
              <div className="flex justify-between mt-4">
                {formStep > 1 && (
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-200 rounded"
                    onClick={() => setFormStep(formStep - 1)}
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  {formStep < 3 ? "Next" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PDF Download Link */}
      {pdfUrl && (
        <div className="bg-green-50 border border-green-200 rounded p-4 my-4 flex items-center space-x-4">
          <CheckCircle className="w-6 h-6 text-green-600" />
          <span>Your form is ready:</span>
          <a
            href={pdfUrl}
            download="Patient-Form.pdf"
            className="text-blue-600 underline font-medium"
          >
            Download PDF
          </a>
        </div>
      )}

      {/* Document Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">24</h3>
          <p className="text-gray-600 text-sm">Total Documents</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">3</h3>
          <p className="text-gray-600 text-sm">
            {userRole === 'Doctor' ? 'Pending Review' : 'Pending Signatures'}
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">18</h3>
          <p className="text-gray-600 text-sm">Completed</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
              <PenTool className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">12</h3>
          <p className="text-gray-600 text-sm">Templates</p>
        </div>
      </div>

      {/* Document Management */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        {/* Search and Filter */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search documents..."
                className="pl-10 pr-4 py-2 w-64 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
          
          <div className="flex space-x-2">
            {documentTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-amber-100 text-amber-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.name} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Document List */}
        <div className="space-y-4">
          {filteredDocuments.map((document) => (
            <div
              key={document.id}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{document.name}</h4>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-sm text-gray-600">{document.type}</span>
                      <span className="text-sm text-gray-600">{document.size}</span>
                      {document.signedDate && (
                        <span className="text-sm text-gray-600">Completed: {document.signedDate}</span>
                      )}
                      {document.sentDate && (
                        <span className="text-sm text-gray-600">Sent: {document.sentDate}</span>
                      )}
                      {document.createdDate && (
                        <span className="text-sm text-gray-600">Created: {document.createdDate}</span>
                      )}
                      {document.doctor && (
                        <span className="text-sm text-gray-600">Dr: {document.doctor}</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(document.status)}
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(document.status)}`}>
                      {document.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200" title="View">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200" title="Download">
                      <Download className="w-4 h-4" />
                    </button>
                    {userRole === 'Patient' && (
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200" title="Share">
                        <Share className="w-4 h-4" />
                      </button>
                    )}
                    {(userRole === 'Doctor' || userRole === 'HR Manager' || userRole === 'Admin') && (
                      <>
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200" title="Edit">
                          <Edit className="w-4 h-4" />
                        </button>
                        {document.status === 'Pending Signature' && (
                          <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors duration-200">
                            Send Reminder
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Role-specific Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {userRole === 'Doctor' ? 'Recent Patient Records' : 'Recent Activity'}
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {userRole === 'Patient' 
                    ? 'Lab results received from Dr. Sarah Johnson'
                    : userRole === 'Doctor'
                    ? 'Lab results uploaded for John Smith'
                    : 'John Smith signed Patient Consent Form'
                  }
                </p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {userRole === 'Patient'
                    ? 'Prescription updated by Dr. Michael Chen'
                    : userRole === 'Doctor'
                    ? 'Treatment plan created for Emily Davis'
                    : 'Document sent to Emily Davis'
                  }
                </p>
                <p className="text-xs text-gray-500">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {userRole === 'Patient'
                    ? 'Insurance form completed'
                    : userRole === 'Doctor'
                    ? 'Medical record updated'
                    : 'Privacy Agreement completed'
                  }
                </p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {userRole === 'HR Manager' ? 'Document Templates' : 'Quick Actions'}
          </h3>
          <div className="space-y-3">
            {userRole === 'HR Manager' ? (
              <>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900">Employment Contract</h4>
                  <p className="text-sm text-blue-700">Used 45 times</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900">Non-Disclosure Agreement</h4>
                  <p className="text-sm text-green-700">Used 23 times</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-900">Employee Handbook</h4>
                  <p className="text-sm text-purple-700">Used 67 times</p>
                </div>
              </>
            ) : (
              <>
                <button className="w-full p-3 bg-blue-50 rounded-lg text-left hover:bg-blue-100 transition-colors duration-200">
                  <h4 className="font-medium text-blue-900">
                    {userRole === 'Patient' ? 'Request Medical Records' : 'Create New Document'}
                  </h4>
                  <p className="text-sm text-blue-700">
                    {userRole === 'Patient' ? 'Get copies of your records' : 'Start a new document'}
                  </p>
                </button>
                <button className="w-full p-3 bg-green-50 rounded-lg text-left hover:bg-green-100 transition-colors duration-200">
                  <h4 className="font-medium text-green-900">
                    {userRole === 'Patient' ? 'Share with Doctor' : 'Upload Results'}
                  </h4>
                  <p className="text-sm text-green-700">
                    {userRole === 'Patient' ? 'Share documents securely' : 'Upload test results'}
                  </p>
                </button>
                <button className="w-full p-3 bg-purple-50 rounded-lg text-left hover:bg-purple-100 transition-colors duration-200">
                  <h4 className="font-medium text-purple-900">
                    {userRole === 'Patient' ? 'Download All' : 'Manage Templates'}
                  </h4>
                  <p className="text-sm text-purple-700">
                    {userRole === 'Patient' ? 'Download all documents' : 'Create and edit templates'}
                  </p>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentCenter;