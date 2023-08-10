import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClientDetails from "./../services/api-client-details";

const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  const deleteCategoryMutation = useMutation(
    (categoryId: number) => {
      return apiClientDetails.delete<Boolean>(`categories/${categoryId}`);
    },
    {
      // This callback will be triggered after a successful mutation
      onSuccess: () => {
        // Invalidate the 'categories' query in the cache to refresh the category list
        queryClient.invalidateQueries(["categories"]);
        console.log("Category deleted successfully");
      },
      onError: (error) => {
        console.error("Error deleting category:", error);
      },
    }
  );

  return { deleteCategory: deleteCategoryMutation.mutate };
};

export default useDeleteCategory;
