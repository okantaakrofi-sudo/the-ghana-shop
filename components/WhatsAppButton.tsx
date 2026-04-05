export default function WhatsAppButton() {
  return (
    <a 
      href="/api/whatsapp" 
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform"
    >
      <span className="sr-only">Chat with Elorm</span>
      {/* WhatsApp Icon SVG here */}
    </a>
  );
}
