import { useQuery } from "@tanstack/react-query";
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

  const isLoading = searchQuery.isLoading;

  const convertedNewProducts: Product[] = newProduct.map((product) => ({
    ...product,
    onClose: () => {},
  }));

  const combinedProducts: Product[] = [
    ...(searchQuery.data || []),
    ...convertedNewProducts,
  ];

  return {
    updatedProductsInCategory: combinedProducts,
    isLoading,
  };
};
export default usePoductsByCategory;
