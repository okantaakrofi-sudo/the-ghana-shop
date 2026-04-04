import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items, customerEmail, totalAmount } = body;

    // 1. Here you would normally connect to a database (like Supabase or MongoDB)
    // to save the order for The Ghana Shop records.
    console.log("New Order Received for:", customerEmail);
    console.log("Total Amount:", totalAmount, "AED");

    // 2. Integration: You could trigger an email to yourself here 
    // to notify you of the new 150 AED Hair Oil sale.

    return NextResponse.json({ 
      success: true, 
      message: "Order initiated",
      orderId: `GH-${Math.floor(Math.random() * 10000)}` 
    });

  } catch (error) {
    return NextResponse.json({ success: false, error: "Checkout failed" }, { status: 500 });
  }
}
