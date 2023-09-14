import React, { ReactNode, createContext, useContext, useState } from "react";
import useCategories from "../hooks/useCategories";
import { Category } from "../hooks/useProducts";

type SelectedCategoryContext = {
  selectedCategory: Category | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<Category | null>>;
  onClick: (category: Category | null) => void;
};

type CategoryContextProps = {
  children: ReactNode;
};

const SelectedCategoryContext = createContext<SelectedCategoryContext>({
  selectedCategory: null,
  setSelectedCategory: () => {},
  onClick: () => {},
});

export function useSelectedCategoryContext() {
  return useContext(SelectedCategoryContext);
}

export function SelectedCategoryProvider({ children }: CategoryContextProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const onClick = (category: Category | null) => {
    setSelectedCategory(category);
  };

  return (
    <SelectedCategoryContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        onClick,
      }}
    >
      {children}
    </SelectedCategoryContext.Provider>
  );
}
