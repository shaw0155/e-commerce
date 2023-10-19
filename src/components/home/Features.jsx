import products from "../../data/products";
import { Link } from "react-router-dom";
import CountDown from "./CountDown";

export default function Features() {
  return (
    <div className="home-features container">
      <h3>featured products</h3>
      <div className="home-features-cards">
        <div className="home-features-cards-lg">
          {products.slice(2, 4).map((item) => (
            <Link
              to="/product"
              key={item.tiltle}
              className="home-features-card home-features-card-big"
            >
              <img src={item.img} alt="" />
              <h5>{item.tiltle}</h5>
              <h4>From ${item.priceAfter}</h4>
              <CountDown />
            </Link>
          ))}
        </div>
        <div className="home-features-cards-small">
          {products.slice(4, 8).map((item) => (
            <Link
              to="/product"
              key={item.tiltle}
              className="home-features-card home-features-card-small"
            >
              <img src={item.img} alt="" />
              <h5>{item.tiltle}</h5>
              <h5>${item.priceAfter}</h5>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
