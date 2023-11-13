import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";
import ProductList from "../components/products/ProductList";
import SideNav from "../components/products/SideNav";
import MyPagination from "../utils/MyPagination";
import { getAllBrands, getProducts } from "../actions/products_actions";

export default function Products() {
  const queryClient = useQueryClient();

  const { isLoading: isLoadingBrands, data: brandData } = useQuery({
    queryKey: ["brands"],
    queryFn: getAllBrands,
  });

  const { data: productsData } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const brandItems = brandData?.data.data;
  const productItemsBefore = productsData?.data.data;

  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [trueValuesArray, setTrueValuesArray] = useState([]);
  const [productItems, setProductItems] = useState(productItemsBefore);

  useEffect(() => {
    // Scroll to the top of the page when the page changes
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    if (brandItems) {
      setSelectedCheckboxes(
        brandItems.reduce((acc, item) => {
          acc[item.name] = false;
          return acc;
        }, {})
      );
    }
  }, [brandItems]);

  useEffect(() => {
    if (selectedCheckboxes) {
      setTrueValuesArray(
        Object.entries(selectedCheckboxes)
          .filter(([_, value]) => value === true)
          .map(([title, _]) => title)
      );
    }
  }, [selectedCheckboxes]);

  useEffect(() => {
    if (trueValuesArray.length > 0) {
      setProductItems(
        productItemsBefore.filter((item) =>
          trueValuesArray.includes(item.brand.name)
        )
      );
    } else {
      setProductItems(productItemsBefore);
    }
  }, [trueValuesArray, productItemsBefore]);

  const handleCheckboxChange = (event) => {
    setSelectedCheckboxes({
      ...selectedCheckboxes,
      [event.target.name]: event.target.checked,
    });

    // Manually trigger data refetch when checkboxes change
    queryClient.invalidateQueries(["products"]);
  };

  const itemsPerPage = 16;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsForCurrentPage = productItems?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(productItems?.length / itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      {isLoadingBrands ? (
        <div className="spinner-container">
          <CircularProgress />
        </div>
      ) : (
        <div className="products container">
          <h2>Catalog</h2>
          <div className="products-body">
            <SideNav
              handleCheckboxChange={handleCheckboxChange}
              brandItems={brandItems}
              products={productItemsBefore?.slice(0, 3)}
            />
            <div className="products-body-productlist-container">
              <ProductList itemsForCurrentPage={itemsForCurrentPage} />
              <MyPagination
                page={currentPage}
                count={totalPages}
                setPage={goToPage}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
