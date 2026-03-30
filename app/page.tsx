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
    alert("Please fill all details");
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
    setOrderSuccess(true);
  } catch (err) {
    alert("Error placing order");
  }

  setLoading(false);
};

return (
  <main className="min-h-screen bg-gradient-to-b from-black to-neutral-900 text-white px-4 md:px-12 py-8">

    {/* HEADER */}
    <nav className="flex justify-between items-center mb-12">
      <h1 className="text-3xl font-bold tracking-tight">
        THE GHANA SHOP
      </h1>

      <div className="relative">
        <div className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
          Cart
        </div>
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-[2px] rounded-full animate-bounce">
            {cart.length}
          </span>
        )}
      </div>
    </nav>

    {/* PRODUCTS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-white/10 transition duration-300"
        >
          <img
            src={product.image}
            className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="p-5 space-y-3">
            <h3 className="text-lg font-semibold">{product.name}</h3>

            <div className="flex justify-between items-center">
              <span className="font-bold">
                AED {product.price}
              </span>

              <button
                onClick={() => addToCart(product)}
                className="bg-white text-black px-4 py-1.5 rounded-full text-sm hover:scale-105 active:scale-95 transition"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* CART */}
    {cart.length > 0 && (
      <div className="mt-16 max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

        <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-4 border-b border-white/10 pb-3 animate-fade-in"
          >
            <span>{item.name}</span>

            <div className="flex items-center gap-3">

              {/* QUANTITY CONTROLS */}
              <div className="flex items-center gap-2 bg-black/40 px-2 py-1 rounded-lg">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <span>AED {item.price * item.quantity}</span>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 text-sm"
              >
                ✕
              </button>
            </div>
          </div>
        ))}

        <div className="flex justify-between mt-6 text-lg font-bold">
          <span>Total</span>
          <span>AED {total}</span>
        </div>

        <button
          onClick={() => setShowCheckout(true)}
          className="w-full mt-6 bg-white text-black py-3 rounded-2xl font-bold hover:scale-[1.02]"
        >
          Checkout
        </button>
      </div>
    )}

    {/* CHECKOUT MODAL */}
    {showCheckout && (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 px-4 animate-fade-in">

        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl w-full max-w-md space-y-5 animate-scale-in">

          <h2 className="text-2xl font-semibold">Delivery Details</h2>

          <input
            placeholder="Name"
            className="w-full p-3 rounded-xl bg-black/50 border border-white/10"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-black/50 border border-white/10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Address"
            className="w-full p-3 rounded-xl bg-black/50 border border-white/10"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button
            onClick={placeOrder}
            className="w-full bg-white text-black py-3 rounded-2xl font-bold"
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

    {/* SUCCESS SCREEN */}
    {orderSuccess && (
      <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50 animate-fade-in">

        <div className="text-center space-y-4 animate-scale-in">
          <h2 className="text-3xl font-bold">✅ Order Confirmed</h2>
          <p className="text-neutral-400">
            Thank you for your purchase!
          </p>

          <button
            onClick={() => setOrderSuccess(false)}
            className="mt-4 bg-white text-black px-6 py-2 rounded-full"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    )}
  </main>
);
