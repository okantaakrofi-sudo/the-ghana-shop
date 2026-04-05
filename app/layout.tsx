import React from 'react';
import "./globals.css";
import AnnouncementBar from "../components/AnnouncementBar";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "The Ghana Shop | Authentic Organic Care",
  description: "Celebrating 13 Years in the UAE. Handcrafted Ghanaian oils.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AnnouncementBar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}