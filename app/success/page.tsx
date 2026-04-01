"use client";

import { useEffect } from "react";
import { placeOrder } from "@/lib/placeOrder";
import { useCart } from "@/app/context/CartContext";

export default function SuccessPage() {
  const { cart, total } = useCart();

  useEffect(() => {
    placeOrder({
      cart,
      total,
      paymentMethod: "Stripe",
      status: "paid",
    });
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">
        ✅ Payment Successful!
      </h1>
    </div>
  );
}
