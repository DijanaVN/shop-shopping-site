import React, { ReactNode, createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Cart } from "../hooks/useCarts";
import { Product } from "../hooks/useProducts";
import { useUserSignInContext } from "./SignInUserContext";
import { useAllCartsContext } from "./AllCartsContext";
import { generateRandomUniqueUri } from "../components/GenerateRandomNumberForId";

type NewCartContext = {
  // newCart: Cart[];
  // setNewCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  // handleAddToCart: (selectedProduct: Product, quantity: number) => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};
type CartItems = {
  id: number;
  quantity: number;
};

type CartContextProps = {
  children: ReactNode;
};

const NewCartContext = createContext<NewCartContext>({
  // newCart: [],
  // setNewCart: () => {},
  // handleAddToCart: () => {},
} as NewCartContext);

export function useNewCartContext() {
  return useContext(NewCartContext);
}

export function ShoppingCartProvider({ children }: CartContextProps) {
  // const { addNewCart } = useAllCartsContext();
  // const [newCart, setNewCart] = useLocalStorage<Cart[]>("NewCartStorage", []);
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };
  // const handleAddToCart = (selectedProduct: Product, quantity: number) => {
  //   const { userSignIn } = useUserSignInContext();
  //   if (userSignIn) {
  //     const cartItem = {
  //       id: generateRandomUniqueUri(),
  //       userId: userSignIn.id,
  //       date: new Date().toISOString(),
  //       products: [{ productId: selectedProduct.id, quantity }],
  //     };
  //     addNewCart(cartItem);
  //   } else {
  //     // Handle case when user is not signed in
  //   }
  // };

  return (
    <NewCartContext.Provider
      value={{
        // newCart,
        // setNewCart,
        // handleAddToCart,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </NewCartContext.Provider>
  );
}
