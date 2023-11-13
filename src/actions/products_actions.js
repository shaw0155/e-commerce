import productsAPI from "../services/ProductsAPI";
export const getProducts = async () => {
  return await productsAPI.getAllProducts();
};

export const getProduct = async (productId) => {
  const product = await productsAPI.getProduct(productId);

  return product.data.data;
};

export const getAllCats = async () => {
  return await productsAPI.getAllCats();
};

export const getAllBrands = async () => {
  return await productsAPI.getAllBrands();
};
