import axios from "axios";
import jwtDecode from "jwt-decode";

const BASE_URL = "https://ecommerce.routemisr.com/api/v1/";
const token = localStorage.getItem("userToken");

class CheckoutAPI {
  checkoutSession(links) {
    if (links) {
      const config = {
        method: "post",
        headers: { token: token },
        url: `${BASE_URL}orders/checkout-session/${links.cartId}?url=${links.url}`,
        data: { shippingAddress: links.address },
      };

      return axios(config);
    }
  }

  getUserOrders() {
    const userId = jwtDecode(localStorage.getItem("userToken")).id;
    const config = {
      method: "get",
      url: `${BASE_URL}orders/user/${userId}`,
    };

    return axios(config);
  }
}
const checkoutAPI = new CheckoutAPI();
export default checkoutAPI;
