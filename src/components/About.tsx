    import { Link } from "react-router-dom"
    import { Button } from "@/components/ui/button"
    import { Card } from "@/components/ui/card"
    import { Badge } from "@/components/ui/badge"

    export default function About() {
      const employees = [
        {
          name: "Alexandra Johnson",
          title: "Chief Medical Officer",
          department: "Internal Medicine",
          image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=facearea&w=400&h=400&facepad=2",
          summary:
            "Board-certified Internal Medicine physician with over 12 years of experience in managing complex medical conditions. Committed to providing patient-centered care and promoting preventive health.",
          education: ["M.D., Harvard Medical School, 2008", "B.S. in Biology, Stanford University, 2004"],
          specialties: ["Internal Medicine", "Preventive Care", "Chronic Disease Management"],
        },
        {
          name: "Dr. Michael Chen",
          title: "Director of Telemedicine",
          department: "Digital Health",
          image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=facearea&w=400&h=400&facepad=2",
          summary:
            "Leading expert in digital health technologies with 15 years of experience in telemedicine implementation. Specializes in remote patient monitoring and virtual care delivery systems.",
          education: ["M.D., Johns Hopkins School of Medicine, 2005", "M.S. in Health Informatics, UCSF, 2010"],
          specialties: ["Telemedicine", "Health Informatics", "Remote Patient Monitoring"],
        },
        {
          name: "Sarah Williams",
          title: "Head of Patient Experience",
          department: "Patient Services",
          image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=400&facepad=2",
          summary:
            "Dedicated healthcare administrator with 10 years of experience in patient care coordination. Focuses on improving patient satisfaction and streamlining healthcare delivery processes.",
          education: ["M.H.A., University of Michigan, 2012", "B.S. in Healthcare Management, Penn State, 2010"],
          specialties: ["Patient Experience", "Care Coordination", "Quality Improvement"],
        },
        {
          name: "Dr. James Rodriguez",
          title: "Chief Technology Officer",
          department: "Information Technology",
          image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=400&facepad=2",
          summary:
            "Technology leader with 18 years of experience in healthcare IT systems. Expert in electronic health records, data security, and healthcare system integration.",
          education: ["Ph.D. in Computer Science, MIT, 2003", "M.S. in Biomedical Engineering, Georgia Tech, 2001"],
          specialties: ["Healthcare IT", "Data Security", "System Integration"],
        },
        {
          name: "Dr. Emily Thompson",
          title: "Director of Clinical Operations",
          department: "Clinical Services",
          image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400&facepad=2",
          summary:
            "Experienced clinical leader with 14 years in healthcare operations management. Specializes in workflow optimization, staff development, and clinical quality assurance.",
          education: ["M.D., Mayo Clinic School of Medicine, 2007", "M.B.A., Wharton School, 2015"],
          specialties: ["Clinical Operations", "Quality Assurance", "Staff Development"],
        },
      ]
    
      return (
        <div className="min-h-screen bg-white">
    
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/10 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Meet Our
                  <span className="text-primary"> Healthcare Team</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our dedicated team of healthcare professionals and technology experts work together to provide exceptional
                  care and innovative solutions for our patients and healthcare partners.
                </p>
              </div>
            </div>
          </section>
    
          {/* Team Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-16">
                {employees.map((employee, index) => (
                  <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                    >
                      <div className={`relative h-96 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                        <img
                          src={employee.image}
                          alt={employee.name}
                          className="object-cover w-full h-full"
                          style={{ borderRadius: "0.5rem" }}
                        />
                      </div>
                      <div
                        className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                      >
                        <div className="mb-4">
                          <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary">
                            {employee.department}
                          </Badge>
                          <h2 className="text-3xl font-bold text-gray-900 mb-2">{employee.name}</h2>
                          <p className="text-xl text-primary font-semibold mb-4">{employee.title}</p>
                        </div>
    
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Summary</h3>
                          <p className="text-gray-600 leading-relaxed">{employee.summary}</p>
                        </div>
    
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Education</h3>
                          <ul className="space-y-2">
                            {employee.education.map((edu, eduIndex) => (
                              <li key={eduIndex} className="flex items-start text-gray-600">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                {edu}
                              </li>
                            ))}
                          </ul>
                        </div>
    
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Specialties</h3>
                          <div className="flex flex-wrap gap-2">
                            {employee.specialties.map((specialty, specIndex) => (
                              <Badge key={specIndex} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
    
                        <Button variant="outline" className="w-fit bg-white text-primary border-primary">
                          View Full Profile
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
    
          {/* Mission Section */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  We are committed to revolutionizing healthcare delivery through innovative technology solutions and
                  exceptional patient care. Our team combines deep medical expertise with cutting-edge technology to create
                  seamless, efficient, and patient-centered healthcare experiences.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">12+</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Years of Experience</h3>
                    <p className="text-gray-600">Average team experience in healthcare</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">50K+</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Patients Served</h3>
                    <p className="text-gray-600">Across our healthcare network</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">24/7</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Available</h3>
                    <p className="text-gray-600">Round-the-clock healthcare support</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">HW</span>
                    </div>
                    <span className="text-xl font-bold">HealthWell</span>
                  </div>
                  <p className="text-gray-400">
                    Providing comprehensive healthcare management solutions for modern healthcare needs.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Services</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Appointment Scheduling</li>
                    <li>Telemedicine</li>
                    <li>Health Records</li>
                    <li>Care Coordination</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Company</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>Careers</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Support</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Help Center</li>
                    <li>Documentation</li>
                    <li>Community</li>
                    <li>Status</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2024 HealthWell. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      )
    }
    

