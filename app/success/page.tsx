"use client";

import React from 'react';
import { CheckCircle2, Share2, Home, Gift, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden animate-in">
        
        {/* Top Celebration Section */}
        <div className="bg-[#8b5e3c] p-12 text-center text-white">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <CheckCircle2 size={48} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-white/80 tracking-wide uppercase text-sm font-medium">
            Your glow is on its way.
          </p>
        </div>

        {/* Main Content */}
        <div className="p-8 md:p-12 space-y-10 text-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Thank you for choosing The Ghana Shop</h2>
            <p className="text-gray-500 leading-relaxed">
              We’ve received your order and our team in the UAE is preparing your 
              handcrafted natural products right now. 
            </p>
          </div>

          {/* Referral Reward Box */}
          <div className="bg-[#FDFBF7] border-2 border-dashed border-[#8b5e3c]/30 rounded-2xl p-8 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8b5e3c] text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Exclusive Reward
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <Gift className="text-[#8b5e3c]" size={32} />
              <h3 className="text-xl font-bold">Earn a 20 AED Voucher</h3>
              <p className="text-sm text-gray-600 max-w-sm">
                Share the secret to healthy hair! When your friends shop through 
                your link, you both get a **20 AED voucher** for your next order.
              </p>
              
              <div className="flex w-full gap-2 mt-4">
                <div className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-400 text-left overflow-hidden whitespace-nowrap">
                  theghanashop.ae/ref/elorm-123
                </div>
                <button className="bg-[#333] text-white px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-[#8b5e3c] transition-colors">
                  <Share2 size={16} />
                  COPY
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <Link 
              href="/" 
              className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-200 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors"
            >
              <Home size={18} />
              BACK TO STORE
            </Link>
            <a 
              href="https://instagram.com/theghanashop" 
              className="flex-1 flex items-center justify-center gap-2 bg-[#333] text-white py-4 rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              <Instagram size={18} />
              FOLLOW US
            </a>
          </div>

          <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] pt-4">
            13 Years of Authentic Care in the UAE
          </p>
        </div>
      </div>
    </div>
  );
}
