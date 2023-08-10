import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import apiClientDetails from "./../services/api-client-details";
import { Category, Product } from "./useProducts";

const usePoductsByCategory = (category: Category) => {
  const fetchProducts = () =>
    apiClientDetails
      .get<Product[]>(`categories/${category.id}/products`)
      .then((res) => res.data);

  const searchQuery = useQuery<Product[]>({
    queryKey: ["products", category.id],
    queryFn: fetchProducts,
  });
  console.log(searchQuery.data);

  return {
    searchQuery,
  };
};

export default usePoductsByCategory;
