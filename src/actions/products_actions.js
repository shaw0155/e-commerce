import ProductsAPI from "../services/ProductsAPI";
export const getProducts = async () => {
  return await ProductsAPI.getAllProducts();
};

export const getProduct = async (productId) => {
  const product = await ProductsAPI.getProduct(productId);

  return product.data.data;
};

export const getAllCats = async () => {
  return await ProductsAPI.getAllCats();
};

export const getAllBrands = async () => {
  return await ProductsAPI.getAllBrands();
};
