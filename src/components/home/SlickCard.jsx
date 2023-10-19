import { Link } from "react-router-dom";

export default function SlickCard(props) {
  return (
    <div className="home-slickcard">
      <div className="home-slickcard-content">
        <h5>opening sale discount 50%</h5>
        <h3>{props.title}</h3>
        <p>
          Et non omnis qui. Qui sunt deserunt dolorem aut velit cumque adipisci
          aut enim. Nihil quis quisquam nesciunt dicta nobis ab aperiam dolorem
          repellat.
        </p>
        <Link to="/products" className="home-slickcard-btn">
          Shop Now &nbsp; &gt;
        </Link>
      </div>
      <img src={props.img} alt="" />
    </div>
  );
}
