import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAllProductsContext } from "./AllProductsContexts";
import { DELIVERY_PRICE } from "../components/constants";
import { useLocalStorage } from "./../hooks/useLocalStorage";

type NewCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  cartTotal: number;
  itemTotal: number;
  totalAmount: number;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  handleDelivery: (includeDelivery: boolean) => void;
};

export type CartItem = {
  id: number;
  quantity: number;
  price: string | number;
  title: string;
  image: string;
};

type CartContextProps = {
  children: ReactNode;
};

const NewCartContext = createContext<NewCartContext>({} as NewCartContext);

export function useNewCartContext() {
  return useContext(NewCartContext);
}

export function ShoppingCartProvider({ children }: CartContextProps) {
  const { allProducts } = useAllProductsContext();
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cartData", []);
  const [itemTotal, setItemTotal] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState(cartTotal);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id: number) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === id);

      if (existingItem == null) {
        const newItem = {
          id,
          quantity: 1,
          price: allProducts.find((product) => product.id === id)?.price || 0,
          title: allProducts.find((product) => product.id === id)?.title || "",
          image: allProducts.find((product) => product.id === id)?.image || "",
        };
        return [...currentItems, newItem];
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

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  useEffect(() => {
    const updatedCartTotal = cartItems.reduce((total, cartItem) => {
      const item = allProducts.find((i) => i.id === cartItem.id);
      if (item) {
        const itemTotal = Number(item.price) * cartItem.quantity;
        return total + itemTotal;
      }
      return total;
    }, 0);
    setCartTotal(updatedCartTotal);
  }, [cartItems, allProducts]);

  const handleDelivery = (includeDelivery: boolean) => {
    if (includeDelivery) {
      const total = cartTotal + DELIVERY_PRICE;
      setTotalAmount(total);
    } else {
      setTotalAmount(cartTotal);
    }
  };

  return (
    <NewCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        cartItems,
        setCartItems,
        cartTotal,
        itemTotal,
        totalAmount,
        handleDelivery,
      }}
    >
      {children}
    </NewCartContext.Provider>
  );
}
