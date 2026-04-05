'use client'; // <-- THIS IS THE KEY. It must be the very first line.

import React, { useState } from 'react';
import { ShoppingCart, Minus, Plus, Truck, ShieldCheck } from 'lucide-react';

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // For now, this will show an alert. 
    // Later, this can connect to your /api/checkout
    alert(`Added ${quantity} item(s) to your basket!`);
    
    // Optional: Redirect to WhatsApp or Checkout immediately
    // window.location.href = "/api/whatsapp"; 
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] pb-20">
      {/* ... your existing image and header code ... */}

      {/* Update your Quantity & Button Section: */}
      <div className="flex items-center gap-6 pt-6">
        <div className="flex items-center border border-gray-200 rounded-full px-4 py-2 bg-white">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-1 hover:text-[#8b5e3c]"
          >
            <Minus size={16} />
          </button>
          <span className="px-6 font-bold">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="p-1 hover:text-[#8b5e3c]"
          >
            <Plus size={16} />
          </button>
        </div>

        <button 
          onClick={handleAddToCart}
          className="flex-1 bg-[#333] text-white py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-[#8b5e3c] transition-all shadow-lg active:scale-95"
        >
          <ShoppingCart size={20} />
          ADD TO BASKET
        </button>
      </div>

      {/* ... the rest of your page ... */}
    </div>
  );
}