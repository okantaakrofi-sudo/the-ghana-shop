import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Plus, Minus, ShoppingCart } from 'lucide-react';

// This simulates your product database
const productData: any = {
  'hair-oil': {
    name: "Mama Ghana Hair Oil",
    price: 150,
    originalPrice: 240,
    description: "Our signature blend of traditional Ghanaian oils. Designed to stimulate the scalp, reduce breakage, and lock in moisture for 48 hours.",
    benefits: ["Promotes Growth", "Scalp Health", "100% Organic"],
    usage: "Massage into scalp 3 times a week. For deep conditioning, apply to ends and leave overnight.",
    image: "/images/hair-oil.jpg"
  },
  'shea-oil': {
    name: "Yellow Shea Oil",
    price: 120, // Example price
    description: "Liquid gold for your skin and hair. Lightweight, non-greasy, and deeply hydrating.",
    benefits: ["Skin Glow", "Softens Hair", "Authentic Shea"],
    usage: "Apply to damp skin after showering for best absorption.",
    image: "/images/shea-oil.jpg"
  }
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = productData[params.id] || productData['hair-oil'];

  return (
    <div className="min-h-screen bg-[#F9F7F2] pb-20">
      <div className="container mx-auto px-6 pt-12 md:pt-24">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Left: Product Image Gallery */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-sm relative group">
               {/* The Sun-Drenched Leaf Shadow Effect from your reference */}
               <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/leaves.png')] mix-blend-multiply"></div>
               <img 
                 src={product.image} 
                 alt={product.name}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-white rounded-lg border border-gray-100 cursor-pointer hover:border-[#8b5e3c] transition-colors"></div>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8b5e3c] font-bold">13 Years in UAE</span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#333]">{product.name}</h1>
              <div className="flex items-center gap-4 pt-2">
                <span className="text-2xl font-bold text-[#333]">{product.price} AED</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">{product.originalPrice} AED</span>
                )}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg italic">
              "{product.description}"
            </p>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center border border-gray-200 rounded-full px-4 py-2 bg-white">
                  <button className="p-1 hover:text-[#8b5e3c]"><Minus size={16} /></button>
                  <span className="px-6 font-bold">1</span>
                  <button className="p-1 hover:text-[#8b5e3c]"><Plus size={16} /></button>
                </div>
                <button className="flex-1 bg-[#333] text-white py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-[#8b5e3c] transition-all shadow-lg active:scale-95">
                  <ShoppingCart size={20} />
                  ADD TO BASKET
                </button>
              </div>
            </div>

            {/* Product Meta Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-gray-200">
              <div className="flex items-start gap-3">
                <Truck size={20} className="text-[#8b5e3c] shrink-0" />
                <div>
                  <p className="text-sm font-bold">Fast UAE Delivery</p>
                  <p className="text-xs text-gray-500">Free on orders over 300 AED</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck size={20} className="text-[#8b5e3c] shrink-0" />
                <div>
                  <p className="text-sm font-bold">100% Authentic</p>
                  <p className="text-xs text-gray-500">Sourced from Ghana</p>
                </div>
              </div>
            </div>

            {/* Usage Accordion */}
            <div className="bg-white/50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-sm uppercase tracking-widest mb-2">How to use</h3>
              <p className="text-sm text-gray-600 leading-loose">
                {product.usage}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
