import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClientDetails from "../services/api-client-details";
import { Product } from "./useProducts";

export interface NewProduct {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const useCreateNewProduct = () => {
  const queryClient = useQueryClient();
  const createNewProduct = useMutation(
    (product: NewProduct) => {
      return apiClientDetails.post(`/`, product);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["products"]);
      },
    }
  );

  return { createNewProduct: createNewProduct.mutate };
};

export default useCreateNewProduct;
