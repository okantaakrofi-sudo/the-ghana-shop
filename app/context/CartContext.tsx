"use client";

import { createContext, useContext, ReactNode } from "react";
import { useCartStore } from "@/lib/store/cartStore";
import { CartItem, Product } from "@/types";

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const { items, addItem, removeItem, updateQuantity, clearCart, getTotal } = useCartStore();

  return (
    <CartContext.Provider
      value={{
        cart: items,
        addToCart: (product) => addItem(product),
        removeItem,
        updateQuantity,
        clearCart,
        total: getTotal(),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};