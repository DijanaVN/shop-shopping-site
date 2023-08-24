import React, { ReactNode, createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Cart } from "../hooks/useCarts";
import { Product } from "../hooks/useProducts";
import { useUserSignInContext } from "./SignInUserContext";
import { useAllCartsContext } from "./AllCartsContext";
import { generateRandomUniqueUri } from "../components/GenerateRandomNumberForId";

type NewCartContext = {
  newCart: Cart[];
  setNewCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  handleAddToCart: (selectedProduct: Product, quantity: number) => void;
};

type CartContextProps = {
  children: ReactNode;
};

const NewCartContext = createContext<NewCartContext>({
  newCart: [],
  setNewCart: () => {},
  handleAddToCart: () => {},
});

export function useNewCartContext() {
  return useContext(NewCartContext);
}

export function NewCartProvider({ children }: CartContextProps) {
  const { addNewCart } = useAllCartsContext();
  const [newCart, setNewCart] = useLocalStorage<Cart[]>("NewCartStorage", []);

  const handleAddToCart = (selectedProduct: Product, quantity: number) => {
    const { userSignIn } = useUserSignInContext();
    if (userSignIn) {
      const cartItem = {
        id: generateRandomUniqueUri(),
        userId: userSignIn.id,
        date: new Date().toISOString(),
        products: [{ productId: selectedProduct.id, quantity }],
      };
      addNewCart(cartItem);
    } else {
      // Handle case when user is not signed in
    }
  };

  return (
    <NewCartContext.Provider
      value={{
        newCart,
        setNewCart,
        handleAddToCart,
      }}
    >
      {children}
    </NewCartContext.Provider>
  );
}
