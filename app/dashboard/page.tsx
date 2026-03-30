"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const snapshot = await getDocs(collection(db, "products"));
      setProducts(snapshot.docs.map(doc => doc.data()));
    };

    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid gap-4">
        {products.map((p: any, i) => (
          <div key={i} className="card flex justify-between">
            <span>{p.name}</span>
            <span>AED {p.price}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
