import { ReactNode } from "react";
import type { Metadata } from "next";
import { CartProvider } from "./context/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luxury Beauty Store - Premium Cosmetics & Skincare in UAE",
  description: "Premium beauty and skincare products. Shop 24K gold masks, argan serums, and luxury cosmetics in UAE.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
