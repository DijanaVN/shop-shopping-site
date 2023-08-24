import React, { ReactNode, createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Cart } from "../hooks/useCarts";

type NewCartContext = {
  newCart: Cart[];
  setNewCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  addNewCart: (newCartData: Cart) => void;
  updateCart: (CartId: number, updatedData: Cart) => void;
  deleteCart: (CartId: number) => void;
};

type CartContextProps = {
  children: ReactNode;
};

const NewCartContext = createContext<NewCartContext>({
  newCart: [],
  setNewCart: () => {},
  addNewCart: () => {},
  updateCart: () => {},
  deleteCart: () => {},
});

export function useNewCartContext() {
  return useContext(NewCartContext);
}

export function NewCartProvider({ children }: CartContextProps) {
  const [newCart, setNewCart] = useLocalStorage<Cart[]>("NewCartStorage", []);

  const addNewCart = (newCartData: Cart) => {
    setNewCart((prevCarts) => [...prevCarts, newCartData]);
  };

  const updateCart = (CartId: number, updatedData: Cart) => {
    setNewCart((prevCarts) =>
      prevCarts.map((Cart) =>
        Cart.id === CartId ? { ...Cart, ...updatedData } : Cart
      )
    );
  };

  const deleteCart = (CartId: number) => {
    setNewCart((prevCarts) => prevCarts.filter((Cart) => Cart.id !== CartId));
  };

  return (
    <NewCartContext.Provider
      value={{
        newCart,
        setNewCart,
        addNewCart,
        updateCart,
        deleteCart,
      }}
    >
      {children}
    </NewCartContext.Provider>
  );
}
