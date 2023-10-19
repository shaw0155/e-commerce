import { useState, useEffect } from "react";
import products from "../../data/products";
import { Link } from "react-router-dom";
import CountDown from "./CountDown";

export default function Deal() {
  const [countdown, setCountdown] = useState({
    hours: 24,
    minutes: 16,
    seconds: 0,
  });

  const { hours, minutes, seconds } = countdown;
  useEffect(() => {
    const timer = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timer);
        // You can perform an action when the timer reaches 0.
      } else if (minutes === 0 && seconds === 0) {
        setCountdown({
          hours: hours - 1,
          minutes: 59,
          seconds: 59,
        });
      } else if (seconds === 0) {
        setCountdown({
          hours,
          minutes: minutes - 1,
          seconds: 59,
        });
      } else {
        setCountdown({
          hours,
          minutes,
          seconds: seconds - 1,
        });
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [hours, minutes, seconds]);

  return (
    <div className="home-deal container">
      <div className="home-deal-content">
        <h3>🔥 hot deals today</h3>
        <CountDown />
      </div>
      <div className="home-deal-cards">
        {products.slice(0, 6).map((item) => (
          <Link to="/product" key={item.tiltle} className="home-deal-card">
            <img src={item.img} alt="" />
            <h6>{item.tiltle}</h6>
            <div>
              <h5>
                <span>{item.priceAfter}</span>
              </h5>
              <p>🔥 {item.soldNo} sold</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
