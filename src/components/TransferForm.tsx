import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownLeft, QrCode } from 'lucide-react';

export function TransferForm() {
  const [activeTab, setActiveTab] = useState('send');

  return (
    <div className="max-w-xl mx-auto mt-8 bg-white rounded-xl shadow-lg p-6">
      <div className="flex space-x-4 mb-6">
        <button
          className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors ${
            activeTab === 'send'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('send')}
        >
          <ArrowUpRight className="w-5 h-5" />
          <span>Send</span>
        </button>
        <button
          className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors ${
            activeTab === 'receive'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('receive')}
        >
          <ArrowDownLeft className="w-5 h-5" />
          <span>Receive</span>
        </button>
      </div>

      {activeTab === 'send' ? (
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recipient Address
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="0x..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="0.0"
              />
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>ETH</option>
                <option>USDT</option>
                <option>USDC</option>
              </select>
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Send Transaction
          </button>
        </form>
      ) : (
        <div className="text-center">
          <div className="bg-gray-100 p-8 rounded-lg mb-4">
            <QrCode className="w-32 h-32 mx-auto text-gray-600" />
          </div>
          <p className="text-sm text-gray-600 mb-2">Your Wallet Address</p>
          <p className="font-mono text-sm bg-gray-100 p-3 rounded-lg">
            0x742d35Cc6634C0532925a3b844Bc454e4438f44e
          </p>
        </div>
      )}
    </div>
  );
}