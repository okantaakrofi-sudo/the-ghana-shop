export default function Home() {
  const products = [
    { id: 1, name: "Kente Cloth", price: "$50" },
    { id: 2, name: "Shea Butter", price: "$10" },
    { id: 3, name: "African Print Shirt", price: "$30" },
  ];

  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      
      {/* Header */}
      <header style={{
        background: "#111",
        color: "#fff",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between"
      }}>
        <h1>The Ghana Shop 🇬🇭</h1>
        <button style={{
          background: "#facc15",
          border: "none",
          padding: "8px 12px",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Cart 🛒
        </button>
      </header>

      {/* Hero Section */}
      <section style={{
        padding: "40px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          Authentic Ghanaian Products
        </h2>
        <p style={{ color: "#555" }}>
          Shop quality items from Ghana 🇬🇭
        </p>
      </section>

      {/* Products */}
      <section style={{
        padding: "20px 40px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px"
      }}>
        {products.map((product) => (
          <div key={product.id} style={{
            background: "#fff",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
          }}>
            
            <div style={{
              height: "120px",
              background: "#eee",
              borderRadius: "8px",
              marginBottom: "10px"
            }} />

            <h3>{product.name}</h3>
            <p style={{ fontWeight: "bold" }}>{product.price}</p>

            <button style={{
              marginTop: "10px",
              width: "100%",
              background: "#16a34a",
              color: "#fff",
              border: "none",
              padding: "8px",
              borderRadius: "6px",
              cursor: "pointer"
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </section>

    </main>
  );
}
