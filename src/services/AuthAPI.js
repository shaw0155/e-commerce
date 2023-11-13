import axios from "axios";

const BASE_URL = "https://ecommerce.routemisr.com/api/v1/auth/";

class AuthAPI {
  signUp(userData) {
    const config = {
      method: "post",
      url: `${BASE_URL}signup`,
      data: userData,
    };

    return axios(config);
  }
  signIn(userData) {
    const config = {
      method: "post",
      url: `${BASE_URL}signin`,
      data: userData,
    };

    return axios(config);
  }
}
const authAPI = new AuthAPI();

export default authAPI;
