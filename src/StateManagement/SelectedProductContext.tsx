import React, { ReactNode, createContext, useContext, useState } from "react";
import { Product } from "../hooks/useProducts";

type SelectedProductContext = {
  selectedProduct: Product | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>;
  onClick: (Product: Product | null) => void;
};

type ProductContextProps = {
  children: ReactNode;
};

const SelectedProductContext = createContext<SelectedProductContext>({
  selectedProduct: null,
  setSelectedProduct: () => {},
  onClick: () => {},
});

export function useSelectedProductContext() {
  return useContext(SelectedProductContext);
}

export function SelectedProductProvider({ children }: ProductContextProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const onClick = (Product: Product | null) => {
    setSelectedProduct(Product);
  };

  return (
    <SelectedProductContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        onClick,
      }}
    >
      {children}
    </SelectedProductContext.Provider>
  );
}
