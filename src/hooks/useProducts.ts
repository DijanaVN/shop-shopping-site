import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import apiClientDetails from "./../services/api-client-details";
import { useNewProductContext } from "../StateManagement/NewProductContext";

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
  const { newProduct } = useNewProductContext();
  const fetchProducts = () =>
    apiClientDetails.get<Product[]>(`/`).then((res) => res.data);

  const searchQuery = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  console.log(searchQuery.data);

  const updatedProducts = searchQuery.data
    ? newProduct
      ? [...searchQuery.data, newProduct]
      : searchQuery.data
    : newProduct
    ? [newProduct]
    : [];

  console.log(updatedProducts);

  return {
    searchQuery: {
      ...searchQuery,
      data: updatedProducts,
    },
  };
};

export default usePoducts;
