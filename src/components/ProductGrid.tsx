import { Text, Flex } from "@chakra-ui/react";
import usePoducts, { Product } from "../hooks/useProducts";
import { Link } from "react-router-dom";
import { useSelectedProductContext } from "../StateManagement/SelectedProductContext";
import CreateNewProductForm from "./CreateNewProductForm";
import ScrollToTopButton from "./ScrollToTheTopButton";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { searchQuery } = usePoducts();
  const { onClick } = useSelectedProductContext();

  if (!searchQuery) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <CreateNewProductForm />
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
