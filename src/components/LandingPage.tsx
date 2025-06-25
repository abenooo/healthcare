import React, { useState } from 'react';
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
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-white">
        {/* Background Image */}
        <img
          src="/backgroundImg.png"
          alt="Hospital Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: "right" }}
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

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for every healthcare setting, from large health systems to specialized care facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video relative">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon className="w-6 h-6" />
                        <span className="font-semibold">{industry.stats}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                    <p className="text-gray-600 mb-4">{industry.description}</p>
                    <button className="text-primary hover:text-primary-dark font-medium flex items-center space-x-1">
                      <span>Explore Solutions</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Benefits from HealthWell? */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Who Benefits from HealthWell?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              HealthWell is a unified healthcare system designed for clinics, hospitals, care teams, and patients—empowering everyone to deliver and receive better care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                  alt="Clinic"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-6 h-6" />
                    <span className="font-semibold">1,000+ Clinics</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Clinics</h3>
                <p className="text-gray-600 mb-4">
                  Manage appointments, patient records, and communication—all in one secure platform.
                </p>
                <button className="text-primary hover:text-primary-dark font-medium flex items-center space-x-1">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
                  alt="Hospital"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-6 h-6" />
                    <span className="font-semibold">500+ Hospitals</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hospitals</h3>
                <p className="text-gray-600 mb-4">
                  Connect departments, enable telemedicine, and improve care coordination with HealthWell.
                </p>
                <button className="text-primary hover:text-primary-dark font-medium flex items-center space-x-1">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd23?auto=format&fit=crop&w=800&q=80"
                  alt="Care Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Heart className="w-6 h-6" />
                    <span className="font-semibold">10,000+ Care Teams</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Care Teams</h3>
                <p className="text-gray-600 mb-4">
                  Collaborate securely, track patient progress, and deliver personalized care with digital tools.
                </p>
                <button className="text-primary hover:text-primary-dark font-medium flex items-center space-x-1">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                HealthWell in Action
              </h2>
              <p className="text-xl text-gray-600">
                Explore how our healthcare system is making a difference for providers and patients.
              </p>
            </div>
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-200 font-medium">
              View All Insights
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
                  alt="Patient Portal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Case Study
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>May 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient Portal Success</h3>
                <p className="text-gray-600 mb-4">
                  Clinics using HealthWell's patient portal saw a 60% increase in patient engagement and satisfaction.
                </p>
                <div className="flex items-center justify-between">
                  <button className="text-primary hover:text-primary-dark font-medium flex items-center space-x-1">
                    <span>Read More</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                  alt="Telemedicine"
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
                  <Calendar className="w-4 h-4" />
                  <span>April 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Telemedicine Expansion</h3>
                <p className="text-gray-600 mb-4">
                  Over 1 million virtual visits were completed through HealthWell, improving access and reducing wait times.
                </p>
                <div className="flex items-center justify-between">
                  <button className="text-primary hover:text-primary-dark font-medium flex items-center space-x-1">
                    <span>Read More</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=400&q=80"
                  alt="Medication Adherence"
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
                  <Calendar className="w-4 h-4" />
                  <span>March 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Better Medication Adherence</h3>
                <p className="text-gray-600 mb-4">
                  HealthWell's reminders and tracking tools helped boost medication adherence by 40% for patients.
                </p>
                <div className="flex items-center justify-between">
                  <button className="text-primary hover:text-primary-dark font-medium flex items-center space-x-1">
                    <span>Read More</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from clinics, hospitals, and patients using HealthWell.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                "HealthWell made it easy for our clinic to manage appointments and patient records. Our staff and patients love the new system!"
              </blockquote>
              <div className="flex items-center space-x-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Clinic Manager"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Alex Martinez</h4>
                  <p className="text-sm text-gray-600">Clinic Manager</p>
                  <p className="text-sm text-gray-500">Sunrise Family Clinic</p>
                </div>
                <div className="text-2xl">🏥</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                "With HealthWell, our hospital improved care coordination and reduced paperwork. The telemedicine feature is a game changer."
              </blockquote>
              <div className="flex items-center space-x-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Hospital Director"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Dr. Priya Singh</h4>
                  <p className="text-sm text-gray-600">Hospital Director</p>
                  <p className="text-sm text-gray-500">Metro General Hospital</p>
                </div>
                <div className="text-2xl">🏨</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                "I can now book appointments, message my doctor, and view my health records all in one place. HealthWell makes managing my health simple."
              </blockquote>
              <div className="flex items-center space-x-4">
                <img
                  src="https://randomuser.me/api/portraits/men/65.jpg"
                  alt="Patient"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">John Lee</h4>
                  <p className="text-sm text-gray-600">Patient</p>
                  <p className="text-sm text-gray-500">HealthWell User</p>
                </div>
                <div className="text-2xl">😊</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Modernize Your Healthcare Experience?
          </h2>
          <p className="text-xl text-primary/80 mb-8 max-w-3xl mx-auto">
            Join thousands of clinics, hospitals, and patients who trust HealthWell to power their healthcare journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => setShowDemoUsers(true)}
              className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-primary/10 transition-colors duration-200 font-semibold text-lg flex items-center justify-center space-x-2"
            >
              <span>Request Demo</span>
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
              <div className="text-primary/80">Health Trackers Used</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">+1.8M</div>
              <div className="text-primary/80">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">+750k</div>
              <div className="text-primary/80">Appointments Booked</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">+40%</div>
              <div className="text-primary/80">Medication Adherence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Premier Healthcare</span>
              </div>
              <p className="text-gray-400 max-w-md">
                A leading healthcare improvement company, uniting an alliance of hospitals and health systems to transform healthcare.
              </p>
              <div className="flex space-x-4">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Supply Chain</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Performance Improvement</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Population Health</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Workforce Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Technology Services</a></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Industries</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Health Systems</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Hospitals</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Physician Groups</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Post-Acute Care</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Government</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Leadership</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">News & Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">
                © 2024 Premier Healthcare. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cookie Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

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