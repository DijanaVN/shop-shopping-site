import {
  Text,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import useCategories from "../../hooks/useCategories";
import { useSelectedCategoryContext } from "../../StateManagement/SelectedCategoryContext";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  const { searchQuery } = useCategories();
  const { selectedCategory, onClick } = useSelectedCategoryContext();

  if (!searchQuery.data) {
    return <Text>Loading...</Text>;
  }

  return (
    <Menu>
      <MenuButton fontWeight={"bold"}>Categories</MenuButton>
      <MenuList>
        {searchQuery.data.map((category, index) => (
          <MenuItem
            key={index}
            _hover={{ bg: "primary.500" }}
            onClick={() => {
              onClick(category);
            }}
          >
            <Link to={`/category`}>
              <Text color={selectedCategory === category ? "blue" : "black"}>
                {category}
              </Text>
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ProductCategories;
