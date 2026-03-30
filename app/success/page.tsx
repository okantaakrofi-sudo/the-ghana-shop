export default function Success() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-3">
          🎉 Payment Successful
        </h1>

        <a href="/" className="bg-white text-black px-6 py-2 rounded">
          Back to Store
        </a>
      </div>
    </main>
  );
}
