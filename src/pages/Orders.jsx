export default function Orders() {
  const orders = [
    { id: 1, items: ["Laptop", "Mouse"], total: 50800, status: "Delivered" },
    { id: 2, items: ["Smartphone", "Headphones"], total: 22000, status: "Pending" },
    { id: 3, items: ["Chair", "Table"], total: 11500, status: "Shipped" },
  ];
  return (
    <div className="container my-4">
      {orders.map((o) => (
        <div key={o.id} style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
          <h3>Order #{o.id}</h3>
          <p>Items: {o.items.join(", ")}</p>
          <p>Total: ₹{o.total}</p>
          <p>Status: {o.status}</p>
        </div>
      ))}
    </div>
  );
}
