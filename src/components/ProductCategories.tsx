import {
  Text,
  Image,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import useCategories from "../hooks/useUpdateCategories";
import { GrMenu } from "react-icons/gr";
import { useSelectedCategoryContext } from "../StateManagement/SelectedCategoryContext";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  const { searchQuery } = useCategories();
  const { setSelectedCategory } = useSelectedCategoryContext();

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
            onClick={() => {
              setSelectedCategory(category);
            }}
          >
            <Link to={`/category`}>
              <Box>
                <Text>{category.name}</Text>
              </Box>
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ProductCategories;
