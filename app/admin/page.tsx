"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Admin() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const snapshot = await getDocs(collection(db, "orders"));
      const data = snapshot.docs.map((doc) => doc.data());
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <main className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Orders</h1>

      {orders.map((order, i) => (
        <div key={i} className="card mb-4">
          <p>Order ID: {order.sessionId}</p>
          <p>Amount: AED {order.amount / 100}</p>
        </div>
      ))}
    </main>
  );
}
