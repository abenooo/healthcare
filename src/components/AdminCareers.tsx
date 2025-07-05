import React, { useState } from "react";
import { Briefcase, UserPlus, Calendar, Edit, Trash2 } from "lucide-react";

const initialJobs = [
  {
    id: 1,
    title: 'Senior Cardiologist',
    department: 'Cardiology',
    type: 'Full-time',
    applications: 12,
    status: 'Active',
    posted: '2024-01-10',
    salary: '$180,000 - $220,000'
  },
  {
    id: 2,
    title: 'Registered Nurse',
    department: 'Emergency',
    type: 'Full-time',
    applications: 28,
    status: 'Active',
    posted: '2024-01-08',
    salary: '$75,000 - $95,000'
  },
  {
    id: 3,
    title: 'Medical Administrator',
    department: 'Administration',
    type: 'Part-time',
    applications: 15,
    status: 'Review',
    posted: '2024-01-05',
    salary: '$45,000 - $55,000'
  }
];

const AdminCareers = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    title: "",
    department: "",
    type: "Full-time",
    applications: 0,
    status: "Active",
    posted: new Date().toISOString().slice(0, 10),
    salary: "",
  });

  const openEdit = (job) => {
    setEditing(job);
    setForm(job);
    setShowModal(true);
  };

  const openAdd = () => {
    setEditing(null);
    setForm({
      title: "",
      department: "",
      type: "Full-time",
      applications: 0,
      status: "Active",
      posted: new Date().toISOString().slice(0, 10),
      salary: "",
    });
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      setJobs(jobs.map((j) => (j.id === editing.id ? { ...form, id: editing.id } : j)));
    } else {
      setJobs([...jobs, { ...form, id: Date.now() }]);
    }
    setShowModal(false);
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">Manage Job Postings</h3>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={openAdd}
        >
          + Post New Job
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{job.title}</h4>
              <div className="text-sm text-gray-600 mb-2">{job.department} • {job.type}</div>
              <div className="flex items-center space-x-2 mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                  job.status === 'Active'
                    ? 'bg-green-100 text-green-800 border-green-200'
                    : 'bg-yellow-100 text-yellow-800 border-yellow-200'
                }`}>
                  {job.status}
                </span>
              </div>
              <div className="text-sm text-gray-700 mb-2">Salary: {job.salary}</div>
              <div className="text-xs text-gray-500 mb-2">Posted: {job.posted}</div>
              <div className="text-xs text-gray-500 mb-2">{job.applications} applications</div>
            </div>
            <div className="flex space-x-2 mt-4">
              <button
                onClick={() => openEdit(job)}
                className="flex-1 bg-blue-50 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-100 transition"
              >
                <Edit className="w-4 h-4 inline mr-1" /> Edit
              </button>
              <button
                onClick={() => setJobs(jobs.filter((j) => j.id !== job.id))}
                className="flex-1 bg-red-50 text-red-700 px-3 py-2 rounded-lg hover:bg-red-100 transition"
              >
                <Trash2 className="w-4 h-4 inline mr-1" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-400"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4">{editing ? "Edit Job" : "Post New Job"}</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                className="w-full border rounded p-2"
                placeholder="Title"
                name="title"
                value={form.title}
                onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                required
              />
              <input
                className="w-full border rounded p-2"
                placeholder="Department"
                name="department"
                value={form.department}
                onChange={e => setForm(f => ({ ...f, department: e.target.value }))}
                required
              />
              <select
                className="w-full border rounded p-2"
                name="type"
                value={form.type}
                onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
              </select>
              <input
                className="w-full border rounded p-2"
                placeholder="Salary"
                name="salary"
                value={form.salary}
                onChange={e => setForm(f => ({ ...f, salary: e.target.value }))}
                required
              />
              <input
                className="w-full border rounded p-2"
                type="date"
                name="posted"
                value={form.posted}
                onChange={e => setForm(f => ({ ...f, posted: e.target.value }))}
                required
              />
              <select
                className="w-full border rounded p-2"
                name="status"
                value={form.status}
                onChange={e => setForm(f => ({ ...f, status: e.target.value }))}
              >
                <option value="Active">Active</option>
                <option value="Review">Review</option>
                <option value="Closed">Closed</option>
              </select>
              <button className="w-full bg-[#77658B] text-white py-2 rounded" type="submit">
                {editing ? "Update" : "Add"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCareers;
