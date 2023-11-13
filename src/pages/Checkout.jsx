import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CartCard from "../components/cart/CartCard";
import { getUserAddresses } from "../actions/account_actions";
import { getCart } from "../actions/cart_actions";

const shippingMethods = [
  {
    title: "free",
    period: "5-7",
    icon: <DeliveryDiningOutlinedIcon className="shipping-item-icon" />,
    price: 0,
  },
  {
    title: "standard",
    period: "3-5",
    icon: <LocalShippingOutlinedIcon className="shipping-item-icon" />,
    price: 10,
  },
  {
    title: "express",
    period: "2-3",
    icon: <RocketLaunchOutlinedIcon className="shipping-item-icon" />,
    price: 20,
  },
];

export default function Checkout() {
  const { isLoading: isLoadingUserAddresses, data: userAddresses } = useQuery({
    queryKey: ["userAddresses"],
    queryFn: getUserAddresses,
  });
  const { isLoading: isLoadingCart, data: cartData } = useQuery({
    queryKey: ["cartTable"],
    queryFn: getCart,
  });
  const products = cartData?.data.data.products;

  const [shipping, setShipping] = useState(0);
  const [address, setAddress] = useState(0);
  const [subTotal, setSubTotal] = useState();

  useEffect(() => {
    setSubTotal(
      products
        ?.map((product) => product.price)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    );
  }, [products]);

  const handleAddress = (event, addressId) => {
    setAddress(addressId);
  };

  const handleShipping = (event, newShipping) => {
    setShipping(newShipping);
  };

  return (
    <>
      {isLoadingUserAddresses || isLoadingCart ? (
        <div className="spinner-container">
          <CircularProgress />
        </div>
      ) : (
        <div className="checkout">
          <div className="checkout-body">
            <div className="checkout-section">
              <div className="checkout-section-header">
                <h3 className="checkout-section-header-num">1</h3>
                <h3>Personal Details</h3>
              </div>
              <ToggleButtonGroup
                exclusive
                value={address}
                onChange={handleAddress}
                className="toggle-button-group"
              >
                {userAddresses?.data.data.map((item) => (
                  <ToggleButton
                    value={userAddresses?.data.data.indexOf(item)}
                    key={item._id}
                  >
                    <div className="address-card " key={item._id}>
                      <h4>{item.name}</h4>
                      <h6>
                        <LocationOnOutlinedIcon />
                        {item.city}
                      </h6>
                      <h6>
                        <HomeOutlinedIcon />
                        {item.details}
                      </h6>
                      <h6>
                        <LocalPhoneOutlinedIcon />
                        {item.phone}
                      </h6>
                    </div>
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
              <div className="checkout-section">
                <div className="checkout-section-header">
                  <h3 className="checkout-section-header-num">2</h3>
                  <h3>Shipping Method</h3>
                </div>
                <ToggleButtonGroup
                  exclusive
                  value={shipping}
                  onChange={handleShipping}
                  aria-label="shipping"
                  className="toggle-button-group"
                >
                  {shippingMethods.map((item) => (
                    <ToggleButton key={item.title} value={item.price}>
                      <div className="shipping-item">
                        <div className="shipping-item-content">
                          <div className="">
                            {item.icon}
                            <h4 className="shipping-item-content-title">
                              {item.title}
                            </h4>
                          </div>

                          <h4>{item.price}$</h4>
                        </div>
                        <h5>{item.period} days delivery</h5>
                      </div>
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </div>
            </div>
          </div>
          <hr />
          <CartCard
            subTotal={subTotal + shipping}
            cartId={cartData?.data.data._id}
            address={userAddresses?.data.data[address]}
          />
        </div>
      )}
    </>
  );
}
