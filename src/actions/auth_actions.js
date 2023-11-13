import authAPI from "../services/AuthAPI";

export const signUp = async (data) => {
  return await authAPI.signUp(data);
};

export const signIn = async (data) => {
  return await authAPI.signIn(data);
};
