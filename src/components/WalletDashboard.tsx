import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Copy, ExternalLink } from 'lucide-react';

export function WalletDashboard() {
  const mockAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
  const mockTransactions = [
    { id: 1, type: 'send', amount: '0.5 ETH', address: '0x123...abc', timestamp: '2024-03-10 14:30' },
    { id: 2, type: 'receive', amount: '1.2 ETH', address: '0x456...def', timestamp: '2024-03-09 09:15' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Wallet Balance</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">ETH Balance</span>
              <span className="text-2xl font-bold">2.5 ETH</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">USD Value</span>
              <span className="text-2xl font-bold">$4,523.75</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Wallet Address</h2>
          <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg">
            <span className="text-sm font-mono truncate">{mockAddress}</span>
            <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {mockTransactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                {tx.type === 'send' ? (
                  <ArrowUpRight className="w-6 h-6 text-red-500" />
                ) : (
                  <ArrowDownLeft className="w-6 h-6 text-green-500" />
                )}
                <div>
                  <p className="font-semibold">{tx.amount}</p>
                  <p className="text-sm text-gray-500">{tx.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">{tx.timestamp}</span>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}