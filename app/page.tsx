"use client";

import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);

  const products = [
    { id: 1, name: "Shea Oil", price: 80 },
    { id: 2, name: "Black Soap", price: 50 },
  ];

  const addToCart = (product: any) => {
    const existing = cart.find((i) => i.id === product.id);

    if (existing) {
      setCart(
        cart.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const checkout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ cart }),
    });

    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🛍 Store</h1>

      {/* Products */}
      <div className="grid gap-4 mb-8">
        {products.map((p) => (
          <div key={p.id} className="p-4 bg-neutral-900 rounded">
            <h2>{p.name}</h2>
            <p>AED {p.price}</p>

            <button
              onClick={() => addToCart(p)}
              className="mt-2 bg-white text-black px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div className="bg-neutral-900 p-4 rounded">
        <h2 className="mb-3 font-bold">Cart</h2>

        {cart.map((item, i) => (
          <div key={i} className="flex justify-between">
            <span>
              {item.name} x{item.qty}
            </span>
            <span>AED {item.price * item.qty}</span>
          </div>
        ))}

        <div className="mt-4 font-bold">Total: AED {total}</div>

        <button
          onClick={checkout}
          className="mt-4 w-full bg-white text-black py-2 rounded"
        >
          Pay Now
        </button>
      </div>
    </main>
  );
}
