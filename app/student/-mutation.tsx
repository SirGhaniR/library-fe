import { fetchStudents } from "@/service/studentServices";
import { useQuery } from "@tanstack/react-query";

export const useFetchStudents = () => {
  return useQuery({
    queryKey: ["list_student"],
    queryFn: fetchStudents,
  });
};
