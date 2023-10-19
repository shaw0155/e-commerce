import { Link } from "react-router-dom";

export default function OrderCompleted() {
  return (
    <div className="oredercompleted">
      <div className="oredercompleted-icon">🎉</div>
      <h1>Your order is complete!</h1>
      <p>You will be receiving a confirmation email with order details.</p>
      <Link to="/products" className="oredercompleted-link">
        &lt; continue shopping
      </Link>
    </div>
  );
}
