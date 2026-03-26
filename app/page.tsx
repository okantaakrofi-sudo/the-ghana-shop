"use client";
import { useState } from "react";

export default function Home() {
  const products = [
    { id: 1, name: "Kente Cloth", price: 50 },
    { id: 2, name: "Shea Butter", price: 10 },
    { id: 3, name: "African Print Shirt", price: 30 },
  ];

  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <main className="bg-gray-100 min-h-screen">

      {/* Header */}
      <header className="bg-black text-white flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">The Ghana Shop 🇬🇭</h1>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg">
          Cart 🛒 ({cart.length})
        </button>
      </header>

      {/* Products */}
      <section className="px-6 py-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow"
          >
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-green-600 font-bold">${product.price}</p>

            <button
              onClick={() => addToCart(product)}
              className="mt-3 w-full bg-green-600 text-white py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      {/* Cart */}
      <section className="px-6 pb-10">
        <h2 className="text-xl font-bold mb-3">Your Cart</h2>

        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <div className="space-y-2">
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded shadow flex justify-between items-center"
              >
                <div>
                  <p>{item.name}</p>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>

                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}

            <p className="font-bold mt-4">
              Total: $
              {cart.reduce((total, item) => total + item.price, 0)}
            </p>
          </div>
        )}
      </section>

    </main>
  );
}
