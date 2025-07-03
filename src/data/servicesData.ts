import { Home, Heart, Users, Shield, Brain, Briefcase, UserCheck, Car, Building } from "lucide-react"

export const servicesData = [
  {
    id: "in-home-service",
    name: "In-Home Service",
    description:
      "Personalized support for home activities, medication reminders, and goal setting to enhance daily living.",
    icon: Home,
    features: ["Skilled Nursing", "Medical Equipment", "24/7 Support"],
    availability: "24/7 Available",
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    ],
    longDescription:
      "Our In-Home Service provides comprehensive, personalized care in the comfort of your own home. Our skilled professionals work closely with you and your family to develop customized care plans that address your specific needs and goals. From medication management to daily living activities, we're here to support your independence and well-being.",
  },
  {
    id: "respite-care-service",
    name: "Respite Care Service",
    description: "Short-term relief for families and caregivers, ensuring continuous care and support.",
    icon: Heart,
    features: ["Personal Hygiene", "Meal Preparation", "Medication Reminders"],
    availability: "Flexible Hours",
    images: [
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    ],
    longDescription:
      "Our Respite Care Service offers temporary relief for primary caregivers while ensuring your loved one receives quality care. Whether you need a few hours or several days of support, our trained professionals provide compassionate care that maintains routines and promotes comfort.",
  },
  {
    id: "direct-support-professional",
    name: "Direct Support Professional",
    description: "Skilled DSPs help individuals with IDD participate in the community and daily activities.",
    icon: Users,
    features: ["Social Activities", "Transportation", "Light Housekeeping"],
    availability: "Daily Support",
    images: [
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    ],
    longDescription:
      "Our Direct Support Professionals are specially trained to assist individuals with intellectual and developmental disabilities. We focus on promoting independence, community integration, and personal growth through individualized support plans.",
  },
  {
    id: "host-home-provider",
    name: "Host Home Provider",
    description: "Experienced families provide a supportive home, helping develop life and social skills.",
    icon: Shield,
    features: ["Short-term Care", "Family Relief", "Professional Support"],
    availability: "As Needed",
    images: [
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    ],
    longDescription:
      "Our Host Home Provider program connects individuals with carefully selected families who provide a supportive, home-like environment. This service focuses on developing life skills, social connections, and independence in a nurturing family setting.",
  },
  {
    id: "companion-services",
    name: "Companion Services",
    description: "Professional DSPs offer emotional and physical support, ensuring stability and well-being.",
    icon: UserCheck,
    features: ["Chronic Disease Management", "Post-Surgery Care", "Rehabilitation"],
    availability: "Specialized Hours",
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
    ],
    longDescription:
      "Our Companion Services provide emotional support and practical assistance to help individuals maintain their independence and quality of life. Our compassionate companions offer friendship, assistance with daily activities, and peace of mind for families.",
  },
  {
    id: "professional-behavioral-support",
    name: "Professional Behavioral Support",
    description: "Education and support for chronic behavioral challenges, improving safety and relationships.",
    icon: Brain,
    features: ["Memory Support", "Safety Monitoring", "Cognitive Activities"],
    availability: "Continuous Care",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
    ],
    longDescription:
      "Our Professional Behavioral Support services are designed to address challenging behaviors through evidence-based interventions. Our certified professionals work with individuals and families to develop effective strategies that promote positive outcomes and improved quality of life.",
  },
  {
    id: "employment-specialist",
    name: "Employment Specialist",
    description: "Guidance and support to help individuals find and keep competitive, integrated jobs.",
    icon: Briefcase,
    features: ["Pain Management", "Comfort Care", "Family Support"],
    availability: "24/7 Support",
    images: [
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop",
    ],
    longDescription:
      "Our Employment Specialists help individuals with disabilities find and maintain meaningful employment. We provide job coaching, workplace accommodations, and ongoing support to ensure successful integration into the workforce.",
  },
  {
    id: "support-living-without-transportation",
    name: "Support Living Without Transportation",
    description: "Support for independent living and community access for those without reliable transport.",
    icon: Car,
    features: ["Health Screenings", "Nutrition Counseling", "Exercise Programs"],
    availability: "Scheduled",
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    ],
    longDescription:
      "This service provides comprehensive support for individuals who need assistance with independent living but lack reliable transportation. We help with community access, appointments, shopping, and other essential activities to maintain independence.",
  },
  {
    id: "day-habilitation",
    name: "Day Habilitation",
    description: "A safe, respectful place for indoor and outdoor activities, ensuring safety and enjoyment.",
    icon: Building,
    features: ["Care Planning", "Provider Coordination", "Health Monitoring"],
    availability: "Ongoing",
    images: [
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    ],
    longDescription:
      "Our Day Habilitation program provides a structured, supportive environment where individuals can participate in meaningful activities, develop skills, and build social connections. We offer both indoor and outdoor activities tailored to individual interests and abilities.",
  },
]

export function getServiceById(id: string) {
  return servicesData.find((service) => service.id === id)
}
