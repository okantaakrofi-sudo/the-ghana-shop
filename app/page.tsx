'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Heart } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-32 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 mb-6 border border-[#8b5e3c] text-[#8b5e3c] text-[10px] font-bold tracking-[0.3em] uppercase rounded-full">
            13 Years of Excellence in the UAE
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-[#333] mb-6 leading-tight">
            Pure Ghanaian <br /> 
            <span className="italic font-serif text-[#8b5e3c]">Nature's Gold.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
            From the heart of Ghana to your home. Handcrafted, organic hair and skin care 
            originally made for our own little NICU fighter.
          </p>
          <Link 
            href="/products/hair-oil" 
            className="inline-flex items-center gap-3 bg-[#333] text-white px-10 py-5 rounded-full font-bold shadow-xl hover:bg-[#8b5e3c] transition-all"
          >
            EXPLORE THE COLLECTION <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <Link href="/products/hair-oil" className="group space-y-4">
            <div className="aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-sm relative">
              <img src="/images/hair-oil.jpg" alt="Mama Ghana Hair Oil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex justify-between items-center px-2">
              <h3 className="text-xl font-bold">Mama Ghana Hair Oil</h3>
              <p className="text-[#8b5e3c] font-bold">150 AED</p>
            </div>
          </Link>

          <Link href="/products/shea-oil" className="group space-y-4">
            <div className="aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-sm relative">
              <img src="/images/shea-oil.jpg" alt="Yellow Shea Oil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex justify-between items-center px-2">
              <h3 className="text-xl font-bold">Yellow Shea Oil</h3>
              <p className="text-[#8b5e3c] font-bold">120 AED</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Trust Footer */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-2 gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <Heart className="text-[#8b5e3c]" size={24} />
            <h4 className="font-bold uppercase tracking-widest text-xs">NICU Safe</h4>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Star className="text-[#8b5e3c]" size={24} />
            <h4 className="font-bold uppercase tracking-widest text-xs">100% Organic</h4>
          </div>
        </div>
      </section>
    </main>
  );
}