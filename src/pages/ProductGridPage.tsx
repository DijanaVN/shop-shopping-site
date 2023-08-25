import { Text, Flex, Button, HStack, Box } from "@chakra-ui/react";
import usePoducts, { Product } from "../hooks/useProducts";
import { Link, useNavigate } from "react-router-dom";
import { useSelectedProductContext } from "../StateManagement/SelectedProductContext";
import CreateNewProductForm from "../components/CreateNewProductForm";
import ScrollToTopButton from "../components/ScrollToTheTopButton";
import ProductCard from "../components/ProductCard";

const ProductGridPage = () => {
  const { searchQuery } = usePoducts();
  const { onClick } = useSelectedProductContext();

  if (!searchQuery) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box>
      <Flex flexWrap="wrap" justifyContent="space-between" margin={3}>
        {(searchQuery as Product[]).map((product) => {
          return (
            <Link
              to={`/product/${product.id}`}
              onClick={() => onClick(product)}
              key={product.id}
            >
              <ProductCard m={product} />
            </Link>
          );
        })}
      </Flex>
      <ScrollToTopButton />
    </Box>
  );
};

export default ProductGridPage;
