import { fetchBooks } from "@/services/bookServices";
import { useQuery } from "@tanstack/react-query";

export const useFetchBooks = () => {
  return useQuery({
    queryKey: ["list_book"],
    queryFn: fetchBooks,
  });
};
