import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
