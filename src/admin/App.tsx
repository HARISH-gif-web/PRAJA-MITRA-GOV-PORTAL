import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { Complaints } from './pages/Complaints';
import { ComplaintDetails } from './pages/ComplaintDetails';
import { Users } from './pages/Users';

// Simple placeholder page component for un-implemented dashboard modules
const PlaceholderPage: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm text-left">
    <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">{title}</h1>
    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{desc}</p>
    <div className="h-64 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center bg-slate-50/50 dark:bg-slate-950/20">
      <span className="text-sm text-slate-400 dark:text-slate-650 font-semibold">Module under active construction</span>
    </div>
  </div>
);

export const App: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex">
      {/* Sidebar navigation */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      
      {/* Main Content Viewport */}
      <div className="flex-1 flex flex-col lg:pl-64 transition-all duration-300">
        <Header setMobileOpen={setMobileOpen} />
        
        <main className="flex-1 p-6 overflow-y-auto max-w-[1600px] w-full mx-auto">
          <Routes>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/complaints" element={<Complaints />} />
            <Route path="/admin/complaints/details" element={<ComplaintDetails />} />
            <Route path="/admin/complaints/:id" element={<ComplaintDetails />} />
            <Route path="/admin/users" element={<Users />} />
            
            {/* Fallbacks for routes defined in sidebar menu items */}
            <Route path="/admin/officers" element={<PlaceholderPage title="Officers Desk" desc="Manage department desk officers, their performance stats, and districts." />} />
            <Route path="/admin/departments" element={<PlaceholderPage title="Departments" desc="Configure government departments, types, and escalations." />} />
            <Route path="/admin/analytics" element={<PlaceholderPage title="Performance Analytics" desc="Detailed overview of redressal times, department efficiencies, and metrics." />} />
            <Route path="/admin/reports" element={<PlaceholderPage title="Executive Reports" desc="Export official reports, resolution summaries, and departmental audit trails." />} />
            <Route path="/admin/settings" element={<PlaceholderPage title="System Settings" desc="Global application configurations, passkeys, and API integration settings." />} />
            <Route path="/admin/profile" element={<PlaceholderPage title="My Profile" desc="Nodal officer/administrator profile settings and credentials." />} />
            
            {/* Global Redirect to Dashboard */}
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
