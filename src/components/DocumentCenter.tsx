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
  const [selectedPerson, setSelectedPerson] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fullyOnboardedEmployees = [
    {
      id: 1,
      name: "Dr. Amanda Foster",
      position: "Cardiologist",
      department: "Cardiology",
      startDate: "2024-02-01",
      email: "amanda.foster@email.com",
      phone: "(555) 123-4567",
      address: "123 Medical Drive, Springfield",
      avatar: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      status: "completed",
      completionPercentage: 100,
      onboardingSteps: [
        { step: "Personal Information", status: "completed", date: "2024-01-25" },
        { step: "Employment Contract", status: "completed", date: "2024-01-26" },
        { step: "Background Check", status: "completed", date: "2024-01-27" },
        { step: "Certification Verification", status: "completed", date: "2024-01-28" },
        { step: "Care Training", status: "completed", date: "2024-01-29" },
        { step: "Patient Assignment", status: "completed", date: "2024-01-30" },
        { step: "System Access Setup", status: "completed", date: "2024-01-31" }
      ],
      documents: [
        { name: "Resume", status: "uploaded", type: "pdf" },
        { name: "Care Certification", status: "uploaded", type: "pdf" },
        { name: "Background Check", status: "uploaded", type: "pdf" },
        { name: "Employment Contract", status: "signed", type: "pdf" }
      ],
      emergencyContact: {
        name: "Michael Johnson",
        relationship: "Husband",
        phone: "(555) 987-6543"
      }
    },
    {
      id: 2,
      name: "David Thompson", 
      position: "Care Giver",
      department: "Home Care",
      startDate: "2024-02-10",
      email: "sarah.johnson@email.com",
      phone: "(555) 123-4567",
      address: "123 Care Lane, Springfield",
      avatar: "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      status: "completed",
      completionPercentage: 100,
      onboardingSteps: [
        { step: "Personal Information", status: "completed", date: "2024-01-25" },
        { step: "Employment Contract", status: "completed", date: "2024-01-26" },
        { step: "Background Check", status: "completed", date: "2024-01-27" },
        { step: "Certification Verification", status: "completed", date: "2024-01-28" },
        { step: "Care Training", status: "completed", date: "2024-01-29" },
        { step: "Patient Assignment", status: "completed", date: "2024-01-30" },
        { step: "System Access Setup", status: "completed", date: "2024-01-31" }
      ],
      documents: [
        { name: "Resume", status: "uploaded", type: "pdf" },
        { name: "Care Certification", status: "uploaded", type: "pdf" },
        { name: "Background Check", status: "uploaded", type: "pdf" },
        { name: "Employment Contract", status: "signed", type: "pdf" }
      ],
      emergencyContact: {
        name: "Michael Johnson",
        relationship: "Husband",
        phone: "(555) 987-6543"
      }
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Care Giver",
      department: "Home Care",
      startDate: "2024-02-10",
      email: "sarah.johnson@email.com",
      phone: "(555) 123-4567",
      address: "123 Care Lane, Springfield",
      avatar: "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      status: "completed",
      completionPercentage: 100,
      onboardingSteps: [
        { step: "Personal Information", status: "completed", date: "2024-01-25" },
        { step: "Employment Contract", status: "completed", date: "2024-01-26" },
        { step: "Background Check", status: "completed", date: "2024-01-27" },
        { step: "Certification Verification", status: "completed", date: "2024-01-28" },
        { step: "Care Training", status: "completed", date: "2024-01-29" },
        { step: "Patient Assignment", status: "completed", date: "2024-01-30" },
        { step: "System Access Setup", status: "completed", date: "2024-01-31" }
      ],
      documents: [
        { name: "Resume", status: "uploaded", type: "pdf" },
        { name: "Care Certification", status: "uploaded", type: "pdf" },
        { name: "Background Check", status: "uploaded", type: "pdf" },
        { name: "Employment Contract", status: "signed", type: "pdf" }
      ],
      emergencyContact: {
        name: "Michael Johnson",
        relationship: "Husband",
        phone: "(555) 987-6543"
      }
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Care Giver",
      department: "Home Care",
      startDate: "2024-02-15",
      email: "michael.chen@email.com",
      phone: "(555) 234-5678",
      address: "456 Care Ave, Springfield",
      avatar: "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      status: "completed",
      completionPercentage: 100,
      onboardingSteps: [
        { step: "Personal Information", status: "completed", date: "2024-02-01" },
        { step: "Employment Contract", status: "completed", date: "2024-02-02" },
        { step: "Background Check", status: "completed", date: "2024-02-03" },
        { step: "Certification Verification", status: "completed", date: "2024-02-04" },
        { step: "Care Training", status: "completed", date: "2024-02-05" },
        { step: "Patient Assignment", status: "completed", date: "2024-02-06" },
        { step: "System Access Setup", status: "completed", date: "2024-02-07" }
      ],
      documents: [
        { name: "Resume", status: "uploaded", type: "pdf" },
        { name: "Care Certification", status: "uploaded", type: "pdf" },
        { name: "Background Check", status: "uploaded", type: "pdf" },
        { name: "Employment Contract", status: "signed", type: "pdf" }
      ],
      emergencyContact: {
        name: "Lisa Chen",
        relationship: "Wife",
        phone: "(555) 345-6789"
      }
    },
    {
      id: 4,
      name: "Lisa Anderson",
      position: "Care Giver",
      department: "Home Care",
      startDate: "2024-02-20",
      email: "lisa.anderson@email.com",
      phone: "(555) 456-7890",
      address: "789 Care Blvd, Springfield",
      avatar: "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      status: "completed",
      completionPercentage: 100,
      onboardingSteps: [
        { step: "Personal Information", status: "completed", date: "2024-02-10" },
        { step: "Employment Contract", status: "completed", date: "2024-02-11" },
        { step: "Background Check", status: "completed", date: "2024-02-12" },
        { step: "Certification Verification", status: "completed", date: "2024-02-13" },
        { step: "Care Training", status: "completed", date: "2024-02-14" },
        { step: "Patient Assignment", status: "completed", date: "2024-02-15" },
        { step: "System Access Setup", status: "completed", date: "2024-02-16" }
      ],
      documents: [
        { name: "Resume", status: "uploaded", type: "pdf" },
        { name: "Care Certification", status: "uploaded", type: "pdf" },
        { name: "Background Check", status: "uploaded", type: "pdf" },
        { name: "Employment Contract", status: "signed", type: "pdf" }
      ],
      emergencyContact: {
        name: "David Anderson",
        relationship: "Son",
        phone: "(555) 567-8901"
      }
    },
    {
      id: 5,
      name: "Jennifer White",
      position: "Care Giver",
      department: "Home Care",
      startDate: "2024-02-25",
      email: "jennifer.white@email.com",
      phone: "(555) 678-9012",
      address: "101 Care Lane, Springfield",
      avatar: "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      status: "completed",
      completionPercentage: 100,
      onboardingSteps: [
        { step: "Personal Information", status: "completed", date: "2024-02-20" },
        { step: "Employment Contract", status: "completed", date: "2024-02-21" },
        { step: "Background Check", status: "completed", date: "2024-02-22" },
        { step: "Certification Verification", status: "completed", date: "2024-02-23" },
        { step: "Care Training", status: "completed", date: "2024-02-24" },
        { step: "Patient Assignment", status: "completed", date: "2024-02-25" },
        { step: "System Access Setup", status: "completed", date: "2024-02-26" }
      ],
      documents: [
        { name: "Resume", status: "uploaded", type: "pdf" },
        { name: "Care Certification", status: "uploaded", type: "pdf" },
        { name: "Background Check", status: "uploaded", type: "pdf" },
        { name: "Employment Contract", status: "signed", type: "pdf" }
      ],
      emergencyContact: {
        name: "Robert White",
        relationship: "Husband",
        phone: "(555) 789-0123"
      }
    }
  ];

  const fullyOnboardedPatients = [
    {
      id: 1,
      name: "Robert Wilson",
      age: 75,
      condition: "Post-Surgery Recovery",
      address: "321 Recovery Road, Springfield",
      phone: "(555) 456-7890",
      email: "robert.wilson@email.com",
      avatar: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      status: "completed",
      completionPercentage: 100,
      enrollmentDate: "2024-01-22",
      assignedCareGiver: "Sarah Johnson",
      onboardingSteps: [
        { step: "Initial Assessment", status: "completed", date: "2024-01-22" },
        { step: "Medical History Review", status: "completed", date: "2024-01-23" },
        { step: "Insurance Verification", status: "completed", date: "2024-01-24" },
        { step: "Care Plan Development", status: "completed", date: "2024-01-25" },
        { step: "Care Giver Assignment", status: "completed", date: "2024-01-26" },
        { step: "Service Scheduling", status: "completed", date: "2024-01-27" }
      ],
      documents: [
        { name: "Medical History", status: "completed", type: "pdf" },
        { name: "Insurance Card", status: "uploaded", type: "pdf" },
        { name: "Emergency Contacts", status: "completed", type: "pdf" },
        { name: "Care Agreement", status: "signed", type: "pdf" }
      ],
      emergencyContact: {
        name: "Linda Wilson",
        relationship: "Daughter",
        phone: "(555) 654-3210"
      }
    },
    {
      id: 2,
      name: "Emily Davis",
      age: 62,
      condition: "Alzheimer's Disease",
      address: "654 Memory Lane, Springfield",
      phone: "(555) 789-0123",
      email: "emily.davis@email.com",
      avatar: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      status: "completed",
      completionPercentage: 100,
      enrollmentDate: "2024-01-23",
      assignedCareGiver: "Michael Chen",
      onboardingSteps: [
        { step: "Initial Assessment", status: "completed", date: "2024-01-23" },
        { step: "Medical History Review", status: "completed", date: "2024-01-24" },
        { step: "Insurance Verification", status: "completed", date: "2024-01-25" },
        { step: "Care Plan Development", status: "completed", date: "2024-01-26" },
        { step: "Care Giver Assignment", status: "completed", date: "2024-01-27" },
        { step: "Service Scheduling", status: "completed", date: "2024-01-28" }
      ],
      documents: [
        { name: "Medical History", status: "completed", type: "pdf" },
        { name: "Insurance Card", status: "uploaded", type: "pdf" },
        { name: "Emergency Contacts", status: "completed", type: "pdf" },
        { name: "Care Agreement", status: "signed", type: "pdf" }
      ],
      emergencyContact: {
        name: "Robert Davis",
        relationship: "Son",
        phone: "(555) 890-1234"
      }
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      age: 80,
      condition: "Parkinson's Disease",
      address: "987 Care Blvd, Springfield",
      phone: "(555) 901-2345",
      email: "maria.rodriguez@email.com",
      avatar: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      status: "completed",
      completionPercentage: 100,
      enrollmentDate: "2024-01-24",
      assignedCareGiver: "Lisa Anderson",
      onboardingSteps: [
        { step: "Initial Assessment", status: "completed", date: "2024-01-24" },
        { step: "Medical History Review", status: "completed", date: "2024-01-25" },
        { step: "Insurance Verification", status: "completed", date: "2024-01-26" },
        { step: "Care Plan Development", status: "completed", date: "2024-01-27" },
        { step: "Care Giver Assignment", status: "completed", date: "2024-01-28" },
        { step: "Service Scheduling", status: "completed", date: "2024-01-29" }
      ],
      documents: [
        { name: "Medical History", status: "completed", type: "pdf" },
        { name: "Insurance Card", status: "uploaded", type: "pdf" },
        { name: "Emergency Contacts", status: "completed", type: "pdf" },
        { name: "Care Agreement", status: "signed", type: "pdf" }
      ],
      emergencyContact: {
        name: "James Rodriguez",
        relationship: "Daughter",
        phone: "(555) 012-3456"
      }
    },
    {
      id: 4,
      name: "James Wilson",
      age: 70,
      condition: "Diabetes",
      address: "123 Memory Lane, Springfield",
      phone: "(555) 123-4567",
      email: "james.wilson@email.com",
      avatar: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      status: "completed",
      completionPercentage: 100,
      enrollmentDate: "2024-01-25",
      assignedCareGiver: "Jennifer White",
      onboardingSteps: [
        { step: "Initial Assessment", status: "completed", date: "2024-01-25" },
        { step: "Medical History Review", status: "completed", date: "2024-01-26" },
        { step: "Insurance Verification", status: "completed", date: "2024-01-27" },
        { step: "Care Plan Development", status: "completed", date: "2024-01-28" },
        { step: "Care Giver Assignment", status: "completed", date: "2024-01-29" },
        { step: "Service Scheduling", status: "completed", date: "2024-01-30" }
      ],
      documents: [
        { name: "Medical History", status: "completed", type: "pdf" },
        { name: "Insurance Card", status: "uploaded", type: "pdf" },
        { name: "Emergency Contacts", status: "completed", type: "pdf" },
        { name: "Care Agreement", status: "signed", type: "pdf" }
      ],
      emergencyContact: {
        name: "Maria Wilson",
        relationship: "Daughter",
        phone: "(555) 234-5678"
      }
    },
    {
      id: 5,
      name: "Robert Brown",
      age: 65,
      condition: "Heart Disease",
      address: "456 Care Ave, Springfield",
      phone: "(555) 345-6789",
      email: "robert.brown@email.com",
      avatar: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      status: "completed",
      completionPercentage: 100,
      enrollmentDate: "2024-01-26",
      assignedCareGiver: "David Thompson",
      onboardingSteps: [
        { step: "Initial Assessment", status: "completed", date: "2024-01-26" },
        { step: "Medical History Review", status: "completed", date: "2024-01-27" },
        { step: "Insurance Verification", status: "completed", date: "2024-01-28" },
        { step: "Care Plan Development", status: "completed", date: "2024-01-29" },
        { step: "Care Giver Assignment", status: "completed", date: "2024-01-30" },
        { step: "Service Scheduling", status: "completed", date: "2024-01-31" }
      ],
      documents: [
        { name: "Medical History", status: "completed", type: "pdf" },
        { name: "Insurance Card", status: "uploaded", type: "pdf" },
        { name: "Emergency Contacts", status: "completed", type: "pdf" },
        { name: "Care Agreement", status: "signed", type: "pdf" }
      ],
      emergencyContact: {
        name: "Emily Brown",
        relationship: "Daughter",
        phone: "(555) 456-7890"
      }
    }
  ];

  const people = documentType === "employee" ? fullyOnboardedEmployees : fullyOnboardedPatients;

  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ("position" in person
      ? person.position.toLowerCase().includes(searchTerm.toLowerCase())
      : person.condition.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalEmployees = fullyOnboardedEmployees.length;
  const totalPatients = fullyOnboardedPatients.length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete':
      case 'signed':
      case 'verified':
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending_review':
      case 'pending':
      case 'pending_upload':
      case 'not_sent':
      case 'not_started':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'incomplete':
      case 'not_started':
      case 'not_sent':
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
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'pending_review':
      case 'pending':
      case 'pending_upload':
      case 'not_sent':
      case 'not_started':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'incomplete':
      case 'not_started':
      case 'not_sent':
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

  const filteredDocuments = people.filter(person => person.completionPercentage === 100);

  const PersonDetailModal = ({ person, onClose }: { person: any; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <img src={person.avatar} alt={person.name} className="w-16 h-16 rounded-full object-cover border-2 border-blue-500" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{person.name}</h2>
              {"position" in person && (
                <p className="text-blue-700 font-medium">{person.position}</p>
              )}
              {"department" in person && (
                <p className="text-gray-500">{person.department}</p>
              )}
              {"condition" in person && (
                <p className="text-blue-700 font-medium">{person.condition}</p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Start:</span>{"startDate" in person ? person.startDate : person.enrollmentDate}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Email:</span> {person.email}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Phone:</span> {person.phone}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Address:</span> {person.address}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Emergency Contact:</span> {person.emergencyContact?.name} ({person.emergencyContact?.relationship}) {person.emergencyContact?.phone}
            </p>
          </div>
        </div>

        {/* Onboarding Steps */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Onboarding Progress</h4>
          <div className="space-y-2">
            {person.onboardingSteps.map((step: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between p-2 border border-gray-100 rounded-lg bg-gray-50">
                <div className="flex items-center space-x-2">
                  {/* Status Icon */}
                  {step.status === "completed" && <CheckCircle className="w-4 h-4 text-green-600" />}
                  {step.status === "pending" && <Clock className="w-4 h-4 text-yellow-600" />}
                  {step.status === "in_progress" && <Clock className="w-4 h-4 text-blue-600" />}
                  <span>{step.step}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {step.date && (
                    <span className="text-xs text-gray-400">{step.date}</span>
                  )}
                  <span className={`text-xs px-2 py-1 rounded-full border font-medium
                    ${step.status === "completed" ? "bg-green-100 text-green-800 border-green-200" :
                      step.status === "in_progress" ? "bg-blue-100 text-blue-800 border-blue-200" :
                      "bg-yellow-100 text-yellow-800 border-yellow-200"}`}>
                    {step.status === "in_progress" ? "In progress" : step.status.charAt(0).toUpperCase() + step.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Documents</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {person.documents.map((doc: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg bg-gray-50">
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-gray-500" />
                  <span>{doc.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs px-2 py-1 rounded-full border font-medium
                    ${doc.status === "uploaded" || doc.status === "completed" || doc.status === "signed"
                      ? "bg-green-100 text-green-800 border-green-200"
                      : doc.status === "pending_upload" || doc.status === "not_sent"
                      ? "bg-blue-100 text-blue-800 border-blue-200"
                      : "bg-yellow-100 text-yellow-800 border-yellow-200"}`}>
                    {doc.status === "pending_upload" ? "Uploaded" :
                      doc.status === "signed" ? "Signed" :
                      doc.status.charAt(0).toUpperCase() + doc.status.slice(1).replace("_", " ")}
                  </span>
                  <button className="p-1 text-blue-600 hover:text-blue-800" title="View">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            <div className="bg-blue-50 rounded-xl p-4 flex items-center space-x-2">
              <FileText className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-blue-600 text-sm font-medium">Total Employees</p>
                <p className="text-2xl font-bold text-blue-900">{totalEmployees}</p>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 flex items-center space-x-2">
              <FileText className="w-6 h-6 text-green-600" />
              <div>
                <p className="text-green-600 text-sm font-medium">Total Patients</p>
                <p className="text-2xl font-bold text-green-900">{totalPatients}</p>
              </div>
            </div>
          </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search by name, email, or role/condition..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
          </div>
        </div>
      </div>

      {/* Documents List */}
      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <div className="space-y-4">
          {filteredPeople.map((person) => (
            <div
              key={person.id}
              className="p-4 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-4"
            >
              {/* Name */}
              <div className="flex items-center space-x-2 min-w-[160px]">
                <User className="w-4 h-4" />
                <span className="font-medium">{person.name}</span>
                  </div>
              {/* Enrolled/Start Date */}
              <div className="flex items-center space-x-2 min-w-[160px]">
                <Calendar className="w-4 h-4" />
                <span>
                  {"startDate" in person
                    ? `Start: ${person.startDate}`
                    : `Enrolled: ${person.enrollmentDate}`}
                        </span>
                    </div>
              {/* Condition or Role */}
              <div className="flex items-center space-x-2 min-w-[180px]">
                <FileText className="w-4 h-4" />
                        <span>
                  {"position" in person
                    ? `Role: ${person.position}`
                    : `Condition: ${person.condition}`}
                        </span>
                      </div>
              {/* Contact */}
              <div className="flex items-center space-x-2 min-w-[220px]">
                <User className="w-4 h-4" />
                <span>Contact: {person.email}</span>
                      </div>
              {/* Completed badge */}
                      <div className="flex items-center space-x-2">
                <span className="flex items-center px-3 py-1 rounded-full text-sm font-medium border bg-green-100 text-green-800">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Completed
                </span>
                      </div>
              {/* Actions */}
                      <div className="flex items-center space-x-2">
                  <button
                  onClick={() => setSelectedPerson(person)}
                    className="p-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                <button className="p-2 text-green-600 hover:text-green-800 transition-colors duration-200" title="Download">
                    <Download className="w-4 h-4" />
                  </button>
                  {userRole === 'HR' && (
                    <>
                    <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                    <button className="p-2 text-red-600 hover:text-red-800 transition-colors duration-200" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Document Detail Modal */}
      {selectedPerson && (
        <PersonDetailModal
          person={selectedPerson}
          onClose={() => setSelectedPerson(null)}
        />
      )}
    </div>
  );
};

export default DocumentCenter;