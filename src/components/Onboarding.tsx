import React, { useState } from 'react';
import {
  UserCheck,
  User,
  FileText,
  Upload,
  CheckCircle,
  Clock,
  ArrowRight,
  ArrowLeft,
  Shield,
  Users,
  Stethoscope,
  Settings,
  Heart,
  Download,
  Printer,
  X,
  Building,
  Phone,
  Mail,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Award
} from 'lucide-react';

interface OnboardingProps {
  userRole: string;
}

interface FormData {
  // Step 1: Account Setup
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelationship: string;
  
  // Step 2: Role Assignment
  selectedRole: string;
  department: string;
  startDate: string;
  employmentType: string;
  reportingManager: string;
  
  // Step 3: Profile & Credentials
  professionalTitle: string;
  licenseNumber: string;
  education: string;
  experience: string;
  specializations: string;
  certifications: string;
  
  // Step 4: Document Upload
  uploadedDocuments: string[];
  backgroundCheckConsent: boolean;
  
  // Step 5: Document Signing
  signedDocuments: string[];
  agreementDate: string;
}

const Onboarding: React.FC<OnboardingProps> = ({ userRole }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSummary, setShowSummary] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelationship: '',
    selectedRole: '',
    department: '',
    startDate: '',
    employmentType: '',
    reportingManager: '',
    professionalTitle: '',
    licenseNumber: '',
    education: '',
    experience: '',
    specializations: '',
    certifications: '',
    uploadedDocuments: [],
    backgroundCheckConsent: false,
    signedDocuments: [],
    agreementDate: ''
  });

  const handleInputChange = (field: keyof FormData, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Role-specific content
  const getPageTitle = () => {
    switch (userRole) {
      case 'HR Manager':
        return 'Employee Onboarding';
      case 'Admin':
        return 'User Onboarding System';
      case 'Doctor':
        return 'Patient Onboarding';
      default:
        return 'Onboarding Process';
    }
  };

  const getPageDescription = () => {
    switch (userRole) {
      case 'HR Manager':
        return 'Manage employee onboarding workflows and documentation';
      case 'Admin':
        return 'Configure and oversee all user onboarding processes';
      case 'Doctor':
        return 'Guide new patients through registration and setup';
      default:
        return 'Complete your setup to access the platform';
    }
  };

  const getOnboardingSteps = () => {
    const baseSteps = [
      {
        id: 1,
        title: 'Account Setup',
        description: 'Personal information and contact details',
        icon: User,
        status: currentStep === 1 ? 'active' : currentStep > 1 ? 'completed' : 'pending'
      }
    ];

    const roleSpecificSteps = {
      'HR Manager': [
        {
          id: 2,
          title: 'Role Assignment',
          description: 'Assign role and department',
          icon: Users,
          status: currentStep === 2 ? 'active' : currentStep > 2 ? 'completed' : 'pending'
        },
        {
          id: 3,
          title: 'Profile & Credentials',
          description: 'Professional information and certifications',
          icon: FileText,
          status: currentStep === 3 ? 'active' : currentStep > 3 ? 'completed' : 'pending'
        },
        {
          id: 4,
          title: 'Document Upload',
          description: 'Upload required documents and certifications',
          icon: Upload,
          status: currentStep === 4 ? 'active' : currentStep > 4 ? 'completed' : 'pending'
        },
        {
          id: 5,
          title: 'Document Signing',
          description: 'Sign employment agreements and policies',
          icon: Shield,
          status: currentStep === 5 ? 'active' : 'pending'
        }
      ]
    };

    return [...baseSteps, ...(roleSpecificSteps[userRole as keyof typeof roleSpecificSteps] || [])];
  };

  const onboardingSteps = getOnboardingSteps();

  const roles = [
    {
      id: 'doctor',
      title: 'Doctor',
      description: 'Provide medical services and manage patients',
      icon: Stethoscope,
      color: 'from-green-500 to-green-600',
      features: ['Patient management', 'Medical records access', 'Appointment scheduling', 'Prescription writing']
    },
    {
      id: 'nurse',
      title: 'Nurse',
      description: 'Provide patient care and support medical staff',
      icon: Heart,
      color: 'from-blue-500 to-blue-600',
      features: ['Patient care', 'Medical assistance', 'Health monitoring', 'Treatment support']
    },
    {
      id: 'staff',
      title: 'Administrative Staff',
      description: 'Support healthcare operations and administration',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      features: ['Administrative tasks', 'Patient support', 'Document management', 'Billing assistance']
    },
    {
      id: 'technician',
      title: 'Medical Technician',
      description: 'Operate medical equipment and conduct tests',
      icon: Settings,
      color: 'from-orange-500 to-orange-600',
      features: ['Equipment operation', 'Lab testing', 'Technical support', 'Quality control']
    }
  ];

  const departments = [
    'Cardiology', 'Neurology', 'Emergency', 'Pediatrics', 'Oncology', 
    'Orthopedics', 'Radiology', 'Laboratory', 'Administration', 'IT Support'
  ];

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
  const employmentTypes = ['Full-time', 'Part-time', 'Contract', 'Temporary', 'Intern'];
  const managers = ['Dr. Sarah Johnson', 'Dr. Michael Chen', 'Dr. Emily Davis', 'Dr. James Wilson', 'Lisa Brown (Admin)'];

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.selectedRole && formData.department && formData.startDate;
      case 3:
        return formData.professionalTitle && formData.education;
      case 4:
        return formData.backgroundCheckConsent;
      case 5:
        return formData.signedDocuments.length >= 2;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (currentStep < onboardingSteps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setFormData(prev => ({ ...prev, agreementDate: new Date().toISOString().split('T')[0] }));
      setShowSummary(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleDownload = () => {
    const element = document.getElementById('onboarding-summary');
    if (element) {
      const printContent = element.innerHTML;
      const originalContent = document.body.innerHTML;
      
      document.body.innerHTML = `
        <html>
          <head>
            <title>Employee Onboarding Summary</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
              .summary-section { margin-bottom: 30px; page-break-inside: avoid; }
              .section-title { font-size: 18px; font-weight: bold; color: #1f2937; margin-bottom: 15px; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; }
              .info-row { display: flex; margin-bottom: 10px; }
              .info-label { font-weight: bold; width: 200px; }
              .info-value { flex: 1; }
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

  if (showSummary) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Onboarding Summary</h2>
                  <p className="text-gray-600">Review all submitted information</p>
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
                  onClick={handleDownload}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print</span>
                </button>
                <button
                  onClick={() => setShowSummary(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Summary Content */}
          <div id="onboarding-summary" className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Employee Onboarding Summary</h1>
              <p className="text-gray-600">Completed on {new Date().toLocaleDateString()}</p>
            </div>

            {/* Personal Information */}
            <div className="summary-section mb-8">
              <h2 className="section-title text-xl font-bold text-blue-600 mb-4 pb-2 border-b-2 border-blue-200">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="info-row">
                  <span className="info-label font-semibold text-gray-700">Full Name:</span>
                  <span className="info-value text-gray-900">{formData.firstName} {formData.lastName}</span>
                </div>
                <div className="info-row">
                  <span className="info-label font-semibold text-gray-700">Email:</span>
                  <span className="info-value text-gray-900">{formData.email}</span>
                </div>
                <div className="info-row">
                  <span className="info-label font-semibold text-gray-700">Phone:</span>
                  <span className="info-value text-gray-900">{formData.phone}</span>
                </div>
                <div className="info-row">
                  <span className="info-label font-semibold text-gray-700">Date of Birth:</span>
                  <span className="info-value text-gray-900">{formData.dateOfBirth}</span>
                </div>
                <div className="info-row md:col-span-2">
                  <span className="info-label font-semibold text-gray-700">Address:</span>
                  <span className="info-value text-gray-900">{formData.address}, {formData.city}, {formData.state} {formData.zipCode}</span>
                </div>
                <div className="info-row">
                  <span className="info-label font-semibold text-gray-700">Emergency Contact:</span>
                  <span className="info-value text-gray-900">{formData.emergencyContactName} ({formData.emergencyContactRelationship})</span>
                </div>
                <div className="info-row">
                  <span className="info-label font-semibold text-gray-700">Emergency Phone:</span>
                  <span className="info-value text-gray-900">{formData.emergencyContactPhone}</span>
                </div>
              </div>
            </div>

            {/* Employment Information */}
            <div className="summary-section mb-8">
              <h2 className="section-title text-xl font-bold text-green-600 mb-4 pb-2 border-b-2 border-green-200">Employment Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="info-row">
                  <span className="info-label font-semibold text-gray-700">Role:</span>
                  <span className="info-value text-gray-900">{roles.find(r => r.id === formData.selectedRole)?.title}</span>
                </div>
                <div className="info-row">
                  <span className="info-label font-semibold text-gray-700">Department:</span>
                  <span className="info-value text-gray-900">{formData.department}</span>
                </div>
                <div className="info-row">
                  <span className="info-label font-semibold text-gray-700">Start Date:</span>
                  <span className="info-value text-gray-900">{formData.startDate}</span>
                </div>
                <div className="info-row">
                  <span className="info-label font-semibold text-gray-700">Employment Type:</span>
                  <span className="info-value text-gray-900">{formData.employmentType}</span>
                </div>
                <div className="info-row">
                  <span className="info-label font-semibold text-gray-700">Reporting Manager:</span>
                  <span className="info-value text-gray-900">{formData.reportingManager}</span>
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="summary-section mb-8">
              <h2 className="section-title text-xl font-bold text-purple-600 mb-4 pb-2 border-b-2 border-purple-200">Professional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="info-row">
                  <span className="info-label font-semibold text-gray-700">Professional Title:</span>
                  <span className="info-value text-gray-900">{formData.professionalTitle}</span>
                </div>
                <div className="info-row">
                  <span className="info-label font-semibold text-gray-700">License Number:</span>
                  <span className="info-value text-gray-900">{formData.licenseNumber || 'N/A'}</span>
                </div>
                <div className="info-row md:col-span-2">
                  <span className="info-label font-semibold text-gray-700">Education:</span>
                  <span className="info-value text-gray-900">{formData.education}</span>
                </div>
                <div className="info-row md:col-span-2">
                  <span className="info-label font-semibold text-gray-700">Experience:</span>
                  <span className="info-value text-gray-900">{formData.experience || 'Not specified'}</span>
                </div>
                <div className="info-row md:col-span-2">
                  <span className="info-label font-semibold text-gray-700">Specializations:</span>
                  <span className="info-value text-gray-900">{formData.specializations || 'Not specified'}</span>
                </div>
                <div className="info-row md:col-span-2">
                  <span className="info-label font-semibold text-gray-700">Certifications:</span>
                  <span className="info-value text-gray-900">{formData.certifications || 'Not specified'}</span>
                </div>
              </div>
            </div>

            {/* Documents & Agreements */}
            <div className="summary-section mb-8">
              <h2 className="section-title text-xl font-bold text-orange-600 mb-4 pb-2 border-b-2 border-orange-200">Documents & Agreements</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="info-row">
                  <span className="info-label font-semibold text-gray-700">Background Check Consent:</span>
                  <span className="info-value text-gray-900">{formData.backgroundCheckConsent ? 'Provided' : 'Not provided'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label font-semibold text-gray-700">Signed Documents:</span>
                  <span className="info-value text-gray-900">{formData.signedDocuments.join(', ')}</span>
                </div>
                <div className="info-row">
                  <span className="info-label font-semibold text-gray-700">Agreement Date:</span>
                  <span className="info-value text-gray-900">{formData.agreementDate}</span>
                </div>
              </div>
            </div>

            {/* Signature Section */}
            <div className="signature-section mt-12 pt-8 border-t-2 border-gray-300">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Signatures</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm text-gray-600 mb-4">Employee Signature:</p>
                  <div className="signature-line border-b-2 border-black h-12 mb-2"></div>
                  <p className="text-xs text-gray-500">Signature</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-4">HR Representative:</p>
                  <div className="signature-line border-b-2 border-black h-12 mb-2"></div>
                  <p className="text-xs text-gray-500">Signature</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-b-2xl">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setShowSummary(false)}
                className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Form</span>
              </button>
              <button
                onClick={() => {
                  alert('Onboarding completed successfully!');
                  setShowSummary(false);
                  setCurrentStep(1);
                }}
                className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 flex items-center space-x-2"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Complete Onboarding</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Information</h2>
              <p className="text-gray-600">Please provide your personal details and contact information</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <select
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select State</option>
                      {states.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="City name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                    <input
                      type="text"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="12345"
                    />
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
                      <input
                        type="text"
                        value={formData.emergencyContactName}
                        onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Contact name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Phone</label>
                      <input
                        type="tel"
                        value={formData.emergencyContactPhone}
                        onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Relationship</label>
                      <select
                        value={formData.emergencyContactRelationship}
                        onChange={(e) => handleInputChange('emergencyContactRelationship', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="">Select Relationship</option>
                        {relationships.map(rel => (
                          <option key={rel} value={rel}>{rel}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Role Assignment</h2>
              <p className="text-gray-600">Select the employee's role and department assignment</p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Role Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Role</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {roles.map((role) => {
                    const Icon = role.icon;
                    return (
                      <button
                        key={role.id}
                        onClick={() => handleInputChange('selectedRole', role.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                          formData.selectedRole === role.id
                            ? 'border-teal-500 bg-teal-50'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`w-10 h-10 bg-gradient-to-r ${role.color} rounded-lg flex items-center justify-center mb-3`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">{role.title}</h4>
                        <p className="text-sm text-gray-600">{role.description}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Employment Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department *</label>
                  <select
                    value={formData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select Department</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date *</label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Employment Type</label>
                  <select
                    value={formData.employmentType}
                    onChange={(e) => handleInputChange('employmentType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select Type</option>
                    {employmentTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reporting Manager</label>
                  <select
                    value={formData.reportingManager}
                    onChange={(e) => handleInputChange('reportingManager', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select Manager</option>
                    {managers.map(manager => (
                      <option key={manager} value={manager}>{manager}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Profile & Credentials</h2>
              <p className="text-gray-600">Provide professional information and qualifications</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Professional Title *</label>
                    <input
                      type="text"
                      value={formData.professionalTitle}
                      onChange={(e) => handleInputChange('professionalTitle', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="e.g., Cardiologist, Registered Nurse, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">License Number</label>
                    <input
                      type="text"
                      value={formData.licenseNumber}
                      onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Professional license number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Education *</label>
                  <textarea
                    value={formData.education}
                    onChange={(e) => handleInputChange('education', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="List your educational background, degrees, and institutions"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Professional Experience</label>
                  <textarea
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Describe your relevant work experience and achievements"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Specializations</label>
                  <textarea
                    value={formData.specializations}
                    onChange={(e) => handleInputChange('specializations', e.target.value)}
                    rows={2}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="List any medical specializations or areas of expertise"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Certifications</label>
                  <textarea
                    value={formData.certifications}
                    onChange={(e) => handleInputChange('certifications', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="List professional certifications, training, and continuing education"
                  />
                </div>
              </form>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Document Upload</h2>
              <p className="text-gray-600">Upload required documents and provide necessary consents</p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Document Upload Areas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors duration-200">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <h3 className="font-medium text-gray-900 mb-2">Professional License</h3>
                  <p className="text-sm text-gray-600 mb-3">Upload a copy of your professional license</p>
                  <button 
                    onClick={() => {
                      const docs = [...formData.uploadedDocuments];
                      if (!docs.includes('Professional License')) {
                        docs.push('Professional License');
                        handleInputChange('uploadedDocuments', docs);
                      }
                    }}
                    className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200"
                  >
                    Choose File
                  </button>
                  {formData.uploadedDocuments.includes('Professional License') && (
                    <div className="mt-2 text-green-600 text-sm flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Uploaded
                    </div>
                  )}
                </div>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors duration-200">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <h3 className="font-medium text-gray-900 mb-2">Government ID</h3>
                  <p className="text-sm text-gray-600 mb-3">Upload a government-issued photo ID</p>
                  <button 
                    onClick={() => {
                      const docs = [...formData.uploadedDocuments];
                      if (!docs.includes('Government ID')) {
                        docs.push('Government ID');
                        handleInputChange('uploadedDocuments', docs);
                      }
                    }}
                    className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200"
                  >
                    Choose File
                  </button>
                  {formData.uploadedDocuments.includes('Government ID') && (
                    <div className="mt-2 text-green-600 text-sm flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Uploaded
                    </div>
                  )}
                </div>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors duration-200">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <h3 className="font-medium text-gray-900 mb-2">Resume/CV</h3>
                  <p className="text-sm text-gray-600 mb-3">Upload your current resume or CV</p>
                  <button 
                    onClick={() => {
                      const docs = [...formData.uploadedDocuments];
                      if (!docs.includes('Resume/CV')) {
                        docs.push('Resume/CV');
                        handleInputChange('uploadedDocuments', docs);
                      }
                    }}
                    className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200"
                  >
                    Choose File
                  </button>
                  {formData.uploadedDocuments.includes('Resume/CV') && (
                    <div className="mt-2 text-green-600 text-sm flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Uploaded
                    </div>
                  )}
                </div>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors duration-200">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <h3 className="font-medium text-gray-900 mb-2">Certifications</h3>
                  <p className="text-sm text-gray-600 mb-3">Upload relevant certifications</p>
                  <button 
                    onClick={() => {
                      const docs = [...formData.uploadedDocuments];
                      if (!docs.includes('Certifications')) {
                        docs.push('Certifications');
                        handleInputChange('uploadedDocuments', docs);
                      }
                    }}
                    className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200"
                  >
                    Choose File
                  </button>
                  {formData.uploadedDocuments.includes('Certifications') && (
                    <div className="mt-2 text-green-600 text-sm flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Uploaded
                    </div>
                  )}
                </div>
              </div>

              {/* Background Check Consent */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Background Check Consent</h3>
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="backgroundCheck"
                    checked={formData.backgroundCheckConsent}
                    onChange={(e) => handleInputChange('backgroundCheckConsent', e.target.checked)}
                    className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <label htmlFor="backgroundCheck" className="text-sm text-gray-700">
                    I consent to a background check being conducted as part of my employment verification process. 
                    I understand that this may include verification of my employment history, education, criminal background, 
                    and professional references. *
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Document Signing</h2>
              <p className="text-gray-600">Review and sign employment agreements and policies</p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">Employment Contract</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Employment terms, conditions, compensation, and benefits package
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center"><FileText className="w-3 h-3 mr-1" />12 pages</span>
                      <span className="flex items-center"><Clock className="w-3 h-3 mr-1" />Est. 10 min read</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      const docs = [...formData.signedDocuments];
                      if (!docs.includes('Employment Contract')) {
                        docs.push('Employment Contract');
                        handleInputChange('signedDocuments', docs);
                      }
                    }}
                    className={`px-6 py-2 rounded-lg transition-colors duration-200 ${
                      formData.signedDocuments.includes('Employment Contract')
                        ? 'bg-green-100 text-green-700 cursor-default'
                        : 'bg-teal-600 text-white hover:bg-teal-700'
                    }`}
                    disabled={formData.signedDocuments.includes('Employment Contract')}
                  >
                    {formData.signedDocuments.includes('Employment Contract') ? (
                      <span className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Signed
                      </span>
                    ) : (
                      'Sign Document'
                    )}
                  </button>
                </div>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">Privacy Policy & HIPAA Agreement</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Data privacy, patient confidentiality, and HIPAA compliance requirements
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center"><FileText className="w-3 h-3 mr-1" />8 pages</span>
                      <span className="flex items-center"><Clock className="w-3 h-3 mr-1" />Est. 7 min read</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      const docs = [...formData.signedDocuments];
                      if (!docs.includes('Privacy Policy & HIPAA Agreement')) {
                        docs.push('Privacy Policy & HIPAA Agreement');
                        handleInputChange('signedDocuments', docs);
                      }
                    }}
                    className={`px-6 py-2 rounded-lg transition-colors duration-200 ${
                      formData.signedDocuments.includes('Privacy Policy & HIPAA Agreement')
                        ? 'bg-green-100 text-green-700 cursor-default'
                        : 'bg-teal-600 text-white hover:bg-teal-700'
                    }`}
                    disabled={formData.signedDocuments.includes('Privacy Policy & HIPAA Agreement')}
                  >
                    {formData.signedDocuments.includes('Privacy Policy & HIPAA Agreement') ? (
                      <span className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Signed
                      </span>
                    ) : (
                      'Sign Document'
                    )}
                  </button>
                </div>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">Code of Conduct & Ethics</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Professional conduct standards, ethics guidelines, and workplace policies
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center"><FileText className="w-3 h-3 mr-1" />6 pages</span>
                      <span className="flex items-center"><Clock className="w-3 h-3 mr-1" />Est. 5 min read</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      const docs = [...formData.signedDocuments];
                      if (!docs.includes('Code of Conduct & Ethics')) {
                        docs.push('Code of Conduct & Ethics');
                        handleInputChange('signedDocuments', docs);
                      }
                    }}
                    className={`px-6 py-2 rounded-lg transition-colors duration-200 ${
                      formData.signedDocuments.includes('Code of Conduct & Ethics')
                        ? 'bg-green-100 text-green-700 cursor-default'
                        : 'bg-teal-600 text-white hover:bg-teal-700'
                    }`}
                    disabled={formData.signedDocuments.includes('Code of Conduct & Ethics')}
                  >
                    {formData.signedDocuments.includes('Code of Conduct & Ethics') ? (
                      <span className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Signed
                      </span>
                    ) : (
                      'Sign Document'
                    )}
                  </button>
                </div>
              </div>

              {formData.signedDocuments.length >= 2 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">All required documents have been signed</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <UserCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{getPageTitle()}</h1>
            <p className="text-gray-600">{getPageDescription()}</p>
          </div>
        </div>
        
        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {onboardingSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${
                    step.status === 'completed'
                      ? 'bg-green-100'
                      : step.status === 'active'
                      ? 'bg-teal-100'
                      : 'bg-gray-100'
                  }`}>
                    {step.status === 'completed' ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : step.status === 'active' ? (
                      <Icon className="w-6 h-6 text-teal-600" />
                    ) : (
                      <Icon className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                  <div className="text-center">
                    <p className={`text-sm font-medium ${
                      step.status === 'active' ? 'text-teal-600' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{step.description}</p>
                  </div>
                </div>
                {index < onboardingSteps.length - 1 && (
                  <div className={`h-0.5 w-24 mx-4 ${
                    step.status === 'completed' ? 'bg-green-300' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        {renderStepContent()}
        
        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors duration-200 ${
              currentStep === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex space-x-2">
            {onboardingSteps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index + 1 === currentStep
                    ? 'bg-teal-500'
                    : index + 1 < currentStep
                    ? 'bg-green-400'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={!isStepValid()}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors duration-200 ${
              !isStepValid()
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600'
            }`}
          >
            <span>{currentStep === onboardingSteps.length ? 'Complete' : 'Next'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;