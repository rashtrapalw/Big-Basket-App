import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="container d-flex justify-content-center my-5">
  <div className="card shadow-lg p-4 text-center" style={{ maxWidth: "600px", width: "100%" }}>
    <h1 className="mb-3">{product.name}</h1>
    <img
      src={product.image}
      alt={product.name}
      className="img-fluid mb-3"
      style={{ maxHeight: "300px", objectFit: "contain" }}
    />
    <p className="text-muted">{product.description}</p>
    <p className="fw-bold">Price: ₹{product.price}</p>
    <p className={product.stock ? "text-success fw-bold" : "text-danger fw-bold"}>
      {product.stock ? "In Stock" : "Out of Stock"}
    </p>
    <button className="btn btn-primary mt-3" onClick={() => navigate("/products")}>
      Back to Products
    </button>
  </div>
</div>

  );
}
