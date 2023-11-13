import cartAPI from "../services/CartAPI";

const token = localStorage.getItem("userToken");

export const addProductToCart = async (productId) => {
  if (!token) return;
  return await cartAPI.addProductToCart(productId);
};

export const getCart = async () => {
  if (token) {
    return await cartAPI.getCart().catch((err) => null);
  }
};

export const deleteProductFromCart = async (productId) => {
  if (!token) return;
  return await cartAPI.deleteProductFromCart(productId);
};
