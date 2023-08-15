import React, { ReactNode, createContext, useContext, useState } from "react";
import { NewProduct } from "../hooks/useCreateNewProduct";
import { useLocalStorage } from "../hooks/useLocalStorage";

type NewProductContext = {
  newProduct: NewProduct[];
  setNewProduct: React.Dispatch<React.SetStateAction<NewProduct[]>>;
};

type ProductContextProps = {
  children: ReactNode;
};

const NewProductContext = createContext<NewProductContext>({
  newProduct: [],
  setNewProduct: () => {},
});

export function useNewProductContext() {
  return useContext(NewProductContext);
}

export function NewProductProvider({ children }: ProductContextProps) {
  const [newProduct, setNewProduct] = useLocalStorage<NewProduct[]>(
    "NewProductStorage",
    []
  );

  console.log(newProduct);

  return (
    <NewProductContext.Provider
      value={{
        newProduct,
        setNewProduct,
      }}
    >
      {children}
    </NewProductContext.Provider>
  );
}
