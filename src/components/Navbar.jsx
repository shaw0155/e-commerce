import logo from "../imgs/main/logo.png";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Badge from "@mui/material/Badge";
import { getCart } from "../actions/cart_actions";
import { getWishlist } from "../actions/wishlist_actions";

const items = [
  { title: " home", link: "/home", key: 1 },
  { title: " products", link: "/products", key: 2 },
  { title: " about", link: "/", key: 5 },
  { title: " contact", link: "/", key: 6 },
];

const accessToken = localStorage.getItem("userToken");

export default function Navbar() {
  const { data: cartData } = useQuery({
    queryKey: ["cartTable"],
    queryFn: getCart,
  });
  const cartProducts = cartData?.data.data.products;

  const { data: wishlistData } = useQuery({
    queryKey: ["wishTable"],
    queryFn: getWishlist,
  });
  const wishlistProducts = wishlistData?.data.data;

  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState();
  const [wishlistCount, setWishlistCount] = useState();

  useEffect(() => {
    setWishlistCount(wishlistProducts?.length);

    if (!cartProducts && localStorage.getItem("userToken")) {
      setCartCount(0);
    } else if (!localStorage.getItem("userToken")) {
      return;
    } else {
      setCartCount(cartProducts?.length);
    }
  }, [wishlistProducts, cartProducts]);

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
          <Badge badgeContent={wishlistCount} color="secondary">
            <Link to={accessToken ? "/wishlist" : "/login"}>
              <FavoriteBorderOutlinedIcon className="navbar-sidelinks-icon" />
            </Link>
          </Badge>
          <Badge badgeContent={cartCount} color="secondary">
            <Link to={accessToken ? "/cart" : "/login"}>
              <ShoppingCartOutlinedIcon className="navbar-sidelinks-icon" />
            </Link>
          </Badge>
          <Link to={accessToken ? "/account" : "/login"}>
            <PersonOutlineOutlinedIcon className="navbar-sidelinks-icon" />
          </Link>

          <Link to="/products" className="navbar-btn">
            buy now
          </Link>
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
