import checkoutAPI from "../services/CheckoutAPI";

export const checkoutSession = async (links) => {
  return await checkoutAPI.checkoutSession(links);
};

export const getUserOrders = async (userId) => {
  return await checkoutAPI.getUserOrders(userId);
};
