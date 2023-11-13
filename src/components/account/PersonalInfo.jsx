import {
  IconButton,
  FilledInput,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  getUserAddresses,
  addAddress,
  deleteUserAddress,
  updatePassword,
} from "../../actions/account_actions";
import Notification from "../../utils/Notification";

export default function PersonalInfo() {
  const navigate = useNavigate();
  const { isLoading: isLoadingUserAddresses, data: userAddresses } = useQuery({
    queryKey: ["userAddresses"],
    queryFn: getUserAddresses,
  });

  const [addressName, setAddressName] = useState("");
  const [city, setCity] = useState("");
  const [addressDetails, setAddressDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");
  const [processing, setProcessing] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [errMsg, setErrMsg] = useState("");

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

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSavePassword = () => {
    setProcessing(true);
    updatePassword({
      currentPassword: oldPassword,
      password: newPassword,
      rePassword: reNewPassword,
    })
      .then((response) => {
        localStorage.removeItem("userToken");
        navigate("/login");
      })
      .catch((err) => {
        handleNotification(err.response.data.message);
      })
      .finally(() => setProcessing(false));
  };

  const handleAddAddress = () => {
    setProcessing(true);
    addAddress({
      city: city,
      details: addressDetails,
      name: addressName,
      phone: phone,
    })
      .then((response) => {
        window.location.reload(); // This reloads the entire page
      })
      .catch((err) => {
        handleNotification(err.response.data.message);
      })
      .finally(() => setProcessing(false));
  };

  const handleDeleteAddress = (addressId) => {
    setProcessing(true);
    deleteUserAddress(addressId)
      .then((response) => {
        window.location.reload(); // This reloads the entire page
      })
      .catch((err) => {
        handleNotification(err.response.data.message);
      })
      .finally(() => setProcessing(false));
  };

  return (
    <>
      <div className="account-panel personalinfo">
        <div className="address-cards">
          {isLoadingUserAddresses ? (
            <div className="spinner-container">
              <CircularProgress />
            </div>
          ) : (
            userAddresses?.data.data.map((item) => (
              <div className="address-card " key={item._id}>
                <h4>
                  {item.name}
                  <button onClick={() => handleDeleteAddress(item._id)}>
                    <DeleteOutlineOutlinedIcon />
                  </button>
                </h4>
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
            ))
          )}
        </div>

        <div className="checkout-section ">
          <h3>Add Shipping Address</h3>
          <div className="checkout-section-inputs">
            <TextField
              label="Address Name"
              variant="filled"
              value={addressName}
              onChange={(e) => setAddressName(e.target.value)}
            />
            <TextField
              label="City"
              variant="filled"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              label="Address in Details"
              variant="filled"
              value={addressDetails}
              onChange={(e) => setAddressDetails(e.target.value)}
            />

            <TextField
              label="Phone"
              variant="filled"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button
            disabled={processing}
            className="personalinfo-btn"
            onClick={handleAddAddress}
          >
            {processing ? "Loading..." : "Add Address"}
          </button>
        </div>
        <div className="checkout-section ">
          <h3>change password</h3>
          <div className="checkout-section-inputs pass-section">
            <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">
                Old Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password1"
                type={showPassword ? "text" : "password"}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
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
                New Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password2"
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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
                Confirm New Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password3"
                type={showPassword ? "text" : "password"}
                value={reNewPassword}
                onChange={(e) => setReNewPassword(e.target.value)}
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
        </div>
        <button
          disabled={processing}
          className="personalinfo-btn"
          onClick={handleSavePassword}
        >
          {processing ? "Loading..." : "save Password"}
        </button>
      </div>
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
