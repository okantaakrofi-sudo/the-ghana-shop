export default function Home() {
  const products = [
    { id: 1, name: "Kente Cloth", price: "$50" },
    { id: 2, name: "Shea Butter", price: "$10" },
    { id: 3, name: "African Print Shirt", price: "$30" },
  ];

  return (
    <main className="bg-gray-100 min-h-screen">

      {/* Header */}
      <header className="bg-black text-white flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">The Ghana Shop 🇬🇭</h1>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300">
          Cart 🛒
        </button>
      </header>

      {/* Hero */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold mb-2">
          Authentic Ghanaian Products
        </h2>
        <p className="text-gray-600">
          Shop quality items from Ghana 🇬🇭
        </p>
      </section>

      {/* Products */}
      <section className="px-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="h-32 bg-gray-200 rounded mb-3"></div>

            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-green-600 font-bold">{product.price}</p>

            <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500">
              Add to Cart
            </button>
          </div>
        ))}
      </section>

    </main>
  );
}
