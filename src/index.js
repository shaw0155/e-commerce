import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactDOM from "react-dom/client";
import "./styles/_index.scss";
import App from "./App";
import ScrollToTop from "./utils/ScrollToTop";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderCompleted from "./pages/OrderCompleted";
import WishList from "./pages/WishList";
import Account from "./pages/Account";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ScrollToTop>
        <App />
      </ScrollToTop>
    ),
    children: [
      { path: "", element: <Home />, index: true },
      { path: "home", element: <Home /> },
      {
        path: "products",
        element: <Products />,
      },
      { path: "product", element: <Product /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "order-completed", element: <OrderCompleted /> },
      { path: "wishlist", element: <WishList /> },
      { path: "account", element: <Account /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
