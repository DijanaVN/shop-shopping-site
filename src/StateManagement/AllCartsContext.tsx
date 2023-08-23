import React, { ReactNode, createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import useCarts, { Cart } from "../hooks/useCarts";

type AllCartsContext = {
  allCarts: Cart[];
  setAllCarts: React.Dispatch<React.SetStateAction<Cart[]>>;
};

type CartContextProps = {
  children: ReactNode;
};

const AllCartsContext = createContext<AllCartsContext>({
  allCarts: [],
  setAllCarts: () => {},
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

  return (
    <AllCartsContext.Provider
      value={{
        allCarts,
        setAllCarts,
      }}
    >
      {children}
    </AllCartsContext.Provider>
  );
}
