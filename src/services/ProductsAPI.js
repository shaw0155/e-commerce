import axios from "axios";

const BASE_URL = "https://route-ecommerce.onrender.com/";

class ProductsAPI {
  getAllProducts() {
    const config = {
      method: "get",
      url: `${BASE_URL}api/v1/products`,
    };

    return axios(config);
  }

  getAllCats() {
    const config = {
      method: "get",
      url: `https://ecommerce.routemisr.com/api/v1/categories/`,
    };

    return axios(config);
  }

  getAllBrands() {
    const config = {
      method: "get",
      url: `https://ecommerce.routemisr.com/api/v1/brands`,
    };

    return axios(config);
  }

  getProduct(productId) {
    const config = {
      method: "get",
      url: `${BASE_URL}api/v1/products/${productId}`,
    };

    return axios(config);
  }
}
const productsAPI = new ProductsAPI();
export default productsAPI;
