"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Enhanced Hair Tea",
    price: 65,
  },
  {
    id: 2,
    name: "Mama Ghana Hair Oil",
    price: 90,
  },
  {
    id: 3,
    name: "Yellow Shea Oil",
    price: 80,
  },
];

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const [success, setSuccess] = useState(false);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const checkout = () => {
    setSuccess(true);
    setCart([]);
  };

  if (success) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">✅ Order Successful</h1>
        <button
          onClick={() => setSuccess(false)}
          className="bg-white text-black px-6 py-3 rounded-xl"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6">The Ghana Shop</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-zinc-900 p-4 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-400 mb-3">AED {p.price}</p>

            <button
              onClick={() => addToCart(p)}
              className="bg-white text-black px-4 py-2 rounded-xl w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-zinc-950 p-4 flex justify-between items-center">
        <span>{cart.length} items</span>
        <button
          onClick={checkout}
          className="bg-green-500 px-6 py-2 rounded-xl"
        >
          Checkout
        </button>
      </div>
    </main>
  );
}
