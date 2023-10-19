import ReviewCard from "./Reviewcard";
import reviews from "../../data/reviews";
import MyPagination from "../../utils/MyPagination";
export default function ReviewList() {
  return (
    <div className="product-reviewlist">
      {reviews.map((review) => (
        <div key={review.name}>
          <ReviewCard
            img={review.img}
            date={review.date}
            name={review.name}
            rate={review.rate}
          />
          <hr />
        </div>
      ))}
      <MyPagination />
    </div>
  );
}
