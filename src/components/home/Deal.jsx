import { Link } from "react-router-dom";
import CountDown from "./CountDown";

export default function Deal(props) {
  return (
    <div className="home-deal container">
      <div className="home-deal-content">
        <h3>🔥 hot deals today</h3>
        <CountDown />
      </div>
      <div className="home-deal-cards">
        {props.products.map((item) => (
          <Link
            to={`/products/${item._id}`}
            key={item._id}
            className="home-deal-card"
          >
            <img src={item.imageCover} alt="" />
            <h6>{item.title}</h6>
            <div>
              <h5>
                <span>{item.price}$</span>
              </h5>
              <p>🔥 {item.sold} sold</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
