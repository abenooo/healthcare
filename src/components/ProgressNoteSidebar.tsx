import React, { useState, useEffect } from "react";
import { X, User, Briefcase, Clock, DollarSign, FileText, Send, List } from "lucide-react";

interface ProgressNoteSidebarProps {
  open: boolean;
  onClose: () => void;
  patients: { id: number; name: string }[];
  hourlyAmount?: number;
  onSubmit?: (data: any) => void;
}

const DEFAULT_HOURLY_AMOUNT = 25; // You can change this
const STORAGE_KEY = "progress_notes";

export default function ProgressNoteSidebar({
  open,
  onClose,
  patients,
  hourlyAmount = DEFAULT_HOURLY_AMOUNT,
  onSubmit,
}: ProgressNoteSidebarProps) {
  const [form, setForm] = useState({
    service: "",
    recipientId: patients[0]?.id || "",
    hours: "",
    signature: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [notes, setNotes] = useState<any[]>([]);

  // Load notes from localStorage on open
  useEffect(() => {
    if (open) {
      const stored = localStorage.getItem(STORAGE_KEY);
      setNotes(stored ? JSON.parse(stored) : []);
    }
  }, [open]);

  // Save note to localStorage
  const saveNote = (note: any) => {
    const updated = [note, ...notes];
    setNotes(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const note = {
      ...form,
      recipientName: patients.find((p) => String(p.id) === String(form.recipientId))?.name || "",
      hourlyAmount,
      date: new Date().toLocaleString(),
    };
    setTimeout(() => {
      setSubmitting(false);
      saveNote(note);
      if (onSubmit) onSubmit(form);
      setForm({
        service: "",
        recipientId: patients[0]?.id || "",
        hours: "",
        signature: "",
      });
    }, 1200);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-300 ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{ background: open ? "rgba(0,0,0,0.3)" : "transparent" }}
    >
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl border-l border-gray-100 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Progress Note
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Service Provided */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Service Provided
            </label>
            <input
              name="service"
              value={form.service}
              onChange={handleChange}
              placeholder="e.g. Medication Management"
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none"
              required
            />
          </div>
          {/* Service Recipient */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <User className="w-4 h-4" />
              Service Recipient
            </label>
            <select
              name="recipientId"
              value={form.recipientId}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none"
              required
            >
              {patients.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
          {/* Amount of Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Amount of Time (hours)
            </label>
            <input
              name="hours"
              value={form.hours}
              onChange={handleChange}
              type="number"
              min={0.25}
              step={0.25}
              placeholder="e.g. 2"
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none"
              required
            />
          </div>
          {/* Hourly Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Hourly Amount
            </label>
            <input
              value={`$${hourlyAmount.toFixed(2)}`}
              readOnly
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 bg-gray-50 text-gray-700 outline-none"
              tabIndex={-1}
            />
          </div>
          {/* Digital Signature */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <User className="w-4 h-4" />
              Digital Signature
            </label>
            <input
              name="signature"
              value={form.signature}
              onChange={handleChange}
              placeholder="Type your full name"
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none"
              required
            />
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            disabled={submitting}
          >
            <Send className="w-5 h-5" />
            {submitting ? "Sending..." : "Send to HR for Approval"}
          </button>
        </form>

        {/* Progress Notes List */}
        <div className="p-6 pt-0 border-t border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <List className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-gray-900">Submitted Progress Notes</span>
          </div>
          {notes.length === 0 ? (
            <div className="text-gray-500 text-sm">No progress notes yet.</div>
          ) : (
            <ul className="space-y-3 max-h-48 overflow-y-auto pr-2">
              {notes.map((note, idx) => (
                <li key={idx} className="p-3 bg-blue-50 rounded-lg text-sm">
                  <div className="font-medium text-blue-900">{note.service}</div>
                  <div className="text-gray-700">
                    <span className="font-semibold">To:</span> {note.recipientName}
                  </div>
                  <div className="text-gray-700">
                    <span className="font-semibold">Hours:</span> {note.hours} @ ${note.hourlyAmount}/hr
                  </div>
                  <div className="text-gray-700">
                    <span className="font-semibold">Signed:</span> {note.signature}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{note.date}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </div>
  );
}
