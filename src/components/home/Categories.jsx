import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllCats } from "../../actions/products_actions";

export default function Categories() {
  const cats = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCats,
  });

  // console.log(cats.data?.data?.data);
  const catItems = cats.data?.data?.data;

  return (
    <Link to="/products" className="home-cats container">
      <h3>Categories</h3>
      <div className="home-cats-cards">
        {catItems &&
          catItems.map((item) => (
            <div key={item._id} className="home-cats-card">
              <img src={item.image} alt="" />
              <h5>{item.name}</h5>
            </div>
          ))}
      </div>
    </Link>
  );
}
