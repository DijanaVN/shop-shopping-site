import React, { ReactNode, createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Product } from "../hooks/useProducts";

type AllProductsContext = {
  allProducts: Product[];
  setAllProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

type ProductContextProps = {
  children: ReactNode;
};

const AllProductsContext = createContext<AllProductsContext>({
  allProducts: [],
  setAllProducts: () => {},
});

export function useAllProductsContext() {
  return useContext(AllProductsContext);
}

export function AllProductsProvider({ children }: ProductContextProps) {
  const [allProducts, setAllProducts] = useLocalStorage<Product[]>(
    "AllProductsStorage",
    []
  );
  useEffect(() => {
    localStorage.setItem("AllProductsStorage", JSON.stringify(allProducts));
  }, [allProducts]);

  return (
    <AllProductsContext.Provider
      value={{
        allProducts,
        setAllProducts,
      }}
    >
      {children}
    </AllProductsContext.Provider>
  );
}
