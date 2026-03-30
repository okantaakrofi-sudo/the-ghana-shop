"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Dashboard() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const snap = await getDocs(collection(db, "orders"));
      setOrders(snap.docs.map((doc) => doc.data()));
    };

    load();
  }, []);

  return (
    <main className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-2xl mb-6">📊 Orders</h1>

      {orders.map((o, i) => (
        <div key={i} className="bg-neutral-900 p-4 mb-3 rounded">
          <p>Amount: AED {o.amount}</p>
        </div>
      ))}
    </main>
  );
}
