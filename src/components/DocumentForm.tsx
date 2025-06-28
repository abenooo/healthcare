import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  Download,
  Printer,
  X,
  User,
  Heart,
  Shield,
  CheckCircle
} from 'lucide-react';

interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  ssn: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelationship: string;
  
  // Medical Information
  primaryPhysician: string;
  allergies: string;
  currentMedications: string;
  medicalHistory: string;
  smokingStatus: string;
  alcoholConsumption: string;
  exerciseFrequency: string;
  
  // Insurance Information
  insuranceProvider: string;
  policyNumber: string;
  groupNumber: string;
  subscriberName: string;
  subscriberDOB: string;
  hasSecondaryInsurance: string;
  secondaryInsuranceProvider: string;
  secondaryPolicyNumber: string;
}

interface DocumentFormProps {
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

const DocumentForm: React.FC<DocumentFormProps> = ({ onClose, onSubmit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    ssn: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelationship: '',
    primaryPhysician: '',
    allergies: '',
    currentMedications: '',
    medicalHistory: '',
    smokingStatus: '',
    alcoholConsumption: '',
    exerciseFrequency: '',
    insuranceProvider: '',
    policyNumber: '',
    groupNumber: '',
    subscriberName: '',
    subscriberDOB: '',
    hasSecondaryInsurance: '',
    secondaryInsuranceProvider: '',
    secondaryPolicyNumber: ''
  });

  const totalPages = 3;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      setShowPreview(true);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDownload = () => {
    const element = document.getElementById('form-preview');
    if (element) {
      const printContent = element.innerHTML;
      const originalContent = document.body.innerHTML;
      
      document.body.innerHTML = `
        <html>
          <head>
            <title>Patient Information Form</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
              .form-section { margin-bottom: 30px; page-break-inside: avoid; }
              .section-title { font-size: 18px; font-weight: bold; color: #1f2937; margin-bottom: 15px; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; }
              .form-row { display: flex; margin-bottom: 10px; }
              .form-label { font-weight: bold; width: 200px; }
              .form-value { flex: 1; }
              .signature-section { margin-top: 40px; border-top: 1px solid #ccc; padding-top: 20px; }
              .signature-line { border-bottom: 1px solid #000; width: 300px; height: 40px; display: inline-block; margin: 0 20px; }
              @media print { body { margin: 0; } }
            </style>
          </head>
          <body>
            ${printContent}
          </body>
        </html>
      `;
      
      window.print();
      document.body.innerHTML = originalContent;
      window.location.reload();
    }
  };

  const handlePrint = () => {
    handleDownload();
  };

  const isPageValid = () => {
    switch (currentPage) {
      case 1:
        return formData.firstName && formData.lastName && formData.dateOfBirth && formData.gender;
      case 2:
        return formData.primaryPhysician && formData.smokingStatus;
      case 3:
        return formData.insuranceProvider && formData.policyNumber;
      default:
        return true;
    }
  };

  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  const relationships = ['Spouse', 'Parent', 'Child', 'Sibling', 'Friend', 'Other'];
  const physicians = ['Dr. Sarah Johnson', 'Dr. Michael Chen', 'Dr. Emily Davis', 'Dr. James Wilson', 'Dr. Lisa Brown'];
  const smokingOptions = ['Never', 'Former', 'Current', 'Occasional'];
  const alcoholOptions = ['Never', 'Rarely', 'Occasionally', 'Regularly', 'Daily'];
  const exerciseOptions = ['Never', 'Rarely', 'Sometimes', 'Regularly', 'Daily'];
  const insuranceProviders = ['Aetna', 'Blue Cross Blue Shield', 'Cigna', 'Humana', 'Kaiser Permanente', 'UnitedHealth', 'Other'];

  if (showPreview) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Form Preview</h2>
                  <p className="text-gray-600">Review your information before submitting</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleDownload}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print</span>
                </button>
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Form Preview Content */}
          <div id="form-preview" className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Patient Information Form</h1>
              <p className="text-gray-600">Completed on {new Date().toLocaleDateString()}</p>
            </div>

            {/* Personal Information */}
            <div className="form-section mb-8">
              <h2 className="section-title text-xl font-bold text-blue-600 mb-4 pb-2 border-b-2 border-blue-200">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-row">
                  <span className="form-label font-semibold text-gray-700">First Name:</span>
                  <span className="form-value text-gray-900">{formData.firstName}</span>
                </div>
                <div className="form-row">
                  <span className="form-label font-semibold text-gray-700">Last Name:</span>
                  <span className="form-value text-gray-900">{formData.lastName}</span>
                </div>
                <div className="form-row">
                  <span className="form-label font-semibold text-gray-700">Date of Birth:</span>
                  <span className="form-value text-gray-900">{formData.dateOfBirth}</span>
                </div>
                <div className="form-row">
                  <span className="form-label font-semibold text-gray-700">Gender:</span>
                  <span className="form-value text-gray-900">{formData.gender}</span>
                </div>
                <div className="form-row">
                  <span className="form-label font-semibold text-gray-700">Phone:</span>
                  <span className="form-value text-gray-900">{formData.phone}</span>
                </div>
                <div className="form-row">
                  <span className="form-label font-semibold text-gray-700">Email:</span>
                  <span className="form-value text-gray-900">{formData.email}</span>
                </div>
                <div className="form-row md:col-span-2">
                  <span className="form-label font-semibold text-gray-700">Address:</span>
                  <span className="form-value text-gray-900">{formData.address}, {formData.city}, {formData.state} {formData.zipCode}</span>
                </div>
                <div className="form-row">
                  <span className="form-label font-semibold text-gray-700">Emergency Contact:</span>
                  <span className="form-value text-gray-900">{formData.emergencyContactName}</span>
                </div>
                <div className="form-row">
                  <span className="form-label font-semibold text-gray-700">Emergency Phone:</span>
                  <span className="form-value text-gray-900">{formData.emergencyContactPhone}</span>
                </div>
              </div>
            </div>

            {/* Medical Information */}
            <div className="form-section mb-8">
              <h2 className="section-title text-xl font-bold text-red-600 mb-4 pb-2 border-b-2 border-red-200">Medical Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-row">
                  <span className="form-label font-semibold text-gray-700">Primary Physician:</span>
                  <span className="form-value text-gray-900">{formData.primaryPhysician}</span>
                </div>
                <div className="form-row">
                  <span className="form-label font-semibold text-gray-700">Smoking Status:</span>
                  <span className="form-value text-gray-900">{formData.smokingStatus}</span>
                </div>
                <div className="form-row">
                  <span className="form-label font-semibold text-gray-700">Alcohol Consumption:</span>
                  <span className="form-value text-gray-900">{formData.alcoholConsumption}</span>
                </div>
                <div className="form-row">
                  <span className="form-label font-semibold text-gray-700">Exercise Frequency:</span>
                  <span className="form-value text-gray-900">{formData.exerciseFrequency}</span>
                </div>
                <div className="form-row md:col-span-2">
                  <span className="form-label font-semibold text-gray-700">Allergies:</span>
                  <span className="form-value text-gray-900">{formData.allergies || 'None reported'}</span>
                </div>
                <div className="form-row md:col-span-2">
                  <span className="form-label font-semibold text-gray-700">Current Medications:</span>
                  <span className="form-value text-gray-900">{formData.currentMedications || 'None reported'}</span>
                </div>
                <div className="form-row md:col-span-2">
                  <span className="form-label font-semibold text-gray-700">Medical History:</span>
                  <span className="form-value text-gray-900">{formData.medicalHistory || 'None reported'}</span>
                </div>
              </div>
            </div>

            {/* Insurance Information */}
            <div className="form-section mb-8">
              <h2 className="section-title text-xl font-bold text-green-600 mb-4 pb-2 border-b-2 border-green-200">Insurance Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-row">
                  <span className="form-label font-semibold text-gray-700">Insurance Provider:</span>
                  <span className="form-value text-gray-900">{formData.insuranceProvider}</span>
                </div>
                <div className="form-row">
                  <span className="form-label font-semibold text-gray-700">Policy Number:</span>
                  <span className="form-value text-gray-900">{formData.policyNumber}</span>
                </div>
                <div className="form-row">
                  <span className="form-label font-semibold text-gray-700">Group Number:</span>
                  <span className="form-value text-gray-900">{formData.groupNumber}</span>
                </div>
                <div className="form-row">
                  <span className="form-label font-semibold text-gray-700">Subscriber Name:</span>
                  <span className="form-value text-gray-900">{formData.subscriberName}</span>
                </div>
                {formData.hasSecondaryInsurance === 'Yes' && (
                  <>
                    <div className="form-row">
                      <span className="form-label font-semibold text-gray-700">Secondary Insurance:</span>
                      <span className="form-value text-gray-900">{formData.secondaryInsuranceProvider}</span>
                    </div>
                    <div className="form-row">
                      <span className="form-label font-semibold text-gray-700">Secondary Policy:</span>
                      <span className="form-value text-gray-900">{formData.secondaryPolicyNumber}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Signature Section */}
            <div className="signature-section mt-12 pt-8 border-t-2 border-gray-300">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Signature Required</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm text-gray-600 mb-4">Patient Signature:</p>
                  <div className="signature-line border-b-2 border-black h-12 mb-2"></div>
                  <p className="text-xs text-gray-500">Signature</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-4">Date:</p>
                  <div className="signature-line border-b-2 border-black h-12 mb-2"></div>
                  <p className="text-xs text-gray-500">Date</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-b-2xl">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setShowPreview(false)}
                className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Form</span>
              </button>
              <button
                onClick={() => {
                  onSubmit(formData);
                  setShowPreview(false);
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Submit Form</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                currentPage === 1 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                currentPage === 2 ? 'bg-gradient-to-r from-red-500 to-red-600' :
                'bg-gradient-to-r from-green-500 to-green-600'
              }`}>
                {currentPage === 1 ? <User className="w-5 h-5 text-white" /> :
                 currentPage === 2 ? <Heart className="w-5 h-5 text-white" /> :
                 <Shield className="w-5 h-5 text-white" />}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {currentPage === 1 ? 'Personal Information' :
                   currentPage === 2 ? 'Medical Information' :
                   'Insurance Information'}
                </h2>
                <p className="text-gray-600">Page {currentPage} of {totalPages}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentPage === 1 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                  currentPage === 2 ? 'bg-gradient-to-r from-red-500 to-red-600' :
                  'bg-gradient-to-r from-green-500 to-green-600'
                }`}
                style={{ width: `${(currentPage / totalPages) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 lg:p-8">
          {currentPage === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Gender *</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="lg:col-span-2">
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Street Address</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="123 Main Street"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="City name"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">State</label>
                  <select
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select State</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">ZIP Code</label>
                  <input
                    type="text"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="12345"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Emergency Contact Name</label>
                  <input
                    type="text"
                    value={formData.emergencyContactName}
                    onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Contact name"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Emergency Contact Phone</label>
                  <input
                    type="tel"
                    value={formData.emergencyContactPhone}
                    onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Relationship</label>
                  <select
                    value={formData.emergencyContactRelationship}
                    onChange={(e) => handleInputChange('emergencyContactRelationship', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Relationship</option>
                    {relationships.map(rel => (
                      <option key={rel} value={rel}>{rel}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentPage === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Primary Physician *</label>
                  <select
                    value={formData.primaryPhysician}
                    onChange={(e) => handleInputChange('primaryPhysician', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select Physician</option>
                    {physicians.map(physician => (
                      <option key={physician} value={physician}>{physician}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Smoking Status *</label>
                  <select
                    value={formData.smokingStatus}
                    onChange={(e) => handleInputChange('smokingStatus', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select Status</option>
                    {smokingOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Alcohol Consumption</label>
                  <select
                    value={formData.alcoholConsumption}
                    onChange={(e) => handleInputChange('alcoholConsumption', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select Frequency</option>
                    {alcoholOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Exercise Frequency</label>
                  <select
                    value={formData.exerciseFrequency}
                    onChange={(e) => handleInputChange('exerciseFrequency', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select Frequency</option>
                    {exerciseOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="lg:col-span-2">
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Known Allergies</label>
                  <textarea
                    value={formData.allergies}
                    onChange={(e) => handleInputChange('allergies', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    rows={3}
                    placeholder="List any known allergies or write 'None'"
                  />
                </div>
                <div className="lg:col-span-2">
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Current Medications</label>
                  <textarea
                    value={formData.currentMedications}
                    onChange={(e) => handleInputChange('currentMedications', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    rows={3}
                    placeholder="List current medications and dosages or write 'None'"
                  />
                </div>
                <div className="lg:col-span-2">
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Medical History</label>
                  <textarea
                    value={formData.medicalHistory}
                    onChange={(e) => handleInputChange('medicalHistory', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    rows={4}
                    placeholder="Describe any significant medical history, surgeries, or chronic conditions"
                  />
                </div>
              </div>
            </div>
          )}

          {currentPage === 3 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Insurance Provider *</label>
                  <select
                    value={formData.insuranceProvider}
                    onChange={(e) => handleInputChange('insuranceProvider', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select Provider</option>
                    {insuranceProviders.map(provider => (
                      <option key={provider} value={provider}>{provider}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Policy Number *</label>
                  <input
                    type="text"
                    value={formData.policyNumber}
                    onChange={(e) => handleInputChange('policyNumber', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter policy number"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Group Number</label>
                  <input
                    type="text"
                    value={formData.groupNumber}
                    onChange={(e) => handleInputChange('groupNumber', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter group number"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Subscriber Name</label>
                  <input
                    type="text"
                    value={formData.subscriberName}
                    onChange={(e) => handleInputChange('subscriberName', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Name on insurance policy"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Subscriber Date of Birth</label>
                  <input
                    type="date"
                    value={formData.subscriberDOB}
                    onChange={(e) => handleInputChange('subscriberDOB', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Secondary Insurance?</label>
                  <select
                    value={formData.hasSecondaryInsurance}
                    onChange={(e) => handleInputChange('hasSecondaryInsurance', e.target.value)}
                    className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select Option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                {formData.hasSecondaryInsurance === 'Yes' && (
                  <>
                    <div>
                      <label className="block text-lg font-semibold text-gray-700 mb-2">Secondary Insurance Provider</label>
                      <select
                        value={formData.secondaryInsuranceProvider}
                        onChange={(e) => handleInputChange('secondaryInsuranceProvider', e.target.value)}
                        className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select Provider</option>
                        {insuranceProviders.map(provider => (
                          <option key={provider} value={provider}>{provider}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-lg font-semibold text-gray-700 mb-2">Secondary Policy Number</label>
                      <input
                        type="text"
                        value={formData.secondaryPolicyNumber}
                        onChange={(e) => handleInputChange('secondaryPolicyNumber', e.target.value)}
                        className="w-full text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter secondary policy number"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-b-2xl">
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors duration-200 ${
                currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <div className="flex space-x-2">
              {[1, 2, 3].map((page) => (
                <div
                  key={page}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    page === currentPage
                      ? currentPage === 1 ? 'bg-blue-500' :
                        currentPage === 2 ? 'bg-red-500' : 'bg-green-500'
                      : page < currentPage
                      ? 'bg-gray-400'
                      : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={!isPageValid()}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors duration-200 ${
                !isPageValid()
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : currentPage === 1 ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700' :
                    currentPage === 2 ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700' :
                    'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
              }`}
            >
              <span>{currentPage === totalPages ? 'Preview Form' : 'Next'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentForm;