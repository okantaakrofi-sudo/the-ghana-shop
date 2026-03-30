"use client";

import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Enhanced Hair Tea",
      price: 65,
      image: "https://drive.google.com/uc?export=view&id=1FqFcwpRN2K04zYn1EUxaRQsGPJ1fKg-z"
    },
    {
      id: 2,
      name: "Mama Ghana Hair Oil",
      price: 70,
      image: "https://drive.google.com/uc?export=view&id=1gYhineBQiJS_WLS3ZHsi-OdRtnpJ3OlS"
    },
    {
      id: 3,
      name: "Yellow Shea Oil",
      price: 80,
      image: "https://drive.google.com/uc?export=view&id=1ILo90xWeN8eFTLhSVphJdj0u_mG10SwI"
    }
  ];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // ✅ FIXED FUNCTION (NO JSX INSIDE)
  const placeOrder = async () => {
    if (!name || !email || !address) {
      alert("Please fill in details");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "orders"), {
        name,
        email,
        address,
        cart,
        total,
        createdAt: new Date(),
      });

      alert("Order placed successfully!");
      setCart([]);
      setShowCheckout(false);
      setName("");
      setEmail("");
      setAddress("");
    } catch (error) {
      console.error(error);
      alert("Error placing order");
    }

    setLoading(false);
  };

return (
  <main className="min-h-screen bg-black text-white px-4 md:px-10 py-6">

    {/* HEADER */}
    <nav className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
      <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
        THE GHANA SHOP
      </h1>

      <div className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
        Cart ({cart.length})
      </div>
    </nav>

    {/* PRODUCT GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-60 object-cover"
          />

          <div className="p-4 space-y-3">
            <h3 className="text-lg font-semibold">{product.name}</h3>

            <p className="text-neutral-400 text-sm">
              Premium natural product from Ghana
            </p>

            <div className="flex justify-between items-center">
              <span className="text-white font-bold">
                AED {product.price}
              </span>

              <button
                onClick={() => addToCart(product)}
                className="bg-white text-black px-3 py-1 rounded-lg text-sm font-semibold hover:bg-neutral-200"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* CART SUMMARY */}
    {cart.length > 0 && (
      <div className="mt-12 max-w-xl mx-auto bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>

        {cart.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-3"
          >
            <span>{item.name}</span>

            <div className="flex items-center gap-3">
              <span>AED {item.price}</span>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="flex justify-between mt-6 font-bold text-lg">
          <span>Total</span>
          <span>AED {total}</span>
        </div>

        <button
          onClick={() => setShowCheckout(true)}
          className="w-full mt-6 bg-white text-black py-3 rounded-xl font-bold hover:bg-neutral-200"
        >
          Checkout
        </button>
      </div>
    )}

    {/* CHECKOUT MODAL */}
    {showCheckout && (
      <div className="fixed inset-0 bg-black/80 flex justify-center items-center px-4 z-50">
        <div className="bg-neutral-900 w-full max-w-md p-6 rounded-2xl border border-neutral-800 space-y-4">
          <h2 className="text-xl font-bold">Delivery Details</h2>

          <input
            placeholder="Name"
            className="w-full p-3 rounded-lg bg-black border border-neutral-700"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-black border border-neutral-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Address"
            className="w-full p-3 rounded-lg bg-black border border-neutral-700"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button
            onClick={placeOrder}
            disabled={loading}
            className="w-full bg-white text-black py-3 rounded-xl font-bold"
          >
            {loading ? "Processing..." : "Complete Order"}
          </button>

          <button
            onClick={() => setShowCheckout(false)}
            className="w-full text-neutral-400 text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    )}
  </main>
);
