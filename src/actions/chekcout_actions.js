import CheckoutAPI from "../services/CheckoutAPI";

export const checkoutSession = async (links) => {
  return await CheckoutAPI.checkoutSession(links);
};

export const getUserOrders = async (userId) => {
  return await CheckoutAPI.getUserOrders(userId);
};
