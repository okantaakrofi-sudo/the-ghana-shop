export default function Home() {
  const products = [
    { id: 1, name: "Kente Cloth", price: "$50" },
    { id: 2, name: "Shea Butter", price: "$10" },
    { id: 3, name: "African Print Shirt", price: "$30" },
  ];

  return (
    <main style={{ padding: "20px" }}>
      <h1>The Ghana Shop 🇬🇭</h1>
      <h2>Products</h2>

      <div style={{ display: "grid", gap: "10px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </main>
  );
}
