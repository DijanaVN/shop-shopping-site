import { Text, Flex, Button, HStack } from "@chakra-ui/react";
import usePoducts, { Product } from "../hooks/useProducts";
import { Link, useNavigate } from "react-router-dom";
import { useSelectedProductContext } from "../StateManagement/SelectedProductContext";
import CreateNewProductForm from "../components/CreateNewProductForm";
import ScrollToTopButton from "../components/ScrollToTheTopButton";
import ProductCard from "../components/ProductCard";

const ProductGrid = () => {
  const { searchQuery } = usePoducts();
  const { onClick } = useSelectedProductContext();
  const navigate = useNavigate();

  if (!searchQuery) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <HStack>
        <CreateNewProductForm />
        <Button onClick={() => navigate("/shoppingCart")}>
          Show All Carts
        </Button>
      </HStack>

      <Flex flexWrap="wrap" justifyContent="space-between" margin={2}>
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
    </>
  );
};

export default ProductGrid;
