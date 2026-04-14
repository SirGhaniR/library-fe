import API from "./api";

export const fetchBooks = async () => {
  const data = await API.get("/books");
  return data?.data;
};
