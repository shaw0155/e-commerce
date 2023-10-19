import avatar from "../../imgs/portrait/portrait_2.jpg";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import { Tabs, Tab } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function AccountCard(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.onTabChange(newValue);
  };
  return (
    <div className="account-card">
      <div className="account-card-content-header">
        <img src={avatar} alt="" />
        <DriveFileRenameOutlineOutlinedIcon />
        <h6>change photo</h6>
      </div>
      <h5>Jayvion Simon</h5>
      <h6>nannie_abernathy70@yahoo.com</h6>
      <hr />
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderColor: "divider" }}
      >
        <Tab
          icon={<PersonOutlineOutlinedIcon />}
          iconPosition="start"
          label="Personal Info"
          {...a11yProps(0)}
        />
        <Tab
          icon={<FavoriteBorderOutlinedIcon />}
          iconPosition="start"
          label="Wishlist"
          {...a11yProps(1)}
        />

        <Tab
          icon={<StickyNote2OutlinedIcon />}
          iconPosition="start"
          label="Orders"
          {...a11yProps(2)}
        />
        <Tab
          icon={<PaymentOutlinedIcon />}
          iconPosition="start"
          label="Payments"
          {...a11yProps(3)}
        />
      </Tabs>
      <hr />
      <Link to="" className="account-card-link">
        <LogoutOutlinedIcon /> Logout
      </Link>
    </div>
  );
}
