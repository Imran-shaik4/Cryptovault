import React from 'react';
import { Shield, Zap, Globe } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            The Next Generation<br />Crypto Wallet
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Secure, fast, and easy-to-use cryptocurrency wallet for the modern web3 world.
            Store, send, and receive digital assets with confidence.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <Shield className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Secure Storage</h3>
            <p className="text-gray-400">
              Industry-leading security measures to keep your assets safe and protected.
            </p>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <Zap className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
            <p className="text-gray-400">
              Quick transactions and real-time updates for seamless trading experience.
            </p>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <Globe className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Multi-Chain Support</h3>
            <p className="text-gray-400">
              Support for multiple blockchain networks and thousands of tokens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}