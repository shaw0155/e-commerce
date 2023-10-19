import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import CountrySelector from "../components/checkout/CountrySelector";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import {
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
  FilledInput,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
} from "@mui/material";
import paymentMethods from "../data/paymentMethods";
import CartCard from "../components/cart/CartCard";

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
  const [showPassword, setShowPassword] = useState(false);
  const [shipping, setShipping] = useState(0);
  const [payment, setPayment] = useState(0);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleShipping = (event, newTags) => {
    setShipping(newTags);
  };

  const handlePayment = (event, newPayment) => {
    setPayment(newPayment);
  };
  return (
    <div className="checkout">
      <div className="checkout-body">
        <div className="checkout-section">
          <div className="checkout-section-header">
            <h3 className="checkout-section-header-num">1</h3>
            <h3>Personal Details</h3>
          </div>
          <div className="checkout-section-inputs">
            <TextField label="First Name" variant="filled" />
            <TextField label="Last Name" variant="filled" />
            <TextField label="Email Address" variant="filled" />
            <TextField label="Phone Number" variant="filled" />
            <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="checkout-section">
            <div className="checkout-section-header">
              <h3 className="checkout-section-header-num">2</h3>
              <h3>Shipping Details</h3>
            </div>
            <div className="checkout-section-inputs">
              <TextField label="Street Address" variant="filled" />
              <TextField label="ZIP Code" variant="filled" />
              <TextField label="City" variant="filled" />
              <CountrySelector />
            </div>
          </div>
          <div className="checkout-section">
            <div className="checkout-section-header">
              <h3 className="checkout-section-header-num">3</h3>
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
          <div className="checkout-section">
            <div className="checkout-section-header">
              <h3 className="checkout-section-header-num">4</h3>
              <h3>payment Method</h3>
            </div>
            <ToggleButtonGroup
              exclusive
              value={payment}
              onChange={handlePayment}
              aria-label="shipping"
              className="toggle-button-group"
            >
              {paymentMethods.map((item) => (
                <ToggleButton key={item.title} value={item.title}>
                  <div className="shipping-item">
                    <div className="shipping-item-content">
                      <h4 className="shipping-item-content-title">
                        {item.title}
                      </h4>
                      <img src={item.img} alt="" />
                    </div>
                    <h5>{item.cardNo} </h5>
                  </div>
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </div>
        </div>
      </div>
      <hr />
      <CartCard />
    </div>
  );
}
