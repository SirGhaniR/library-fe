import { fetchBook } from "@/service/bookService";

export const useFetchBook = () => {
  return {
    mutationFn: fetchBook,
    onSuccess: (res: any) => res,
    onError: (res: any) => res,
  };
};
