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

  const updatedProductsInCategory: Product[] = searchQuery.data
    ? newProduct
      ? ([...searchQuery.data, newProduct] as Product[])
      : searchQuery.data
    : newProduct
    ? ([newProduct] as unknown as Product[])
    : [];

  console.log(updatedProductsInCategory);

  return {
    searchQuery: {
      ...searchQuery,
      data: updatedProductsInCategory,
    },
  };
};

export default usePoductsByCategory;
