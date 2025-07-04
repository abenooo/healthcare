import React, { useState, useEffect, useRef } from 'react';
import {
  FileText,
  Plus,
  Calendar,
  Clock,
  User,
  Activity,
  AlertCircle,
  CheckCircle,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Download,
  RefreshCw
} from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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
}

const ProgressNotesTable: React.FC = () => {
  const [notes, setNotes] = useState<ProgressNote[]>([]);
  const [filteredNotes, setFilteredNotes] = useState<ProgressNote[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState<ProgressNote | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Load notes from localStorage on component mount
  useEffect(() => {
    loadNotes();
  }, []);

  // Filter notes based on search term and status
  useEffect(() => {
    let filtered = notes;

    if (searchTerm) {
      filtered = filtered.filter(note =>
        note.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.condition.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(note => note.status === statusFilter);
    }

    setFilteredNotes(filtered);
  }, [notes, searchTerm, statusFilter]);

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

  // PDF Export
  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text("Progress Notes", 14, 16);
    autoTable(doc, {
      startY: 22,
      head: [['Client', 'Service', 'Hours', 'Condition', 'Date', 'Status']],
      body: notes.map(note => [
        note.clientName,
        note.service,
        note.hours,
        note.condition,
        note.date,
        note.status
      ]),
    });
    doc.save('progress-notes.pdf');
  };

  const handleExportSinglePDF = (note: ProgressNote) => {
    const doc = new jsPDF();
    doc.text("Progress Note", 14, 16);
    autoTable(doc, {
      startY: 22,
      head: [['Field', 'Value']],
      body: [
        ['Client', note.clientName],
        ['Service', note.service],
        ['Hours', note.hours],
        ['Condition', note.condition],
        ['Date', note.date],
        ['Status', note.status],
        ['Observations', note.observations],
        ['Incidents', note.incidents],
        ['Signature', note.signature],
      ],
    });
    doc.save(`progress-note-${note.id}.pdf`);
  };

  const AddNoteModal = () => {
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitting(true);

      const newNote: ProgressNote = {
        id: Date.now().toString(),
        ...form,
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
      }, 1000);
    };

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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
                <input
                  name="clientName"
                  value={form.clientName}
                  onChange={handleChange}
                  placeholder="Enter client name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Provided</label>
                <input
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  placeholder="Enter service provided"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Client Condition</label>
                <input
                  name="condition"
                  value={form.condition}
                  onChange={handleChange}
                  placeholder="Enter client condition"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Observations</label>
              <textarea
                name="observations"
                value={form.observations}
                onChange={handleChange}
                placeholder="Enter your observations..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Incidents</label>
              <textarea
                name="incidents"
                value={form.incidents}
                onChange={handleChange}
                placeholder="Report any incidents..."
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Digital Signature</label>
              <input
                name="signature"
                value={form.signature}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
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
              <label className="block text-sm font-medium text-gray-500 mb-1">Observations</label>
              <p className="text-gray-900 bg-gray-50 p-4 rounded-lg">{selectedNote.observations || 'No observations recorded'}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Incidents</label>
              <p className="text-gray-900 bg-gray-50 p-4 rounded-lg">{selectedNote.incidents || 'No incidents reported'}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Signature</label>
                <p className="text-gray-900 font-medium">{selectedNote.signature}</p>
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
              <h1 className="text-3xl font-bold text-gray-900">Progress Notes</h1>
              <p className="text-gray-600">Manage and track patient care progress notes</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Progress Note</span>
            </button>
            <button
              onClick={handleExportPDF}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Export as PDF</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-blue-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">Total Notes</p>
                <p className="text-2xl font-bold text-blue-900">{notes.length}</p>
              </div>
              <FileText className="w-8 h-8 text-blue-600" />
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

          <div className="bg-green-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-medium">Approved</p>
                <p className="text-2xl font-bold text-green-900">
                  {notes.filter(note => note.status === 'Approved').length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-600 text-sm font-medium">Rejected</p>
                <p className="text-2xl font-bold text-red-900">
                  {notes.filter(note => note.status === 'Rejected').length}
                </p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-600" />
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
                placeholder="Search notes..."
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

      {/* Notes Grid */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <RefreshCw className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
        ) : filteredNotes.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-100">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Progress Notes Found</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || statusFilter !== 'all' 
                ? 'No notes match your current filters. Try adjusting your search criteria.'
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
            <table className="min-w-full text-sm border">
              <thead>
                <tr className="bg-blue-50">
                  <th className="p-2 border">Client</th>
                  <th className="p-2 border">Service</th>
                  <th className="p-2 border">Hours</th>
                  <th className="p-2 border">Condition</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Status</th>
                  <th className="p-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {notes.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center p-6 text-gray-500">No progress notes found.</td>
                  </tr>
                ) : (
                  notes.map(note => (
                    <tr key={note.id} className="even:bg-gray-50">
                      <td className="p-2 border">{note.clientName}</td>
                      <td className="p-2 border">{note.service}</td>
                      <td className="p-2 border text-center">{note.hours}</td>
                      <td className="p-2 border">{note.condition}</td>
                      <td className="p-2 border">{note.date}</td>
                      <td className="p-2 border">
                        <span className="inline-flex items-center gap-1">
                          {getStatusIcon(note.status)}
                          {note.status}
                        </span>
                      </td>
                      <td className="p-2 border flex gap-2">
                        <button
                          onClick={() => setSelectedNote(note)}
                          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                          <span>View</span>
                        </button>
                        <button
                          onClick={() => handleExportSinglePDF(note)}
                          className="flex items-center space-x-1 text-green-600 hover:text-green-800 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          <span>Export</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modals */}
      <AddNoteModal />
      <NoteDetailModal />
      <SuccessMessage />
    </div>
  );
};

export default ProgressNotesTable;