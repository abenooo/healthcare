import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Services from './components/Services';
import HRModule from './components/HRModule';
import PatientPortal from './components/PatientPortal';
import AdminSettings from './components/AdminSettings';
import DocumentCenter from './components/DocumentCenter';
import Onboarding from './components/Onboarding';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user, setUser] = useState({
    name: 'Dr. Sarah Johnson',
    role: 'Doctor',
    avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
  });

  const handleLogin = (userData: any) => {
    setUser(userData);
    setIsAuthenticated(true);
    setActiveTab('dashboard'); // Reset to dashboard when logging in
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard setActiveTab={setActiveTab} userRole={user.role} />;
      case 'services':
        return <Services userRole={user.role} />;
      case 'hr':
        return <HRModule userRole={user.role} />;
      case 'patients':
        return <PatientPortal userRole={user.role} />;
      case 'documents':
        return <DocumentCenter userRole={user.role} />;
      case 'onboarding':
        return <Onboarding userRole={user.role} />;
      case 'admin':
        return <AdminSettings userRole={user.role} />;
      default:
        return <Dashboard setActiveTab={setActiveTab} userRole={user.role} />;
    }
  };

  if (!isAuthenticated) {
    return <LandingPage onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} userRole={user.role} />
      <div className="flex-1 flex flex-col">
        <Header user={user} />
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;