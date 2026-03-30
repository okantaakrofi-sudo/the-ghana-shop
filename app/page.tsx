"use client";

import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useState } from "react";

// Define what a Product looks like so TypeScript is happy
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { 
    id: 1, 
    name: "Enhanced Hair Tea", 
    price: 65, 
    image: "https://drive.google.com/uc?export=view&id=FYqMhGY" 
  },
  { 
    id: 2, 
    name: "Mama Ghana Hair Oil", 
    price: 70, 
    image: "https://drive.google.com/uc?export=view&id=XrA5iGH" 
  },
  { 
    id: 3, 
    name: "Yellow Shea Oil", 
    price: 80, 
    image: "https://drive.google.com/uc?export=view&id=NU7Vn8E" 
  }
];

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const addToCart = (product: Product) => setCart([...cart, product]);
  const removeFromCart = (index: number) => setCart(cart.filter((_, i) => i !== index));
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = async () => {
  console.log("Button clicked!"); // Check your browser console for this
  if (!name || !email || !address) {
    alert("Please fill in details");
    return;
  }
  setLoading(true);
  
  // Test alert to see if we even get this far
  alert("Attempting to connect to Firebase..."); 
  
  try {
    // ... rest of your code
      const docRef = await addDoc(collection(db, "orders"), {
        customerName: name,
        customerEmail: email,
        customerAddress: address,
        items: cart,
        totalAmount: total,
        status: "pending",
        orderDate: new Date().toISOString(),
      });

      const message = `New Order (#${docRef.id.slice(0,5)}) from ${name}! Total: AED ${total}. Address: ${address}`;
      window.open(`https://wa.me/971XXXXXXXXX?text=${encodeURIComponent(message)}`, '_blank');

      alert("Order successful! Opening WhatsApp...");
      setCart([]);
      setName("");
      setEmail("");
      setAddress("");
      setShowCheckout(false);
    } catch (e) {
      console.error("Order Error:", e);
      alert("There was an error saving your order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-10">
      <nav className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-6">
        <h1 className="text-2xl font-bold tracking-tighter">THE GHANA SHOP</h1>
        <div className="text-sm opacity-70">Cart ({cart.length})</div>
      </nav>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-neutral-900 rounded-3xl p-6 border border-neutral-800">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-2xl mb-4" />
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-neutral-400 mb-6">AED {product.price}</p>
            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-white text-black py-3 rounded-xl font-bold hover:bg-neutral-200 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className="mt-20 max-w-xl mx-auto bg-neutral-900 p-8 rounded-3xl border border-neutral-800">
          <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between mb-4 border-b border-neutral-800 pb-4">
              <span>{item.name}</span>
              <div className="flex gap-4">
                <span>AED {item.price}</span>
                <button onClick={() => removeFromCart(index)} className="text-red-500 text-sm">Remove</button>
              </div>
            </div>
          ))}
          <div className="flex justify-between text-xl font-bold mt-6">
            <span>Total</span>
            <span>AED {total}</span>
          </div>
          <button 
            onClick={() => setShowCheckout(true)}
            className="w-full bg-gradient-to-r from-neutral-200 to-white text-black py-4 rounded-xl font-bold mt-6 shadow-lg"
          >
            Checkout Now
          </button>
        </div>
      )}

      {/* Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">Delivery Details</h2>
            <div className="space-y-4">
              <input placeholder="Name" className="w-full bg-black border border-neutral-800 p-4 rounded-xl" value={name} onChange={e => setName(e.target.value)} />
              <input placeholder="Email" className="w-full bg-black border border-neutral-800 p-4 rounded-xl" value={email} onChange={e => setEmail(e.target.value)} />
              <input placeholder="UAE Address" className="w-full bg-black border border-neutral-800 p-4 rounded-xl" value={address} onChange={e => setAddress(e.target.value)} />
              <button 
                onClick={placeOrder}
                disabled={loading}
                className="w-full bg-white text-black py-4 rounded-xl font-bold disabled:opacity-50"
              >
                {loading ? "Processing..." : "Complete Order"}
              </button>
              <button onClick={() => setShowCheckout(false)} className="w-full text-neutral-500 text-sm mt-2">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
