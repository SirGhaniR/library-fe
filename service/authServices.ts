import API from "./api";

export const login = async () => {
  const data = await API.get("/service/auth/login");
  return data?.data;
};

export const reister = async () => {
  const data = await API.get("/service/auth/register");
  return data?.data;
};
