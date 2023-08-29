import { Text, Box, SimpleGrid } from "@chakra-ui/react";
import usePoducts, { Product } from "../hooks/useProducts";
import ScrollToTopButton from "../components/ScrollToTheTopButton";
import ProductCard from "../components/ProductCard";
import "../index.css";
import useScrollToTop from "../hooks/useScrollToTop";

const ProductGridPage = () => {
  const { searchQuery } = usePoducts();

  if (!searchQuery) {
    return <Text>Loading...</Text>;
  }
  useScrollToTop();
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }} // Adjust the number of columns based on screen size
        spacing={4}
        justifyContent="space-between"
        margin={3}
      >
        {(searchQuery as Product[]).map((product) => {
          return (
            <Box key={product.id}>
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                quantity={product.quantity}
              />
            </Box>
          );
        })}
      </SimpleGrid>
      <ScrollToTopButton />
    </Box>
  );
};

export default ProductGridPage;
