import CartTable from "../components/cart/CartTable";
import { Link } from "react-router-dom";

export default function WishList() {
  return (
    <div className="wishlist">
      <h2> wish list</h2>
      <CartTable />
      <Link to="" className="cart-link">
        <h5>&lt; continue shopping</h5>
      </Link>
    </div>
  );
}
