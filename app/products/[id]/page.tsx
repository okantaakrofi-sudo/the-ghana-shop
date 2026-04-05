'use client';

import React, { useState } from 'react';
import { ShoppingCart, Minus, Plus, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const handleWhatsAppOrder = () => {
    const message = `Hello! I'd like to order ${quantity} bottle(s) of Mama Ghana Hair Oil.`;
    window.location.href = `https://wa.me/971568394640?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] p-6 font-sans">
      <Link href="/" className="inline-flex items-center gap-2 text-sm mb-8 text-gray-500">
        <ArrowLeft size={16} /> Back to Store
      </Link>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-sm">
        {/* Product Image */}
        <div className="rounded-2xl overflow-hidden bg-[#FDFBF7]">
          <img 
            src="/images/hair-oil.jpg" 
            alt="Mama Ghana Hair Oil" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <span className="text-[#8b5e3c] text-xs font-bold tracking-widest uppercase">13 Years in UAE</span>
            <h1 className="text-3xl font-bold text-[#333] mt-2">Mama Ghana Hair Oil</h1>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-2xl font-bold text-[#8b5e3c]">150 AED</span>
              <span className="text-gray-400 line-through">240 AED</span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Our signature blend of traditional Ghanaian oils. Designed to stimulate the scalp, reduce breakage, and lock in moisture for 48 hours.
          </p>

          {/* Quantity and Order Button */}
          <div className="pt-4 space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-200 rounded-full px-4 py-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-xl">-</button>
                <span className="px-6 font-bold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-xl">+</button>
              </div>
            </div>

            <button 
              onClick={handleWhatsAppOrder}
              className="w-full bg-[#333] text-white py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-[#8b5e3c] transition-all"
            >
              <ShoppingCart size={20} />
              ORDER VIA WHATSAPP
            </button>
            <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest">Fast Delivery across UAE</p>
          </div>
        </div>
      </div>
    </div>
  );
}