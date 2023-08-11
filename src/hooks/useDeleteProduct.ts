import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClientDetails from "../services/api-client-details";

const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  const deleteProductMutation = useMutation(
    (ProductId: number) => {
      return apiClientDetails.delete<Boolean>(`products/${ProductId}`);
    },
    {
      // This callback will be triggered after a successful mutation
      onSuccess: () => {
        // Invalidate the 'categories' query in the cache to refresh the Product list
        queryClient.invalidateQueries(["products"]);
        console.log("Product deleted successfully");
      },
      onError: (error) => {
        console.error("Error deleting Product:", error);
      },
    }
  );

  return { deleteProduct: deleteProductMutation.mutate };
};

export default useDeleteProduct;
