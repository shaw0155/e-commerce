import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
export default function ProductCardHorizontal(props) {
  return (
    <Link
      to="/product"
      className={`products-productcard products-productcard-${props.stylee} `}
    >
      <img src={props.img} alt="" />
      <div>
        <h6>{props.cat}</h6>
        <h5>{props.title}</h5>
        <div className="rate">
          <Rating name="read-only" value={props.rate} readOnly size="large" />
          <h6>{props.soldNo} sold</h6>
        </div>
        <p>{props?.P}</p>
        <div className="pricing">
          <h5>${props.priceAfter}</h5>
          {props.priceBefore ? <h5>${props.priceBefore}</h5> : null}
        </div>
      </div>
    </Link>
  );
}
