export default function Cart() {
  const cart = []; // static for now
  return (
    <div style={{ alignItems: "center", textAlign: "center", marginTop: "50px" }}>
        
      <h1>Your Cart</h1>
      {cart.length === 0 ? <h3>Your cart is empty</h3> : cart.map((item) => <div key={item.id}>{item.name}</div>)}
    </div>
  );
}
