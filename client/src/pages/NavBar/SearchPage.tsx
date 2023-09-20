import {
  Button,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Box,
  Flex,
  Grid,
  Center,
} from "@chakra-ui/react";
import { useSearchText } from "../../StateManagement/SearchTextContext";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { useAllProductsContext } from "../../StateManagement/AllProductsContexts";
import { useFilteredProductContext } from "../../StateManagement/FilteredProducts";
import img from "../../images/milad-fakurian-HE1_K4_-QT8-unsplash.webp";
import { FcSearch } from "react-icons/fc";
import { useSelectedProductContext } from "../../StateManagement/SelectedProductContext";
import { useState } from "react";
import ProductCard from "./../../components/ProductCard";
import { Product } from "../../hooks/useProducts";
import React from "react";

const schema = z.object({
  searchText: z
    .string()
    .min(3, { message: "Search input must be at least 3 characters." }),
});

interface FormData {
  searchText: string;
}

const SearchPage = ({ onClose }: { onClose: () => void }) => {
  const { setSearchText } = useSearchText();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const { allProducts } = useAllProductsContext();
  const { filteredProduct, setFilteredProduct } = useFilteredProductContext();
  const { onClick } = useSelectedProductContext();
  const [searchButtonPressed, setSearchButtonPressed] = useState(false);

  const onSubmit = (data: FieldValues) => {
    setSearchText(data.searchText);
    const filteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(data.searchText.toLowerCase())
    );

    console.log(filteredProducts);
    setFilteredProduct(filteredProducts);
    setSearchButtonPressed(true);
    reset();
  };

  return (
    <>
      <Box backgroundImage={img}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup backgroundImage={img} padding={10} position="relative">
            <Input
              paddingLeft={6}
              paddingRight="2.5rem"
              {...register("searchText")}
              borderRadius={5}
              placeholder="Search..."
              variant={"filled"}
              backgroundColor={"primary.50"}
              _hover={{ paddingRight: "2.5rem" }}
            />
            <InputRightElement
              width="2.5rem"
              position="absolute"
              top="50%" // Vertically center the icon
              right={10} // Adjust the horizontal position
              transform="translateY(-50%)" // Vertically center the icon
            >
              <Button
                _hover={{}}
                rightIcon={<FcSearch />}
                variant={"ghost"}
                type="submit"
                h="100%"
                size="sm"
                borderRadius="5"
              ></Button>
            </InputRightElement>
          </InputGroup>
          {errors.searchText && (
            <Text paddingLeft={2} color={"red"}>
              {errors.searchText.message}
            </Text>
          )}
        </form>
        <Flex>
          {searchButtonPressed && filteredProduct.length === 0 ? (
            <Text height={"100vh"}>No results for that search.</Text>
          ) : (
            filteredProduct.map((n: Product) => (
              <Grid
                templateColumns={{
                  base: "1fr",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                gap={4}
                margin={2}
              >
                <Center
                  key={n.id}
                  margin={5}
                  flexWrap="wrap"
                  alignItems="center" // Align items vertically
                  borderRadius="md"
                  borderWidth="1px"
                  boxShadow="md"
                  width="100%"
                  onClick={() => {
                    onClick(n);
                    onClose();
                    navigate(`/product/${n.id}`);
                  }}
                >
                  <Box margin={5}>
                    <ProductCard
                      id={n.id}
                      title={n.title}
                      price={n.price}
                      description={n.description}
                      category={n.category}
                      image={n.image}
                      quantity={n.quantity}
                      onClose={n.onClose}
                    />
                  </Box>
                </Center>{" "}
              </Grid>
            ))
          )}
        </Flex>
      </Box>
    </>
  );
};

export default SearchPage;
