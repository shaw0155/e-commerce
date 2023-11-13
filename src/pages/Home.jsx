import Categories from "../components/home/Categories";
import Deal from "../components/home/Deal";
import Features from "../components/home/Features";
import HeaderSlick from "../components/home/HeaderSlick";
import TopProducts from "../components/home/TopProducts";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import { getProducts } from "../actions/products_actions";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { isLoading: productsLoading, data: productsData } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const productItemsAll = productsData?.data.data;

  useEffect(() => {
    // Scroll to the top of the page when the page changes
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {productsLoading ? (
        <div className="spinner-container">
          <CircularProgress />
        </div>
      ) : (
        <div className="home">
          <HeaderSlick products={productItemsAll.slice(0, 4)} />
          <Categories />
          <Deal products={productItemsAll.slice(10, 15)} />
          <Features products={productItemsAll.slice(20, 26)} />
          <TopProducts products={productItemsAll.slice(30, 38)} />
        </div>
      )}
    </>
  );
}
