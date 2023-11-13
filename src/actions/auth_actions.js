import AuthAPI from "../services/AuthAPI";

export const signUp = async (data) => {
  return await AuthAPI.signUp(data);
};

export const signIn = async (data) => {
  return await AuthAPI.signIn(data);
};
