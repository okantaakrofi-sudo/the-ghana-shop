"use client";

import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useState } from "react";

const products = [
  { id: 1, name: "Kente Cloth", price: 120, image: "https://images.unsplash.com/photo-1603252109303-2751441dd157" },
  { id: 2, name: "Shea Butter", price: 25, image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e" },
  { id: 3, name: "African Print Shirt", price: 60, image: "https://images.unsplash.com/photo-1520975922284-9e0ce827c0b1" },
];

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const [loading, setLoading] = useState(false); // Add this at the top with your other states

const placeOrder = async () => {
  if (!name || !email || !address) {
    alert("Please fill in all details.");
    return;
  }

  setLoading(true); // Disable the button while it works
  try {
    const docRef = await addDoc(collection(db, "orders"), {
      customerName: name,
      customerEmail: email,
      customerAddress: address,
      items: cart,
      totalAmount: total,
      status: "pending",
      orderDate: new Date().toISOString(),
    });

    alert("Order Successful! Opening WhatsApp...");
    
    const message = `New Order from ${name}! Total: AED ${total}. Items: ${cart.map(i => i.name).join(", ")}`;
    window.open(`https://wa.me/971XXXXXXXXX?text=${encodeURIComponent(message)}`, '_blank');

    setCart([]);
    setShowCheckout(false);
  } catch (e) {
    console.error("Order Error:", e);
    alert("Database Error: Check your Firebase Rules or API keys.");
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-neutral-800 sticky top-0 bg-black/90 backdrop-blur-md z-40">
        <h1 className="text-2xl font-semibold tracking-widest">GHANA LUXE</h1>
        <div className="flex gap-6 text-sm opacity-80 uppercase tracking-tighter">
          <span className="cursor-pointer hover:text-neutral-400">Home</span>
          <span className="cursor-pointer hover:text-neutral-400">Shop</span>
          <span className="cursor-pointer hover:text-neutral-400">Cart ({cart.length})</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-24 px-6">
        <h2 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">Premium African Luxury</h2>
        <p className="text-neutral-400 text-lg">Hand-crafted quality delivered across the UAE & worldwide</p>
      </section>

      {/* Products Grid */}
      <section className="px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition duration-300 group"
          >
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium tracking-wide">{product.name}</h3>
              <p className="text-neutral-400 mt-2 text-lg">AED {product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-5 w-full bg-gradient-to-r from-neutral-800 to-black text-white py-3 rounded-lg border border-neutral-700 font-semibold hover:from-white hover:to-neutral-200 hover:text-black transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Cart Section */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-2xl mx-auto bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 shadow-2xl">
          <h2 className="text-3xl font-semibold mb-8 tracking-wide">Your Selection</h2>

          {cart.length === 0 ? (
            <p className="text-neutral-500 text-center py-10 italic">Your cart is currently empty.</p>
          ) : (
            <>
              <div className="space-y-6">
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-neutral-800 pb-4">
                    <div>
                      <p className="font-medium text-white">{item.name}</p>
                      <p className="text-sm text-neutral-400">AED {item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-400 text-xs uppercase tracking-widest hover:text-red-300 transition"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-8 text-2xl font-light">
                <span className="text-neutral-400">Total</span>
                <span className="font-semibold text-white">AED {total}</span>
              </div>

              <button
                onClick={handleCheckout}
                className="mt-10 w-full bg-white text-black py-4 rounded-full font-bold text-lg hover:bg-neutral-200 transition-all shadow-xl"
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      </section>

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-900 border border-neutral-800 text-white p-8 rounded-3xl w-full max-w-md shadow-2xl">
            <h2 className="text-2xl font-semibold mb-6 text-center tracking-tight">Delivery Details</h2>
            
            <div className="space-y-4">
              <input
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-black border border-neutral-800 p-4 rounded-xl focus:outline-none focus:border-neutral-500 transition"
              />
              <input
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black border border-neutral-800 p-4 rounded-xl focus:outline-none focus:border-neutral-500 transition"
              />
              <input
                placeholder="Shipping Address (UAE City / Area)"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-black border border-neutral-800 p-4 rounded-xl focus:outline-none focus:border-neutral-500 transition"
              />
            </div>

            <button
              onClick={placeOrder}
              className="w-full bg-white text-black py-4 rounded-xl mt-8 font-bold text-lg hover:bg-neutral-200 transition shadow-lg"
            >
              Complete Order
            </button>

            <button
              onClick={() => setShowCheckout(false)}
              className="w-full mt-4 text-neutral-500 hover:text-white text-sm uppercase tracking-widest transition"
            >
              Back to Shop
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-10 text-center text-neutral-600 text-xs border-t border-neutral-900 mt-20">
        © 2026 GHANA LUXE | PREMIUM AFRICAN GOODS
      </footer>
    </main>
  );
}
