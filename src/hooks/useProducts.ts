import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import apiClientDetails from "./../services/api-client-details";
import { useNewProductContext } from "../StateManagement/NewProductContext";

export type Category = string;

export interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
}

const usePoducts = () => {
  const { newProduct } = useNewProductContext();
  const fetchProducts = () =>
    apiClientDetails.get<Product[]>(`/`).then((res) => res.data);

  const searchQuery = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  console.log(searchQuery.data);

  const combinedProducts: Product[] = [
    ...(searchQuery.data || []),
    ...(newProduct || []),
  ];

  console.log(combinedProducts);

  return {
    searchQuery: combinedProducts,
  };
};

export default usePoducts;
