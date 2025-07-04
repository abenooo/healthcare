import React, { useState, useRef } from "react";
import { Download, FileText, UserPlus, X } from "lucide-react";


const jobs = [
  {
    title: "Direct Support Professional (DSP)",
    status: "Full Time",
    desc: `A Direct Support Professional cares for individuals experiencing intellectual or developmental disabilities (IDD). Main duties include helping patients complete basic housekeeping tasks, transporting patients to appointments or social outings, and keeping patients safe from potential health hazards. The goal is to help persons with IDD achieve a more comfortable level of independence.`,
    duties: [
      "Assisting clients with daily personal tasks, including bathing and dressing.",
      "Completing housekeeping tasks such as vacuuming, washing dishes, and tidying.",
      "Helping plan a person's appointments and organize a schedule.",
      "Arranging transportation arrangements to appointments.",
      "Shopping for groceries and preparing meals that meet specific dietary needs.",
      "Encouraging personal engagement in social networks and communities.",
      "Reminds and assists persons with self-administration of medications (with proper training).",
      "Encourages self-help activities.",
      "Ensure everyone's rights are protected.",
      "Treats individuals with dignity and respect.",
      "Observe individuals for evidence of injury or bruises and evaluates for changes in emotional and physical status.",
      "Reports all medical related incidents to the Program Director and the delegating nurse.",
      "Maintains resident confidentiality.",
      "Teach persons tasks that they can ultimately learn to do for themselves.",
      "Interacting with persons always served professionally and respectfully and respond to their needs in a dignified and timely manner.",
      "Support each person's needs, choices, and participation in the community.",
      "Refer parents and guardians to the Program Director when needed.",
      "Willingness and ability to work well with others.",
      "Demonstrate initiative, respect, and courtesy for staff, persons served, supervisor, and the organization.",
      "Attend required meetings.",
    ],
    requirements: [
      "High school diploma.",
      "Good communication and organizational skills.",
      "Ability to handle stressful situations and be able to prevent and/or handle emergency situations.",
      "A cheerful, positive attitude when working with a variety of people, and being able to work well under pressure.",
      "Responsible, neat, and clean in appearance.",
      "Strong communication skill with supervisor and team members.",
      "Must be able to read, write and speak English.",
    ],
    file: { name: "DSP JOB DESC (docx)", url: "/DSP-JOB-DESC.docx" },
  },
  {
    title: "Supervisory Nurse (SN)",
    status: "Part Time / Full Time",
    desc: `Supervisory Nurse (SN) is in charge of hiring and firing their staff of nurses, as well as scheduling and overseeing patients. Skills include evaluating, planning, implementing, and documenting nursing care for all patients and teaching patients and their families to understand conditions and medications.`,
    duties: [
      "Accomplishes nursing human resource objectives by selecting, orienting, training, assigning, scheduling, coaching, counseling, and disciplining employees.",
      "Meets operational nursing standards by contributing information to strategic plans and reviews.",
      "Meets nursing financial standards by providing annual budget information.",
      "Identifies patient service requirements by establishing personal rapport with potential and actual patients.",
      "Maintains nursing guidelines by writing and updating policies and procedures.",
      "Assures quality of care by developing and interpreting hospital and nursing division's philosophies and standards of care.",
      "Completes patient care requirements by scheduling and assigning nursing and staff.",
      "Establishes a compassionate environment by providing emotional, psychological, and spiritual support.",
      "Promotes patient independence by establishing patient care goals, teaching and counseling patients, friends, and family.",
      "Provides information to patients and the health care team by answering questions and requests.",
      "Resolve patient needs by utilizing multidisciplinary team strategies.",
      "Maintains a safe and clean working environment by designing and implementing procedures, rules, and regulations.",
      "Protects patients and employees by developing and interpreting infection-control policies and protocols.",
      "Maintains patient confidence and protects operations by monitoring confidential information processing.",
      "Maintains documentation of patient care services by auditing patient and department records.",
      "Ensures operation of medical and administrative equipment by verifying emergency equipment availability.",
      "Maintains nursing supplies inventory by studying usage reports, identifying trends, anticipating needed supplies.",
      "Maintains professional and technical knowledge by attending educational workshops.",
      "Maintains a cooperative relationship among health care teams by communicating information.",
      "Accomplishes organizational goals by accepting ownership for accomplishing new and different requests.",
    ],
    requirements: [
      "High school diploma.",
      "Good communication and organizational skills.",
      "Ability to handle stressful situations and be able to prevent and/or handle emergency situations.",
      "A cheerful, positive attitude when working with a variety of people and working well under pressure.",
      "Responsible, neat, and clean in appearance.",
      "Strong communication skill with supervisor and team members.",
      "Must be able to read, write and speak English.",
    ],
    file: { name: "SN JOB DESC (docx)", url: "/SN-JOB-DESC.docx" },
  },
  {
    title: "Certified Nursing Assistant (CNA)",
    status: "Part Time / Full Time",
    desc: `The main role of a Certified Nursing Assistant (CNA) is to provide basic care to patients and help them with daily activities they might have trouble doing on their own, such as bathing and getting dressed.`,
    duties: [
      "Helping patients with ADLs, such as bathing, grooming, toileting, eating, and moving.",
      "Ensuring that patients receive appropriate nutrition.",
      "Safely move patients into beds and wheelchairs and onto exam tables.",
      "Measure a patient's blood pressure, pulse, and temperature, and record findings.",
      "Changing soiled sheets, cleaning up spills, changing bedpans, setting up equipment.",
      "Identify bruises, blood in urine, and other injuries and report them.",
      "Serve as a channel between patients and nurses, and physicians.",
      "Provide compassion and comfort to those who are lonely, frustrated, or scared.",
    ],
    requirements: [
      "High school diploma.",
      "Good communication and organizational skills.",
      "Ability to handle stressful situations and be able to prevent and/or handle emergency situations.",
      "A cheerful, positive attitude when working with a variety of people and working well under pressure.",
      "Responsible, neat, and clean in appearance.",
      "Strong communication skills with supervisor and team members.",
      "Must be able to read, write and speak English.",
    ],
    file: { name: "CNA JOB DESC (docx)", url: "/CNA-JOB-DESC.docx" },
  },
  {
    title: "Home Health Aide (HHA)",
    status: "Part Time / Full Time",
    desc: `Supports patients by providing housekeeping and laundry services, shopping for food and other household requirements, preparing and serving meals and snacks, and running errands. Assists patients by providing personal services, such as bathing, dressing, and grooming.`,
    duties: [
      "Monitor patient condition by observing physical and mental condition, intake and output, and exercise.",
      "Supports patients by providing housekeeping and laundry services.",
      "Assists patients by providing personal services, such as bathing, dressing, and grooming.",
      "Helps patients care for themselves by teaching the use of cane or walker, special utensils to eat, special techniques, and equipment for personal hygiene.",
      "Helps family members care for the patient by teaching appropriate ways to lift, turn, and reposition the patient.",
      "Advises on nutrition, cleanliness, and housekeeping.",
      "Records patient information by making entries in the patient journal.",
      "Maintains a safe, secure, and healthy patient environment.",
      "Protects the home care agency by adhering to professional standards.",
      "Scheduling doctor appointments or other meetings and organizing transportation.",
      "Taking patient's vital signs or giving them medicine under a nurse's direction.",
    ],
    requirements: [
      "High school diploma.",
      "Good communication and organizational skills.",
      "Ability to handle stressful situations and be and be able to prevent and/or handle emergency situations.",
      "A cheerful, positive attitude when working with a variety of people and working well under pressure.",
      "Responsible, neat, and clean in appearance.",
      "Strong communication skill with supervisor and team members.",
      "Must be able to read, write and speak English.",
    ],
    file: { name: "HHA JOB DESC (docx)", url: "/HHA-JOB-DESC.docx" },
  },
  {
    title: "Registered Nurse (RN)",
    status: "Part Time / Full Time",
    desc: `A Registered Nurse (RN) primarily cares for patients by monitoring them, administering medications, consulting with health care providers, updating patient records, and educating patients and their families on disease and post-hospital treatment.`,
    duties: [
      "Maintain accurate, detailed reports, and records.",
      "Monitor, record, and report symptoms and changes in patients' conditions.",
      "Record patients' medical information and vital signs.",
      "Modify patient treatment plans as indicated by patients' responses and conditions.",
      "Observing and recording patient behavior.",
      "Implement physicians' orders, administer medications, start IVs, perform treatments, procedures, and special tests.",
      "Collecting patient health histories.",
      "Counseling patients and their families.",
      "Educating patients about treatment plans.",
      "Order, interpret and evaluate diagnostic tests.",
      "Consult and coordinate with health care team members.",
      "Assess and evaluate patients' needs for, and responses to, care rendered.",
      "Monitor all aspects of patient care, including diet and physical activity.",
      "Apply sound nursing judgment in patient care management decisions.",
      "Provide primary and emergency care for occupational and non-occupational injuries and illnesses.",
      "Administer over the counter and prescription medications as ordered.",
      "Collaborate with the nursing team and doctors to create a Plan of Care.",
      "Direct and guide ancillary personnel and maintain standards of professional nursing.",
      "Research ways to improve healthcare processes and improve patient outcomes.",
    ],
    requirements: [
      "High school diploma.",
      "Good communication and organizational skills.",
      "Ability to handle stressful situations and be and be able to prevent and/or handle emergency situations.",
      "A cheerful, positive attitude when working with a variety of people and working well under pressure.",
      "Responsible, neat, and clean in appearance.",
      "Strong communication skill with supervisor and team members.",
    ],
    file: { name: "RN JOB DESC (docx)", url: "/RN-JOB-DESC.docx" },
  },
];

const Careers = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    files: [] as File[],
  });
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setShowModal(true);
    setForm({ name: "", phone: "", email: "", message: "", files: [] });
    setSubmitted(false);
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     setForm((prev) => ({
  //       ...prev,
  //       files: [...prev.files, ...Array.from(e.target.files)],
  //     }));
  //   }
  // };

  const handleRemoveFile = (index: number) => {
    setForm((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to your backend or email service
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFC] py-12 px-4">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#77658B] mb-4">Careers at Shalom Healthcare & Services</h1>
        <p className="text-lg text-gray-700 mb-2">We are Hiring. We look forward to hearing from you.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
          <span className="text-[#77658B] font-medium">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-[#77658B] font-medium">About Us</span>
          <span className="text-gray-400">/</span>
          <span className="text-[#77658B] font-medium">Services</span>
          <span className="text-gray-400">/</span>
          <span className="font-bold text-[#9AC15D]">Careers</span>
          <span className="text-gray-400">/</span>
          <span className="text-[#77658B] font-medium">Contact Us</span>
        </div>
      </div>

      {/* Jobs List */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobs.map((job, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col">
            <div className="flex items-center mb-4">
              <FileText className="w-8 h-8 text-[#77658B] mr-3" />
              <h2 className="text-2xl font-bold text-[#77658B]">{job.title}</h2>
              <span className="ml-auto px-3 py-1 rounded-full bg-[#9AC15D]/10 text-[#9AC15D] text-xs font-semibold">{job.status}</span>
            </div>
            <p className="text-gray-700 mb-4">{job.desc}</p>
            <div className="mb-3">
              <h3 className="font-semibold text-[#77658B] mb-1">Essential Job Functions</h3>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                {job.duties.map((duty, i) => (
                  <li key={i}>{duty}</li>
                ))}
              </ul>
            </div>
            <div className="mb-3">
              <h3 className="font-semibold text-[#77658B] mb-1">Requirements</h3>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href={job.file.url}
                download
                className="flex items-center px-4 py-2 bg-[#77658B] text-white rounded-lg hover:bg-[#9AC15D] transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                {job.file.name}
              </a>
              <button
                className="flex items-center px-4 py-2 bg-[#9AC15D] text-white rounded-lg hover:bg-[#77658B] transition-colors"
                onClick={() => handleApplyClick(job.title)}
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Click to Apply
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={() => setShowModal(false)}
            >
              <X className="w-6 h-6" />
            </button>
            {submitted ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-[#77658B] mb-2">Application Submitted!</h2>
                <p className="text-gray-700">Thank you for applying. We will review your application and contact you soon.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-[#77658B] mb-2">We're Hiring!</h2>
                <p className="text-gray-700 mb-4">Join Our Team</p>
                <p className="text-sm text-gray-500 mb-6">
                  If you're interested in the <span className="font-semibold text-[#9AC15D]">{selectedJob}</span> position, start by applying here and attaching your resume.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#77658B] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#77658B] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email<span className="text-red-500">*</span></label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#77658B] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#77658B] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Attach Resume</label>
                    <input
                      type="file"
                      ref={fileInputRef}
                      // onChange={handleFileChange}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#77658B]/10 file:text-[#77658B] hover:file:bg-[#9AC15D]/10"
                      multiple
                      accept=".pdf,.doc,.docx"
                    />
                    <div className="mt-2 text-xs text-gray-500">
                      Attachments ({form.files.length})
                      {form.files.length > 0 && (
                        <ul className="mt-1 space-y-1">
                          {form.files.map((file, idx) => (
                            <li key={idx} className="flex items-center justify-between">
                              <span>{file.name}</span>
                              <button
                                type="button"
                                className="ml-2 text-red-500 hover:underline"
                                onClick={() => handleRemoveFile(idx)}
                              >
                                Remove
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-4 bg-[#77658B] hover:bg-[#9AC15D] text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    Submit Application
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Contact Info */}
      <div className="max-w-4xl mx-auto text-center mt-16 text-gray-700">
        <h3 className="text-xl font-bold text-[#77658B] mb-2">Shalom Health Care Services</h3>
        <div>Address: 7826 Eastern Ave NW, Suite 201, Washington, DC 20012</div>
        <div>Office Number: 1(202) 621-8792</div>
        <div className="mt-4 text-xs text-gray-400">Copyright © 2023 Shalom Health Care Services - All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Careers;