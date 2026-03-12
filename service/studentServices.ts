import API from "./api";

export const fetchStudents = async () => {
  const data = await API.get("/service/students");
  return data?.data;
};
