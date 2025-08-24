import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="card shadow-sm m-3" style={{ width: "18rem", border: "1px solid #0e0505ff" }}>
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ height: "200px", objectFit: "cover", }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted">₹{product.price}</p>
        <p
          className={`fw-bold ${
            product.stock ? "text-success" : "text-danger"
          }`}
        >
          {product.stock ? "In Stock" : "Out of Stock"}
        </p>
        <Link to={`/products/${product.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
}
