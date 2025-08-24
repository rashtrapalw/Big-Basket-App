import { Link } from "react-router-dom";
import BasketImg from "../assets/Basket.jpg"

export default function Home() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      className="d-flex flex-column justify-content-top align-items-center mt-5"
      style={{ minHeight: "100vh" }}
    >
      <h1
        className="mb-3"
        style={{ textAlign: "center", fontSize: "3rem" }}
      >
        Welcome to Big Basket App
      </h1>

      {user ? (
        <h2 className="mb-4">Hello, {user.userName} 👋</h2>
      ) : (
        <>
          <img
            style={{ maxWidth: "100%", height: "300px" }}
            src={BasketImg}
            alt="Basket"
            className="mb-4"
          />
            {/* Product button always visible */}
      <Link to="/products" className="btn btn-warning btn-lg mb-4">
        🛒 View Products
      </Link>
          <div className="mb-4">
            <Link to="/login" className="btn btn-primary me-3">
              Login
            </Link>
            <Link to="/signup" className="btn btn-success">
              Signup
            </Link>
          </div>
        </>
      )}

      
    </div>
  );
}