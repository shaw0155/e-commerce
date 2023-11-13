import WishlistAPI from "../services/WishlistAPI";

const token = localStorage.getItem("userToken");

export const addProductToWishlist = async (productId) => {
  if (!token) return;

  return await WishlistAPI.addProductToWishlist(productId);
};

export const removeProductFromWishlist = async (productId) => {
  if (!token) return;

  return await WishlistAPI.removeProductFromWishlist(productId);
};

export const getWishlist = async () => {
  if (!token) {
    return;
  }

  return await WishlistAPI.getWishlist();
};
