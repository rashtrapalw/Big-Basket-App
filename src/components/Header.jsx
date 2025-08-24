import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("mini_user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("mini_user");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand fs-3 fw-bold" to="/">
          BIG BASKET
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders">Orders</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
          </ul>

          {/* Right Side: Auth Buttons */}
          <div className="d-flex align-items-center">
            {user ? (
              <>
                <span className="text-white me-3">
                  Hello, <strong>{user.userName}</strong>
                </span>
                <button
                  className="btn btn-outline-light me-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
                <Link to="/dashboard" className="btn btn-warning">
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link to="/signup" className="btn btn-light me-2">
                  Signup
                </Link>
                <Link to="/login" className="btn btn-dark">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
