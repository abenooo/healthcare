import React from "react";

interface DoctorPortalProps {
  userRole: string;
}

const DoctorPortal: React.FC<DoctorPortalProps> = ({ userRole }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Doctor Dashboard</h1>
      <p>Welcome, Doctor! Here you can manage your appointments, view patient records, and more.</p>
      {/* Add more doctor-specific features here */}
    </div>
  );
};

export default DoctorPortal;
