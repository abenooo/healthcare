import React, { useState, useEffect } from 'react';
import {
  FileText,
  Plus,
  Clock,
  AlertCircle,
  CheckCircle,
  Search,
  Eye,
  RefreshCw,
  Upload,
  ChevronLeft,
  ChevronRight,
  User
} from 'lucide-react';
import DigitalSignature from './DigitalSignature';

const STORAGE_KEY = "progress_notes";

interface ProgressNote {
  
  id: string;
  clientName: string;
  service: string;
  hours: number;
  condition: string;
  observations: string;
  incidents: string;
  signature: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  date: string;
  createdAt: string;
  details?: string[]; // <-- add this line
}

interface ClientSummary {
  clientName: string;
  totalNotes: number;
  totalHours: number;
  lastService: string;
  lastDate: string;
  lastStatus: 'Pending' | 'Approved' | 'Rejected';
  pendingCount: number;
  approvedCount: number;
  rejectedCount: number;
}

const ProgressNotesTable: React.FC = () => {
  const [notes, setNotes] = useState<ProgressNote[]>([]);
  const [clientSummaries, setClientSummaries] = useState<ClientSummary[]>([]);
  const [filteredSummaries, setFilteredSummaries] = useState<ClientSummary[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState<ProgressNote | null>(null);
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [showClientHistory, setShowClientHistory] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');

  const ITEMS_PER_PAGE = 5;

  // Load notes from localStorage on component mount
  useEffect(() => {
    loadNotes();
  }, []);

  // Generate client summaries when notes change
  useEffect(() => {
    generateClientSummaries();
  }, [notes]);

  // Filter summaries based on search term and status
  useEffect(() => {
    let filtered = clientSummaries;

    if (searchTerm) {
      filtered = filtered.filter(summary =>
        summary.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        summary.lastService.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(summary => summary.lastStatus === statusFilter);
    }

    setFilteredSummaries(filtered);
  }, [clientSummaries, searchTerm, statusFilter]);

  const loadNotes = () => {
    setIsLoading(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsedNotes = JSON.parse(stored);
        setNotes(parsedNotes);
      }
    } catch (error) {
      console.error('Error loading notes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const generateClientSummaries = () => {
    const summaryMap = new Map<string, ClientSummary>();

    notes.forEach(note => {
      const existing = summaryMap.get(note.clientName);
      
      if (existing) {
        existing.totalNotes += 1;
        existing.totalHours += Number(note.hours) || 0;
        
        // Update counts based on status
        if (note.status === 'Pending') existing.pendingCount += 1;
        else if (note.status === 'Approved') existing.approvedCount += 1;
        else if (note.status === 'Rejected') existing.rejectedCount += 1;

        // Update last service if this note is more recent
        if (new Date(note.createdAt) > new Date(existing.lastDate)) {
          existing.lastService = note.service;
          existing.lastDate = note.date;
          existing.lastStatus = note.status;
        }
      } else {
        summaryMap.set(note.clientName, {
          clientName: note.clientName,
          totalNotes: 1,
          totalHours: Number(note.hours) || 0,
          lastService: note.service,
          lastDate: note.date,
          lastStatus: note.status,
          pendingCount: note.status === 'Pending' ? 1 : 0,
          approvedCount: note.status === 'Approved' ? 1 : 0,
          rejectedCount: note.status === 'Rejected' ? 1 : 0,
        });
      }
    });

    // Sort by most recent activity
    const summaries = Array.from(summaryMap.values()).sort((a, b) => 
      new Date(b.lastDate).getTime() - new Date(a.lastDate).getTime()
    );

    setClientSummaries(summaries);
  };

  const saveNotes = (newNotes: ProgressNote[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newNotes));
    setNotes(newNotes);
  };

  const showSuccessMessage = (message: string) => {
    setSuccessMessage(message);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle className="w-4 h-4" />;
      case 'Rejected':
        return <AlertCircle className="w-4 h-4" />;
      case 'Pending':
        return <Clock className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const handleViewClient = (clientName: string) => {
    setSelectedClient(clientName);
    setShowClientHistory(true);
    setCurrentPage(1);
  };

  const getClientNotes = (clientName: string) => {
    return notes
      .filter(note => note.clientName === clientName)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploading(true);
    setUploadMessage('');
    const file = e.target.files?.[0];
    if (file) {
      setTimeout(() => {
        setUploading(false);
        setUploadMessage('File uploaded successfully!');
      }, 1500);
    } else {
      setUploading(false);
      setUploadMessage('No file selected.');
    }
  };

  const AddNoteModal = () => {
    const FORM_STORAGE_KEY = "progress_note_form";
    const [form, setForm] = useState({
      clientName: '',
      service: '',
      hours: '',
      condition: '',
      observations: '',
      incidents: '',
      signature: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [selectedService, setSelectedService] = useState("");
    const [selectedDetails, setSelectedDetails] = useState<string[]>([]);

    // Get unique client names from localStorage notes
    const storedNotes = (() => {
      try {
        const raw = localStorage.getItem("progress_notes");
        return raw ? JSON.parse(raw) : [];
      } catch {
        return [];
      }
    })();
    const uniqueClientNames: string[] = Array.from(
      new Set(storedNotes.map((n: any) => n.clientName).filter(Boolean))
    );

    // New static service options
    const serviceOptions = [
      {
        label: "In-Home Service",
        details: [
          { label: "Personal Care", options: ["Bathing", "Dressing", "Grooming", "Feeding", "Toileting"] }
        ]
      },
      {
        label: "Respite Care Service",
        details: [
          { label: "Caregiver Availability", options: ["Weekday", "Weekend", "24/7"] }
        ]
      },
      {
        label: "Direct Support Professional",
        details: [
          { label: "Service Type", options: ["Personal Care", "Meal Preparation", "Medication Reminders", "Housekeeping", "Mobility Assistance"] }
        ]
      },
      {
        label: "Host Home Provider",
        details: [
          { label: "Host Home Type", options: ["Private Residence", "Group Home", "Assisted Living Facility"] },
          { label: "Hours Worked", options: ["1 Hour", "2 Hours", "3 Hours", "4 Hours", "5 Hours"] },
          { label: "Incidents", options: ["None", "Minor", "Moderate", "Severe"] },
          { label: "Notes", options: ["Observations", "Incidents"] }
        ]
      },
      {
        label: "Companion Services",
        details: [
          { label: "Activity Type", options: ["Conversation", "Companion", "Social Interaction", "Entertainment", "Transportation"] },
          { label: "Hours Worked", options: ["1 Hour", "2 Hours", "3 Hours", "4 Hours", "5 Hours"] },
          { label: "Incidents", options: ["None", "Minor", "Moderate", "Severe"] },
          { label: "Notes", options: ["Observations", "Incidents"] }
        ]
      },
      {
        label: "Professional Behavioral Support",
        details: [
          { label: "Service Type", options: ["Behavioral Intervention", "Skill Training", "Consultation", "Monitoring", "Documentation"] },
          { label: "Hours Worked", options: ["1 Hour", "2 Hours", "3 Hours", "4 Hours", "5 Hours"] },
          { label: "Incidents", options: ["None", "Minor", "Moderate", "Severe"] },
          { label: "Notes", options: ["Observations", "Incidents"] }
        ]
      },
      {
        label: "Employment Specialist",
        details: [
          { label: "Employment Type", options: ["Direct Hire", "Temporary", "Contract", "Internship"] },
          { label: "Hours Worked", options: ["1 Hour", "2 Hours", "3 Hours", "4 Hours", "5 Hours"] },
          { label: "Incidents", options: ["None", "Minor", "Moderate", "Severe"] },
          { label: "Notes", options: ["Observations", "Incidents"] }
        ]
      },
      {
        label: "Support Living Without Transportation",
        details: [
          { label: "Service Type", options: ["Personal Care", "Meal Preparation", "Housekeeping", "Medication Reminders", "Mobility Assistance"] },
          { label: "Hours Worked", options: ["1 Hour", "2 Hours", "3 Hours", "4 Hours", "5 Hours"] },
          { label: "Incidents", options: ["None", "Minor", "Moderate", "Severe"] },
          { label: "Notes", options: ["Observations", "Incidents"] }
        ]
      },
      {
        label: "Day Habilitation",
        details: [
          { label: "Program Type", options: ["Community Integration", "Vocational Training", "Social Skills", "Recreation", "Health & Wellness"] },
          { label: "Hours Worked", options: ["1 Hour", "2 Hours", "3 Hours", "4 Hours", "5 Hours"] },
          { label: "Incidents", options: ["None", "Minor", "Moderate", "Severe"] },
          { label: "Notes", options: ["Observations", "Incidents"] }
        ]
      }
    ];

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitting(true);

      const newNote: ProgressNote = {
        id: Date.now().toString(),
        ...form,
        service: selectedService + (selectedDetails[0] ? ` - ${selectedDetails[0]}` : ""),
        hours: parseFloat(form.hours),
        status: 'Pending',
        date: new Date().toLocaleDateString(),
        createdAt: new Date().toISOString()
      };

      setTimeout(() => {
        const updatedNotes = [newNote, ...notes];
        saveNotes(updatedNotes);
        setSubmitting(false);
        setShowAddModal(false);
        showSuccessMessage('Progress note submitted successfully!');
        setForm({
          clientName: '',
          service: '',
          hours: '',
          condition: '',
          observations: '',
          incidents: '',
          signature: ''
        });
        setSelectedService("");
        setSelectedDetails([]);
        // 3. Clear the saved form data after submit
        localStorage.removeItem(FORM_STORAGE_KEY);
      }, 1000);
    };

    // 1. Load saved form data from localStorage when the modal opens
    useEffect(() => {
      if (showAddModal) {
        const saved = localStorage.getItem(FORM_STORAGE_KEY);
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            setForm(parsed.form || {
              clientName: '',
              service: '',
              hours: '',
              condition: '',
              observations: '',
              incidents: '',
              signature: ''
            });
            setSelectedService(parsed.selectedService || "");
            setSelectedDetails(parsed.selectedDetails || []);
          } catch {
            // ignore parse errors
          }
        }
      }
      // Optionally, clear form if modal is closed
      if (!showAddModal) {
        setForm({
          clientName: '',
          service: '',
          hours: '',
          condition: '',
          observations: '',
          incidents: '',
          signature: ''
        });
        setSelectedService("");
        setSelectedDetails([]);
      }
      // eslint-disable-next-line
    }, [showAddModal]);

    // 2. Save form data to localStorage on every change
    useEffect(() => {
      if (showAddModal) {
        localStorage.setItem(
          FORM_STORAGE_KEY,
          JSON.stringify({ form, selectedService, selectedDetails })
        );
      }
    }, [form, selectedService, selectedDetails, showAddModal]);

    if (!showAddModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Add Progress Note</h2>
            <button
              onClick={() => setShowAddModal(false)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Client Name Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
                <select
                  name="clientName"
                  value={form.clientName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                >
                  <option value="">Select a client</option>
                  {uniqueClientNames.map(name => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
              </div>

              {/* Service Provided Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Provided</label>
                <select
                  name="service"
                  value={selectedService}
                  onChange={e => {
                    setSelectedService(e.target.value);
                    setSelectedDetails([]); // Reset all details
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

              {selectedService && (() => {
                const service = serviceOptions.find(s => s.label === selectedService);
                const detail = service?.details[0];
                return detail ? (
                  <div className="mt-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">{detail.label}</label>
                    <select
                      value={selectedDetails[0] || ""}
                      onChange={e => setSelectedDetails([e.target.value])}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="">Select {detail.label}</option>
                      {detail.options.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                ) : null;
              })()}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hours Worked</label>
                <input
                  name="hours"
                  value={form.hours}
                  onChange={handleChange}
                  placeholder="0.0"
                  type="number"
                  step="0.1"
                  min="0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

            
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
              <textarea
                name="observations"
                value={form.observations}
                onChange={handleChange}
                placeholder="Enter your notes here..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>

               {/* Digital Signature */}
          <div className="border-t pt-6">
            <DigitalSignature
              onSignatureChange={sig => setForm(prev => ({ ...prev, signature: sig }))}
              value={form.signature}
            />
          </div>

            <div className="flex space-x-4 pt-4">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {submitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Submit Note</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const ClientHistoryModal = () => {
    if (!showClientHistory || !selectedClient) return null;

    const clientNotes = getClientNotes(selectedClient);
    const totalPages = Math.ceil(clientNotes.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentNotes = clientNotes.slice(startIndex, endIndex);

    const totalHours = clientNotes.reduce((sum, note) => sum + Number(note.hours || 0), 0).toFixed(1);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <User className="w-8 h-8 text-blue-600" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedClient}</h2>
                <p className="text-gray-600">Progress Notes History ({clientNotes.length} total notes)</p>
              </div>
            </div>
            <button
              onClick={() => {
                setShowClientHistory(false);
                setSelectedClient(null);
                setCurrentPage(1);
              }}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Client Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-blue-600 text-sm font-medium">Total Notes</p>
              <p className="text-2xl font-bold text-blue-900">{clientNotes.length}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-green-600 text-sm font-medium">Total Hours</p>
              <p className="text-2xl font-bold text-green-900">
                {clientNotes.reduce((sum, note) => sum + Number(note.hours || 0), 0).toFixed(1)}
              </p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <p className="text-yellow-600 text-sm font-medium">Pending</p>
              <p className="text-2xl font-bold text-yellow-900">
                {clientNotes.filter(note => note.status === 'Pending').length}
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-purple-600 text-sm font-medium">Approved</p>
              <p className="text-2xl font-bold text-purple-900">
                {clientNotes.filter(note => note.status === 'Approved').length}
              </p>
            </div>
          </div>

          {/* Notes Table */}
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-sm border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 border-b text-left font-medium text-gray-700">Date</th>
                  <th className="p-3 border-b text-left font-medium text-gray-700">Service</th>
                  <th className="p-3 border-b text-left font-medium text-gray-700">Hours</th>
                  <th className="p-3 border-b text-left font-medium text-gray-700">Condition</th>
                  <th className="p-3 border-b text-left font-medium text-gray-700">Status</th>
                  <th className="p-3 border-b text-left font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentNotes.map((note, index) => (
                  <tr key={note.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 border-b">{note.date}</td>
                    <td className="p-3 border-b">{note.service}</td>
                    <td className="p-3 border-b text-center">{note.hours}</td>
                    <td className="p-3 border-b">{note.condition}</td>
                    <td className="p-3 border-b">
                      <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(note.status)}`}>
                        {getStatusIcon(note.status)}
                        <span>{note.status}</span>
                      </span>
                    </td>
                    <td className="p-3 border-b">
                      <button
                        onClick={() => setSelectedNote(note)}
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-700">
                Showing {startIndex + 1} to {Math.min(endIndex, clientNotes.length)} of {clientNotes.length} notes
              </p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                
                <div className="flex space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded-lg transition-colors ${
                        currentPage === page
                          ? 'bg-blue-600 text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const NoteDetailModal = () => {
    if (!selectedNote) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Progress Note Details</h2>
            <button
              onClick={() => setSelectedNote(null)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Client Name</label>
                <p className="text-lg font-semibold text-gray-900">{selectedNote.clientName}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Service</label>
                <p className="text-lg font-semibold text-gray-900">{selectedNote.service}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Hours Worked</label>
                <p className="text-lg font-semibold text-gray-900">{selectedNote.hours}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Status</label>
                <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(selectedNote.status)}`}>
                  {getStatusIcon(selectedNote.status)}
                  <span>{selectedNote.status}</span>
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Client Condition</label>
              <p className="text-gray-900">{selectedNote.condition || 'Not specified'}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Notes</label>
              <p className="text-gray-900 bg-gray-50 p-4 rounded-lg">{selectedNote.observations || 'No observations recorded'}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Incidents</label>
              <p className="text-gray-900 bg-gray-50 p-4 rounded-lg">{selectedNote.incidents || 'No incidents reported'}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Signature</label>
                {selectedNote.signature ? (
                  <img
                    src={selectedNote.signature}
                    alt="Signature"
                    className="max-h-32 border rounded bg-white"
                    style={{ background: "#fff" }}
                  />
                ) : (
                  <span className="text-gray-400">No signature</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Date Submitted</label>
                <p className="text-gray-900">{selectedNote.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SuccessMessage = () => {
    if (!showSuccess) return null;

    return (
      <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 shadow-lg">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="text-green-800 font-medium">{successMessage}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Progress Notes by Client</h1>
              <p className="text-gray-600">Manage and track patient care progress notes grouped by client</p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Progress Note</span>
            </button>
            
            <label className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
              <input
                type="file"
                accept="application/pdf,image/*"
                onChange={handleFileUpload}
                className="hidden"
                disabled={uploading}
              />
              <Upload className="w-4 h-4" />
              <span>Upload Signed Form</span>
            </label>
          </div>
          {uploadMessage && (
            <div className="text-sm text-green-700 mt-2">{uploadMessage}</div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-blue-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">Total Clients</p>
                <p className="text-2xl font-bold text-blue-900">{clientSummaries.length}</p>
              </div>
              <User className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-medium">Total Notes</p>
                <p className="text-2xl font-bold text-green-900">{notes.length}</p>
              </div>
              <FileText className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-600 text-sm font-medium">Pending</p>
                <p className="text-2xl font-bold text-yellow-900">
                  {notes.filter(note => note.status === 'Pending').length}
                </p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 text-sm font-medium">Approved</p>
                <p className="text-2xl font-bold text-purple-900">
                  {notes.filter(note => note.status === 'Approved').length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search clients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <button
            onClick={loadNotes}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Client Summaries Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <RefreshCw className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
        ) : filteredSummaries.length === 0 ? (
          <div className="p-12 text-center">
            <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Clients Found</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || statusFilter !== 'all' 
                ? 'No clients match your current filters. Try adjusting your search criteria.'
                : 'Get started by creating your first progress note.'
              }
            </p>
            {!searchTerm && statusFilter === 'all' && (
              <button
                onClick={() => setShowAddModal(true)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Create First Note
              </button>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Client Name</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Total Notes</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Total Hours</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Last Service</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Last Date</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Status Summary</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredSummaries.map((summary, index) => (
                  <tr key={summary.clientName} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{summary.clientName}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{summary.totalNotes}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{summary.totalHours.toFixed(1)}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{summary.lastService}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{summary.lastDate}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        {summary.pendingCount > 0 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            {summary.pendingCount} Pending
                          </span>
                        )}
                        {summary.approvedCount > 0 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {summary.approvedCount} Approved
                          </span>
                        )}
                        {summary.rejectedCount > 0 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            {summary.rejectedCount} Rejected
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleViewClient(summary.clientName)}
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View History</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modals */}
      <AddNoteModal />
      <ClientHistoryModal />
      <NoteDetailModal />
      <SuccessMessage />
    </div>
  );
};

export default ProgressNotesTable;