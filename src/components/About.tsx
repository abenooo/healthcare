import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const employees = [
    {
      name: "Alexandra Johnson",
      title: "Lead Home Caregiver",
      department: "Home & Personal Care",
      image:
        "https://images-cdn.welcomesoftware.com/Zz0wNTZiNzI0YzFmMmIxMWVlYjEyOTcyNTgxNjc5MmNjNg==/Nurse%20and%20patient%20using%20cell%20phone.jpeg",
      summary:
        "Over 12 years supporting elderly and disabled clients. Passionate about promoting independence, dignity, and quality of life in the home environment.",
      education: [
        "Certified Nursing Assistant (CNA)",
        "Elder Care Training, 2010",
      ],
      specialties: ["Home Care", "Elder Support", "Disability Assistance"],
    },
    {
      name: "Michael Chen",
      title: "Community Support Specialist",
      department: "Disability & Community Services",
      image:
        "https://wcc.ca/wp-content/uploads/2024/10/wcc-blog-what-is-a-community-support-worker.jpg",
      summary:
        "Specialist in supporting individuals with intellectual and developmental disabilities. Focused on community integration, daily living skills, and advocacy.",
      education: [
        "B.A. in Social Work, 2008",
        "Disability Support Certification, 2012",
      ],
      specialties: ["Disability Support", "Community Integration", "Advocacy"],
    },
    {
      name: "Sarah Williams",
      title: "Elder Care Coordinator",
      department: "Senior Services",
      image:
        "https://medixcollege.ca/wp-content/uploads/2022/11/Nov-25-personal-support-worker-career.jpg",
      summary:
        "10 years of experience in elder care and patient advocacy. Dedicated to improving quality of life for seniors and their families.",
      education: [
        "B.S. in Gerontology, 2010",
        "Certified Patient Advocate, 2015",
      ],
      specialties: ["Elder Care", "Patient Advocacy", "Family Support"],
    },
    {
      name: "James Rodriguez",
      title: "Personal Support Worker",
      department: "Daily Living Assistance",
      image:
        "https://hartcollege.ca/wp-content/uploads/speaking-happy-caregiver-old-man-wheelchair-hospital-helping-elderly-patient-support-clinic-medical-nurse-healthcare-social-worker-talking-senior-person-with-disability-1024x683.jpg",
      summary:
        "18 years of experience helping clients with daily living activities and personal care. Expert in building trust and supporting independence.",
      education: ["Personal Support Worker Certificate, 2005"],
      specialties: [
        "Daily Living Assistance",
        "Personal Care",
        "Trust Building",
      ],
    },
    {
      name: "Emily Thompson",
      title: "Family & Community Liaison",
      department: "Community Engagement",
      image:
        "https://canadianbusinesscollege.com/wp-content/uploads/2020/01/Jan-31-Personal-support-worker-career.jpg",
      summary:
        "Experienced in connecting families with resources and support. Specializes in community outreach and family education.",
      education: ["B.A. in Community Health, 2012"],
      specialties: [
        "Family Support",
        "Community Outreach",
        "Resource Coordination",
      ],
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9FAFC" }}>
      {/* Hero Section */}
      <section className="py-10 bg-gradient-to-br from-primary/10 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              ABOUT US
            </h1>
            <p className="text-xl text-primary font-semibold">
              In Our Community We Stand Together
            </p>
            <p className="text-lg text-gray-700">
              Shalom Health Care Services is a licensed Medicaid provider for
              the DC Department on Disability Services (DDS).
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-0 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {employees.map((employee, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div
                    className={`relative h-96 lg:h-auto ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="object-cover w-full h-full"
                      style={{ borderRadius: "0.5rem" }}
                    />
                  </div>
                  <div
                    className={`p-8 lg:p-12 flex flex-col justify-center ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <div className="mb-4">
                      <Badge
                        variant="secondary"
                        className="mb-2 bg-primary/10 text-primary"
                      >
                        {employee.department}
                      </Badge>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {employee.name}
                      </h2>
                      <p className="text-xl text-primary font-semibold mb-4">
                        {employee.title}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Professional Summary
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {employee.summary}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Education
                      </h3>
                      <ul className="space-y-2">
                        {employee.education.map((edu, eduIndex) => (
                          <li
                            key={eduIndex}
                            className="flex items-start text-gray-600"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Specialties
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {employee.specialties.map((specialty, specIndex) => (
                          <Badge
                            key={specIndex}
                            variant="outline"
                            className="bg-primary/10 text-primary border-primary/20"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-fit bg-white text-primary border-primary"
                    >
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We are committed to empowering individuals of all ages and
              abilities through compassionate care, support, and advocacy. Our
              team combines experience in home care, disability services, and
              elder support to help every person live with dignity,
              independence, and joy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">12+</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Years of Experience
                </h3>
                <p className="text-gray-600">
                  Average team experience in healthcare
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">50K+</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Patients Served
                </h3>
                <p className="text-gray-600">Across our healthcare network</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">24/7</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Support Available
                </h3>
                <p className="text-gray-600">
                  Round-the-clock healthcare support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Are We & Mission Statement Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Who Are We
            </h2>
            <p className="text-lg text-gray-700">
              A licensed Medicaid provider for DDS that assesses each person to
              create a custom community involvement plan tailored to and for the
              person. We are dedicated to not only educate the person but also
              their family members so the person may live a positive day-to-day
              life within our communities.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Our Mission Statement
            </h2>
            <p className="text-lg text-gray-700">
              Our mission at Shalom Health Care Services is to abide by the
              Department of Disability Services (DDS) standards to provide
              innovative high-quality services that will enable people with
              disabilities to lead meaningful and productive lives as vital
              members of their families, schools, workplaces, and communities in
              every neighborhood in the District of Columbia. Our experienced
              team at Shalom Health Care Services is prepared to provide
              person-centered service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
