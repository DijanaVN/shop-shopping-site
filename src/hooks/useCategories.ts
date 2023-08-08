import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import apiClientDetails from "./../services/api-client-details";

interface Category {
  id: number;
  name: string;
  image: string;
}

//  interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: Category;
//   images: string[];
// }

const useCategories = () => {
  const fetchProducts = () =>
    apiClientDetails.get<Category[]>(`categories`).then((res) => res.data);

  const searchQuery = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: fetchProducts,
  });
  console.log(searchQuery.data);
  return {
    searchQuery,
  };
};

export default useCategories;
