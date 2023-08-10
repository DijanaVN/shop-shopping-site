import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClientDetails from "../services/api-client-details";

interface CreateNewCategory {
  name: string;
  image: string;
}

const useCreateNewCategory = () => {
  const queryClient = useQueryClient();
  const createNewCategory = useMutation(
    (category: CreateNewCategory) => {
      return apiClientDetails.post(`categories`, category);
    },
    {
      // This callback will be triggered after a successful mutation
      onSuccess: () => {
        // Invalidate the 'categories' query in the cache to refresh the category list
        queryClient.invalidateQueries(["categories"]);
      },
    }
  );

  return { createNewCategory: createNewCategory.mutate };
};

export default useCreateNewCategory;
