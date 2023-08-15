import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import apiClientDetails from "./../services/api-client-details";
import { Category, Product } from "./useProducts";
import { useNewProductContext } from "./../StateManagement/NewProductContext";

const usePoductsByCategory = (category: Category) => {
  const { newProduct } = useNewProductContext();
  const fetchProducts = () =>
    apiClientDetails
      .get<Product[]>(`category/${category}`)
      .then((res) => res.data);

  const searchQuery = useQuery<Product[]>({
    queryKey: ["category", category],
    queryFn: fetchProducts,
  });
  console.log(searchQuery.data);

  const combinedProducts: Product[] = [
    ...(searchQuery.data || []), // Spread the searchQuery data if available
    ...(newProduct || []), // Spread the newProduct data if available
  ];

  console.log(combinedProducts);

  return {
    updatedProductsInCategory: combinedProducts,
  };
};

export default usePoductsByCategory;
