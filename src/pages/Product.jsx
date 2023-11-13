import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../actions/products_actions";
import { addProductToWishlist } from "../actions/wishlist_actions";
import { addProductToCart, getCart } from "../actions/cart_actions";
import { getWishlist } from "../actions/wishlist_actions";

import {
  Rating,
  ToggleButton,
  ToggleButtonGroup,
  Select,
  MenuItem,
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

import CircularProgress from "@mui/material/CircularProgress";

import Review from "../components/products/Review";
import ReviewList from "../components/products/ReviewList";
import ImgSlider from "../components/product/ImgSlider";
import Notification from "../utils/Notification";

const colors = ["orange", "green", "blue", "red"];
const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export default function Product() {
  const [selectedColor, setSelectedColor] = useState("red");
  const [itemNo, setItemNo] = useState(1);
  const [openNotification, setOpenNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState("");
  const [notificationType, setNotificationType] = useState("");
  const [favLoading, setFavLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);

  const productId = useLocation().pathname.replace("/products/", "");

  const { refetch: cartRefetch } = useQuery({
    queryKey: ["cartTable"],
    queryFn: getCart,
  });

  const { refetch: wishListRefetch } = useQuery({
    queryKey: ["wishTable"],
    queryFn: getWishlist,
  });

  const { isLoading, data: productData } = useQuery({
    queryKey: [`${productId}`],
    queryFn: () => getProduct(productId),
  });

  let specs;
  if (productData) {
    specs = [
      { name: "Brand", spec: productData.brand.name },
      { name: "Category", spec: productData.category.name },
      { name: "Warranty", spec: "12 Months" },
      { name: "Serial number", spec: productData._id },
      { name: "Ships From", spec: "United States" },
    ];
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNotification(false);
  };

  const handleNotification = (msg, notificationType) => {
    setOpenNotification(true);
    setNotificationMsg(msg);
    setNotificationType(notificationType);
  };

  const favouriteHandler = (e) => {
    e.preventDefault();
    setFavLoading(true);
    addProductToWishlist(productData._id)
      .then((response) => {
        wishListRefetch();
        handleNotification(response.data.message, "success");
      })
      .catch((err) => {
        handleNotification(err.response.data.message, "error");
      })
      .finally(() => {
        setFavLoading(false);
      });
  };

  const cartHandler = (e) => {
    e.preventDefault();
    setCartLoading(true);

    addProductToCart(productData._id)
      .then((response) => {
        cartRefetch();
        handleNotification(response.data.message, "success");
      })
      .catch((err) => {
        handleNotification(err.response.data.message, "error");
      })
      .finally(() => {
        setCartLoading(false);
      });
  };

  const handleColorChange = (event, newColor) => {
    if (newColor !== null) {
      setSelectedColor(newColor);
    }
  };

  const handleItemNoChange = (event) => {
    if (event.target.value !== null) {
      setItemNo(event.target.value);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="spinner-container">
          <CircularProgress />
        </div>
      ) : (
        <div className="product-container">
          <div className="product">
            <ImgSlider imgs={productData.images} />
            <div className="product-content">
              <h3>{productData.title}</h3>
              <div>
                <Rating
                  name="read-only"
                  value={productData.ratingsAverage}
                  readOnly
                  size="large"
                />
                <h6>({productData.ratingsQuantity} reviews)</h6>
              </div>
              <div>
                <h3>{productData.price}$</h3>
              </div>
              <p>{productData.description}</p>
              <h4>color</h4>
              <ToggleButtonGroup
                value={selectedColor}
                exclusive
                onChange={handleColorChange}
                aria-label="choose color"
                className="color-toggle-groups"
              >
                {colors.map((color) => (
                  <ToggleButton key={color} value={color} aria-label={color}>
                    {selectedColor === color && <CheckIcon />}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>

              <div className="product-content-btns">
                <Select
                  labelId="sort"
                  id="demo-simple-select"
                  value={itemNo}
                  onChange={handleItemNoChange}
                  defaultValue="1"
                >
                  {nums.map((num) => (
                    <MenuItem key={num} value={`${num}`}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
                <button
                  onClick={cartHandler}
                  disabled={cartLoading}
                  className="product-content-btn"
                >
                  {cartLoading ? (
                    "... loading"
                  ) : (
                    <>
                      <AddShoppingCartIcon /> add to cart
                    </>
                  )}
                </button>
                <button
                  disabled={favLoading}
                  className="product-content-link"
                  onClick={favouriteHandler}
                >
                  {favLoading ? (
                    "... loading"
                  ) : (
                    <>
                      <FavoriteOutlinedIcon /> add to favourites
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="product-details">
            <h4>Specifications</h4>
            <div className="product-details-specs">
              {specs.map((spec) => (
                <div key={`${spec.name}#${spec.spec}`}>
                  <h5>{spec.name}</h5>
                  <h5>{spec.spec}</h5>
                </div>
              ))}
            </div>
            <h4>Description</h4>
            <p>{productData.description}</p>
          </div>
          <Review />
          <ReviewList />
        </div>
      )}
      <Notification
        severity={notificationType}
        openNotification={openNotification}
        msg={notificationMsg}
        handleClose={handleClose}
      />
    </>
  );
}
