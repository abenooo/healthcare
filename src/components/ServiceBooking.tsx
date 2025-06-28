import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Stethoscope,
  Heart,
  Brain,
  Eye,
  Bone,
  Activity,
  Plus,
  Search,
  Filter,
  Star,
  CheckCircle,
  Video,
  Phone
} from 'lucide-react';

interface ServiceBookingProps {
  userRole: string;
}

const ServiceBooking: React.FC<ServiceBookingProps> = ({ userRole }) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const medicalServices = [
    {
      id: 'cardiology',
      name: 'Cardiology',
      icon: Heart,
      description: 'Heart and cardiovascular system care',
      duration: '45 min',
      price: '$250',
      doctors: ['Dr. Sarah Johnson', 'Dr. Michael Chen'],
      color: 'red'
    },
    {
      id: 'neurology',
      name: 'Neurology',
      icon: Brain,
      description: 'Brain and nervous system disorders',
      duration: '60 min',
      price: '$300',
      doctors: ['Dr. Emily Davis', 'Dr. James Wilson'],
      color: 'purple'
    },
    {
      id: 'general',
      name: 'General Medicine',
      icon: Stethoscope,
      description: 'Primary care and general health',
      duration: '30 min',
      price: '$150',
      doctors: ['Dr. Robert Brown', 'Dr. Lisa Anderson'],
      color: 'blue'
    },
    {
      id: 'ophthalmology',
      name: 'Ophthalmology',
      icon: Eye,
      description: 'Eye care and vision health',
      duration: '30 min',
      price: '$200',
      doctors: ['Dr. David Miller', 'Dr. Anna Taylor'],
      color: 'green'
    },
    {
      id: 'orthopedics',
      name: 'Orthopedics',
      icon: Bone,
      description: 'Bone, joint, and muscle care',
      duration: '45 min',
      price: '$275',
      doctors: ['Dr. Mark Johnson', 'Dr. Susan Lee'],
      color: 'orange'
    },
    {
      id: 'emergency',
      name: 'Emergency Care',
      icon: Activity,
      description: 'Urgent medical attention',
      duration: 'Variable',
      price: '$400',
      doctors: ['Available 24/7'],
      color: 'red'
    }
  ];

  const availableSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  const upcomingAppointments = [
    {
      date: '2024-01-15',
      time: '10:00 AM',
      service: 'Cardiology',
      doctor: 'Dr. Sarah Johnson',
      type: 'Follow-up',
      status: 'Confirmed'
    },
    {
      date: '2024-01-22',
      time: '2:30 PM',
      service: 'General Medicine',
      doctor: 'Dr. Robert Brown',
      type: 'Annual Check-up',
      status: 'Pending'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: 'bg-red-50 text-red-600 border-red-200',
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getPageTitle = () => {
    switch (userRole) {
      case 'Doctor':
        return 'Medical Services Management';
      case 'Patient':
        return 'Book Medical Services';
      case 'Admin':
        return 'Service Configuration';
      default:
        return 'Medical Services';
    }
  };

  const getPageDescription = () => {
    switch (userRole) {
      case 'Doctor':
        return 'Manage your medical services and availability';
      case 'Patient':
        return 'Schedule appointments with our medical specialists';
      case 'Admin':
        return 'Configure and manage medical services offered';
      default:
        return 'Access medical services and appointments';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{getPageTitle()}</h1>
            <p className="text-gray-600">{getPageDescription()}</p>
          </div>
        </div>

        {userRole === 'Patient' && (
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services or doctors..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        )}
      </div>

      {userRole === 'Patient' && (
        <>
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medicalServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-xl p-6 border cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedService === service.id ? 'border-emerald-300 ring-2 ring-emerald-100' : 'border-gray-100'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${getColorClasses(service.color)}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </span>
                    <span className="font-semibold text-gray-900">{service.price}</span>
                  </div>
                  <div className="space-y-2">
                    {service.doctors.map((doctor, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{doctor}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-500">4.9</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {selectedService === service.id && (
                    <button className="w-full mt-4 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200">
                      Book Appointment
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Booking Form */}
          {selectedService && (
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Schedule Your Appointment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Available Times</label>
                  <div className="grid grid-cols-3 gap-2">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`px-3 py-2 text-sm rounded-lg border transition-colors duration-200 ${
                          selectedTime === slot
                            ? 'bg-emerald-100 border-emerald-300 text-emerald-700'
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {selectedDate && selectedTime && (
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <h4 className="font-semibold text-emerald-900 mb-2">Appointment Summary</h4>
                  <div className="space-y-1 text-sm text-emerald-700">
                    <p>Service: {medicalServices.find(s => s.id === selectedService)?.name}</p>
                    <p>Date: {new Date(selectedDate).toLocaleDateString()}</p>
                    <p>Time: {selectedTime}</p>
                    <p>Duration: {medicalServices.find(s => s.id === selectedService)?.duration}</p>
                    <p>Cost: {medicalServices.find(s => s.id === selectedService)?.price}</p>
                  </div>
                  <button className="w-full mt-4 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200">
                    Confirm Appointment
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Upcoming Appointments */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Upcoming Appointments</h3>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{appointment.service}</h4>
                      <p className="text-sm text-gray-600">{appointment.doctor}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-gray-500 flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{appointment.date}</span>
                        </span>
                        <span className="text-sm text-gray-500 flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{appointment.time}</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        appointment.status === 'Confirmed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {appointment.status}
                      </span>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-green-600 hover:text-green-800" title="Video Call">
                          <Video className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-blue-600 hover:text-blue-800" title="Call">
                          <Phone className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {userRole === 'Doctor' && (
        <div className="space-y-6">
          {/* Service Management */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Your Services</h3>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Add Service</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicalServices.slice(0, 3).map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${getColorClasses(service.color)}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{service.duration}</span>
                      <span className="font-semibold text-gray-900">{service.price}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Today's Schedule */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Today's Schedule</h3>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{appointment.type}</h4>
                      <p className="text-sm text-gray-600">Patient: John Smith</p>
                      <p className="text-sm text-gray-500">{appointment.time}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-green-600 hover:text-green-800" title="Start Video Call">
                        <Video className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-blue-600 hover:text-blue-800" title="Call Patient">
                        <Phone className="w-4 h-4" />
                      </button>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {appointment.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {userRole === 'Admin' && (
        <div className="space-y-6">
          {/* Service Configuration */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Service Configuration</h3>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Add New Service</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicalServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${getColorClasses(service.color)}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-gray-500">{service.duration}</span>
                      <span className="font-semibold text-gray-900">{service.price}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors duration-200">
                        Edit
                      </button>
                      <button className="flex-1 px-3 py-1 text-sm bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors duration-200">
                        Configure
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceBooking;