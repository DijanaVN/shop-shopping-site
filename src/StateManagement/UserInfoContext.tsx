import React, { ReactNode, createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
}

type userContext = {
  user: User[];
  setUser: React.Dispatch<React.SetStateAction<User[]>>;
  addNewUser: (newUserData: User) => void;
  updateUser: (UserId: number, updatedData: User) => void;
  deleteUser: (UserId: number) => void;
};

type UserContextProps = {
  children: ReactNode;
};

const userContext = createContext<userContext>({
  user: [],
  setUser: () => {},
  addNewUser: () => {},
  updateUser: () => {},
  deleteUser: () => {},
});

export function useUserContext() {
  return useContext(userContext);
}

export function UserProvider({ children }: UserContextProps) {
  const [user, setUser] = useLocalStorage<User[]>("UserStorage", []);
  useEffect(() => {
    localStorage.setItem("UserStorage", JSON.stringify(user));
  }, [user]);
  console.log(user);

  const addNewUser = (newUserData: User) => {
    setUser((prevUsers) => [...prevUsers, newUserData]);
  };
  const updateUser = (UserId: number, updatedData: User) => {
    setUser((prevUsers) =>
      prevUsers.map((User) =>
        User.id === UserId ? { ...User, ...updatedData } : User
      )
    );
  };

  const deleteUser = (UserId: number) => {
    setUser((prevUsers) => prevUsers.filter((User) => User.id !== UserId));
  };

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        addNewUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
