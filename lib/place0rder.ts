export async function placeOrder(order: any) {
  console.log("Order placed:", order);
}
  try {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    return await res.json();
  } catch (error) {
    console.error("Order error:", error);
  }
}
