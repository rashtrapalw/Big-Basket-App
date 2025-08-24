import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ userEmail: "", userPassword: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.userEmail === form.userEmail && storedUser.userPassword === form.userPassword) {
      navigate("/dashboard");
    } else {
      setError("Invalid ");
    }
  };

  return (
  <div className="container d-flex justify-content-center align-items-center " style={{ minHeight: "100vh" }}>
  <div className="card shadow-lg p-5" style={{ width: "400px" }}>
    <h2 className="text-center mb-4">Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          onChange={(e) => setForm({ ...form, userEmail: e.target.value })}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
          onChange={(e) => setForm({ ...form, userPassword: e.target.value })}
          required
        />
      </div>

      {error && <p className="text-danger small">{error}</p>}

      <button type="submit" className="btn btn-primary w-100">
        Login
      </button>
    </form>
  </div>
</div>

  );
}
