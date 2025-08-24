import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return <Navigate to="/login" />;
  return (
    <div>
      <h1>Welcome, {user.userName}</h1>
      <p>Explore Products, Orders and Cart</p>
    </div>
  );
}
