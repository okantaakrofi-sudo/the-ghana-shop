import React from 'react';
import "./globals.css";
import AnnouncementBar from "../components/AnnouncementBar";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "The Ghana Shop | Authentic Organic Care UAE",
  description: "Celebrating 13 years of nature's gold in the UAE.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#F9F7F2] antialiased">
        <AnnouncementBar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}