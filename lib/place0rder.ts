export async function placeOrder(orderData: any) {
  try {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!res.ok) {
      throw new Error("Failed to place order");
    }

    return await res.json();
  } catch (error) {
    console.error("Order error:", error);
    return null;
  }
}
