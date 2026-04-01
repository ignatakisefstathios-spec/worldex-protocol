'use client'

import { useState } from 'react'

export default function Home() {
  const [connected, setConnected] = useState(false)

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#e5e2e1]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0e0e0e]/90 backdrop-blur border-b border-[#1c1b1b]">
        <div className="flex justify-between items-center px-6 h-16">
          <div className="flex items-center gap-3">
            <span className="text-[#aca3ff] font-bold text-xl">Worldex</span>
            <span className="text-[10px] bg-[#aca3ff]/10 text-[#aca3ff] px-2 py-1 rounded-full">Beta</span>
          </div>
          <button 
            onClick={() => setConnected(!connected)}
            className="px-4 py-2 bg-[#aca3ff] text-[#0e0e0e] rounded-full font-bold text-sm"
          >
            {connected ? '0x71...4A2' : 'Connect Wallet'}
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="pt-24 px-6 max-w-lg mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Worldex Swap</h1>
          <p className="text-sm text-gray-500">Institutional-Grade DeFi</p>
        </div>

        {/* Swap Card */}
        <div className="bg-[#131313] rounded-3xl p-6 border border-[#2a2a2a]">
          <div className="mb-6">
            <label className="text-xs text-gray-500 uppercase">From</label>
            <div className="flex justify-between items-center mt-2">
              <input 
                type="text" 
                placeholder="0.00" 
                className="bg-transparent text-3xl font-bold w-full outline-none"
              />
              <button className="flex items-center gap-2 bg-[#1c1b1b] px-3 py-2 rounded-full">
                <span className="font-bold">WDX</span>
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-1">Balance: 1,200.00</p>
          </div>

          <div className="flex justify-center -my-3">
            <button className="bg-[#0e0e0e] p-2 rounded-full border border-[#2a2a2a] text-[#aca3ff]">
              ↓
            </button>
          </div>

          <div className="mt-4">
            <label className="text-xs text-gray-500 uppercase">To</label>
            <div className="flex justify-between items-center mt-2">
              <input 
                type="text" 
                placeholder="0.00" 
                className="bg-transparent text-3xl font-bold w-full outline-none"
              />
              <button className="flex items-center gap-2 bg-[#aca3ff] text-[#0e0e0e] px-3 py-2 rounded-full">
                <span className="font-bold">SWLD</span>
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-1">€3,842.12 EUR</p>
          </div>

          <button className="w-full mt-6 py-4 bg-[#aca3ff] text-[#0e0e0e] rounded-full font-bold text-lg">
            Execute Swap
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-[#131313] rounded-2xl p-4">
            <p className="text-xs text-gray-500">Exchange Rate</p>
            <p className="font-bold">1 WDX = 3.20 SWLD</p>
          </div>
          <div className="bg-[#131313] rounded-2xl p-4">
            <p className="text-xs text-gray-500">Protocol Fee</p>
            <p className="font-bold text-[#aca3ff]">0.1%</p>
          </div>
        </div>

        {/* Products */}
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">Products</h2>
          <div className="space-y-3">
            {['Swap/DEX', 'Lending', 'Safety Pool', 'Staking'].map((product) => (
              <div key={product} className="bg-[#131313] rounded-2xl p-4 flex justify-between items-center">
                <span>{product}</span>
                <span className="text-[#aca3ff]">→</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-[#0e0e0e] border-t border-[#1c1b1b] py-4">
        <div className="flex justify-around">
          <button className="text-[#aca3ff] font-bold">Swap</button>
          <button className="text-gray-500">Earn</button>
          <button className="text-gray-500">Wallet</button>
        </div>
      </footer>
    </div>
  )
}
