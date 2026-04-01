"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "./context/CartContext";
import { products } from "../data/products";

export default function Home() {
  const { cart, total, addToCart } = useCart();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const validateCustomer = () => {
    if (!customer.name || !customer.phone || !customer.address) {
      alert("Please fill all delivery details");
      return false;
    }
    return true;
  };

  const checkout = async () => {
    if (!validateCustomer()) return;

    localStorage.setItem("customer", JSON.stringify(customer));

    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ cart, customer }),
    });

    const data = await res.json();
    window.location.href = data.url;
  };

  const placeCODOrder = async () => {
    if (!validateCustomer()) return;

    alert("Order placed! Pay cash on delivery 🚚");
  };

  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">
          Luxury Ghana Beauty
        </h1>
        <p className="text-gray-400 mb-6">
          Premium Natural Hair & Skin Care
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full hover:scale-105 transition">
          Shop Now
        </button>
      </section>

      {/* PRODUCTS */}
      <section className="grid md:grid-cols-3 gap-6 p-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-zinc-900 rounded-2xl p-4 hover:scale-105 transition"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-gray-400">AED {p.price}</p>

            <button
              onClick={() => addToCart(p)}
              className="mt-3 w-full bg-white text-black py-2 rounded-xl"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      {/* CUSTOMER FORM */}
      <section className="p-6">
        <div className="bg-white text-black p-6 rounded-2xl max-w-xl mx-auto space-y-4">
          <h2 className="text-xl font-bold">Delivery Details</h2>

          <input
            placeholder="Full Name"
            className="w-full border p-3 rounded"
            value={customer.name}
            onChange={(e) =>
              setCustomer({ ...customer, name: e.target.value })
            }
          />

          <input
            placeholder="Phone Number"
            className="w-full border p-3 rounded"
            value={customer.phone}
            onChange={(e) =>
              setCustomer({ ...customer, phone: e.target.value })
            }
          />

          <input
            placeholder="Delivery Address"
            className="w-full border p-3 rounded"
            value={customer.address}
            onChange={(e) =>
              setCustomer({ ...customer, address: e.target.value })
            }
          />
        </div>
      </section>

      {/* CART BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 p-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span>{cart.length} items</span>
          <span>AED {total}</span>
        </div>

        <button
          onClick={checkout}
          className="w-full bg-white text-black py-3 rounded-xl"
        >
          Pay (Card / Apple Pay / Google Pay)
        </button>

        <button
          onClick={placeCODOrder}
          className="w-full bg-green-500 py-3 rounded-xl"
        >
          Cash on Delivery
        </button>
      </div>
    </main>
  );
}
