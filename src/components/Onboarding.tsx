import React, { useState } from 'react';
import {
  UserCheck,
  User,
  FileText,
  Upload,
  CheckCircle,
  Clock,
  ArrowRight,
  Shield,
  Users,
  Stethoscope,
  Settings,
  Heart
} from 'lucide-react';

interface OnboardingProps {
  userRole: string;
}

const Onboarding: React.FC<OnboardingProps> = ({ userRole }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState('');

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
        description: userRole === 'Doctor' ? 'Patient registration and verification' : 'Create account and verify identity',
        icon: User,
        status: 'completed'
      }
    ];

    const roleSpecificSteps = {
      'HR Manager': [
        {
          id: 2,
          title: 'Employee Role Assignment',
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
      ],
      'Doctor': [
        {
          id: 2,
          title: 'Medical Information',
          description: 'Collect patient medical history',
          icon: Stethoscope,
          status: currentStep === 2 ? 'active' : currentStep > 2 ? 'completed' : 'pending'
        },
        {
          id: 3,
          title: 'Insurance & Billing',
          description: 'Setup insurance and payment information',
          icon: FileText,
          status: currentStep === 3 ? 'active' : currentStep > 3 ? 'completed' : 'pending'
        },
        {
          id: 4,
          title: 'Health Assessment',
          description: 'Complete initial health questionnaire',
          icon: Heart,
          status: currentStep === 4 ? 'active' : currentStep > 4 ? 'completed' : 'pending'
        },
        {
          id: 5,
          title: 'Consent Forms',
          description: 'Sign consent and privacy agreements',
          icon: Shield,
          status: currentStep === 5 ? 'active' : 'pending'
        }
      ],
      'Admin': [
        {
          id: 2,
          title: 'System Role Assignment',
          description: 'Configure user permissions and access',
          icon: Settings,
          status: currentStep === 2 ? 'active' : currentStep > 2 ? 'completed' : 'pending'
        },
        {
          id: 3,
          title: 'Profile Configuration',
          description: 'Setup user profile and preferences',
          icon: FileText,
          status: currentStep === 3 ? 'active' : currentStep > 3 ? 'completed' : 'pending'
        },
        {
          id: 4,
          title: 'System Access',
          description: 'Configure system access and integrations',
          icon: Upload,
          status: currentStep === 4 ? 'active' : currentStep > 4 ? 'completed' : 'pending'
        },
        {
          id: 5,
          title: 'Security Setup',
          description: 'Configure security settings and policies',
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
      id: 'patient',
      title: 'Patient',
      description: 'Access medical services and manage health records',
      icon: User,
      color: 'from-blue-500 to-blue-600',
      features: ['Book appointments', 'View medical records', 'Prescription management', 'Chat with doctors']
    },
    {
      id: 'doctor',
      title: 'Doctor',
      description: 'Provide medical services and manage patients',
      icon: Stethoscope,
      color: 'from-green-500 to-green-600',
      features: ['Patient management', 'Medical records access', 'Appointment scheduling', 'Prescription writing']
    },
    {
      id: 'staff',
      title: 'Staff Member',
      description: 'Support healthcare operations and administration',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      features: ['Administrative tasks', 'Patient support', 'Document management', 'Billing assistance']
    }
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {userRole === 'HR Manager' ? 'Assign Employee Role' : 
                 userRole === 'Doctor' ? 'Medical Information' : 'Configure User Role'}
              </h2>
              <p className="text-gray-600">
                {userRole === 'HR Manager' ? 'Select the role that best describes the employee\'s position' :
                 userRole === 'Doctor' ? 'Collect patient medical history and current conditions' :
                 'Configure user permissions and system access'}
              </p>
            </div>
            
            {userRole === 'HR Manager' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {roles.map((role) => {
                  const Icon = role.icon;
                  return (
                    <button
                      key={role.id}
                      onClick={() => setSelectedRole(role.id)}
                      className={`p-6 rounded-xl border-2 text-left transition-all duration-200 ${
                        selectedRole === role.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${role.color} rounded-xl flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{role.title}</h3>
                      <p className="text-gray-600 mb-4">{role.description}</p>
                      <ul className="space-y-2">
                        {role.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </button>
                  );
                })}
              </div>
            )}
            
            {userRole === 'Doctor' && (
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Medications</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="List current medications..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Allergies</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="List any allergies..."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Medical History</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe relevant medical history..."
                  />
                </div>
              </div>
            )}
            
            {(selectedRole || userRole !== 'HR Manager') && (
              <div className="flex justify-center">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {userRole === 'HR Manager' ? 'Complete Employee Profile' :
                 userRole === 'Doctor' ? 'Insurance & Billing Information' :
                 'Configure User Profile'}
              </h2>
              <p className="text-gray-600">
                {userRole === 'HR Manager' ? 'Provide employee professional information and credentials' :
                 userRole === 'Doctor' ? 'Setup insurance and payment information for billing' :
                 'Configure user profile and system preferences'}
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {userRole === 'Doctor' ? 'Insurance Provider' : 'First Name'}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={userRole === 'Doctor' ? 'Enter insurance provider' : 'Enter first name'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {userRole === 'Doctor' ? 'Policy Number' : 'Last Name'}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={userRole === 'Doctor' ? 'Enter policy number' : 'Enter last name'}
                    />
                  </div>
                </div>
                
                {userRole === 'HR Manager' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Professional Title</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., Cardiologist, Registered Nurse, etc."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Department/Specialty</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">Select department</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="neurology">Neurology</option>
                        <option value="emergency">Emergency</option>
                        <option value="pediatrics">Pediatrics</option>
                        <option value="administration">Administration</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">License Number</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter professional license number"
                      />
                    </div>
                  </>
                )}
                
                {userRole === 'Doctor' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Emergency contact name and phone"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Payment Method</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">Select payment method</option>
                        <option value="insurance">Insurance</option>
                        <option value="credit">Credit Card</option>
                        <option value="cash">Cash</option>
                      </select>
                    </div>
                  </>
                )}
                
                <div className="flex justify-center space-x-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {userRole === 'HR Manager' ? 'Upload Required Documents' :
                 userRole === 'Doctor' ? 'Health Assessment' :
                 'System Configuration'}
              </h2>
              <p className="text-gray-600">
                {userRole === 'HR Manager' ? 'Upload employee documents and certifications' :
                 userRole === 'Doctor' ? 'Complete initial health questionnaire' :
                 'Configure system access and integrations'}
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-6">
              {userRole === 'HR Manager' && (
                <>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors duration-200">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Professional License</h3>
                    <p className="text-gray-600 mb-4">Upload a copy of professional license or certification</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Choose File
                    </button>
                  </div>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors duration-200">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Upload ID Document</h3>
                    <p className="text-gray-600 mb-4">Upload a government-issued photo ID</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Choose File
                    </button>
                  </div>
                </>
              )}
              
              {userRole === 'Doctor' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Health Concerns</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe any current health concerns..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Lifestyle Information</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Exercise Frequency</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option>Daily</option>
                          <option>Weekly</option>
                          <option>Monthly</option>
                          <option>Rarely</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Smoking Status</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option>Never</option>
                          <option>Former</option>
                          <option>Current</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep(5)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {userRole === 'HR Manager' ? 'Sign Employment Documents' :
                 userRole === 'Doctor' ? 'Sign Consent Forms' :
                 'Complete Security Setup'}
              </h2>
              <p className="text-gray-600">
                {userRole === 'HR Manager' ? 'Review and sign employment agreements and policies' :
                 userRole === 'Doctor' ? 'Review and sign consent and privacy agreements' :
                 'Configure security settings and complete setup'}
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {userRole === 'HR Manager' ? 'Employment Contract' :
                       userRole === 'Doctor' ? 'Patient Consent Form' :
                       'Terms & Conditions'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {userRole === 'HR Manager' ? 'Employment terms and conditions' :
                       userRole === 'Doctor' ? 'Treatment consent and authorization' :
                       'Platform usage terms and conditions'}
                    </p>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Sign Document
                  </button>
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">Privacy Policy</h3>
                    <p className="text-sm text-gray-600">Data privacy and protection policy</p>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Sign Document
                  </button>
                </div>
              </div>
              
              {userRole === 'HR Manager' && (
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">Code of Conduct</h3>
                      <p className="text-sm text-gray-600">Professional conduct and ethics agreement</p>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Sign Document
                    </button>
                  </div>
                </div>
              )}
              
              <div className="flex justify-center space-x-4 pt-6">
                <button
                  onClick={() => setCurrentStep(4)}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Back
                </button>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Complete Onboarding</span>
                </button>
              </div>
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
                      ? 'bg-blue-100'
                      : 'bg-gray-100'
                  }`}>
                    {step.status === 'completed' ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : step.status === 'active' ? (
                      <Icon className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Icon className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                  <div className="text-center">
                    <p className={`text-sm font-medium ${
                      step.status === 'active' ? 'text-blue-600' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </p>
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
      </div>
    </div>
  );
};

export default Onboarding;