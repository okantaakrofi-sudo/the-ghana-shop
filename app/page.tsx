import { useState } from "react"; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { Input } from "@/components/ui/input"; import { motion } from "framer-motion";

const deliveryFees = { dubai: 5, abudhabi: 7, sharjah: 6, other: 10, };

const productsData = [ { id: 1, name: "Shea Butter Face Cream", price: 25, image: "/branding/products.png" }, { id: 2, name: "Black Soap Cleanser", price: 18, image: "/branding/products.png" }, { id: 3, name: "Herbal Hair Oil", price: 30, image: "/branding/products.png" }, { id: 4, name: "Coconut Hair Mask", price: 22, image: "/branding/products.png" }, ];

export default function GhanaShopPremium() { const [cart, setCart] = useState([]); const [showCheckout, setShowCheckout] = useState(false); const [orders, setOrders] = useState([]); const [form, setForm] = useState({ name: "", phone: "", address: "", city: "dubai", payment: "cod" });

const addToCart = (product) => setCart([...cart, product]);

const subtotal = cart.reduce((sum, item) => sum + item.price, 0); const delivery = deliveryFees[form.city] || 0; const total = subtotal + delivery;

const handleCheckout = () => { if (cart.length === 0) return alert("Cart is empty"); setShowCheckout(true); };

const submitOrder = () => { const order = { ...form, items: cart, total }; setOrders([...orders, order]);

const message = `New Order%0AName: ${form.name}%0ACity: ${form.city}%0ATotal: $${total}`;
window.open(`https://wa.me/971XXXXXXXXX?text=${message}`);

setCart([]);
setShowCheckout(false);

};

return ( <div className="p-6 space-y-10"> <h1 className="text-3xl font-bold">The Ghana Shop 🌿</h1>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="md:col-span-2 grid grid-cols-2 gap-4">
      {productsData.map((p) => (
        <Card key={p.id}>
          <CardContent>
            <img src={p.image} className="h-32 w-full object-cover" />
            <h2>{p.name}</h2>
            <p>${p.price}</p>
            <Button onClick={() => addToCart(p)}>Add</Button>
          </CardContent>
        </Card>
      ))}
    </div>

    <div>
      <Card>
        <CardContent>
          <h2>Cart</h2>
          {cart.map((item, i) => (
            <p key={i}>{item.name}</p>
          ))}
          <p>Subtotal: ${subtotal}</p>
          <p>Delivery: ${delivery}</p>
          <p>Total: ${total}</p>
          <Button onClick={handleCheckout}>Checkout</Button>
        </CardContent>
      </Card>
    </div>
  </div>

  {/* Checkout */}
  {showCheckout && (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded space-y-3">
        <input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})} />
        <input placeholder="Phone" onChange={(e)=>setForm({...form,phone:e.target.value})} />

        <select onChange={(e)=>setForm({...form,city:e.target.value})}>
          <option value="dubai">Dubai</option>
          <option value="abudhabi">Abu Dhabi</option>
          <option value="sharjah">Sharjah</option>
          <option value="other">Other</option>
        </select>

        <p>Delivery: ${delivery}</p>
        <p>Total: ${total}</p>

        <Button onClick={submitOrder}>Place Order</Button>
      </div>
    </div>
  )}

  {/* Orders Dashboard */}
  <div>
    <h2 className="text-xl font-bold">Orders</h2>
    {orders.map((o, i) => (
      <div key={i} className="border p-2">
        <p>{o.name} - ${o.total}</p>
      </div>
    ))}
  </div>
</div>

); }
