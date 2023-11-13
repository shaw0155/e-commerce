import axios from "axios";

const BASE_URL = "https://route-ecommerce.onrender.com/api/v1/cart";
const token = localStorage.getItem("userToken");

class CartAPI {
  addProductToCart(productId) {
    const config = {
      method: "post",
      headers: { token: token },
      url: `${BASE_URL}`,
      data: { productId: productId },
    };

    return axios(config);
  }

  getCart() {
    const config = {
      method: "get",
      headers: { token: token },
      url: `${BASE_URL}`,
    };

    return axios(config);
  }

  deleteProductFromCart(productId) {
    const config = {
      method: "delete",
      headers: { token: token },
      url: `${BASE_URL}/${productId}`,
    };

    return axios(config);
  }
}

export default new CartAPI();
