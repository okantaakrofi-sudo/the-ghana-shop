"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Serums", "Masks", "Moisturizers", "Essences", "Exfoliants", "Eye Care"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-rose-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-amber-900 via-rose-700 to-amber-900 bg-clip-text text-transparent">
            The Ghana Shop
          </h1>
          <p className="text-3xl md:text-4xl font-semibold text-amber-700 mb-6 italic">
            The Balm of Gilead
          </p>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Discover premium skincare & cosmetics crafted for perfection
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="#products"
              className="bg-gradient-to-r from-amber-600 to-rose-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition text-lg font-semibold"
            >
              Shop Collection
            </Link>
            <Link
              href="#"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-gray-400 transition text-lg font-semibold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">100% authentic luxury products</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Free delivery on orders over AED 200</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-lg font-semibold mb-2">Guaranteed Safe</h3>
            <p className="text-gray-600">Secure payment & authenticity verified</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💝</div>
            <h3 className="text-lg font-semibold mb-2">Gift Ready</h3>
            <p className="text-gray-600">Beautiful packaging included</p>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Curated Collection
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Handpicked luxury products for the discerning customer
          </p>

          {/* CATEGORY FILTER */}
          <div className="flex gap-2 mb-12 justify-center flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full transition ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-amber-600 to-rose-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* PRODUCTS GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-900 to-rose-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Exclusive VIP Membership</h2>
          <p className="text-lg mb-8 opacity-90">
            Join our VIP club and get early access to new products, exclusive discounts, and personalized beauty consultations
          </p>
          <button className="bg-white text-amber-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Become VIP Member
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">About Us</h4>
            <p className="text-gray-400 text-sm">Premium luxury beauty store for UAE</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white">Shipping</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Policies</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><Link href="#" className="hover:text-white">Privacy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms</Link></li>
              <li><Link href="#" className="hover:text-white">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm">Dubai, UAE</p>
            <p className="text-gray-400 text-sm">+971 XXXX XXXX</p>
            <p className="text-gray-400 text-sm">support@luxurybeauty.ae</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Luxury Beauty Store. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
