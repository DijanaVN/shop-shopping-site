import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import apiClientDetails from "../services/api-client-details";

export interface Category {
  id: number;
  name: string;
  image: string;
}

const useCategories = () => {
  const queryClient = useQueryClient();
  const fetchCategories = () =>
    apiClientDetails.get<Category[]>(`categories`).then((res) => res.data);

  const searchQuery = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const updateCategoryMutation = useMutation(
    (updatedCategory: Partial<Category>) => {
      return apiClientDetails.put<Category>(
        `categories/${updatedCategory.id}`,
        updatedCategory
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["categories"]);
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
