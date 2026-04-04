"use client";

import React from 'react';
import { ShoppingBag, Star, CheckCircle, ArrowRight } from 'lucide-react';

export default function GhanaShopLanding() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#333] font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 bg-white/50 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-bold tracking-tighter">THE GHANA SHOP</div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          <a href="#" className="hover:text-[#8b5e3c]">Shop</a>
          <a href="#" className="hover:text-[#8b5e3c]">Our Roots</a>
          <a href="#" className="hover:text-[#8b5e3c]">13 Years in UAE</a>
        </div>
        <div className="flex items-center gap-4">
          <ShoppingBag className="w-5 h-5 cursor-pointer" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Product Image with Shadow Aesthetic */}
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute -inset-4 bg-[#EAE7DF] rounded-2xl transform rotate-2 -z-10 transition-transform group-hover:rotate-0"></div>
          {/* Note: Replace this placeholder with your image of the Mama Ghana Hair Oil 
              Ensure your photo has those "leaf shadows" from your reference image!
          */}
          <div className="relative aspect-[4/5] bg-[#D2CBB8] rounded-xl overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none"></div>
             <img 
               src="/api/placeholder/600/750" 
               alt="Mama Ghana Hair Oil" 
               className="w-full h-full object-cover mix-blend-multiply"
             />
             {/* Floral/Leaf Shadow Overlay Effect */}
             <div className="absolute inset-0 opacity-30 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/leaves.png')]"></div>
          </div>
          <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
            Est. 13 Years in UAE
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="flex items-center gap-1 text-[#8b5e3c]">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            <span className="text-xs font-bold ml-2 tracking-widest uppercase">Trusted by 1000+ Mums</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Mama Ghana <br />
            <span className="text-[#8b5e3c]">Hair Oil.</span>
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-md">
            Born from a mother's love and rooted in Ghanaian heritage. A potent, 
            natural blend designed to nourish the scalp and seal in moisture for 
            resilient, glowing hair.
          </p>

          <div className="flex items-baseline gap-4">
            <span className="text-3xl font-bold">150 AED</span>
            <span className="text-xl text-gray-400 line-through">240 AED</span>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">SAVE 37%</span>
          </div>

          <div className="space-y-4 pt-4">
            <button className="w-full md:w-auto bg-[#333] hover:bg-[#8b5e3c] text-white px-12 py-5 rounded-full font-bold transition-all flex items-center justify-center gap-2 group">
              ADD TO BASKET
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-xs text-center md:text-left text-gray-500">Free delivery in Dubai on orders over 300 AED</p>
          </div>
          
<div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle size={16} className="text-[#8b5e3c]" />
              <span>100% Organic Ingredients</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle size={16} className="text-[#8b5e3c]" />
              <span>Safe for NICU Fighters</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-16 px-6">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">The Promise of The Ghana Shop</h2>
          <p className="italic text-gray-500">
            "I went back to my Ghanaian roots to create a product for my daughter. 
            Now, I share that same purity with you." — Elorm, Founder
          </p>
        </div>
      </section>
    </div>
  );
}
