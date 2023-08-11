import React from "react";
import { Button } from "@chakra-ui/react";
import useDeleteCategory from "../hooks/useDeleteProduct";

const DeleteCategoryButton: React.FC<{ ProductId: number }> = ({
  ProductId,
}) => {
  const { deleteProduct } = useDeleteCategory();

  return (
    <Button onClick={() => deleteProduct(ProductId)}>Delete Product</Button>
  );
};

export default DeleteCategoryButton;
