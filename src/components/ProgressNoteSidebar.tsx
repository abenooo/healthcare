import  { useState, useEffect } from "react";
import { X } from "lucide-react";

interface ProgressNote {
  id: string;
  clientName: string;
  service: string;
  hours: number;
  condition: string;
  observations: string;
  incidents: string;
  signature: string;
  status: string;
  date: string;
  createdAt: string;
}

const STORAGE_KEY = "progress_notes";

const demoNotes = Array.from({ length: 10 }).map((_, i) => ({
  clientName: `Client ${i + 1}`,
  service: `Service ${i + 1}`,
  hours: Number((Math.random() * 8).toFixed(1)), // <-- Make this a number
  condition: ["Stable", "Needs Attention", "Critical"][i % 3],
  observations: "All observations normal.",
  incidents: i % 3 === 0 ? "None" : "Minor incident reported.",
  signature: `Caregiver ${i + 1}`,
  status: "Pending",
  date: `2025-07-${(i + 10).toString().padStart(2, "0")}`,
}));

export default function ProgressNoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    clientName: "",
    service: "",
    hours: "",
    condition: "",
    observations: "",
    incidents: "",
    signature: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [notes, setNotes] = useState(demoNotes);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDetail, setSelectedDetail] = useState("");

  useEffect(() => {
    // Load from localStorage if available
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (stored.length) setNotes(stored);
  }, []);

  const handleChange = (e:any) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const newNote: ProgressNote = {
      id: Date.now().toString(),
      ...form,
      service: selectedService + (selectedDetail ? ` - ${selectedDetail}` : ""),
      hours: parseFloat(form.hours),
      status: 'Pending',
      date: new Date().toLocaleDateString(),
      createdAt: new Date().toISOString()
    };

    const updated = [newNote, ...notes];
    setNotes(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setTimeout(() => {
      setSubmitting(false);
      onClose();
      setForm({
        clientName: "",
        service: "",
        hours: "",
        condition: "",
        observations: "",
        incidents: "",
        signature: "",
      });
    }, 800);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Submit Progress Note</h2>
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div>
            <label className="block text-sm font-medium mb-1">Client Name</label>
            <input
              name="clientName"
              value={form.clientName}
              onChange={handleChange}
              placeholder="Client Name"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Service Provided</label>
            <select
              name="service"
              value={selectedService}
              onChange={e => {
                setSelectedService(e.target.value);
                setSelectedDetail(""); // Reset detail when service changes
                handleChange(e);
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            >
              <option value="">Select a service</option>
              {serviceOptions.map(service => (
                <option key={service.label} value={service.label}>
                  {service.label}
                </option>
              ))}
            </select>
          </div>
          {selectedService && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Detail</label>
              <select
                name="serviceDetail"
                value={selectedDetail}
                onChange={e => setSelectedDetail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              >
                <option value="">Select a detail</option>
                {serviceOptions
                  .find(service => service.label === selectedService)
                  ?.details.map(detail => (
                    <option key={detail} value={detail}>
                      {detail}
                    </option>
                  ))}
              </select>
            </div>
          )}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Hours Worked</label>
              <input
                name="hours"
                value={form.hours}
                onChange={handleChange}
                placeholder="Hours"
                type="number"
                min="0"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Client Condition</label>
              <input
                name="condition"
                value={form.condition}
                onChange={handleChange}
                placeholder="Client Condition"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Notes</label>
            <textarea
              name="observations"
              value={form.observations}
              onChange={handleChange}
              placeholder="Notes"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Incidents</label>
            <textarea
              name="incidents"
              value={form.incidents}
              onChange={handleChange}
              placeholder="Incidents"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Your Signature</label>
            <input
              name="signature"
              value={form.signature}
              onChange={handleChange}
              placeholder="Your Signature"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        <hr className="my-6" />
        <h3 className="text-lg font-bold mb-3 text-gray-800">Progress Notes</h3>
        <div className="overflow-x-auto max-h-64">
          <table className="min-w-full text-sm border">
            <thead>
              <tr className="bg-blue-50">
                <th className="p-2 border">Client</th>
                <th className="p-2 border">Service</th>
                <th className="p-2 border">Hours</th>
                <th className="p-2 border">Condition</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {notes.slice(0, 10).map((note, i) => (
                <tr key={i} className="even:bg-gray-50">
                  <td className="p-2 border">{note.clientName}</td>
                  <td className="p-2 border">{note.service}</td>
                  <td className="p-2 border text-center">{note.hours}</td>
                  <td className="p-2 border">{note.condition}</td>
                  <td className="p-2 border">{note.date}</td>
                  <td className="p-2 border">{note.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const serviceOptions = [
  {
    label: "In-Home Service",
    details: [
      "Personal Care",
      "Meal Preparation",
      "Medication Reminders",
      "Housekeeping",
      "Mobility Assistance"
    ]
  },
  {
    label: "Respite Care Service",
    details: [
      "Short-Term Relief",
      "Emergency Care",
      "Overnight Stay",
      "Weekend Care",
      "Daytime Supervision"
    ]
  },
  {
    label: "Direct Support Professional",
    details: [
      "Skill Development",
      "Community Integration",
      "Behavioral Support",
      "Transportation",
      "Daily Living Assistance"
    ]
  },
  {
    label: "Host Home Provider",
    details: [
      "Room & Board",
      "Family Integration",
      "24/7 Supervision",
      "Medical Coordination",
      "Life Skills Training"
    ]
  },
  {
    label: "Companion Services",
    details: [
      "Socialization",
      "Recreational Activities",
      "Errand Assistance",
      "Escort to Appointments",
      "Safety Monitoring"
    ]
  },
  {
    label: "Professional Behavioral Support",
    details: [
      "Behavior Assessment",
      "Intervention Planning",
      "Crisis Management",
      "Family Training",
      "Progress Monitoring"
    ]
  },
  {
    label: "Employment Specialist",
    details: [
      "Job Coaching",
      "Resume Building",
      "Interview Preparation",
      "Workplace Advocacy",
      "On-the-Job Training"
    ]
  },
  {
    label: "Support Living Without Transportation",
    details: [
      "Home Setup",
      "Budgeting",
      "Meal Planning",
      "Personal Safety",
      "Health Management"
    ]
  },
  {
    label: "Day Habilitation",
    details: [
      "Group Activities",
      "Skill Building",
      "Therapeutic Recreation",
      "Community Outings",
      "Personal Care Support"
    ]
  }
];
