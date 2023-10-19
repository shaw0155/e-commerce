import categories from "../../data/categories";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <Link className="home-cats container">
      <h3>Categories</h3>
      <div className="home-cats-cards">
        {categories.map((item) => (
          <div className="home-cats-card">
            <img src={item.img} alt="" />
            <h5>{item.title}</h5>
          </div>
        ))}
      </div>
    </Link>
  );
}
