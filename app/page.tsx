"use client";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

import { useState } from "react";

const products = [ { id: 1, name: "Kente Cloth", price: 120, image: "https://images.unsplash.com/photo-1603252109303-2751441dd157" }, { id: 2, name: "Shea Butter", price: 25, image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e" }, { id: 3, name: "African Print Shirt", price: 60, image: "https://images.unsplash.com/photo-1520975922284-9e0ce827c0b1" }, ];

export default function Home() { const [cart, setCart] = useState<any[]>([]); const [showCheckout, setShowCheckout] = useState(false);

const addToCart = (product: any) => { setCart([...cart, product]); };

const removeFromCart = (index: number) => { setCart(cart.filter((_, i) => i !== index)); };

const total = cart.reduce((sum, item) => sum + item.price, 0);

const handleCheckout = () => { setShowCheckout(true); };
 const placeOrder = async () => {
  try {
    await addDoc(collection(db, "orders"), {
      items: cart,
      total,
      createdAt: new Date(),
    });

    setCart([]);
    setShowCheckout(false);

    alert("✅ Order saved!");
  } catch (error) {
    console.error(error);
    alert("❌ Error saving order");
  }
};                               

return ( <main className="min-h-screen bg-neutral-950 text-white"> {/* Navbar */} <nav className="flex justify-between items-center px-10 py-6 border-b border-neutral-800"> <h1 className="text-2xl font-semibold tracking-widest">GHANA LUXE</h1> <div className="flex gap-6 text-sm opacity-80"> <span>Home</span> <span>Shop</span> <span>Contact</span> </div> </nav>

{/* Hero */}
  <section className="text-center py-24">
    <h2 className="text-5xl font-light mb-6">Premium African Luxury</h2>
    <p className="text-neutral-400">Luxury products delivered to UAE & worldwide</p>
  </section>

  {/* Products */}
  <section className="px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
    {products.map((product) => (
      <div key={product.id} className="bg-neutral-900 rounded-2xl overflow-hidden hover:scale-105 transition">
        <img src={product.image} className="w-full h-64 object-cover" />
        <div className="p-5">
          <h3 className="text-lg">{product.name}</h3>
          <p className="text-neutral-400 mb-4">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-white text-black py-2 rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </section>

  {/* Cart */}
  <section className="px-10 py-20">
    <div className="max-w-2xl mx-auto bg-neutral-900 p-8 rounded-2xl">
      <h2 className="text-2xl mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-neutral-500">Cart is empty</p>
      ) : (
        <div className="space-y-5">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between border-b border-neutral-800 pb-3">
              <div>
                <p>{item.name}</p>
                <p className="text-sm text-neutral-400">${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(index)} className="text-red-400">Remove</button>
            </div>
          ))}

          <div className="flex justify-between pt-4 text-lg">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full mt-6 bg-white text-black py-3 rounded-xl"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  </section>

  {/* Checkout Modal */}
  {showCheckout && (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-white text-black p-8 rounded-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Checkout</h2>

        <input placeholder="Full Name" className="w-full border p-2 mb-3" />
        <input placeholder="Email" className="w-full border p-2 mb-3" />
        <input placeholder="Address (UAE)" className="w-full border p-2 mb-3" />

        <button
  onClick={placeOrder}
  className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-3 rounded-xl mt-4 hover:opacity-90 transition"
>
  Complete Purchase
</button>
            window.location.href = "https://buy.stripe.com/test";
          }}
          className="w-full bg-black text-white py-3 rounded-lg mt-4"
        >
          Pay with Card (Stripe)
        </button>

        <button
          onClick={() => setShowChec
