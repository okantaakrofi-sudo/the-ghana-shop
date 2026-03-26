"use client";

import { useState } from "react";

const products = [ { id: 1, name: "Kente Cloth", price: 120 }, { id: 2, name: "Shea Butter", price: 25 }, { id: 3, name: "African Print Shirt", price: 60 }, ];

export default function Home() { const [cart, setCart] = useState<any[]>([]);

const addToCart = (product: any) => { setCart([...cart, product]); };

const removeFromCart = (index: number) => { setCart(cart.filter((_, i) => i !== index)); };

const total = cart.reduce((sum, item) => sum + item.price, 0);

return ( <main className="min-h-screen bg-gray-100 text-gray-900"> {/* Navbar */} <nav className="bg-black text-white px-8 py-4 flex justify-between items-center"> <h1 className="text-2xl font-bold tracking-wide">The Ghana Shop GH</h1> <div className="flex gap-4"> <span>Home</span> <span>Shop</span> <span>Contact</span> </div> </nav>

{/* Hero Section */}
  <section className="text-center py-16 bg-gradient-to-r from-black to-gray-800 text-white">
    <h2 className="text-4xl font-bold mb-4">Luxury African Products</h2>
    <p className="text-lg opacity-80">Premium quality. Authentic style.</p>
  </section>

  {/* Products */}
  <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
    {products.map((product) => (
      <div
        key={product.id}
        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
      >
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-500 mb-4">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>
    ))}
  </section>

  {/* Cart */}
  <section className="p-8">
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-400 text-sm">${item.price}</p>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between font-bold text-lg pt-4">
            <span>Total:</span>
            <span>${total}</span>
          </div>

          <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 mt-4">
            Checkout
          </button>
        </div>
      )}
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-black text-white text-center py-6 mt-10">
    <p>© 2026 The Ghana Shop GH. All rights reserved.</p>
  </footer>
</main>

); }
