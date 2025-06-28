import React, { useState, useEffect } from 'react';
import {
  Shield,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Play,
  Users,
  Star,
  Heart,
  Activity,
  Calendar,
  CheckCircle,
  Clock,
  TrendingUp,
  Stethoscope,
  Brain,
  Award,
  Lock,
  Smartphone,
  Globe,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  UserCheck,
  Settings,
  FileText,
  Database,
  Zap,
  CreditCard,
  Video,
  BarChart3,
  Workflow,
  AlertTriangle,
  Headphones,
  Building2,
  Target,
  Lightbulb,
  PieChart,
  Briefcase,
  GraduationCap,
  Search,
  Filter,
  Download,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import Contact from './Contact';
import AwesomeHealthcareDashboard from './AwesomeHealthcareDashboard';
import { PhoneCarousel } from './PhoneCarousel';

interface LandingPageProps {
  onLogin: (userData: any) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showDemoUsers, setShowDemoUsers] = useState(false);
  const [activeTab, setActiveTab] = useState('solutions');
  const [showContact, setShowContact] = useState(false);

  const demoUsers = [
    {
      role: 'Doctor',
      name: 'Dr. Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      description: 'Chief Medical Officer',
      icon: Stethoscope,
      color: 'from-blue-500 to-blue-600'
    },
    {
      role: 'Patient',
      name: 'John Smith',
      avatar: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      description: 'Healthcare Consumer',
      icon: Heart,
      color: 'from-rose-500 to-rose-600'
    },
    {
      role: 'HR Manager',
      name: 'Emily Davis',
      avatar: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      description: 'Human Resources Director',
      icon: Users,
      color: 'from-purple-500 to-purple-600'
    },
    {
      role: 'Admin',
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      description: 'System Administrator',
      icon: Settings,
      color: 'from-gray-500 to-gray-600'
    }
  ];

  const handleDemoLogin = (user: any) => {
    onLogin({
      name: user.name,
      role: user.role,
      avatar: user.avatar
    });
  };

  // Update navigationItems to include FAQ and Contact
  const navigationItems: ({ name: string; href: string; items?: undefined; } | { name: string; items: { name: string; desc: string; }[]; href?: undefined; })[] = [
    {
      name: 'Services',
      items: [
        { name: 'Primary Care', desc: 'General health services' },
        { name: 'Specialty Care', desc: 'Expert medical specialists' },
        { name: 'Emergency Care', desc: '24/7 emergency services' },
        { name: 'Preventive Care', desc: 'Health screenings & wellness' },
        { name: 'Home Care', desc: 'Medical care at home' },
        { name: 'Telemedicine', desc: 'Virtual consultations' }
      ]
    },
    {
      name: 'About',
      items: [
        { name: 'Our Story', desc: 'Company history & mission' },
        { name: 'Our Team', desc: 'Healthcare professionals' },
        { name: 'Facilities', desc: 'State-of-the-art centers' },
        { name: 'News & Events', desc: 'Latest updates' }
      ]
    },
    {
      name: 'FAQ',
      href: '#faq'
    },
    {
      name: 'Contact',
      href: '#contact'
    }
  ];

  const heroStats = [
    { value: '4,400+', label: 'Healthcare Organizations', icon: Building2 },
    { value: '$65B+', label: 'Annual Purchasing Volume', icon: TrendingUp },
    { value: '200M+', label: 'Patients Served', icon: Users },
    { value: '99.9%', label: 'Platform Uptime', icon: Shield }
  ];

  const solutions = [
    {
      title: 'Supply Chain Optimization',
      description: 'Reduce costs and improve efficiency with our comprehensive supply chain solutions.',
      icon: Workflow,
      features: ['Cost Reduction', 'Inventory Management', 'Vendor Relations', 'Analytics'],
      savings: 'Up to 15% cost savings',
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'Performance Improvement',
      description: 'Drive operational excellence and quality outcomes across your organization.',
      icon: Target,
      features: ['Quality Metrics', 'Process Optimization', 'Staff Training', 'Benchmarking'],
      savings: '25% efficiency gain',
      color: 'from-green-600 to-green-700'
    },
    {
      title: 'Population Health Management',
      description: 'Improve community health outcomes with data-driven population health strategies.',
      icon: Heart,
      features: ['Risk Stratification', 'Care Coordination', 'Preventive Care', 'Analytics'],
      savings: '30% readmission reduction',
      color: 'from-red-600 to-red-700'
    },
    {
      title: 'Workforce Solutions',
      description: 'Optimize staffing, reduce turnover, and enhance productivity.',
      icon: Users,
      features: ['Staff Scheduling', 'Training Programs', 'Retention Strategies', 'Performance'],
      savings: '20% turnover reduction',
      color: 'from-purple-600 to-purple-700'
    },
    {
      title: 'Technology Services',
      description: 'Accelerate digital transformation with cutting-edge healthcare technology.',
      icon: Zap,
      features: ['EHR Integration', 'Cloud Solutions', 'AI/ML Analytics', 'Cybersecurity'],
      savings: '40% faster deployment',
      color: 'from-indigo-600 to-indigo-700'
    },
    {
      title: 'Strategic Consulting',
      description: 'Expert advisory services to navigate complex healthcare challenges.',
      icon: Lightbulb,
      features: ['Strategic Planning', 'Market Analysis', 'Change Management', 'ROI Optimization'],
      savings: 'Proven results',
      color: 'from-orange-600 to-orange-700'
    }
  ];

  const industries = [
    {
      name: 'Health Systems',
      description: 'Comprehensive solutions for integrated delivery networks',
      icon: Building2,
      stats: '1,200+ Health Systems',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
    },
    {
      name: 'Hospitals',
      description: 'Acute care solutions for improved patient outcomes',
      icon: Heart,
      stats: '2,800+ Hospitals',
      image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
    },
    {
      name: 'Physician Groups',
      description: 'Ambulatory care practice optimization',
      icon: Stethoscope,
      stats: '15,000+ Physicians',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
    }
  ];

  const insights = [
    {
      title: 'Healthcare Cost Trends 2024',
      category: 'Research Report',
      date: 'March 2024',
      description: 'Comprehensive analysis of healthcare cost drivers and mitigation strategies.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      type: 'report'
    },
    {
      title: 'Supply Chain Resilience',
      category: 'White Paper',
      date: 'February 2024',
      description: 'Building robust supply chains for healthcare organizations.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      type: 'whitepaper'
    },
    {
      title: 'Digital Transformation Success',
      category: 'Case Study',
      date: 'January 2024',
      description: 'How Metro Health achieved 40% efficiency gains through digital transformation.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      type: 'case-study'
    }
  ];

  const testimonials = [
    {
      quote: "Premier's supply chain solutions have transformed our operations, delivering $2.3M in annual savings while improving quality outcomes.",
      author: "Dr. Michael Rodriguez",
      title: "Chief Operating Officer",
      organization: "Metro Health System",
      image: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      logo: '🏥'
    },
    {
      quote: "The performance improvement initiatives helped us achieve top decile rankings in patient satisfaction and quality metrics.",
      author: "Sarah Williams",
      title: "VP of Quality",
      organization: "Regional Medical Center",
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      logo: '⚕️'
    },
    {
      quote: "Premier's workforce solutions reduced our nursing turnover by 35% and improved staff satisfaction scores significantly.",
      author: "Jennifer Chen",
      title: "Chief Nursing Officer",
      organization: "University Hospital",
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      logo: '🎓'
    }
  ];

  const patientTestimonials = [
    {
      quote: "The online appointment booking is so easy and convenient. I never have to wait on hold anymore!",
      name: "Emily Carter",
      role: "Patient",
      location: "Greenwood Clinic",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      emoji: "🌟"
    },
    {
      quote: "I love being able to message my doctor and get quick responses. It makes me feel cared for.",
      name: "Michael Brown",
      role: "Patient",
      location: "Downtown Health Center",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      emoji: "💬"
    },
    {
      quote: "Accessing my test results online saves me so much time and worry. Highly recommend this system!",
      name: "Sophia Lee",
      role: "Patient",
      location: "Sunrise Medical",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      emoji: "📈"
    },
    {
      quote: "The reminders for medication and appointments help me stay on track with my health.",
      name: "David Kim",
      role: "Patient",
      location: "Metro Family Practice",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      emoji: "⏰"
    },
    {
      quote: "I feel more in control of my health with all my records and history in one place.",
      name: "Ava Patel",
      role: "Patient",
      location: "HealthFirst Clinic",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      emoji: "🗂️"
    },
    {
      quote: "The telemedicine feature let me see my doctor from home when I was sick. It was a lifesaver.",
      name: "James Wilson",
      role: "Patient",
      location: "CarePoint Medical",
      image: "https://randomuser.me/api/portraits/men/23.jpg",
      emoji: "💻"
    },
    // Add 3 more testimonials for a total of 9
    {
      quote: "Booking follow-ups is a breeze and I always get reminders. The system is so user-friendly.",
      name: "Linda Gomez",
      role: "Patient",
      location: "Westside Health",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      emoji: "📅"
    },
    {
      quote: "I appreciate being able to see my vaccination history and upcoming appointments in one place.",
      name: "Chris Evans",
      role: "Patient",
      location: "Central Medical",
      image: "https://randomuser.me/api/portraits/men/34.jpg",
      emoji: "💉"
    },
    {
      quote: "The support team is always helpful and quick to respond. I feel valued as a patient.",
      name: "Sara Ahmed",
      role: "Patient",
      location: "Lakeside Clinic",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      emoji: "🤝"
    }
  ];

  function PatientTestimonialsCarousel() {
    const testimonialsPerPage = 6; // 3 columns x 2 rows
    const totalPages = Math.ceil(patientTestimonials.length / testimonialsPerPage);
    const [page, setPage] = React.useState(0);

    // Auto-advance
    React.useEffect(() => {
      const timer = setInterval(() => {
        setPage((prev) => (prev + 1) % totalPages);
      }, 4000);
      return () => clearInterval(timer);
    }, [totalPages]);

    // Get testimonials for current page
    const start = page * testimonialsPerPage;
    let currentTestimonials = patientTestimonials.slice(start, start + testimonialsPerPage);

    // If at the end and not enough to fill 6, wrap around
    if (currentTestimonials.length < testimonialsPerPage) {
      currentTestimonials = [
        ...currentTestimonials,
        ...patientTestimonials.slice(0, testimonialsPerPage - currentTestimonials.length)
      ];
    }

    return (
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 transition-all duration-700 ease-in-out">
          {currentTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex items-center space-x-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><polygon points="9.9,1.1 7.6,6.6 1.6,7.6 6,11.9 4.8,17.8 9.9,14.8 15,17.8 13.8,11.9 18.2,7.6 12.2,6.6 "/></svg>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4 italic text-base leading-relaxed text-center">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center space-x-3 justify-center mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
                <div className="text-lg">{testimonial.emoji}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex space-x-2 mt-8 justify-center">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === page ? "bg-primary" : "bg-gray-300"}`}
              onClick={() => setPage(idx)}
              aria-label={`Go to testimonial page ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Demo Users Modal */}
      {showDemoUsers && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Access Platform Demo</h2>
              <button
                onClick={() => setShowDemoUsers(false)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <p className="text-gray-600 mb-8 text-center">
              Experience our healthcare platform from different user perspectives
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {demoUsers.map((user, index) => {
                const Icon = user.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleDemoLogin(user)}
                    className="p-6 border-2 border-gray-200 rounded-xl text-left hover:border-primary hover:bg-primary/10 transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
                        <p className="text-primary font-medium">{user.role}</p>
                        <p className="text-sm text-gray-600">{user.description}</p>
                      </div>
                      <div className={`w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Access {user.role} Dashboard</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-200" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden bg-white">
        {/* Background Image */}
        <img
          src="/backgroundImg.png"
          alt="Hospital Background"
          className="absolute inset-0 w-full h-full object-cover z-0 object-center lg:object-right"
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-20 flex flex-col lg:flex-row items-center">
          {/* Left: Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
            <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold rounded-full px-4 py-2 mb-6">
              #1 General Hospital in California
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6 leading-tight">
              Not Just<br />
              Treatment
              <span className="inline-block align-middle w-12 h-1 bg-black mx-3 mb-2"></span>
              <br />
              True Healing.
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-md">
              We take health care personally at Holicare General Hospital. Because excellence in health care is about more than just medicine, technology, tests and treatments.
            </p>
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-4 rounded-full text-lg shadow transition mb-10">
              Find A Doctor
              <span className="ml-3">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block">
                  <path d="M5 11h12M13 7l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
          {/* Right: Empty for image focus */}
          <div className="hidden lg:block w-1/2"></div>
        </div>

      </section>

      <AwesomeHealthcareDashboard />
      <PhoneCarousel />

      {/* Our Healthcare Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Healthcare Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the comprehensive healthcare services we offer to support your well-being at every stage of life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Primary Care */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                  alt="Primary Care"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Primary Care</h3>
                <p className="text-gray-600 mb-4">Personalized, preventive, and ongoing care for individuals and families, focusing on long-term health and wellness.</p>
              </div>
            </div>
            {/* Telemedicine */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
                  alt="Telemedicine"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Telemedicine</h3>
                <p className="text-gray-600 mb-4">Connect with healthcare professionals from the comfort of your home through secure video consultations and remote monitoring.</p>
              </div>
            </div>
            {/* Patient Portal */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd23?auto=format&fit=crop&w=800&q=80"
                  alt="Patient Portal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient Portal</h3>
                <p className="text-gray-600 mb-4">Access your health records, schedule appointments, and communicate securely with your care team online.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits from Our Healthcare System? */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Who Benefits from Our Healthcare System?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed to empower patients, providers, and administrators with seamless, secure, and efficient healthcare solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Patients */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
                  alt="Patients"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Patients</h3>
                <p className="text-gray-600 mb-4">
                  Enjoy easy access to care, health records, and communication with your care team—anytime, anywhere.
                </p>
              </div>
            </div>
            {/* Providers */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
                  alt="Providers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Providers</h3>
                <p className="text-gray-600 mb-4">
                  Streamline workflows, coordinate care, and make informed decisions with real-time patient data and analytics.
                </p>
              </div>
            </div>
            {/* Administrators */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=800&q=80"
                  alt="Administrators"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Administrators</h3>
                <p className="text-gray-600 mb-4">
                  Enhance operational efficiency, ensure compliance, and manage resources effectively across your organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact in Healthcare */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Impact in Healthcare
              </h2>
              <p className="text-xl text-gray-600">
                See how our solutions are transforming care delivery, improving outcomes, and enhancing patient experiences.
              </p>
            </div>
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-200 font-medium">
              View All Stories
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Patient Engagement */}
            <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
                  alt="Patient Engagement"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Success Story
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span>May 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Boosting Patient Engagement</h3>
                <p className="text-gray-600 mb-4">
                  Our patient portal increased engagement by 60%, helping patients stay informed and proactive about their health.
                </p>
              </div>
            </article>
            {/* Virtual Care */}
            <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                  alt="Virtual Care"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Research
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span>April 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expanding Virtual Care</h3>
                <p className="text-gray-600 mb-4">
                  Over 1 million virtual visits completed, improving access and reducing wait times for patients.
                </p>
              </div>
            </article>
            {/* Medication Management */}
            <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=400&q=80"
                  alt="Medication Management"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Report
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span>March 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Medication Management</h3>
                <p className="text-gray-600 mb-4">
                  Our digital tools helped boost medication adherence by 40%, supporting better health outcomes.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Patient Testimonials Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from patients who trust our healthcare system for their well-being.
            </p>
          </div>
          <PatientTestimonialsCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Transform Your Healthcare Experience Today
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Empower your organization and patients with a modern, secure, and connected healthcare system. Join leading clinics, hospitals, and care teams who trust our platform to deliver better outcomes and seamless care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => setShowDemoUsers(true)}
              className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-primary/10 transition-colors duration-200 font-semibold text-lg flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            {/* <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors duration-200 font-semibold text-lg flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Contact Sales</span>
            </button> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">+3M</div>
              <div className="text-white">Digital Health Records Managed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">+1.8M</div>
              <div className="text-white">Empowered Patients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">+750k</div>
              <div className="text-white">Appointments Scheduled</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">+40%</div>
              <div className="text-white">Increase in Medication Adherence</div>
            </div>
          </div>
        </div>
      </section>

    

      {showContact && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;