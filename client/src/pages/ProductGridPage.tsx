import { Text, Box, SimpleGrid } from "@chakra-ui/react";
import usePoducts, { Product } from "../hooks/useProducts";
import { useSelectedProductContext } from "../StateManagement/SelectedProductContext";
import ScrollToTopButton from "../components/ScrollToTheTopButton";
import ProductCard from "../components/ProductCard";
import "../index.css";
import React from "react";

const ProductGridPage = () => {
  const { searchQuery } = usePoducts();
  const { onClick } = useSelectedProductContext();

  if (!searchQuery) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
        spacing={4}
        justifyContent="space-between"
        margin={3}
      >
        {(searchQuery as Product[]).map((product) => {
          return (
            <Box onClick={() => onClick(product)} key={product.id}>
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                quantity={product.quantity}
                onClose={product.onClose}
              />{" "}
            </Box>
          );
        })}
      </SimpleGrid>
      <ScrollToTopButton />
    </Box>
  );
};

export default ProductGridPage;
