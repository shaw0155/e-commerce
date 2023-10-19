import { Link, useLocation } from "react-router-dom";

export default function CartCard() {
  const cartLink = useLocation().pathname.replace("/", "") === "cart";

  return (
    <div className="cart-card">
      <h4>summary</h4>
      <div className="cart-card-summary">
        <h5>subtotal</h5>
        <h5>$89.09</h5>
        <h5>shipping</h5>
        <h5>$10.00</h5>
        <h5>Discount 15%</h5>
        <h5>-$16.17</h5>
        <h5>Tax</h5>
        <h5>7%</h5>
      </div>
      <div className="cart-card-input-cell">
        <input type="text" placeholder="Discount Code" />
        <button>Apply</button>
      </div>
      <hr />
      <div className="cart-card-total">
        <h4>total</h4>
        <h4>$357.09</h4>
      </div>

      <Link
        to={cartLink ? "/checkout" : "/order-completed"}
        className="cart-card-btn"
      >
        {cartLink ? "checkout" : "order now"}
      </Link>
    </div>
  );
}
