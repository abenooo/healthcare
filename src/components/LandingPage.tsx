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

interface LandingPageProps {
  onLogin: (userData: any) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showDemoUsers, setShowDemoUsers] = useState(false);
  const [activeTab, setActiveTab] = useState('solutions');

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

  const navigationItems = [
    {
      name: 'Solutions',
      items: [
        { name: 'Supply Chain', desc: 'Optimize procurement and inventory' },
        { name: 'Performance Improvement', desc: 'Drive operational excellence' },
        { name: 'Population Health', desc: 'Improve community outcomes' },
        { name: 'Workforce Solutions', desc: 'Enhance staff productivity' },
        { name: 'Technology Services', desc: 'Digital transformation' },
        { name: 'Consulting', desc: 'Strategic advisory services' }
      ]
    },
    {
      name: 'Industries',
      items: [
        { name: 'Health Systems', desc: 'Integrated delivery networks' },
        { name: 'Hospitals', desc: 'Acute care facilities' },
        { name: 'Physician Groups', desc: 'Ambulatory care practices' },
        { name: 'Post-Acute Care', desc: 'Skilled nursing & rehab' },
        { name: 'Alternate Sites', desc: 'Outpatient facilities' },
        { name: 'Government', desc: 'Public sector healthcare' }
      ]
    },
    {
      name: 'Insights',
      items: [
        { name: 'Research & Analytics', desc: 'Data-driven insights' },
        { name: 'Benchmarking', desc: 'Performance comparisons' },
        { name: 'Best Practices', desc: 'Proven methodologies' },
        { name: 'Case Studies', desc: 'Success stories' },
        { name: 'White Papers', desc: 'Industry research' },
        { name: 'Webinars', desc: 'Educational content' }
      ]
    },
    {
      name: 'About',
      items: [
        { name: 'Our Story', desc: 'Company history & mission' },
        { name: 'Leadership', desc: 'Executive team' },
        { name: 'Careers', desc: 'Join our team' },
        { name: 'News & Events', desc: 'Latest updates' },
        { name: 'Investor Relations', desc: 'Financial information' },
        { name: 'Contact Us', desc: 'Get in touch' }
      ]
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
                    className="p-6 border-2 border-gray-200 rounded-xl text-left hover:border-blue-600 hover:bg-blue-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
                        <p className="text-blue-600 font-medium">{user.role}</p>
                        <p className="text-sm text-gray-600">{user.description}</p>
                      </div>
                      <div className={`w-12 h-12 bg-gradient-to-r ${user.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Access {user.role} Dashboard</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-lg bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Premier Healthcare</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2">
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {openDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-4 z-50">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.name}
                          href="#"
                          className="block px-6 py-3 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className="font-medium text-gray-900">{subItem.name}</div>
                          <div className="text-sm text-gray-600">{subItem.desc}</div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Contact Sales
              </button>
              <button
                onClick={() => setShowDemoUsers(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Request Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Healthcare Technology Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-700/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                  <Award className="w-4 h-4" />
                  <span>Trusted by 4,400+ Healthcare Organizations</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Transforming
                  <span className="block text-blue-200">
                    Healthcare Together
                  </span>
                </h1>
                
                <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                  Premier is a leading healthcare improvement company, uniting an alliance of approximately 4,400 U.S. hospitals and health systems to transform healthcare.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowDemoUsers(true)}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>Request Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold text-lg flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Contact Sales</span>
                </button>
              </div>

              {/* Hero Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                {heroStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">{stat.value}</div>
                        <div className="text-sm text-blue-200">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content - Video/Demo Card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                    alt="Healthcare Dashboard"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-20 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200 shadow-lg">
                      <Play className="w-6 h-6 text-blue-600 ml-1" />
                    </button>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">See Premier in Action</h3>
                  <p className="text-blue-200">Watch how we're transforming healthcare delivery</p>
                  
                  {/* Quick Demo Access */}
                  <div className="mt-6 space-y-3">
                    <button
                      onClick={() => setShowDemoUsers(true)}
                      className="w-full bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white/30 transition-all duration-200 font-medium border border-white/30"
                    >
                      Access Interactive Demo
                    </button>
                    <div className="flex items-center justify-center space-x-4 text-sm text-blue-200">
                      <span>✓ No signup required</span>
                      <span>✓ Instant access</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-300/20 rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center space-y-2 text-white/70">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Patient Documents
            </h2>
          </div>

          <div className="space-y-10">
            {/* PCMH Patient Compact */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">PCMH Patient Compact</h3>
              <p className="text-gray-700 mb-4">
                A Patient-Centered Medical Home reflects a trusting partnership between a doctor-led healthcare team and an informed patient. It includes an agreement between the doctor and the patient that acknowledges the role each plays in a total healthcare program.
              </p>
              <div className="mb-4">
                <iframe
                  src="https://wellspire.net/wp-content/uploads/2021/09/PCMH-Patient-Compact.pdf"
                  width="100%"
                  height="500px"
                  title="PCMH Patient Compact PDF Preview"
                  className="rounded border"
                >
                  This browser does not support PDFs. Please download the PDF to view it:
                  <a href="https://wellspire.net/wp-content/uploads/2021/09/PCMH-Patient-Compact.pdf">Download PDF</a>
                </iframe>
              </div>
              <a
                href="https://wellspire.net/wp-content/uploads/2021/09/PCMH-Patient-Compact.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline font-medium"
              >
                Download PDF
              </a>
            </div>

            {/* Patient Registration Form */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Patient Registration Form</h3>
              <p className="text-gray-700 mb-4">
                New patients can save time during their first appointment by completing the patient registration form prior to their visit. Simply complete the patient registration form with the information requested, print the form, and bring it with you to your appointment.
              </p>
              <div className="mb-4">
                <iframe
                  src="https://wellspire.net/wp-content/uploads/2021/09/Patient-Registration-Form.pdf"
                  width="100%"
                  height="500px"
                  title="Patient Registration Form PDF Preview"
                  className="rounded border"
                >
                  This browser does not support PDFs. Please download the PDF to view it:
                  <a href="https://wellspire.net/wp-content/uploads/2021/09/Patient-Registration-Form.pdf">Download PDF</a>
                </iframe>
              </div>
              <a
                href="https://wellspire.net/wp-content/uploads/2021/09/Patient-Registration-Form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline font-medium"
              >
                Download PDF
              </a>
            </div>

            {/* Wellspire Financial Policy */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Wellspire Financial Policy</h3>
              <p className="text-gray-700 mb-4">
                We are committed to building a successful physician-patient relationship with you and your family. Your clear understanding of our patient financial policy is important to our professional relationship. Please ask any questions you have about our fees, policies, or your responsibilities. If any of your information, such as insurance coverage changes, it is your responsibility to let us know.
              </p>
              <div className="mb-4">
                <iframe
                  src="https://wellspire.net/wp-content/uploads/2021/09/Wellspire-Financial-Policy.pdf"
                  width="100%"
                  height="500px"
                  title="Wellspire Financial Policy PDF Preview"
                  className="rounded border"
                >
                  This browser does not support PDFs. Please download the PDF to view it:
                  <a href="https://wellspire.net/wp-content/uploads/2021/09/Wellspire-Financial-Policy.pdf">Download PDF</a>
                </iframe>
              </div>
              <a
                href="https://wellspire.net/wp-content/uploads/2021/09/Wellspire-Financial-Policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline font-medium"
              >
                Download PDF
              </a>
            </div>

            {/* Wellspire Medical Records Authorization Form */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Wellspire Medical Records Authorization Form</h3>
              <p className="text-gray-700 mb-4">
                The privacy of your information is protected by federal and state regulations. This means your medical information is only available to Wellspire Medical Group personnel unless you authorize release of your information to others.
              </p>
              <div className="mb-4">
                <iframe
                  src="https://wellspire.net/wp-content/uploads/2021/09/Medical-Records-Authorization-Form.pdf"
                  width="100%"
                  height="500px"
                  title="Wellspire Medical Records Authorization Form PDF Preview"
                  className="rounded border"
                >
                  This browser does not support PDFs. Please download the PDF to view it:
                  <a href="https://wellspire.net/wp-content/uploads/2021/09/Medical-Records-Authorization-Form.pdf">Download PDF</a>
                </iframe>
              </div>
              <a
                href="https://wellspire.net/wp-content/uploads/2021/09/Medical-Records-Authorization-Form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline font-medium"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

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
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1">
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

      {/* Insights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Latest Insights
              </h2>
              <p className="text-xl text-gray-600">
                Stay informed with our research, analysis, and industry expertise.
              </p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
              View All Insights
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <article key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video relative">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {insight.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{insight.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{insight.title}</h3>
                  <p className="text-gray-600 mb-4">{insight.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1">
                      <span>Read More</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Healthcare Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Premier is helping healthcare organizations achieve better outcomes and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                    <p className="text-sm text-gray-500">{testimonial.organization}</p>
                  </div>
                  <div className="text-2xl">{testimonial.logo}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of healthcare organizations that trust Premier to drive performance improvement and cost reduction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => setShowDemoUsers(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg flex items-center justify-center space-x-2"
            >
              <span>Request Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold text-lg flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Contact Sales</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">4,400+</div>
              <div className="text-blue-100">Healthcare Organizations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">$65B+</div>
              <div className="text-blue-100">Annual Purchasing Volume</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">200M+</div>
              <div className="text-blue-100">Patients Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">30+</div>
              <div className="text-blue-100">Years of Experience</div>
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
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
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
    </div>
  );
};

export default LandingPage;