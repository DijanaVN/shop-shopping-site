import React, { ReactNode, createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import useCarts, { Cart } from "../hooks/useCarts";

type AllCartsContext = {
  allCarts: Cart[];
  setAllCarts: React.Dispatch<React.SetStateAction<Cart[]>>;
  addNewCart: (newCartData: Cart) => void;
  updateCart: (CartId: number, updatedData: Cart) => void;
  deleteCart: (CartId: number) => void;
};

type CartContextProps = {
  children: ReactNode;
};

const AllCartsContext = createContext<AllCartsContext>({
  allCarts: [],
  setAllCarts: () => {},
  addNewCart: () => {},
  updateCart: () => {},
  deleteCart: () => {},
});

export function useAllCartsContext() {
  return useContext(AllCartsContext);
}

export function AllCartsProvider({ children }: CartContextProps) {
  const { searchQuery } = useCarts();
  const [allCarts, setAllCarts] = useLocalStorage<Cart[]>(
    "AllCartsStorage",
    []
  );
  useEffect(() => {
    if (searchQuery.data) {
      setAllCarts(searchQuery.data);
    }
  }, [searchQuery.data, setAllCarts]);
  const addNewCart = (newCartData: Cart) => {
    setAllCarts((prevCarts) => [...prevCarts, newCartData]);
  };

  const updateCart = (CartId: number, updatedData: Cart) => {
    setAllCarts((prevCarts) =>
      prevCarts.map((Cart) =>
        Cart.id === CartId ? { ...Cart, ...updatedData } : Cart
      )
    );
  };

  const deleteCart = (CartId: number) => {
    setAllCarts((prevCarts) => prevCarts.filter((Cart) => Cart.id !== CartId));
  };

  return (
    <AllCartsContext.Provider
      value={{
        allCarts,
        setAllCarts,
        addNewCart,
        updateCart,
        deleteCart,
      }}
    >
      {children}
    </AllCartsContext.Provider>
  );
}
