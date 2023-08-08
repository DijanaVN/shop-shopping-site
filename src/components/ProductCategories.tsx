import { Text, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";
import useCategories from "../hooks/useCategories";

const ProductCategories = () => {
  const { searchQuery } = useCategories();

  if (!searchQuery.data) {
    return <Text>Loading...</Text>;
  }
  console.log(searchQuery.data);

  searchQuery.data.map((m) => console.log(m.name));

  return (
    <>
      <UnorderedList>
        {searchQuery.data.map((category) => (
          <React.Fragment key={category.id}>
            <ListItem>{category.name}</ListItem>
          </React.Fragment>
        ))}
      </UnorderedList>
    </>
  );
};

export default ProductCategories;
