import CartAPI from "../services/CartAPI";

const token = localStorage.getItem("userToken");

export const addProductToCart = async (productId) => {
  if (!token) return;
  return await CartAPI.addProductToCart(productId);
};

export const getCart = async () => {
  if (token) {
    return await CartAPI.getCart().catch((err) => null);
  }
};

export const deleteProductFromCart = async (productId) => {
  if (!token) return;
  return await CartAPI.deleteProductFromCart(productId);
};
