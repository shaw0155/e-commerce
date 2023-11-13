import { Link } from "react-router-dom";
import WishTable from "../components/wishlist/WishTable";

export default function WishList() {
  return (
    <div className="wishlist">
      <h2> wish list</h2>
      <WishTable />
      <Link to="/products" className="cart-link">
        <h5>&lt; continue shopping</h5>
      </Link>
    </div>
  );
}
