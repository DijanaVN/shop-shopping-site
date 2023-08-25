import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClientDetails from "../services/api-client-details";

export interface NewProduct {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  category: string;
  quantity: number;
}

const useCreateNewProduct = () => {
  //   const queryClient = useQueryClient();
  //   const createNewProduct = useMutation(
  //     (product: NewProduct[]) => {
  //       return apiClientDetails.post(`/`, product);
  //     },
  //     {
  //       onSuccess: () => {
  //         queryClient.invalidateQueries(["products"]);
  //       },
  //     }
  //   );
  //   return { createNewProduct: createNewProduct.mutate };
};

export default useCreateNewProduct;
