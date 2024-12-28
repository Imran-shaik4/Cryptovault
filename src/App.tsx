import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/LandingPage';
import { WalletDashboard } from './components/WalletDashboard';
import { TransferForm } from './components/TransferForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={
              <div className="container mx-auto px-4 py-8">
                <WalletDashboard />
                <TransferForm />
              </div>
            } />
            <Route path="/settings" element={
              <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Settings</h1>
                {/* Settings content will go here */}
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;