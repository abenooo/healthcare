import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Heart,
  Stethoscope,
  Activity,
  Shield,
  BookOpen,
  Search,
  Filter,
  Tag,
  Share2,
  Bookmark,
  Eye,
  MessageCircle,
  ArrowLeft
} from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  image: string;
  tags: string[];
  views: number;
  comments: number;
}

interface BlogPageProps {
  onNavigate?: (page: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Announcements related to healthcare",
      excerpt: "Stay updated with the latest healthcare announcements, policy changes, and important updates from medical institutions worldwide.",
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-gray-600 mb-6">Healthcare announcements play a crucial role in keeping patients, medical professionals, and the general public informed about important developments in the medical field.</p>
          
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Recent Healthcare Policy Updates</h2>
          <p>The healthcare landscape is constantly evolving, with new policies and regulations being implemented to improve patient care and safety. Recent announcements have focused on:</p>
          
          <ul class="list-disc pl-6 mb-6">
            <li>Enhanced patient privacy protections</li>
            <li>New telemedicine guidelines and regulations</li>
            <li>Updated vaccination protocols and recommendations</li>
            <li>Mental health support initiatives</li>
          </ul>
          
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Technology Integration</h2>
          <p>Healthcare institutions are increasingly adopting new technologies to improve patient outcomes. These announcements cover the implementation of AI-driven diagnostic tools, electronic health records improvements, and patient portal enhancements.</p>
          
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Community Health Initiatives</h2>
          <p>Local and national health organizations regularly announce community health programs, free screening events, and educational workshops designed to promote public health and wellness.</p>
          
          <blockquote class="border-l-4 border-blue-500 pl-6 italic text-gray-700 my-6">
            "Staying informed about healthcare announcements is essential for making informed decisions about your health and understanding the resources available to you."
          </blockquote>
          
          <p>We encourage all patients and community members to stay engaged with these announcements and participate in programs that can benefit their health and well-being.</p>
        </div>
      `,
      date: "Dec 19, 2001",
      category: "Announcements",
      author: "Dr. Sarah Johnson",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Healthcare", "Policy", "Updates", "Community"],
      views: 1250,
      comments: 23
    },
    {
      id: 2,
      title: "Medical technologies, treatments, and research",
      excerpt: "Explore the latest breakthroughs in medical technology, innovative treatments, and cutting-edge research that's shaping the future of healthcare.",
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-gray-600 mb-6">The field of medical technology is advancing at an unprecedented pace, bringing new hope and possibilities for patients worldwide.</p>
          
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Revolutionary Medical Technologies</h2>
          <p>Recent developments in medical technology have transformed how we diagnose, treat, and prevent diseases. Key innovations include:</p>
          
          <ul class="list-disc pl-6 mb-6">
            <li>AI-powered diagnostic imaging systems</li>
            <li>Robotic surgical platforms with enhanced precision</li>
            <li>Wearable health monitoring devices</li>
            <li>Gene therapy and personalized medicine</li>
            <li>3D bioprinting for organ replacement</li>
          </ul>
          
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Breakthrough Treatments</h2>
          <p>New treatment modalities are offering hope to patients with previously untreatable conditions. Immunotherapy, targeted drug delivery systems, and minimally invasive procedures are revolutionizing patient care.</p>
          
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Research Frontiers</h2>
          <p>Current research focuses on understanding disease mechanisms at the molecular level, developing precision medicine approaches, and creating more effective therapeutic interventions.</p>
          
          <div class="bg-blue-50 p-6 rounded-lg my-6">
            <h3 class="text-lg font-semibold text-blue-900 mb-2">Clinical Trial Opportunities</h3>
            <p class="text-blue-800">Patients interested in accessing cutting-edge treatments may be eligible for clinical trials. Speak with your healthcare provider about available opportunities.</p>
          </div>
          
          <p>The integration of these technologies into everyday medical practice promises to improve outcomes, reduce costs, and enhance the overall patient experience.</p>
        </div>
      `,
      date: "Oct 24, 2025",
      category: "Technology",
      author: "Dr. Michael Chen",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Technology", "Research", "Innovation", "Treatment"],
      views: 2100,
      comments: 45
    },
    {
      id: 3,
      title: "Findings from research institutions and journals",
      excerpt: "Discover the latest research findings from leading medical institutions and peer-reviewed journals that are advancing our understanding of health and disease.",
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-gray-600 mb-6">Medical research institutions and peer-reviewed journals continue to publish groundbreaking findings that shape clinical practice and improve patient outcomes.</p>
          
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Recent Breakthrough Studies</h2>
          <p>Leading research institutions have published several significant studies this year, including:</p>
          
          <ul class="list-disc pl-6 mb-6">
            <li>Long-term effects of COVID-19 on cardiovascular health</li>
            <li>New biomarkers for early cancer detection</li>
            <li>Effectiveness of lifestyle interventions in diabetes prevention</li>
            <li>Mental health impacts of social isolation</li>
            <li>Advances in Alzheimer's disease research</li>
          </ul>
          
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Collaborative Research Networks</h2>
          <p>International collaboration between research institutions has accelerated the pace of medical discoveries. Multi-center studies provide larger sample sizes and more diverse populations, leading to more robust and generalizable findings.</p>
          
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Translating Research to Practice</h2>
          <p>The challenge lies in translating research findings into clinical practice. Evidence-based medicine ensures that the latest research informs treatment decisions and improves patient care.</p>
          
          <div class="bg-green-50 p-6 rounded-lg my-6">
            <h3 class="text-lg font-semibold text-green-900 mb-2">Key Research Institutions</h3>
            <ul class="text-green-800 list-disc pl-4">
              <li>National Institutes of Health (NIH)</li>
              <li>Mayo Clinic Research</li>
              <li>Johns Hopkins Medicine</li>
              <li>Harvard Medical School</li>
              <li>Stanford Medicine</li>
            </ul>
          </div>
          
          <p>Staying informed about the latest research helps healthcare providers offer the most current and effective treatments to their patients.</p>
        </div>
      `,
      date: "Nov 25, 2025",
      category: "Research",
      author: "Dr. Emily Davis",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Research", "Studies", "Medical Journals", "Evidence"],
      views: 1800,
      comments: 32
    },
    {
      id: 4,
      title: "The reports on trends in health data globally",
      excerpt: "Analyze global health data trends and understand how population health metrics are changing worldwide, informing public health strategies.",
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-gray-600 mb-6">Global health data provides crucial insights into population health trends, disease patterns, and the effectiveness of public health interventions worldwide.</p>
          
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Global Health Metrics</h2>
          <p>Key indicators tracked globally include:</p>
          
          <ul class="list-disc pl-6 mb-6">
            <li>Life expectancy and mortality rates</li>
            <li>Disease prevalence and incidence</li>
            <li>Healthcare access and quality metrics</li>
            <li>Vaccination coverage rates</li>
            <li>Mental health indicators</li>
            <li>Healthcare expenditure per capita</li>
          </ul>
          
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Emerging Health Trends</h2>
          <p>Recent data reveals several important trends:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-semibold text-blue-900 mb-2">Positive Trends</h3>
              <ul class="text-blue-800 text-sm list-disc pl-4">
                <li>Declining infant mortality rates</li>
                <li>Increased vaccination coverage</li>
                <li>Better cancer survival rates</li>
                <li>Reduced smoking prevalence</li>
              </ul>
            </div>
            <div class="bg-red-50 p-4 rounded-lg">
              <h3 class="font-semibold text-red-900 mb-2">Concerning Trends</h3>
              <ul class="text-red-800 text-sm list-disc pl-4">
                <li>Rising obesity rates</li>
                <li>Increasing diabetes prevalence</li>
                <li>Mental health challenges</li>
                <li>Healthcare disparities</li>
              </ul>
            </div>
          </div>
          
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Data-Driven Public Health</h2>
          <p>Health data analytics enables evidence-based policy making, resource allocation, and targeted interventions to address population health challenges effectively.</p>
          
          <p>Understanding these trends helps healthcare systems prepare for future challenges and allocate resources where they're needed most.</p>
        </div>
      `,
      date: "Dec 11, 2025",
      category: "Data & Analytics",
      author: "Dr. James Wilson",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Data", "Global Health", "Trends", "Analytics"],
      views: 1650,
      comments: 28
    },
    {
      id: 5,
      title: "Advice on healthy living, diet, exercise, and mental",
      excerpt: "Comprehensive guidance on maintaining a healthy lifestyle through proper nutrition, regular exercise, and mental wellness practices.",
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-gray-600 mb-6">A holistic approach to health encompasses physical fitness, proper nutrition, and mental well-being. Here's your comprehensive guide to healthy living.</p>
          
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Nutrition Fundamentals</h2>
          <p>A balanced diet forms the foundation of good health:</p>
          
          <ul class="list-disc pl-6 mb-6">
            <li>Eat a variety of colorful fruits and vegetables</li>
            <li>Choose whole grains over refined carbohydrates</li>
            <li>Include lean proteins in every meal</li>
            <li>Stay hydrated with adequate water intake</li>
            <li>Limit processed foods and added sugars</li>
          </ul>
          
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Exercise Guidelines</h2>
          <p>Regular physical activity is essential for maintaining health:</p>
          
          <div class="bg-green-50 p-6 rounded-lg my-6">
            <h3 class="text-lg font-semibold text-green-900 mb-2">Weekly Exercise Recommendations</h3>
            <ul class="text-green-800 list-disc pl-4">
              <li>150 minutes of moderate-intensity aerobic activity</li>
              <li>2 days of strength training exercises</li>
              <li>Flexibility and balance exercises</li>
              <li>Daily movement and reduced sedentary time</li>
            </ul>
          </div>
          
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Mental Health & Wellness</h2>
          <p>Mental health is equally important as physical health:</p>
          
          <ul class="list-disc pl-6 mb-6">
            <li>Practice stress management techniques</li>
            <li>Maintain social connections and relationships</li>
            <li>Get adequate sleep (7-9 hours per night)</li>
            <li>Engage in mindfulness and meditation</li>
            <li>Seek professional help when needed</li>
          </ul>
          
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Creating Sustainable Habits</h2>
          <p>The key to long-term health is developing sustainable habits rather than pursuing quick fixes. Start small, be consistent, and gradually build upon your successes.</p>
          
          <blockquote class="border-l-4 border-green-500 pl-6 italic text-gray-700 my-6">
            "Health is not about being perfect; it's about making better choices consistently over time."
          </blockquote>
          
          <p>Remember that everyone's health journey is unique. Consult with healthcare professionals to develop a personalized plan that works for your specific needs and circumstances.</p>
        </div>
      `,
      date: "Jan 20, 2026",
      category: "Wellness",
      author: "Dr. Lisa Brown",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Wellness", "Nutrition", "Exercise", "Mental Health"],
      views: 3200,
      comments: 67
    },
    {
      id: 6,
      title: "Information on how to prevent illnesses",
      excerpt: "Essential strategies and practical tips for preventing common illnesses and maintaining optimal health through preventive care measures.",
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-gray-600 mb-6">Prevention is the most effective approach to maintaining good health. By taking proactive steps, you can significantly reduce your risk of developing many common illnesses.</p>
          
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Primary Prevention Strategies</h2>
          <p>Primary prevention focuses on preventing disease before it occurs:</p>
          
          <ul class="list-disc pl-6 mb-6">
            <li>Regular vaccinations and immunizations</li>
            <li>Healthy lifestyle choices (diet, exercise, sleep)</li>
            <li>Avoiding tobacco and limiting alcohol consumption</li>
            <li>Practicing good hygiene and hand washing</li>
            <li>Using sun protection and safety equipment</li>
          </ul>
          
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Secondary Prevention: Early Detection</h2>
          <p>Regular screenings can catch diseases in their early stages:</p>
          
          <div class="bg-blue-50 p-6 rounded-lg my-6">
            <h3 class="text-lg font-semibold text-blue-900 mb-2">Recommended Screenings</h3>
            <ul class="text-blue-800 list-disc pl-4">
              <li>Annual physical examinations</li>
              <li>Blood pressure and cholesterol checks</li>
              <li>Cancer screenings (mammograms, colonoscopies)</li>
              <li>Diabetes and prediabetes testing</li>
              <li>Vision and hearing assessments</li>
            </ul>
          </div>
          
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Infectious Disease Prevention</h2>
          <p>Protecting yourself and others from infectious diseases:</p>
          
          <ul class="list-disc pl-6 mb-6">
            <li>Practice proper hand hygiene</li>
            <li>Stay up-to-date with vaccinations</li>
            <li>Avoid close contact with sick individuals</li>
            <li>Cover coughs and sneezes</li>
            <li>Maintain a clean environment</li>
          </ul>
          
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Chronic Disease Prevention</h2>
          <p>Many chronic diseases can be prevented through lifestyle modifications:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h3 class="font-semibold text-green-900 mb-2">Heart Disease Prevention</h3>
              <ul class="text-green-800 text-sm list-disc pl-4">
                <li>Regular cardiovascular exercise</li>
                <li>Heart-healthy diet</li>
                <li>Stress management</li>
                <li>No smoking</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg">
              <h3 class="font-semibold text-purple-900 mb-2">Diabetes Prevention</h3>
              <ul class="text-purple-800 text-sm list-disc pl-4">
                <li>Maintain healthy weight</li>
                <li>Regular physical activity</li>
                <li>Balanced nutrition</li>
                <li>Regular blood sugar monitoring</li>
              </ul>
            </div>
          </div>
          
          <p>Remember that prevention is a lifelong commitment. Small, consistent actions taken today can have a significant impact on your long-term health and quality of life.</p>
        </div>
      `,
      date: "Jan 29, 2026",
      category: "Prevention",
      author: "Dr. Robert Taylor",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Prevention", "Health", "Screening", "Lifestyle"],
      views: 2800,
      comments: 54
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen },
    { id: 'Announcements', name: 'Announcements', icon: Heart },
    { id: 'Technology', name: 'Technology', icon: Stethoscope },
    { id: 'Research', name: 'Research', icon: Activity },
    { id: 'Data & Analytics', name: 'Data & Analytics', icon: Shield },
    { id: 'Wellness', name: 'Wellness', icon: Heart },
    { id: 'Prevention', name: 'Prevention', icon: Shield }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    const categoryMap: { [key: string]: any } = {
      'Announcements': Heart,
      'Technology': Stethoscope,
      'Research': Activity,
      'Data & Analytics': Shield,
      'Wellness': Heart,
      'Prevention': Shield
    };
    return categoryMap[category] || BookOpen;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'Announcements': 'bg-blue-100 text-blue-800',
      'Technology': 'bg-purple-100 text-purple-800',
      'Research': 'bg-green-100 text-green-800',
      'Data & Analytics': 'bg-orange-100 text-orange-800',
      'Wellness': 'bg-pink-100 text-pink-800',
      'Prevention': 'bg-indigo-100 text-indigo-800'
    };
    return colorMap[category] || 'bg-gray-100 text-gray-800';
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <button
              onClick={() => setSelectedPost(null)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </button>
            
            <div className="flex items-center space-x-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedPost.category)}`}>
                {selectedPost.category}
              </span>
              <span className="text-gray-500 text-sm">{selectedPost.readTime}</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{selectedPost.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{selectedPost.excerpt}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{selectedPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{selectedPost.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{selectedPost.views} views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{selectedPost.comments} comments</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                  <Bookmark className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <img
            src={selectedPost.image}
            alt={selectedPost.title}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 pb-12">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
          />
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {selectedPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">Healthcare Blog</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest healthcare news, research findings, and wellness advice from medical professionals.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filter */}
        <div className="bg-white rounded-2xl p-6 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2 overflow-x-auto">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredPosts.map((post) => {
            const CategoryIcon = getCategoryIcon(post.category);
            return (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-blue-600 group-hover:text-blue-700">
                      <span className="text-sm font-medium">Read more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <div className="bg-white rounded-2xl p-12 border border-gray-100 text-center">
            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;