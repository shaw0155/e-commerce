import { Link } from "react-router-dom";

export default function TopProducts(props) {
  return (
    <div className="topproducts container">
      <h3>Top Products</h3>
      <div className="topproducts-cards">
        {props.products.slice(0, 4).map((item) => (
          <Link
            to={`/products/${item._id}`}
            key={item._id}
            className="topproducts-card"
          >
            <img src={item.imageCover} alt="" />
            <h5>{item.title}</h5>
            <h5>${item.price}</h5>
          </Link>
        ))}
      </div>
      <div className="topproducts-cards-lower">
        <div className="topproducts-card-xl">
          <img src={props.products[5].imageCover} alt="" />
          <div className="topproducts-card-xl-content">
            <div>
              <h4>{props.products[5].title}</h4>
              <h4>${props.products[5].price}</h4>
            </div>
            <Link
              to={`/products/${props.products[5]._id}`}
              className="topproducts-card-xl-link"
            >
              <h5>More Details &nbsp; &gt;</h5>
            </Link>
          </div>
        </div>
        <div>
          {props.products.slice(6, 8).map((item) => (
            <div key={item._id} className="topproducts-card-l">
              <img src={item.imageCover} alt="" />
              <div className="topproducts-card-l-content">
                <div>
                  <h5>{item.title}</h5>
                  <h5>${item.price}</h5>
                </div>
                <Link
                  to={`/products/${item._id}`}
                  className="topproducts-card-xl-link"
                >
                  <h5>More Details &nbsp; &gt;</h5>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
