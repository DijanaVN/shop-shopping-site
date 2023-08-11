import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import apiClientDetails from "./../services/api-client-details";

export type Category = string[];

export interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
}

const usePoducts = () => {
  const fetchProducts = () =>
    apiClientDetails.get<Product[]>(`/`).then((res) => res.data);

  const searchQuery = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  console.log(searchQuery.data);
  return {
    searchQuery,
  };
};

export default usePoducts;
