"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState([]);

  const addToCart = (product: any) => {
    setCart((prev: any) => [...prev, product]);
  };

  const total = cart.reduce((sum: number, item: any) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
