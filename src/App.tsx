/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import VacancyDetails from './components/VacancyDetails';
import Vacancies from './components/Vacancies';
import Finance from './components/Finance';
import Academy from './components/Academy';
import Settings from './components/Settings';
import Brief from './components/Brief';
import Integration from './components/Integration';
import Candidates from './components/Candidates';

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-cyber-bg text-cyber-text selection:bg-cyber-accent selection:text-cyber-bg">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/candidates" element={<Candidates />} />
            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="/vacancies/:id" element={<VacancyDetails />} />
            <Route path="/brief" element={<Brief />} />
            <Route path="/integration" element={<Integration />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
