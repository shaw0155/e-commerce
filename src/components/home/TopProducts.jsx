import products from "../../data/products";
import { Link } from "react-router-dom";
export default function TopProducts() {
  return (
    <div className="topproducts container">
      <h3>Top Products</h3>
      <div className="topproducts-cards">
        {products.slice(8, 12).map((item) => (
          <Link to="/product" key={item.tiltle} className="topproducts-card">
            <img src={item.img} alt="" />
            <h5>{item.tiltle}</h5>
            <h5>${item.priceAfter}</h5>
          </Link>
        ))}
      </div>
      <div className="topproducts-cards-lower">
        <div className="topproducts-card-xl">
          <img src={products[0].img} alt="" />
          <div className="topproducts-card-xl-content">
            <div>
              <h4>{products[0].tiltle}</h4>
              <h4>${products[0].priceAfter}</h4>
            </div>
            <Link to="/product" className="topproducts-card-xl-link">
              <h5>More Details &nbsp; &gt;</h5>
            </Link>
          </div>
        </div>
        <div>
          {products.slice(1, 3).map((item) => (
            <div key={item.tiltle} className="topproducts-card-l">
              <img src={item.img} alt="" />
              <div className="topproducts-card-l-content">
                <div>
                  <h5>{item.tiltle}</h5>
                  <h5>${item.priceAfter}</h5>
                </div>
                <Link to="/product" className="topproducts-card-xl-link">
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
