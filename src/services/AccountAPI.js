import axios from "axios";

const BASE_URL = "https://ecommerce.routemisr.com/api/v1/";
const token = localStorage.getItem("userToken");

class AccountAPI {
  addAddress(userData) {
    const config = {
      method: "post",
      headers: { token: token },
      url: `${BASE_URL}addresses`,
      data: userData,
    };

    return axios(config);
  }

  getUserAddresses() {
    const config = {
      method: "get",
      headers: { token: token },
      url: `${BASE_URL}addresses`,
    };

    return axios(config);
  }

  deleteUserAddress(addressId) {
    const config = {
      method: "delete",
      headers: { token: token },
      url: `${BASE_URL}addresses/${addressId}`,
    };

    return axios(config);
  }

  updatePassword(passwords) {
    const config = {
      method: "put",
      headers: { token: token },
      url: `${BASE_URL}users/changeMyPassword`,
      data: passwords,
    };

    return axios(config);
  }
}
const accountAPI = new AccountAPI();

export default accountAPI;
