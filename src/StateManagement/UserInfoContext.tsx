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
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  addNewUser: (newUserData: User) => void;
  deleteUser: (userId: number) => void;
};

type UserContextProps = {
  children: ReactNode;
};

const userContext = createContext<userContext>({
  users: [],
  setUsers: () => {},
  addNewUser: () => {},
  deleteUser: () => {},
});

export function useUserContext() {
  return useContext(userContext);
}

export function UserProvider({ children }: UserContextProps) {
  const [users, setUsers] = useLocalStorage<User[]>("UserStorage", []);
  useEffect(() => {
    localStorage.setItem("UserStorage", JSON.stringify(users));
  }, [users]);

  const addNewUser = (newUserData: User) => {
    setUsers((prevUsers) => [...prevUsers, newUserData]);
  };

  const deleteUser = (userId: number) => {
    setUsers((prevUsers) => prevUsers.filter((u) => u.id !== userId));
  };

  return (
    <userContext.Provider
      value={{
        users,
        setUsers,
        addNewUser,
        deleteUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
