import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // ... rest of metadata
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F9F7F2] antialiased`}>
        {/* Top Announcement Bar */}
        <div className="bg-[#333] text-white text-[10px] md:text-xs py-2 text-center uppercase tracking-[0.2em] font-medium">
          Celebrating 13 Years in the UAE — Free Shipping on orders over 300 AED
        </div>

        <main>{children}</main>

        {/* Global Footer */}
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-6 mt-20">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Brand Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tighter">THE GHANA SHOP</h3>
              <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                Handcrafted with love, rooted in Ghanaian tradition, and perfected for our community in the UAE. 
              </p>
            </div>

            {/* Links Column */}
            <div className="grid grid-cols-2 gap-4 text-sm font-medium">
              <div className="space-y-3">
                <p className="text-gray-400 uppercase text-[10px] tracking-widest">Shop</p>
                <a href="#" className="block hover:text-[#8b5e3c]">Hair Care</a>
                <a href="#" className="block hover:text-[#8b5e3c]">Skin Care</a>
                <a href="#" className="block hover:text-[#8b5e3c]">Bundles</a>
              </div>
              <div className="space-y-3">
                <p className="text-gray-400 uppercase text-[10px] tracking-widest">Company</p>
                <a href="#" className="block hover:text-[#8b5e3c]">Our Story</a>
                <a href="#" className="block hover:text-[#8b5e3c]">Shipping</a>
                <a href="#" className="block hover:text-[#8b5e3c]">Contact</a>
              </div>
            </div>

            {/* Newsletter/Contact Column */}
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest">Stay Connected</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-[#F9F7F2] border-none rounded-full px-4 py-2 text-sm w-full focus:ring-1 focus:ring-[#8b5e3c] outline-none"
                />
                <button className="bg-[#333] text-white px-4 py-2 rounded-full text-sm font-bold">JOIN</button>
              </div>
              <p className="text-[11px] text-gray-400 uppercase tracking-widest">WhatsApp: +971 (Your Number)</p>
            </div>
          </div>

          <div className="container mx-auto mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 uppercase tracking-widest">
            <p>© 2026 The Ghana Shop. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
