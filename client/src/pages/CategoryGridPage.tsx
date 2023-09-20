import React from "react";
import { Box, Center, Grid, Spinner } from "@chakra-ui/react";
import { useSelectedCategoryContext } from "../StateManagement/SelectedCategoryContext";
import usePoductsByCategory from "../hooks/useProductsByCategory";
import { useSelectedProductContext } from "../StateManagement/SelectedProductContext";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTheTopButton";
import ProductCard from "../components/ProductCard";
import useScrollToTop from "./../hooks/useScrollToTop";

const CategoryGridPage = () => {
  const { selectedCategory } = useSelectedCategoryContext();
  const { onClick } = useSelectedProductContext();

  if (!selectedCategory) {
    return null; //
  }

  const { updatedProductsInCategory, isLoading } =
    usePoductsByCategory(selectedCategory);

  useScrollToTop();

  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
        margin={2}
      >
        {isLoading ? (
          <Spinner size="lg" m="auto" />
        ) : (
          updatedProductsInCategory?.map((m) =>
            selectedCategory === m.category ? (
              <Center
                key={m.id}
                margin={5}
                flexWrap="wrap"
                alignItems="center"
                borderRadius="md"
                borderWidth="1px"
                boxShadow="md"
                width="100%"
              >
                <Link
                  to={`/product/${m.id}`}
                  onClick={() => onClick(m)}
                  key={m.id}
                >
                  <Box margin={5}>
                    <ProductCard
                      id={m.id}
                      title={m.title}
                      price={m.price}
                      description={m.description}
                      category={m.category}
                      image={m.image}
                      quantity={m.quantity}
                      onClose={m.onClose}
                    />
                  </Box>
                </Link>
              </Center>
            ) : (
              ""
            )
          )
        )}
      </Grid>
      <ScrollToTopButton />
    </>
  );
};

export default CategoryGridPage;
