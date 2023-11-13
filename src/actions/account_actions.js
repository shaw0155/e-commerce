import AccountAPI from "../services/AccountAPI";

export const addAddress = async (data) => {
  return await AccountAPI.addAddress(data);
};

export const getUserAddresses = async () => {
  return await AccountAPI.getUserAddresses();
};

export const deleteUserAddress = async (addressId) => {
  return await AccountAPI.deleteUserAddress(addressId);
};

export const updatePassword = async (passwords) => {
  return await AccountAPI.updatePassword(passwords);
};
