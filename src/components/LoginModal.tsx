import React, { useState } from "react";

const demoUsers = [
  { role: "Patient", label: "Patient Demo", email: "patient@demo.com", password: "patient123" },
  { role: "Doctor", label: "Doctor Demo", email: "doctor@demo.com", password: "doctor123" },
  { role: "Admin", label: "Admin Demo", email: "admin@demo.com", password: "admin123" },
  { role: "HR Manager", label: "HR Demo", email: "hr@demo.com", password: "hr123" },
];

export default function LoginModal({ onLogin, onClose }: { onLogin: (user: any) => void, onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const handleDemoClick = (user: any) => {
    setEmail(user.email);
    setPassword(user.password);
    setSelectedRole(user.role);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;
    onLogin({ email, password, role: selectedRole || "Patient" }); // default to Patient if not set
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
        <div className="my-4 border-t pt-4">
          <div className="text-center text-gray-500 mb-2">DEMO ACCOUNTS</div>
          <div className="grid grid-cols-2 gap-2">
            {demoUsers.map((user) => (
              <button
                key={user.role}
                className="bg-gray-100 hover:bg-blue-100 text-gray-900 font-medium py-2 rounded"
                onClick={() => handleDemoClick(user)}
                type="button"
              >
                {user.label}
              </button>
            ))}
          </div>
        </div>
        <button
          className="block mx-auto text-gray-500 hover:text-gray-700 mt-2"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
