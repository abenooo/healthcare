import React, { useState } from 'react';
import {
  CheckCircle,
  Clock,
  AlertTriangle,
  Eye,
  MessageCircle,
  Calendar,
  User,
  MapPin,
  FileText,
  Filter,
  Search,
  MoreHorizontal,
  ThumbsUp,
  ThumbsDown,
  Heart,
  Users,
  UserCheck,
  Brain,
  Home
} from 'lucide-react';

interface ServiceApprovalsProps {
  userRole: string;
}

const ServiceApprovals: React.FC<ServiceApprovalsProps> = ({ userRole }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedService, setSelectedService] = useState<any>(null);

  const serviceRequests = [
    {
      id: 1,
      patientName: 'Maria Rodriguez',
      careGiver: 'Sarah Johnson',
      serviceType: 'In-Home Service',
      requestDate: '2024-01-20',
      scheduledDate: '2024-01-22',
      status: 'pending',
      priority: 'high',
      duration: '4 hours',
      location: '123 Oak Street, Springfield',
      description: 'Medication management, meal preparation, and mobility assistance for elderly patient with diabetes.',
      notes: 'Patient requires insulin monitoring every 2 hours. Family will be present during visit.',
      estimatedCost: '$280',
      icon: Home,
      urgency: 'Within 48 hours'
    },
    {
      id: 2,
      patientName: 'James Wilson',
      careGiver: 'Michael Chen',
      serviceType: 'Respite Care Service',
      requestDate: '2024-01-19',
      scheduledDate: '2024-01-25',
      status: 'approved',
      priority: 'medium',
      duration: '8 hours',
      location: '456 Pine Avenue, Springfield',
      description: 'Temporary care relief for family caregiver. Patient has mild dementia and requires supervision.',
      notes: 'Family caregiver needs break for medical appointment. Patient enjoys music and light activities.',
      estimatedCost: '$520',
      icon: Heart,
      urgency: 'Flexible'
    },
    {
      id: 3,
      patientName: 'Emily Davis',
      careGiver: 'David Thompson',
      serviceType: 'Direct Support Professional',
      requestDate: '2024-01-21',
      scheduledDate: '2024-01-23',
      status: 'pending',
      priority: 'urgent',
      duration: '6 hours',
      location: '789 Maple Drive, Springfield',
      description: 'Community integration activities and transportation to medical appointments.',
      notes: 'Patient has intellectual disability and needs assistance with social activities and transportation.',
      estimatedCost: '$390',
      icon: Users,
      urgency: 'Same day'
    },
    {
      id: 4,
      patientName: 'Robert Brown',
      careGiver: 'Lisa Anderson',
      serviceType: 'Companion Services',
      requestDate: '2024-01-18',
      scheduledDate: '2024-01-24',
      status: 'rejected',
      priority: 'low',
      duration: '3 hours',
      location: '321 Elm Street, Springfield',
      description: 'Emotional support and light housekeeping for recovering surgery patient.',
      notes: 'Patient recovering from knee surgery. Needs companionship and help with daily tasks.',
      estimatedCost: '$195',
      icon: UserCheck,
      urgency: 'Within week',
      rejectionReason: 'Insufficient documentation provided'
    },
    {
      id: 5,
      patientName: 'Anna Martinez',
      careGiver: 'Jennifer White',
      serviceType: 'Professional Behavioral Support',
      requestDate: '2024-01-20',
      scheduledDate: '2024-01-26',
      status: 'pending',
      priority: 'high',
      duration: '5 hours',
      location: '654 Cedar Lane, Springfield',
      description: 'Behavioral intervention and support for patient with autism spectrum disorder.',
      notes: 'Patient exhibits challenging behaviors during transitions. Requires specialized behavioral support.',
      estimatedCost: '$425',
      icon: Brain,
      urgency: 'Within 72 hours'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'text-red-600';
      case 'high':
        return 'text-orange-600';
      case 'medium':
        return 'text-blue-600';
      case 'low':
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'rejected':
        return <AlertTriangle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const filteredRequests = serviceRequests.filter(request => {
    if (activeFilter === 'all') return true;
    return request.status === activeFilter;
  });

  const handleApprove = (id: number) => {
    console.log('Approving service request:', id);
    // Implementation for approval
  };

  const handleReject = (id: number) => {
    console.log('Rejecting service request:', id);
    // Implementation for rejection
  };

  const ServiceDetailModal = ({ service, onClose }: { service: any; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Service Request Details</h2>
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
          {/* Service Header */}
          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <service.icon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{service.serviceType}</h3>
              <p className="text-gray-600">Patient: {service.patientName}</p>
              <p className="text-gray-600">Care Giver: {service.careGiver}</p>
            </div>
            <div className="text-right">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(service.status)}`}>
                {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
              </span>
            </div>
          </div>

          {/* Service Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Schedule Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>Requested: {service.requestDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>Scheduled: {service.scheduledDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>Duration: {service.duration}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                <div className="flex items-start space-x-2 text-sm">
                  <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                  <span>{service.location}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Priority & Cost</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Priority:</span>
                    <span className={`font-medium ${getPriorityColor(service.priority)}`}>
                      {service.priority.charAt(0).toUpperCase() + service.priority.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Urgency:</span>
                    <span className="font-medium">{service.urgency}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Estimated Cost:</span>
                    <span className="font-medium text-green-600">{service.estimatedCost}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description and Notes */}
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Service Description</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Care Giver Notes</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{service.notes}</p>
            </div>

            {service.rejectionReason && (
              <div>
                <h4 className="font-semibold text-red-900 mb-2">Rejection Reason</h4>
                <p className="text-red-700 text-sm leading-relaxed">{service.rejectionReason}</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          {service.status === 'pending' && (
            <div className="flex space-x-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => handleApprove(service.id)}
                className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <ThumbsUp className="w-4 h-4" />
                <span>Approve Service</span>
              </button>
              <button
                onClick={() => handleReject(service.id)}
                className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <ThumbsDown className="w-4 h-4" />
                <span>Reject Service</span>
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Message Care Giver</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Service Approvals</h1>
            <p className="text-gray-600">Review and approve care giver service requests</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-yellow-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-600 text-sm font-medium">Pending Approval</p>
                <p className="text-2xl font-bold text-yellow-900">
                  {serviceRequests.filter(r => r.status === 'pending').length}
                </p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-medium">Approved Today</p>
                <p className="text-2xl font-bold text-green-900">
                  {serviceRequests.filter(r => r.status === 'approved').length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-600 text-sm font-medium">Urgent Requests</p>
                <p className="text-2xl font-bold text-red-900">
                  {serviceRequests.filter(r => r.priority === 'urgent').length}
                </p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">Total Requests</p>
                <p className="text-2xl font-bold text-blue-900">{serviceRequests.length}</p>
              </div>
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex space-x-2">
            {['all', 'pending', 'approved', 'rejected'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  activeFilter === filter
                    ? 'bg-orange-100 text-orange-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search requests..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Service Requests List */}
      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <div className="space-y-4">
          {filteredRequests.map((request) => {
            const IconComponent = request.icon;
            return (
              <div
                key={request.id}
                className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{request.serviceType}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(request.status)}`}>
                          {getStatusIcon(request.status)}
                          <span className="ml-1">{request.status.charAt(0).toUpperCase() + request.status.slice(1)}</span>
                        </span>
                        <span className={`text-xs font-medium ${getPriorityColor(request.priority)}`}>
                          {request.priority.toUpperCase()} PRIORITY
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>Patient: {request.patientName}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>Care Giver: {request.careGiver}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>Scheduled: {request.scheduledDate}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>Duration: {request.duration}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-700 mt-2 line-clamp-2">{request.description}</p>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="text-gray-500">Cost: <span className="font-medium text-green-600">{request.estimatedCost}</span></span>
                          <span className="text-gray-500">Urgency: <span className="font-medium">{request.urgency}</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => setSelectedService(request)}
                      className="p-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    
                    {request.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleApprove(request.id)}
                          className="p-2 text-green-600 hover:text-green-800 transition-colors duration-200"
                          title="Approve"
                        >
                          <ThumbsUp className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleReject(request.id)}
                          className="p-2 text-red-600 hover:text-red-800 transition-colors duration-200"
                          title="Reject"
                        >
                          <ThumbsDown className="w-4 h-4" />
                        </button>
                      </>
                    )}
                    
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default ServiceApprovals;