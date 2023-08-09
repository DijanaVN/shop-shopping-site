import React, { ReactNode, createContext, useContext, useState } from "react";
import useCategories, { Category } from "../hooks/useCategories";

type CategoryContext = {
  category: Category | null;
  setCategory: React.Dispatch<React.SetStateAction<Category | null>>;
  handleUpdateCategory: (categoryId: number) => void;
};

type CategoryContextProps = {
  children: ReactNode;
};

const CategoryContext = createContext<CategoryContext>({
  category: null,
  setCategory: () => {},
  handleUpdateCategory: () => {},
});

export function useCategoryContext() {
  return useContext(CategoryContext);
}

export function CategoryProvider({ children }: CategoryContextProps) {
  const [category, setCategory] = useState<Category | null>(null);
  const [updatedCategoryName, setUpdatedCategoryName] =
    useState<Category | null>(null);

  const { searchQuery, updateCategory } = useCategories();

  const handleUpdateCategory = (categoryId: number) => {
    if (updatedCategoryName) {
      const updatedCategory = {
        id: categoryId,
        name: updatedCategoryName.name,
      };

      updateCategory(updatedCategory);
      setUpdatedCategoryName(null);
    }
  };
  console.log(searchQuery.data);
  console.log(updateCategory);

  return (
    <CategoryContext.Provider
      value={{
        category,
        setCategory,
        handleUpdateCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}
