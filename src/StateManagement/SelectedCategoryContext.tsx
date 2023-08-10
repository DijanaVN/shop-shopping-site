import React, { ReactNode, createContext, useContext, useState } from "react";
import useCategories, { Category } from "../hooks/useUpdateCategories";

type SelectedCategoryContext = {
  selectedCategory: Category | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<Category | null>>;
  onClick: (id: Category) => void;
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

  const onClick = (m: Category | null) => {
    setSelectedCategory(m);
  };
  console.log(selectedCategory);

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
