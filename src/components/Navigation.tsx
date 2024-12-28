import React from 'react';
import { Wallet, Home, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-slate-900 text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Wallet className="w-6 h-6 text-blue-400" />
          <span className="text-xl font-bold">CryptoVault</span>
        </div>
        
        <div className="flex space-x-8">
          <Link
            to="/"
            className={`flex items-center space-x-2 hover:text-blue-400 transition-colors ${
              isActive('/') ? 'text-blue-400' : ''
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
          
          <Link
            to="/dashboard"
            className={`flex items-center space-x-2 hover:text-blue-400 transition-colors ${
              isActive('/dashboard') ? 'text-blue-400' : ''
            }`}
          >
            <Wallet className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          
          <Link
            to="/settings"
            className={`flex items-center space-x-2 hover:text-blue-400 transition-colors ${
              isActive('/settings') ? 'text-blue-400' : ''
            }`}
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </div>
        
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}