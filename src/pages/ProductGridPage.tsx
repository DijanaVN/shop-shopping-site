import { Text, Flex, Box } from "@chakra-ui/react";
import usePoducts, { Product } from "../hooks/useProducts";
import { Link } from "react-router-dom";
import { useSelectedProductContext } from "../StateManagement/SelectedProductContext";
import ScrollToTopButton from "../components/ScrollToTheTopButton";
import ProductCard from "../components/ProductCard";
import "../index.css";
import { useState } from "react";

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
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                quantity={product.quantity}
              />{" "}
            </Link>
          );
        })}
      </Flex>
      <ScrollToTopButton />
    </Box>
  );
};

export default ProductGridPage;
