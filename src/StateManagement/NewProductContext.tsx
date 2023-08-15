import React, { ReactNode, createContext, useContext, useState } from "react";
import { NewProduct } from "../hooks/useCreateNewProduct";
import { useLocalStorage } from "../hooks/useLocalStorage";

type NewProductContext = {
  newProduct: NewProduct[];
  setNewProduct: React.Dispatch<React.SetStateAction<NewProduct[]>>;
  addNewProduct: (n: NewProduct) => void;
};

type ProductContextProps = {
  children: ReactNode;
};

const NewProductContext = createContext<NewProductContext>({
  newProduct: [],
  setNewProduct: () => {},
  addNewProduct: () => {},
});

export function useNewProductContext() {
  return useContext(NewProductContext);
}

export function NewProductProvider({ children }: ProductContextProps) {
  const [newProduct, setNewProduct] = useLocalStorage<NewProduct[]>(
    "NewProductStorage",
    []
  );

  const addNewProduct = (newProductData: NewProduct) => {
    console.log(newProduct); // Check the initial value
    setNewProduct((prevProducts) => [...prevProducts, newProductData]);
  };

  console.log(newProduct);

  return (
    <NewProductContext.Provider
      value={{
        newProduct,
        setNewProduct,
        addNewProduct,
      }}
    >
      {children}
    </NewProductContext.Provider>
  );
}
