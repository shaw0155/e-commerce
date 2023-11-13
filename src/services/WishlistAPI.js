import axios from "axios";

const BASE_URL = "https://route-ecommerce.onrender.com/api/v1/wishlist";
const token = localStorage.getItem("userToken");

class WishlistAPI {
  addProductToWishlist(productId) {
    const config = {
      method: "post",
      headers: { token: token },
      url: `${BASE_URL}`,
      data: { productId: productId },
    };

    return axios(config);
  }

  removeProductFromWishlist(productId) {
    const config = {
      method: "delete",
      headers: { token: token },
      url: `${BASE_URL}/${productId}`,
    };

    return axios(config);
  }

  getWishlist() {
    const config = {
      method: "get",
      headers: { token: token },
      url: `${BASE_URL}`,
    };

    return axios(config);
  }
}

const wishlistAPI = new WishlistAPI();

export default wishlistAPI;
