import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import apiClientDetails from "./../services/api-client-details";

export interface Category {
  id: number;
  name: string;
  image: string;
}

const useCategories = () => {
  const fetchCategories = () =>
    apiClientDetails.get<Category[]>(`categories`).then((res) => res.data);

  const searchQuery = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const updateCategoryMutation = useMutation(
    (updatedCategory: Partial<Category>) => {
      const { id, ...categoryToUpdate } = updatedCategory;
      return apiClientDetails.put<Category>(
        `categories/${id}`,
        categoryToUpdate
      );
    },
    {
      onSuccess: () => {
        searchQuery.refetch();
      },
    }
  );

  console.log(searchQuery.data);
  return {
    searchQuery,
    updateCategory: updateCategoryMutation.mutate,
    isUpdating: updateCategoryMutation.isLoading,
  };
};

export default useCategories;
