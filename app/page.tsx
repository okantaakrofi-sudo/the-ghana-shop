import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Heart } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-32 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 mb-6 border border-[#8b5e3c] text-[#8b5e3c] text-[10px] font-bold tracking-[0.3em] uppercase rounded-full">
            Est. 13 Years in the UAE
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-[#333] mb-6 leading-tight">
            Nature's Gold <br /> 
            <span className="italic font-serif text-[#8b5e3c]">for your Glow.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
            Authentic Ghanaian-inspired hair and skin care. 
            Handcrafted with love, safe for the whole family.
          </p>
          <Link 
            href="/products/hair-oil" 
            className="inline-flex items-center gap-3 bg-[#333] text-white px-10 py-5 rounded-full font-bold shadow-xl hover:bg-[#8b5e3c] transition-all"
          >
            SHOP HAIR OIL <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Quick Links / Collections */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/products/hair-oil" className="group relative aspect-square bg-white rounded-3xl overflow-hidden shadow-sm">
            <img src="/images/hair-oil.jpg" alt="Hair Oil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold">Hair Care</h3>
              <p className="text-sm opacity-80">Shop Mama Ghana Secrets</p>
            </div>
          </Link>
          
          <Link href="/products/shea-oil" className="group relative aspect-square bg-white rounded-3xl overflow-hidden shadow-sm">
            <img src="/images/shea-oil.jpg" alt="Shea Oil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold">Skin Care</h3>
              <p className="text-sm opacity-80">Experience Yellow Shea Gold</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Heart className="text-[#8b5e3c]" />
            <h4 className="font-bold uppercase tracking-widest text-sm">NICU Safe</h4>
            <p className="text-xs text-gray-500 max-w-[200px]">Gentle care originally made for our own little fighter.</p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <Star className="text-[#8b5e3c]" />
            <h4 className="font-bold uppercase tracking-widest text-sm">100% Organic</h4>
            <p className="text-xs text-gray-500 max-w-[200px]">Pure ingredients sourced directly from Ghana.</p>
          </div>
        </div>
      </section>
    </main>
  );
}