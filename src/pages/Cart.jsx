import { Link } from "react-router-dom";
import CartCard from "../components/cart/CartCard";
import CartTable from "../components/cart/CartTable";

export default function Cart() {
  return (
    <div className="cart">
      <h2>shopping cart</h2>
      <div className="cart-body">
        <CartTable />
        <CartCard />
      </div>
      <Link to="/products" className="cart-link">
        <h5>&lt; continue shopping</h5>
      </Link>
    </div>
  );
}
