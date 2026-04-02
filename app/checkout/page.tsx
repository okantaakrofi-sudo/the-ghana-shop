"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { useCart } from "@/app/context/CartContext";

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const [step, setStep] = useState<"info" | "shipping" | "payment">("info");
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    street: "",
    city: "",
    emirate: "",
    postal: "",
    country: "UAE",
  });
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "cod">("stripe");

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Checkout</h1>
          <p className="text-gray-600 mb-8">Your cart is empty</p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-amber-600 to-rose-600 text-white px-8 py-3 rounded-full"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "info") setStep("shipping");
    else if (step === "shipping") setStep("payment");
    else {
      alert(`Order placed! Payment method: ${paymentMethod === "cod" ? "Cash on Delivery" : "Stripe"}`);
      clearCart();
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* PROGRESS */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            {["info", "shipping", "payment"].map((s, i) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step === s
                      ? "bg-gradient-to-r from-amber-600 to-rose-600 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {i + 1}
                </div>
                <div className="flex-1 h-1 mx-2 bg-gray-300"></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm font-semibold">
            <span>Contact</span>
            <span>Shipping</span>
            <span>Payment</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FORM */}
          <div className="lg:col-span-2 bg-white rounded-xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === "info" && (
                <>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg p-3"
      placeholder="your@email.com"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">First Name</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg p-3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Last Name</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg p-3"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg p-3"
                      placeholder="+971"
                    />
                  </div>
                </>
              )}

              {step === "shipping" && (
                <>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Street Address</label>
                    <input
                      type="text"
                      required
                      value={formData.street}
                      onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg p-3"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">City</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg p-3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Emirate</label>
                      <select
                        required
                        value={formData.emirate}
                        onChange={(e) => setFormData({ ...formData, emirate: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg p-3"
                      >
                        <option value="">Select Emirate</option>
                        <option value="abu-dhabi">Abu Dhabi</option>
                        <option value="dubai">Dubai</option>
                        <option value="sharjah">Sharjah</option>
                        <option value="ajman">Ajman</option>
                        <option value="ras-al-khaimah">Ras Al Khaimah</option>
                        <option value="umm-al-quwain">Umm Al Quwain</option>
                        <option value="fujairah">Fujairah</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Postal Code</label>
                    <input
                      type="text"
                      value={formData.postal}
                      onChange={(e) => setFormData({ ...formData, postal: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg p-3"
                    />
                  </div>
                </>
              )}

              {step === "payment" && (
                <div className="space-y-4">
                  <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-amber-600"
                    onClick={() => setPaymentMethod("stripe")}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="stripe"
                      checked={paymentMethod === "stripe"}
                      onChange={(e) => setPaymentMethod(e.target.value as "stripe" | "cod")}
                      className="mr-3"
                    />
                    <label className="font-semibold">Stripe (Card, Apple Pay, Google Pay)</label>
                  </div>
                  <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-amber-600"
                    onClick={() => setPaymentMethod("cod")}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={(e) => setPaymentMethod(e.target.value as "stripe" | "cod")}
                      className="mr-3"
                    />
                    <label className="font-semibold">Cash on Delivery</label>
                  </div>
                </div>
              )}

              <div className="flex gap-4 pt-6">
                {step !== "info" && (
                  <button
                    type="button"
                    onClick={() => {
                      if (step === "shipping") setStep("info");
                      else if (step === "payment") setStep("shipping");
                    }}
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:border-amber-600"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-amber-600 to-rose-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
                >
                  {step === "payment" ? "Place Order" : "Continue"}
                </button>
              </div>
            </form>
          </div>

          {/* ORDER SUMMARY */}
          <div>
            <div className="bg-white rounded-xl p-6 sticky top-24 shadow-sm">
              <h3 className="text-lg font-bold mb-6">Order Summary</h3>
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span>{item.product.name} x{item.quantity}</span>
                    <span className="font-semibold">AED {item.product.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-amber-600">AED {total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
