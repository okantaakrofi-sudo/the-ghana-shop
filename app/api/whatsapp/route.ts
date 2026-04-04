import { NextResponse } from 'next/server';

export async function GET() {
  const phoneNumber = "971568394640"; // Replace with your UAE WhatsApp number
  const message = encodeURIComponent("Hello! I'm interested in the Mama Ghana Hair Oil bundle.");
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // This redirects the user immediately to WhatsApp
  return NextResponse.redirect(whatsappUrl);
}
