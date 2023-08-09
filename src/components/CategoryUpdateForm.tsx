import React, { useState } from "react";
import { useCategoryContext } from "../StateManagement/CategoryContext";

const CategoryUpdateForm: React.FC = () => {
  const { category, handleUpdateCategory } = useCategoryContext();

  const handleSubmit = () => {
    if (category) {
      handleUpdateCategory(category.id);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={updatedCategoryName}
        onChange={(e) => setUpdatedCategoryName(e.target.value)}
      />
      <button type="submit">Update Category</button>
    </form>
  );
};

export default CategoryUpdateForm;
