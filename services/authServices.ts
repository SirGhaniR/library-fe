import API from "./api";

export const login = async (data: { email: string; password: string }) => {
  const response = await API.post("/auth/login");
  return response?.data;
};

export const register = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  const response = await API.post("/auth/register");
  return response?.data;
};
