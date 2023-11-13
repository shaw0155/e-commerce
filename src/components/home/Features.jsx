import { Link } from "react-router-dom";
import CountDown from "./CountDown";

export default function Features(props) {
  return (
    <div className="home-features container">
      <h3>featured products</h3>
      <div className="home-features-cards">
        <div className="home-features-cards-lg">
          {props.products.slice(0, 2).map((item) => (
            <Link
              to={`/products/${item._id}`}
              key={item._id}
              className="home-features-card home-features-card-big"
            >
              <img src={item.imageCover} alt="" />
              <h5>{item.title}</h5>
              <h4>From ${item.price}</h4>
              <CountDown />
            </Link>
          ))}
        </div>
        <div className="home-features-cards-small">
          {props.products.slice(2, 6).map((item) => (
            <Link
              to={`/products/${item._id}`}
              key={item._id}
              className="home-features-card home-features-card-small"
            >
              <img src={item.imageCover} alt="" />
              <h5>{item.title}</h5>
              <h5>
                $ <span>{item.price}</span>
              </h5>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
