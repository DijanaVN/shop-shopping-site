import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import apiClientDetails from "./../services/api-client-details";
import { useNewProductContext } from "../StateManagement/NewProductContext";
import { useAllProductsContext } from "../StateManagement/AllProductsContexts";
import { useEffect } from "react";

export type Category = string;

export interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  quantity: number;
  onClose: () => void;
}

const usePoducts = () => {
  const { newProduct } = useNewProductContext();
  const { allProducts, setAllProducts } = useAllProductsContext();
  const fetchProducts = () =>
    apiClientDetails
      .get<Product[]>(`/`)
      .then((res) => res.data.map((product) => ({ ...product, quantity: 0 })));

  const searchQuery = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  useEffect(() => {
    const convertedNewProducts: Product[] = newProduct.map((product) => ({
      ...product,
      quantity: 0,
      onClose: () => {
        // Implement the onClose logic here for each new product
      },
    }));

    const combinedProducts: Product[] = [
      ...(searchQuery.data || []),
      ...convertedNewProducts,
    ];
    setAllProducts(combinedProducts);
  }, [searchQuery.data, newProduct, setAllProducts]);

  return {
    searchQuery: allProducts,
  };
};

export default usePoducts;
