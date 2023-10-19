import logo from "../imgs/main/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Badge from "@mui/material/Badge";

const items = [
  { title: " home", link: "/home", key: 1 },
  { title: " products", link: "/products", key: 2 },
  { title: " product", link: "/product", key: 3 },
  { title: " order completed", link: "/order-completed", key: 4 },
  { title: " about", link: "/", key: 5 },
  { title: " contact", link: "/", key: 6 },
];

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={scrolled ? "scrolled navbar-container" : "navbar-container"}
    >
      <nav className="navbar ">
        <Link>
          <img className="logo" src={logo} alt="" />
        </Link>

        <div className={show ? "nav-links" : "nav-links hidden"}>
          {items.map((nav) => {
            return (
              <Link
                to={nav.link}
                className="nav-link"
                key={nav.key}
                onClick={() => setShow(false)}
              >
                {nav.title}
              </Link>
            );
          })}
        </div>

        <div className="nav-icons">
          <Badge badgeContent={2} color="secondary">
            <Link to="/wishlist">
              <FavoriteBorderOutlinedIcon className="navbar-sidelinks-icon" />
            </Link>
          </Badge>
          <Badge badgeContent={4} color="secondary">
            <Link to="/cart">
              <ShoppingCartOutlinedIcon className="navbar-sidelinks-icon" />
            </Link>
          </Badge>
          <Link to="/account">
            <PersonOutlineOutlinedIcon className="navbar-sidelinks-icon" />
          </Link>

          <button className="navbar-btn"> buy now</button>
          {show ? (
            <CloseIcon
              className="side-nav-icon navbar-sidelinks-icon"
              onClick={() => setShow(!show)}
            />
          ) : (
            <MenuIcon
              className="side-nav-icon navbar-sidelinks-icon"
              onClick={() => setShow(!show)}
            />
          )}
        </div>
      </nav>
    </div>
  );
}
