import React, { ReactNode, createContext, useContext, useState } from "react";
import { Product } from "../hooks/useProducts";

type FilteredProductContext = {
  filteredProduct: Product[];
  setFilteredProduct: React.Dispatch<React.SetStateAction<Product[]>>;
};

type ProductContextProps = {
  children: ReactNode;
};

const FilteredProductContext = createContext<FilteredProductContext>({
  filteredProduct: [],
  setFilteredProduct: () => {},
});

export function useFilteredProductContext() {
  const context = useContext(FilteredProductContext);
  return context;
}

export function FilteredProductProvider({ children }: ProductContextProps) {
  const [filteredProduct, setFilteredProduct] = useState<Product[]>([]);

  return (
    <FilteredProductContext.Provider
      value={{
        filteredProduct,
        setFilteredProduct,
      }}
    >
      {children}
    </FilteredProductContext.Provider>
  );
}
