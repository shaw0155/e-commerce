import { Rating } from "@mui/material";

export default function ReviewCard(props) {
  return (
    <div className="product-reviewcard">
      <img src={props.img} alt="" />
      <div>
        <Rating value={props.rate} readOnly size="large" />
        <h5>{props.name}</h5>
        <h6>{props.date}</h6>
        <p>She eagerly opened the gift, her eyes sparkling with excitement.</p>
      </div>
    </div>
  );
}
