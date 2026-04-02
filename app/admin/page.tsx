"use client";

import Link from "next/link";
import { useState } from "react";

export default function AdminPage() {
  const [tab, setTab] = useState<"products" | "orders" | "analytics">("products");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
          <h1 className="text-3xl font-bold mb-6 text-center">Admin Login</h1>
          <button
            onClick={() => setIsLoggedIn(true)}
            className="w-full bg-gradient-to-r from-amber-600 to-rose-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition mb-3"
          >
            Login as Admin
          </button>
          <Link
            href="/"
            className="block w-full text-center border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:border-amber-600 transition"
          >
            Back to Store
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-black border-b border-gray-700 px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => setIsLoggedIn(false)}
          className="text-red-400 hover:text-red-300"
        >
          Logout
        </button>
      </nav>

      <div className="flex">
        <div className="w-64 bg-gray-800 border-r border-gray-700 p-6 space-y-2">
          {["products", "orders", "analytics"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t as any)}
              className={`w-full text-left px-4 py-3 rounded transition ${
                tab === t
                  ? "bg-gradient-to-r from-amber-600 to-rose-600"
                  : "text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            >
              {t === "products" && "📦 Products"}
              {t === "orders" && "📋 Orders"}
              {t === "analytics" && "📊 Analytics"}
            </button>
          ))}
        </div>

        <div className="flex-1 p-8">
          {tab === "products" && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Products Management</h2>
              <div className="bg-gray-800 rounded-xl p-6 text-center">
                <p className="text-gray-400">Product management coming soon</p>
              </div>
            </div>
          )}

          {tab === "orders" && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Recent Orders</h2>
              <div className="bg-gray-800 rounded-xl p-6 text-center">
                <p className="text-gray-400">No orders yet</p>
              </div>
            </div>
          )}

          {tab === "analytics" && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Analytics</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { label: "Total Sales", value: "AED 0" },
                  { label: "Orders", value: "0" },
                  { label: "Customers", value: "0" },
                  { label: "Conversion", value: "0%" },
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-800 rounded-xl p-6">
                    <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
