"use client";

import { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

type Product = {
  name: string;
  price: number;
};

export default function Home() {
  const products: Product[] = [
    { name: "Enhanced Hair Tea", price: 65 },
    { name: "Mama Ghana Hair Oil", price: 120 },
    { name: "Yellow Shea Oil", price: 80 },
  ];

  const [cart, setCart] = useState<any[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  // Add to cart
  const addToCart = (product: Product) => {
    const existing = cart.find((item) => item.name === product.name);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Remove item
  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  // Quantity change
  const updateQty = (index: number, type: "inc" | "dec") => {
    const updated = [...cart];

    if (type === "inc") updated[index].qty += 1;
    if (type === "dec" && updated[index].qty > 1)
      updated[index].qty -= 1;

    setCart(updated);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // Place order
  const phone = "971568394640";
const message = `New Order 🚀
Amount: AED ${total}`;

window.open(
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
);
  const handleCheckout = async () => {
  const res = await fetch("/api/checkout", {
    method: "POST",
    body: JSON.stringify({ cart }),
  });

  const data = await res.json();
  window.location.href = data.url;
};

  return (
    <main className="min-h-screen bg-black text-white p-6 animate-fade-in">
      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-6">THE GHANA SHOP</h1>

      {/* PRODUCTS */}
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <div
            key={i}
            className="card animate-slide-up flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-neutral-400 mt-2">
                AED {product.price}
              </p>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="btn-premium mt-4"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* CART */}
      {cart.length > 0 && (
        <div className="mt-10 max-w-xl mx-auto card animate-scale-in">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center mb-4 border-b border-neutral-800 pb-3"
            >
              <div>
                <p>{item.name}</p>
                <p className="text-sm text-neutral-400">
                  AED {item.price}
                </p>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQty(index, "dec")}
                  className="px-2 bg-neutral-800 rounded"
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  onClick={() => updateQty(index, "inc")}
                  className="px-2 bg-neutral-800 rounded"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between font-bold mt-4">
            <span>Total</span>
            <span>AED {total}</span>
          </div>

          <button
            onClick={() => setShowCheckout(true)}
            className="btn-premium w-full mt-6"
          >
            Checkout
          </button>
        </div>
      )}

      {/* CHECKOUT MODAL */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-fade-in">
          <div className="card w-full max-w-md animate-scale-in">
            <h2 className="text-xl font-bold mb-4">
              Delivery Details
            </h2>

            <div className="space-y-3">
              <input
                placeholder="Name"
                className="w-full bg-black border border-neutral-700 p-3 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                placeholder="Email"
                className="w-full bg-black border border-neutral-700 p-3 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                placeholder="Address"
                className="w-full bg-black border border-neutral-700 p-3 rounded"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <button
  onClick={handleCheckout}
  className="btn-premium w-full mt-6"
>
  Pay Now
</button>

            <button
              onClick={() => setShowCheckout(false)}
              className="w-full mt-3 text-neutral-400 text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* SUCCESS SCREEN */}
      {orderSuccess && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50 animate-fade-in">
          <div className="card text-center animate-scale-in">
            <h2 className="text-2xl font-bold mb-2">
              🎉 Order Successful
            </h2>
            <p className="text-neutral-400 mb-4">
              Your order has been placed successfully.
            </p>

            <button
              onClick={() => setOrderSuccess(false)}
              className="btn-premium"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
