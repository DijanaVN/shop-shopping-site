import React, { ReactNode, createContext, useContext, useState } from "react";
import { User } from "./UserInfoContext";

type userSignInContext = {
  userSignIn: User | undefined;
  setUserSignIn: React.Dispatch<React.SetStateAction<User | undefined>>;
  updateSignInUser: (updatedData: User) => void;
};

type UserSignInContextProps = {
  children: ReactNode;
};

const userSignInContext = createContext<userSignInContext>({
  userSignIn: undefined,
  setUserSignIn: () => {},
  updateSignInUser: () => {},
});

export function useUserSignInContext() {
  return useContext(userSignInContext);
}

export function UserSignInProvider({ children }: UserSignInContextProps) {
  const [userSignIn, setUserSignIn] = useState<User | undefined>();

  const updateSignInUser = (updatedData: User) => {
    setUserSignIn(updatedData);
  };
  console.log(userSignIn);

  return (
    <userSignInContext.Provider
      value={{
        userSignIn,
        setUserSignIn,
        updateSignInUser,
      }}
    >
      {children}
    </userSignInContext.Provider>
  );
}
