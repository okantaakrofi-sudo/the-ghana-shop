export default function Success() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="card text-center animate-scale-in">
        <h1 className="text-3xl font-bold mb-3">
          🎉 Payment Successful
        </h1>
        <p className="text-neutral-400 mb-4">
          Thank you for your order!
        </p>

        <a href="/" className="btn-premium">
          Back to Shop
        </a>
      </div>
    </main>
  );
}
