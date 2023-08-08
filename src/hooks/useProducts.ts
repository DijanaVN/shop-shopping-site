import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import apiClientDetails from "./../services/api-client-details";

interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}
const PAGE_SIZE = 12;

const usePoducts = () => {
  const fetchProducts = ({ pageParam = 1 }) =>
    apiClientDetails
      .get<Product[]>(`products?offset=${pageParam}&limit=${PAGE_SIZE}`)
      .then((res) => res.data);

  const searchQuery = useInfiniteQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
    getNextPageParam: (lastPage) => {
      return lastPage.length === PAGE_SIZE
        ? lastPage[lastPage.length - 1].id
        : undefined;
    },
  });
  console.log(searchQuery.data);
  return {
    searchQuery,
  };
};

export default usePoducts;
