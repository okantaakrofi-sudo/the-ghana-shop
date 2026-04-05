import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F7F2] text-[#333]">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hair-oil.jpg" 
            alt="The Ghana Shop Natural Oils" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F9F7F2]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 mb-6 border border-[#8b5e3c] text-[#8b5e3c] text-xs font-bold tracking-[0.3em] uppercase rounded-full">
            Celebrating 13 Years in the UAE
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Authentic Care for <br />
            <span className="italic font-serif text-[#8b5e3c]">Every Strand.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Handcrafted natural oils inspired by Ghanaian tradition. 
            Safe for babies and loved by families across the Emirates.
          </p>
          <Link 
            href="/products/hair-oil" 
            className="inline-flex items-center gap-3 bg-[#333] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#8b5e3c] transition-all shadow-xl hover:scale-105"
          >
            SHOP THE HAIR OIL <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Featured Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <div className="flex justify-center text-[#8b5e3c]"><Star size={32} /></div>
            <h3 className="font-bold text-xl uppercase tracking-widest">100% Organic</h3>
            <p className="text-gray-500 text-sm">Directly sourced ingredients from the heart of Ghana.</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center text-[#8b5e3c]"><CheckCircle size={32} /></div>
            <h3 className="font-bold text-xl uppercase tracking-widest">UAE Trusted</h3>
            <p className="text-gray-500 text-sm">Serving our local community with love since 2013.</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center text-[#8b5e3c]"><Star size={32} /></div>
            <h3 className="font-bold text-xl uppercase tracking-widest">NICU Safe</h3>
            <p className="text-gray-500 text-sm">Gentle enough for the most delicate skin and hair.</p>
          </div>
        </div>
      </section>
    </main>
  );
}