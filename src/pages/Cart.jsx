import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import CartCard from "../components/cart/CartCard";
import CartTable from "../components/cart/CartTable";
import { getCart, deleteProductFromCart } from "../actions/cart_actions";
import Notification from "../utils/Notification";
import CircularProgress from "@mui/material/CircularProgress";

import { useEffect, useState } from "react";

export default function Cart() {
  const { isLoading, data: cartData } = useQuery({
    queryKey: ["cartTable"],
    queryFn: getCart,
  });
  const queryClient = useQueryClient();
  const products = cartData?.data.data.products;

  const [openNotification, setOpenNotification] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [itemNo, setItemNo] = useState(1);
  const [subTotal, setSubTotal] = useState();

  useEffect(() => {
    setSubTotal(
      products
        ?.map((product) => product.price)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    );
  }, [products]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNotification(false);
  };

  const handleNotification = (errMsg) => {
    setOpenNotification(true);
    setErrMsg(errMsg);
  };

  const handleItemNoChange = (event) => {
    if (event.target.value !== null) {
      setItemNo(event.target.value);
    }
  };

  const handleRemoveRow = (id) => {
    setIsDeleting(true);
    deleteProductFromCart(id)
      .then((response) => {
        queryClient.invalidateQueries("cartTable");
      })
      .catch((err) => {
        handleNotification(err.response.data.message);
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  return (
    <>
      {isLoading || isDeleting ? (
        <div className="spinner-container">
          <CircularProgress />
        </div>
      ) : (
        <div className="cart">
          <h2>shopping cart</h2>
          <div className="cart-body">
            <div className="cartTable-container">
              <CartTable
                itemNo={itemNo}
                handleItemNoChange={handleItemNoChange}
                products={products}
                handleRemoveRow={handleRemoveRow}
              />
            </div>
            <CartCard subTotal={subTotal} />
          </div>
          <Link to="/products" className="cart-link">
            <h5>&lt; continue shopping</h5>
          </Link>
        </div>
      )}
      {openNotification && (
        <Notification
          severity="error"
          openNotification={openNotification}
          msg={errMsg}
          handleClose={handleClose}
        />
      )}
    </>
  );
}
