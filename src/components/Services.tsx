import React, { useState } from 'react';
import {
  Stethoscope,
  Heart,
  Brain,
  Baby,
  Eye,
  Bone,
  Activity,
  Shield,
  Users,
  Clock,
  Star,
  Calendar,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  User,
  CreditCard,
  MapPin,
  Phone
} from 'lucide-react';

interface ServicesProps {
  userRole: string;
}

const Services: React.FC<ServicesProps> = ({ userRole }) => {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [showBookingFlow, setShowBookingFlow] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [bookingData, setBookingData] = useState({
    service: '',
    doctor: '',
    date: '',
    time: '',
    patientInfo: {
      name: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      address: '',
      insurance: ''
    },
    symptoms: '',
    paymentMethod: 'insurance'
  });

  // Add a check for healthcare giver role
  const isHealthcareGiver = userRole === 'Healthcare Giver' || userRole === 'Doctor' || userRole === 'Nurse';

  // Update page title/description for healthcare giver
  const getPageTitle = () => {
    if (isHealthcareGiver) return 'Healthcare Giver Service Management';
    switch (userRole) {
      case 'Doctor':
        return 'Medical Services Management';
      case 'Patient':
        return 'Book Medical Services';
      case 'HR Manager':
        return 'Employee Health Services';
      case 'Admin':
        return 'Service Administration';
      default:
        return 'Medical Services';
    }
  };

  const getPageDescription = () => {
    if (isHealthcareGiver) return 'Manage your services, appointments, and patient care.';
    switch (userRole) {
      case 'Doctor':
        return 'Manage and provide medical services to patients';
      case 'Patient':
        return 'Book appointments and access healthcare services';
      case 'HR Manager':
        return 'Manage employee health and wellness programs';
      case 'Admin':
        return 'Configure and oversee all medical services';
      default:
        return 'Comprehensive healthcare services for all your needs';
    }
  };

  const serviceCategories = [
    {
      id: 'general',
      name: 'General Services',
      icon: Stethoscope,
      color: 'from-blue-500 to-blue-600',
      services: [
        { 
          name: 'General Consultation', 
          duration: '30 min', 
          price: userRole === 'Patient' ? '$150' : 'Standard Rate', 
          available: true,
          description: 'Comprehensive health assessment and consultation with our experienced general practitioners.',
          doctors: [
            { name: 'Dr. Sarah Johnson', specialty: 'Family Medicine', rating: 4.9, experience: '15 years' },
            { name: 'Dr. Michael Chen', specialty: 'Internal Medicine', rating: 4.8, experience: '12 years' },
            { name: 'Dr. Emily Davis', specialty: 'General Practice', rating: 4.9, experience: '10 years' }
          ]
        },
        { 
          name: 'Follow-up Visit', 
          duration: '15 min', 
          price: userRole === 'Patient' ? '$75' : 'Standard Rate', 
          available: true,
          description: 'Follow-up consultation to monitor your progress and adjust treatment plans.',
          doctors: [
            { name: 'Dr. Sarah Johnson', specialty: 'Family Medicine', rating: 4.9, experience: '15 years' },
            { name: 'Dr. Michael Chen', specialty: 'Internal Medicine', rating: 4.8, experience: '12 years' }
          ]
        },
        { 
          name: 'Vaccination & Immunization', 
          duration: '20 min', 
          price: userRole === 'Patient' ? '$50' : 'Standard Rate', 
          available: true,
          description: 'Complete vaccination services for all ages including travel vaccines.',
          doctors: [
            { name: 'Dr. Emily Davis', specialty: 'General Practice', rating: 4.9, experience: '10 years' }
          ]
        },
        { 
          name: 'Annual Health Check-up', 
          duration: '60 min', 
          price: userRole === 'Patient' ? '$300' : 'Standard Rate', 
          available: true,
          description: 'Comprehensive annual physical examination with lab work and health screening.',
          doctors: [
            { name: 'Dr. Sarah Johnson', specialty: 'Family Medicine', rating: 4.9, experience: '15 years' },
            { name: 'Dr. Michael Chen', specialty: 'Internal Medicine', rating: 4.8, experience: '12 years' }
          ]
        }
      ]
    },
    {
      id: 'mental',
      name: 'Mental Health',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      services: [
        { 
          name: 'Counseling', 
          duration: '50 min', 
          price: userRole === 'Patient' ? '$180' : 'Standard Rate', 
          available: true,
          description: 'Professional counseling services for personal and relationship issues.',
          doctors: [
            { name: 'Dr. Lisa Thompson', specialty: 'Clinical Psychology', rating: 4.9, experience: '18 years' },
            { name: 'Dr. James Wilson', specialty: 'Counseling Psychology', rating: 4.8, experience: '14 years' }
          ]
        },
        { 
          name: 'Therapy Sessions', 
          duration: '60 min', 
          price: userRole === 'Patient' ? '$200' : 'Standard Rate', 
          available: true,
          description: 'Individual and group therapy sessions for various mental health conditions.',
          doctors: [
            { name: 'Dr. Lisa Thompson', specialty: 'Clinical Psychology', rating: 4.9, experience: '18 years' }
          ]
        }
      ]
    },
    {
      id: 'wellness',
      name: 'Wellness & Preventive',
      icon: Activity,
      color: 'from-green-500 to-green-600',
      services: [
        { 
          name: 'Nutrition & Diet Plans', 
          duration: '45 min', 
          price: userRole === 'Patient' ? '$120' : 'Standard Rate', 
          available: true,
          description: 'Personalized nutrition counseling and diet planning for optimal health.',
          doctors: [
            { name: 'Dr. Maria Rodriguez', specialty: 'Nutritionist', rating: 4.8, experience: '12 years' }
          ]
        },
        { 
          name: 'Fitness Coaching', 
          duration: '60 min', 
          price: userRole === 'Patient' ? '$100' : 'Standard Rate', 
          available: true,
          description: 'Personal fitness coaching and exercise program development.',
          doctors: [
            { name: 'Dr. David Kim', specialty: 'Sports Medicine', rating: 4.7, experience: '8 years' }
          ]
        }
      ]
    },
    {
      id: 'specialized',
      name: 'Specialized Medical',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      services: [
        { 
          name: 'Cardiology', 
          duration: '45 min', 
          price: userRole === 'Patient' ? '$300' : 'Standard Rate', 
          available: true,
          description: 'Comprehensive cardiac care including diagnostics and treatment.',
          doctors: [
            { name: 'Dr. Robert Anderson', specialty: 'Cardiology', rating: 4.9, experience: '20 years' }
          ]
        },
        { 
          name: 'Dermatology', 
          duration: '30 min', 
          price: userRole === 'Patient' ? '$200' : 'Standard Rate', 
          available: true,
          description: 'Skin care and dermatological treatments for all skin conditions.',
          doctors: [
            { name: 'Dr. Jennifer Lee', specialty: 'Dermatology', rating: 4.8, experience: '16 years' }
          ]
        }
      ]
    }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  const selectedCategoryData = serviceCategories.find(cat => cat.id === selectedCategory);

  // Update handleBookService to prevent booking for healthcare givers
  const handleBookService = (service: any) => {
    if (isHealthcareGiver) {
      alert('Service management for healthcare givers. Booking is only available for patients.');
      return;
    }
    setSelectedService(service);
    setBookingData({...bookingData, service: service.name});
    setShowBookingFlow(true);
    setBookingStep(1);
  };

  const handleNextStep = () => {
    if (bookingStep < 4) {
      setBookingStep(bookingStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (bookingStep > 1) {
      setBookingStep(bookingStep - 1);
    }
  };

  const handleBookingComplete = () => {
    alert('Appointment booked successfully! You will receive a confirmation email shortly.');
    setShowBookingFlow(false);
    setBookingStep(1);
    setSelectedService(null);
    setBookingData({
      service: '',
      doctor: '',
      date: '',
      time: '',
      patientInfo: {
        name: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        address: '',
        insurance: ''
      },
      symptoms: '',
      paymentMethod: 'insurance'
    });
  };

  const renderBookingStep = () => {
    switch (bookingStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Select Doctor & Date</h3>
              <p className="text-gray-600">Choose your preferred doctor and appointment date</p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Available Doctors</h4>
                <div className="space-y-3">
                  {selectedService?.doctors.map((doctor: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setBookingData({...bookingData, doctor: doctor.name})}
                      className={`w-full p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                        bookingData.doctor === doctor.name
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-semibold text-gray-900">{doctor.name}</h5>
                          <p className="text-sm text-gray-600">{doctor.specialty}</p>
                          <p className="text-sm text-gray-500">{doctor.experience} experience</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">{doctor.rating}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Select Date</h4>
                <input
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {bookingData.date && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Available Time Slots</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setBookingData({...bookingData, time})}
                        className={`p-3 border rounded-lg text-sm font-medium transition-all duration-200 ${
                          bookingData.time === time
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Patient Information</h3>
              <p className="text-gray-600">Please provide your personal details</p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={bookingData.patientInfo.name}
                    onChange={(e) => setBookingData({
                      ...bookingData,
                      patientInfo: {...bookingData.patientInfo, name: e.target.value}
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={bookingData.patientInfo.email}
                    onChange={(e) => setBookingData({
                      ...bookingData,
                      patientInfo: {...bookingData.patientInfo, email: e.target.value}
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={bookingData.patientInfo.phone}
                    onChange={(e) => setBookingData({
                      ...bookingData,
                      patientInfo: {...bookingData.patientInfo, phone: e.target.value}
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                  <input
                    type="date"
                    value={bookingData.patientInfo.dateOfBirth}
                    onChange={(e) => setBookingData({
                      ...bookingData,
                      patientInfo: {...bookingData.patientInfo, dateOfBirth: e.target.value}
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea
                  value={bookingData.patientInfo.address}
                  onChange={(e) => setBookingData({
                    ...bookingData,
                    patientInfo: {...bookingData.patientInfo, address: e.target.value}
                  })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Provider</label>
                <input
                  type="text"
                  value={bookingData.patientInfo.insurance}
                  onChange={(e) => setBookingData({
                    ...bookingData,
                    patientInfo: {...bookingData.patientInfo, insurance: e.target.value}
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your insurance provider"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Visit / Symptoms</label>
                <textarea
                  value={bookingData.symptoms}
                  onChange={(e) => setBookingData({...bookingData, symptoms: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please describe your symptoms or reason for the visit"
                />
              </div>
            </form>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Information</h3>
              <p className="text-gray-600">Choose your payment method</p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Payment Method</h4>
                <div className="space-y-3">
                  <button
                    onClick={() => setBookingData({...bookingData, paymentMethod: 'insurance'})}
                    className={`w-full p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                      bookingData.paymentMethod === 'insurance'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-blue-600" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Insurance</h5>
                        <p className="text-sm text-gray-600">Use your insurance coverage</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setBookingData({...bookingData, paymentMethod: 'card'})}
                    className={`w-full p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                      bookingData.paymentMethod === 'card'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <CreditCard className="w-6 h-6 text-green-600" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Credit/Debit Card</h5>
                        <p className="text-sm text-gray-600">Pay with your card</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {bookingData.paymentMethod === 'card' && (
                <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Confirm Appointment</h3>
              <p className="text-gray-600">Please review your appointment details</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Service:</span>
                <span className="font-semibold">{bookingData.service}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Doctor:</span>
                <span className="font-semibold">{bookingData.doctor}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-semibold">{bookingData.date}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-semibold">{bookingData.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-semibold">{selectedService?.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Cost:</span>
                <span className="font-semibold text-green-600">{selectedService?.price}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Payment:</span>
                <span className="font-semibold capitalize">{bookingData.paymentMethod}</span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Patient Information</h4>
              <div className="space-y-2 text-sm">
                <p><span className="text-blue-700">Name:</span> {bookingData.patientInfo.name}</p>
                <p><span className="text-blue-700">Email:</span> {bookingData.patientInfo.email}</p>
                <p><span className="text-blue-700">Phone:</span> {bookingData.patientInfo.phone}</p>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleBookingComplete}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Confirm Appointment</span>
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (showBookingFlow) {
    return (
      <div className="p-6 space-y-6">
        {/* Booking Header */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setShowBookingFlow(false)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Services</span>
            </button>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">Book Appointment</h1>
              <p className="text-gray-600">{selectedService?.name}</p>
            </div>
            <div className="w-24"></div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step <= bookingStep
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step < bookingStep ? <CheckCircle className="w-5 h-5" /> : step}
                </div>
                {step < 4 && (
                  <div className={`w-16 h-0.5 mx-2 ${
                    step < bookingStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Booking Content */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100">
          {renderBookingStep()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevStep}
              disabled={bookingStep === 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                bookingStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {bookingStep < 4 && (
              <button
                onClick={handleNextStep}
                disabled={
                  (bookingStep === 1 && (!bookingData.doctor || !bookingData.date || !bookingData.time)) ||
                  (bookingStep === 2 && (!bookingData.patientInfo.name || !bookingData.patientInfo.email || !bookingData.patientInfo.phone))
                }
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  (bookingStep === 1 && (!bookingData.doctor || !bookingData.date || !bookingData.time)) ||
                  (bookingStep === 2 && (!bookingData.patientInfo.name || !bookingData.patientInfo.email || !bookingData.patientInfo.phone))
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{getPageTitle()}</h1>
            <p className="text-gray-600">{getPageDescription()}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">Licensed Professionals</span>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-600">24/7 Emergency Care</span>
          </div>
          <div className="flex items-center space-x-3">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-gray-600">5-Star Rated Service</span>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Service Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-xl text-left transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Icon className={`w-6 h-6 mb-3 ${
                  selectedCategory === category.id ? 'text-white' : 'text-gray-600'
                }`} />
                <h3 className="font-semibold text-sm">{category.name}</h3>
                <p className={`text-xs mt-1 ${
                  selectedCategory === category.id ? 'text-white opacity-90' : 'text-gray-500'
                }`}>
                  {category.services.length} services
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Category Services */}
      {selectedCategoryData && (
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {selectedCategoryData.name}
            </h2>
            <span className="text-sm text-gray-500">
              {selectedCategoryData.services.length} services available
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedCategoryData.services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="font-semibold text-green-600">{service.price}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    service.available
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {service.available ? 'Available' : 'Unavailable'}
                  </span>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    disabled={!service.available}
                    onClick={() => handleBookService(service)}
                    className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      service.available
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>
                      {isHealthcareGiver ? 'Manage' : userRole === 'Patient' ? 'Book Now' : 'Manage'}
                    </span>
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;