"use client";
import type React from "react";
import { useState } from "react";
import { X, User, Briefcase, Building, Calendar, Stethoscope, Mail, Phone } from "lucide-react";

interface OnboardingFormProps {
  type: "employee" | "patient";
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export default function OnboardingForm({ type, onClose, onSubmit }: OnboardingFormProps) {
  const [form, setForm] = useState({
    name: "",
    position: "",
    department: "",
    age: "",
    condition: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md transform animate-in zoom-in-95 duration-300 border border-gray-100">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {type === "employee" ? "Welcome Aboard!" : "Patient Registration"}
            </h2>
            <p className="text-gray-500 text-sm">
              {type === "employee" ? "Let's get you set up in our system" : "Please provide your information"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none"
              required
            />
          </div>

          {/* Conditional Fields */}
          {type === "employee" ? (
            <>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Position
                  </label>
                  <input
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    placeholder="Your job title"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    Department
                  </label>
                  <input
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    placeholder="Your department"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none"
                    required
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Age
                  </label>
                  <input
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    placeholder="Your age"
                    type="number"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Stethoscope className="w-4 h-4" />
                    Medical Condition
                  </label>
                  <input
                    name="condition"
                    value={form.condition}
                    onChange={handleChange}
                    placeholder="Primary condition or concern"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none"
                    required
                  />
                </div>
              </div>
            </>
          )}

          {/* Contact Information */}
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                type="email"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 outline-none"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:ring-4 focus:ring-blue-500/25 focus:outline-none"
          >
            {type === "employee" ? "Complete Onboarding" : "Register Patient"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to our terms and privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}
