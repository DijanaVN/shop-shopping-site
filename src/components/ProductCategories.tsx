import {
  Text,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import useCategories from "../hooks/useUpdateCategories";
import { useSelectedCategoryContext } from "../StateManagement/SelectedCategoryContext";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  const { searchQuery } = useCategories();
  const { selectedCategory, onClick } = useSelectedCategoryContext();

  if (!searchQuery.data) {
    return <Text>Loading...</Text>;
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="unstyled"
        fontSize={20}
        fontFamily="heading"
        fontWeight="bold"
      >
        Categories
      </MenuButton>
      <MenuList>
        {searchQuery.data.map((category) => (
          <MenuItem
            key={category.id}
            _hover={{ bg: "primary.500" }} // Change background color on hover
            onClick={() => {
              onClick(category);
            }}
          >
            <Link to={`/category`}>
              <Box>
                <Text
                  color={selectedCategory === category ? "blue.500" : "black"}
                >
                  {category.name}
                </Text>
              </Box>
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ProductCategories;
