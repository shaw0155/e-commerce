import accountAPI from "../services/AccountAPI";

export const addAddress = async (data) => {
  return await accountAPI.addAddress(data);
};

export const getUserAddresses = async () => {
  return await accountAPI.getUserAddresses();
};

export const deleteUserAddress = async (addressId) => {
  return await accountAPI.deleteUserAddress(addressId);
};

export const updatePassword = async (passwords) => {
  return await accountAPI.updatePassword(passwords);
};
