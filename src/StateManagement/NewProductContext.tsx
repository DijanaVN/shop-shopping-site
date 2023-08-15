import React, { ReactNode, createContext, useContext, useState } from "react";
import { NewProduct } from "../hooks/useCreateNewProduct";
import { useLocalStorage } from "../hooks/useLocalStorage";

type NewProductContext = {
  newProduct: NewProduct[];
  setNewProduct: React.Dispatch<React.SetStateAction<NewProduct[]>>;
  addNewProduct: (newProductData: NewProduct) => void;
  updateProduct: (productId: number, updatedData: NewProduct) => void;
  deleteProduct: (productId: number) => void;
};

type ProductContextProps = {
  children: ReactNode;
};

const NewProductContext = createContext<NewProductContext>({
  newProduct: [],
  setNewProduct: () => {},
  addNewProduct: () => {},
  updateProduct: () => {},
  deleteProduct: () => {},
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
    setNewProduct((prevProducts) => [...prevProducts, newProductData]);
  };

  const updateProduct = (productId: number, updatedData: NewProduct) => {
    setNewProduct((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, ...updatedData } : product
      )
    );
  };

  const deleteProduct = (productId: number) => {
    setNewProduct((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <NewProductContext.Provider
      value={{
        newProduct,
        setNewProduct,
        addNewProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </NewProductContext.Provider>
  );
}
