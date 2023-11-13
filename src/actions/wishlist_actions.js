import wishlistAPI from "../services/WishlistAPI";

const token = localStorage.getItem("userToken");

export const addProductToWishlist = async (productId) => {
  if (!token) return;

  return await wishlistAPI.addProductToWishlist(productId);
};

export const removeProductFromWishlist = async (productId) => {
  if (!token) return;

  return await wishlistAPI.removeProductFromWishlist(productId);
};

export const getWishlist = async () => {
  if (!token) {
    return;
  }

  return await wishlistAPI.getWishlist();
};
