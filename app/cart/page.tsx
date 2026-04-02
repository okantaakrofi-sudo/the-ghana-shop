"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { cart, removeItem, updateQuantity, total } = useCart();

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Start shopping to add items to your cart</p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-amber-600 to-rose-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition font-semibold"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-12">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* CART ITEMS */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-6 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
                >
                  <div className="relative w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.product.name}
                    </h3>
                    <p className="text-amber-600 font-bold mb-4">AED {item.product.price}</p>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, Math.max(1, item.quantity - 1))
                          }
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          −
                        </button>
                        <span className="px-4 py-1">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-red-600 hover:text-red-700 font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">
                      AED {item.product.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SUMMARY */}
          <div className="bg-gray-50 rounded-xl p-6 h-fit">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">AED {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
            </div>

            <div className="flex justify-between mb-6">
              <span className="text-lg font-bold">Total</span>
              <span className="text-2xl font-bold text-amber-600">AED {total.toFixed(2)}</span>
            </div>

            <Link
              href="/checkout"
              className="block w-full bg-gradient-to-r from-amber-600 to-rose-600 text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transition mb-3"
            >
              Proceed to Checkout
            </Link>

            <Link
              href="/"
              className="block w-full border-2 border-gray-300 text-gray-700 text-center py-3 rounded-lg font-semibold hover:border-amber-600 hover:text-amber-600 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
