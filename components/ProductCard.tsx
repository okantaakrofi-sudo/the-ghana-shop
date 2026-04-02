"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { useCartStore } from "@/lib/store/cartStore";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group cursor-pointer">
      {/* IMAGE */}
      <div className="relative h-64 bg-gradient-to-br from-amber-100 to-rose-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition duration-300"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.src = "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop";
          }}
        />
        {discount > 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{discount}%
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <p className="text-white text-lg font-bold">Out of Stock</p>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* RATING */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(product.rating) ? "⭐" : "☆"}>
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>

        {/* BENEFITS */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {product.benefits.slice(0, 2).map((benefit, idx) => (
            <span
              key={idx}
              className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full"
            >
              {benefit}
            </span>
          ))}
        </div>

        {/* PRICE */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl font-bold text-amber-600">AED {product.price}</span>
          {product.originalPrice && (
            <span className="text-lg text-gray-400 line-through">AED {product.originalPrice}</span>
          )}
        </div>

        {/* BUTTONS */}
        <div className="space-y-2">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`w-full py-3 rounded-lg font-semibold transition ${
              added
                ? "bg-green-500 text-white"
                : product.inStock
                ? "bg-gradient-to-r from-amber-600 to-rose-600 text-white hover:shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {added ? "✓ Added to Cart" : "Add to Cart"}
          </button>
          <button className="w-full py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-amber-600 hover:text-amber-600 transition">
            ♥️ Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
