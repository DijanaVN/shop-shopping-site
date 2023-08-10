import React from "react";
import { Button } from "@chakra-ui/react";
import { useSelectedCategoryContext } from "../StateManagement/SelectedCategoryContext";
import useDeleteCategory from "../hooks/useDeleteCategory";

const DeleteCategoryButton: React.FC = () => {
  const { selectedCategory } = useSelectedCategoryContext();
  const { deleteCategory } = useDeleteCategory();
  return (
    <>
      <Button
        onClick={() => {
          selectedCategory && deleteCategory(selectedCategory?.id);
        }}
      >
        Delete Category{" "}
      </Button>
    </>
  );
};

export default DeleteCategoryButton;
