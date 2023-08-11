import React, { ReactNode, createContext, useContext, useState } from "react";
import { NewProduct } from "../hooks/useCreateNewProduct";
import { useLocalStorage } from "../hooks/useLocalStorage";

type NewProductContext = {
  newProduct: NewProduct | null;
  setNewProduct: React.Dispatch<React.SetStateAction<NewProduct | null>>;
  // onClick: (Product: NewProduct | null) => void;
};

type ProductContextProps = {
  children: ReactNode;
};

const NewProductContext = createContext<NewProductContext>({
  newProduct: null,
  setNewProduct: () => {},
  // onClick: () => {},
});

export function useNewProductContext() {
  return useContext(NewProductContext);
}

export function NewProductProvider({ children }: ProductContextProps) {
  const [newProduct, setNewProduct] = useLocalStorage<NewProduct | null>(
    "NewProductStorage",
    null
  );

  // const onClick = (Product: NewProduct| null) => {
  //   setNewProduct(Product);
  // };

  console.log(newProduct);

  return (
    <NewProductContext.Provider
      value={{
        newProduct,
        setNewProduct,
        // onClick,
      }}
    >
      {children}
    </NewProductContext.Provider>
  );
}
