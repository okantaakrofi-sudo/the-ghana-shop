"use client";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

import { useState } from "react";

const products = [ { id: 1, name: "Kente Cloth", price: 120, image: "https://images.unsplash.com/photo-1603252109303-2751441dd157" }, { id: 2, name: "Shea Butter", price: 25, image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e" }, { id: 3, name: "African Print Shirt", price: 60, image: "https://images.unsplash.com/photo-1520975922284-9e0ce827c0b1" }, ];

export default function Home() { const [cart, setCart] = useState<any[]>([]); const [showCheckout, setShowCheckout] = useState(false);
                                
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [address, setAddress] = useState("");
                                
const addToCart = (product: any) => { setCart([...cart, product]); };

const removeFromCart = (index: number) => { setCart(cart.filter((_, i) => i !== index)); };

const total = cart.reduce((sum, item) => sum + item.price, 0);

const handleCheckout = () => { setShowCheckout(true); };
const placeOrder = async () => {
  if (!name || !email || !address) {
    alert("Please fill all fields");
    return;
  }

  // 🚀 Go to Stripe FIRST
  window.location.href = "https://buy.stripe.com/test_xxxxxxxx";
};

    await addDoc(collection(db, "orders"), {
  items: cart,
  total,
  name,
  email,
  address,
  createdAt: new Date(),
});

setCart([]);                            
 setShowCheckout(false);

  } catch (error) {
    console.error(error);
    alert("❌ Error saving order");
  }
};                               

return ( <main className="min-h-screen bg-black text-white"> {/* Navbar */} <nav className="flex justify-between items-center px-10 py-6 border-b border-neutral-800"> <h1 className="text-2xl font-semibold tracking-widest">GHANA LUXE</h1> <div className="flex gap-6 text-sm opacity-80"> <span>Home</span> <span>Shop</span> <span>Contact</span> </div> </nav>

{/* Hero */}
  <section className="text-center py-24">
    <h2 className="text-5xl font-light mb-6">Premium African Luxury</h2>
    <p className="text-neutral-400">Luxury products delivered to UAE & worldwide</p>
  </section>

  {/* Products */}
  <section className="px-10 grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
  {products.map((product) => (
    <div
      key={product.id}
      className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
    >
      <img
        src={product.image}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-wide">
          {product.name}
        </h3>

        <p className="text-neutral-400 mt-2 text-lg">
          ${product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-5 w-full bg-gradient-to-r from-black to-gray-800 text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  ))}
</section>

  {/* Cart */}
<section className="px-6 md:px-10 py-20">
  <div className="max-w-2xl mx-auto bg-neutral-900 p-8 rounded-2xl shadow-xl">

    <h2 className="text-3xl font-semibold mb-8 tracking-wide">
      Your Cart
    </h2>

    {cart.length === 0 ? (
      <p className="text-neutral-500 text-center py-10">
        Your cart is empty
      </p>
    ) : (
      <>
        <div className="space-y-5">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-neutral-800 pb-4"
            >
              <div>
                <p className="text-lg">{item.name}</p>
                <p className="text-sm text-neutral-400">
                  ${item.price}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 hover:text-red-400 text-sm transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mt-8 text-xl font-medium">
          <span>Total</span>
          <span>${total}</span>
        </div>

        {/* Checkout Button */}
        <button
          onClick={handleCheckout}
          className="mt-8 w-full bg-gradient-to-r from-black to-gray-800 text-white py-4 rounded-xl text-lg hover:opacity-90 transition"
        >
          Proceed to Checkout
        </button>
      </>
    )}
  </div>
</section>

  {/* Checkout Modal */}
{showCheckout && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">

    <div className="bg-neutral-900 text-white p-8 rounded-2xl w-full max-w-md shadow-2xl">

      <h2 className="text-2xl font-semibold mb-6 text-center">
        Checkout
      </h2>

      {/* Inputs */}
      <input
  placeholder="Full Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full border p-2 mb-3"
/>

<input
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full border p-2 mb-3"
/>

<input
  placeholder="Address (UAE)"
  value={address}
  onChange={(e) => setAddress(e.target.value)}
  className="w-full border p-2 mb-3"
/> 
      
      {/* Complete Purchase */}
      <button
  onClick={placeOrder}
  className="w-full bg-black text-white py-3 rounded-lg mt-4"
>
  Pay with Card (Stripe)
</button>

      {/* Close Button */}
      <button
        onClick={() => setShowCheckout(false)}
        className="w-full mt-3 text-neutral-400 hover:text-white text-sm"
      >
        Cancel
      </button>

    </div>
  </div>
)}
