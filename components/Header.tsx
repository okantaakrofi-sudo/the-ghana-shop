"use client";

import Link from "next/link";
import { useCartStore } from "@/lib/store/cartStore";
import { useState } from "react";

export default function Header() {
  const { getItemCount } = useCartStore();
  const itemCount = getItemCount();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
          The Ghana Shop
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-amber-600 transition">
            Home
          </Link>
          <Link href="#products" className="text-gray-700 hover:text-amber-600 transition">
            Products
          </Link>
          <Link href="#" className="text-gray-700 hover:text-amber-600 transition">
            About
          </Link>
          <Link href="#" className="text-gray-700 hover:text-amber-600 transition">
            Contact
          </Link>
        </nav>

        {/* CART & ACCOUNT */}
        <div className="flex items-center gap-6">
          <Link
            href="/account"
            className="hidden md:block text-gray-700 hover:text-amber-600 transition"
          >
            👤 Account
          </Link>
          <Link
            href="/cart"
            className="relative bg-gradient-to-r from-amber-600 to-rose-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition font-semibold"
          >
            🛒 Cart
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {isOpen && (
        <nav className="md:hidden bg-gray-50 border-t border-gray-200 px-6 py-4 space-y-4">
          <Link href="/" className="block text-gray-700 hover:text-amber-600">
            Home
          </Link>
          <Link href="#products" className="block text-gray-700 hover:text-amber-600">
            Products
          </Link>
          <Link href="#" className="block text-gray-700 hover:text-amber-600">
            About
          </Link>
          <Link href="/account" className="block text-gray-700 hover:text-amber-600">
            Account
          </Link>
        </nav>
      )}
    </header>
  );
}
