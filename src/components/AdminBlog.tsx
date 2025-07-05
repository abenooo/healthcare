import React, { useState } from "react";
import { Edit, Trash2 } from "lucide-react";

const initialPosts = [
  {
    id: 1,
    title: "How to Support Patients with IDD",
    author: "Admin",
    date: "2024-07-01",
    status: "Published",
    content: "Tips and best practices for supporting individuals with intellectual and developmental disabilities.",
  },
];

const AdminBlog = () => {
  const [blogPosts, setBlogPosts] = useState(initialPosts);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    title: "",
    author: "",
    date: new Date().toISOString().slice(0, 10),
    status: "Draft",
    content: "",
  });

  const openEdit = (post) => {
    setEditing(post);
    setForm(post);
    setShowModal(true);
  };

  const openAdd = () => {
    setEditing(null);
    setForm({
      title: "",
      author: "",
      date: new Date().toISOString().slice(0, 10),
      status: "Draft",
      content: "",
    });
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      setBlogPosts(blogPosts.map((b) => (b.id === editing.id ? { ...form, id: editing.id } : b)));
    } else {
      setBlogPosts([...blogPosts, { ...form, id: Date.now() }]);
    }
    setShowModal(false);
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">Manage Blog Posts</h3>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={openAdd}
        >
          + Add Blog Post
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((blog) => (
          <div key={blog.id} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{blog.title}</h4>
              <div className="text-sm text-gray-600 mb-2">By {blog.author} • {blog.date}</div>
              <div className="flex items-center space-x-2 mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                  blog.status === 'Published'
                    ? 'bg-green-100 text-green-800 border-green-200'
                    : 'bg-yellow-100 text-yellow-800 border-yellow-200'
                }`}>
                  {blog.status}
                </span>
              </div>
              <div className="text-sm text-gray-700 line-clamp-3">{blog.content}</div>
            </div>
            <div className="flex space-x-2 mt-4">
              <button
                onClick={() => openEdit(blog)}
                className="flex-1 bg-blue-50 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-100 transition"
              >
                <Edit className="w-4 h-4 inline mr-1" /> Edit
              </button>
              <button
                onClick={() => setBlogPosts(blogPosts.filter((b) => b.id !== blog.id))}
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
            <h2 className="text-xl font-bold mb-4">{editing ? "Edit Blog" : "Add Blog"}</h2>
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
                placeholder="Author"
                name="author"
                value={form.author}
                onChange={e => setForm(f => ({ ...f, author: e.target.value }))}
                required
              />
              <input
                className="w-full border rounded p-2"
                type="date"
                name="date"
                value={form.date}
                onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                required
              />
              <select
                className="w-full border rounded p-2"
                name="status"
                value={form.status}
                onChange={e => setForm(f => ({ ...f, status: e.target.value }))}
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
              <textarea
                className="w-full border rounded p-2"
                placeholder="Content"
                name="content"
                value={form.content}
                onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
                rows={4}
                required
              />
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

export default AdminBlog;
