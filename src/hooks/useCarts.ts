import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import apiClientCarts from "../services/api-client-cart";

interface Cart {
  id: number;
  userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
}
const useCarts = () => {
  const fetchCarts = () =>
    apiClientCarts.get<Cart[]>(`/`).then((res) => res.data);

  const searchQuery = useQuery<Cart[]>({
    queryKey: ["carts"],
    queryFn: fetchCarts,
  });

  console.log(searchQuery.data);

  return {
    searchQuery: searchQuery.data,
  };
};

export default useCarts;
