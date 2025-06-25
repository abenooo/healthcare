import React from "react";

const demoUsers = [
  { role: "Patient", label: "Patient Demo" },
  { role: "Doctor", label: "Doctor Demo" },
  { role: "Admin", label: "Admin Demo" },
  { role: "HR Manager", label: "HR Demo" },
];

export default function LoginModal({ onSelectRole, onClose }: { onSelectRole: (role: string) => void, onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Select Demo User</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {demoUsers.map((user) => (
            <button
              key={user.role}
              className="bg-gray-100 hover:bg-primary text-gray-900 font-medium py-2 rounded-lg"
              onClick={() => onSelectRole(user.role)}
            >
              {user.label}
            </button>
          ))}
        </div>
        <button
          className="block mx-auto text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
