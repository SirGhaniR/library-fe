import API from "./api";

export const fetchStudents = async () => {
  const data = await API.get("/students");
  return data?.data;
};
