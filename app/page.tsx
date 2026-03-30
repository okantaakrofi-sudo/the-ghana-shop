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

      setCart([]);
      setShowCheckout(false);
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
    <main className="min-h-screen bg-black text-white p-4 md:p-10">

      {/* HEADER */}
      <nav className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-6">
        <h1 className="text-2xl font-bold tracking-tight">THE GHANA SHOP</h1>
        <div className="text-sm opacity-70">Cart ({cart.length})</div>
      </nav>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-neutral-400 mb-4">AED {product.price}</p>

            <button
              onClick={() => addToCart(product)}
              className="bg-white text-black px-4 py-2 rounded-lg w-full font-semibold"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* CART */}
      {cart.length > 0 && (
        <div className="mt-10 max-w-xl mx-auto bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>

          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center mb-3 border-b border-neutral-800 pb-2"
            >
              <span>{item.name}</span>
              <div className="flex gap-3 items-center">
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

          <div className="flex justify-between mt-4 font-bold">
            <span>Total</span>
            <span>AED {total}</span>
          </div>

          <button
            onClick={() => setShowCheckout(true)}
            className="w-full bg-white text-black py-3 rounded-xl font-bold mt-6"
          >
            Checkout Now
          </button>
        </div>
      )}

      {/* ✅ CHECKOUT MODAL (CORRECT PLACE) */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl w-full max-w-md">

            <h2 className="text-2xl font-bold mb-6">Delivery Details</h2>

            <div className="space-y-4">
              <input
                placeholder="Name"
                className="w-full bg-black border border-neutral-800 p-3 rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                placeholder="Email"
                className="w-full bg-black border border-neutral-800 p-3 rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                placeholder="UAE Address"
                className="w-full bg-black border border-neutral-800 p-3 rounded-lg"
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
                className="w-full text-neutral-500 text-sm mt-2"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}
