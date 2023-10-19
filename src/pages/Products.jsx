import ProductList from "../components/products/ProductList";
import SideNav from "../components/products/SideNav";
import MyPagination from "../utils/MyPagination";

export default function Products() {
  return (
    <div className="products container">
      <h2>Catalog</h2>
      <div className="products-body">
        <SideNav />
        <div className="products-body-productlist-container">
          <ProductList />
          <MyPagination />
        </div>
      </div>
    </div>
  );
}
