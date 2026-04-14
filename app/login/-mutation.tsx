import { login } from "@/service/authServices";
import { useQuery } from "@tanstack/react-query";

export const useLogin = () => {
  return useQuery({
    queryKey: ["login"],
    queryFn: login,
  });
};
