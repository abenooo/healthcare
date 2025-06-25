import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Services from './components/Services';
import HRModule from './components/HRModule';
import PatientPortal from './components/PatientPortal';
import AdminSettings from './components/AdminSettings';
// import DocumentCenter from './components/DocumentCenter';
import Onboarding from './components/Onboarding';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import About from './components/About';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';

interface Props {
  userRole: string;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user, setUser] = useState<any>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLogin = (userData: any) => {
    setUser(userData);
    setIsAuthenticated(true);
    setShowLoginModal(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard setActiveTab={setActiveTab} userRole={user?.role} />;
      case 'services':
        return <Services userRole={user?.role} />;
      case 'hr':
        return <HRModule userRole={user?.role} />;
      case 'patients':
        return <PatientPortal userRole={user?.role} />;
      // case 'documents':
      //   return <DocumentCenter userRole={user?.role} />;
      case 'onboarding':
        return <Onboarding userRole={user?.role} />;
      case 'admin':
        return <AdminSettings userRole={user?.role} />;
      default:
        return <Dashboard setActiveTab={setActiveTab} userRole={user?.role} />;
    }
  };

  let dashboard = null;
  if (user?.role === "Patient") dashboard = <PatientPortal userRole="Patient" />;
  else if (user?.role === "Doctor") dashboard = <PatientPortal userRole="Doctor" />;
  else if (user?.role === "Admin") dashboard = <AdminSettings userRole="Admin" />;
  else if (user?.role === "HR Manager") dashboard = <HRModule userRole="HR Manager" />;

  if (!isAuthenticated) {
    return (
      <Router>
        <Navbar onLoginClick={() => setShowLoginModal(true)} />
        {showLoginModal && (
          <LoginModal
            onLogin={handleLogin}
            onClose={() => setShowLoginModal(false)}
          />
        )}
        <Routes>
          <Route path="/" element={<LandingPage onLogin={handleLogin} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Navbar />
      <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} userRole={user?.role} />
        <div className="flex-1 flex flex-col">
          <Header user={user} />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={dashboard || renderContent()} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;