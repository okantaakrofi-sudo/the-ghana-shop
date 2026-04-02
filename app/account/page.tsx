"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { useState } from "react";

export default function AccountPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tab, setTab] = useState<"profile" | "orders" | "wishlist">("profile");

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="max-w-md mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-center mb-8">My Account</h1>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <p className="text-gray-600 mb-6">Sign in to access your account</p>
              <button
                onClick={() => setIsLoggedIn(true)}
                className="w-full bg-gradient-to-r from-amber-600 to-rose-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition mb-3"
              >
                Sign In
              </button>
              <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:border-amber-600 transition">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">My Account</h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-red-600 hover:text-red-700 font-semibold"
          >
            Sign Out
          </button>
        </div>

        {/* TABS */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          {["profile", "orders", "wishlist"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t as any)}
              className={`px-6 py-4 font-semibold border-b-2 transition ${
                tab === t
                  ? "border-amber-600 text-amber-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              {t === "profile" && "👤 Profile"}
              {t === "orders" && "📦 Orders"}
              {t === "wishlist" && "♥️ Wishlist"}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="bg-gray-50 rounded-xl p-8">
          {tab === "profile" && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="w-full max-w-md border border-gray-300 rounded-lg p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="john@example.com"
                  className="w-full max-w-md border border-gray-300 rounded-lg p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  defaultValue="+971XXXXXXXXX"
                  className="w-full max-w-md border border-gray-300 rounded-lg p-3"
                />
              </div>
              <button className="bg-gradient-to-r from-amber-600 to-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">
                Save Changes
              </button>
            </div>
          )}

          {tab === "orders" && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-6">You haven't placed any orders yet</p>
              <Link
                href="/"
                className="inline-block bg-gradient-to-r from-amber-600 to-rose-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Start Shopping
              </Link>
            </div>
          )}

          {tab === "wishlist" && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Your wishlist is empty</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
