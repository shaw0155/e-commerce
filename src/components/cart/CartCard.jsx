import { Link, useLocation } from "react-router-dom";
import { checkoutSession } from "../../actions/chekcout_actions";

export default function CartCard(props) {
  const cartLink = useLocation().pathname.replace("/", "") === "cart";

  const checkoutHandler = (e) => {
    e.preventDefault();

    if (!cartLink) {
      checkoutSession({
        url: window.location.href.replace("/checkout", ""),
        cartId: props.cartId,
        address: props.address,
      })
        .then((response) => {
          window.location.href = response.data.session.url;
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="cart-card">
      <h4>summary</h4>
      <div className="cart-card-summary">
        <h5>subtotal</h5>
        <h5>${props.subTotal}</h5>
        <h5>shipping</h5>
        <h5>$10.00</h5>
        <h5>Discount 15%</h5>
        <h5>-${(props.subTotal * 15) / 100}</h5>
        <h5>Tax 7%</h5>
        <h5>${(props.subTotal * 7) / 100}</h5>
      </div>
      <div className="cart-card-input-cell">
        <input type="text" placeholder="Discount Code" />
        <button>Apply</button>
      </div>
      <hr />
      <div className="cart-card-total">
        <h4>total</h4>
        <h4>
          $
          {props.subTotal -
            props.subTotal * 0.15 +
            props.subTotal * 0.07 +
            10.0}
        </h4>
      </div>

      {cartLink ? (
        <Link to="/checkout" className="cart-card-btn">
          checkout
        </Link>
      ) : (
        <button onClick={checkoutHandler} className="cart-card-btn">
          checkout
        </button>
      )}
    </div>
  );
}
