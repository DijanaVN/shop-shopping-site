import {
  Button,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Box,
  Flex,
  Center,
} from "@chakra-ui/react";
import { useSearchText } from "../StateManagement/SearchTextContext";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { useAllProductsContext } from "../StateManagement/AllProductsContexts";
import { useFilteredProductContext } from "./../StateManagement/FilteredProducts";
import CardFunction from "./../components/CardFunction";
import img from "../images/milad-fakurian-HE1_K4_-QT8-unsplash.webp";
import { FcSearch } from "react-icons/fc";
import { useSelectedProductContext } from "./../StateManagement/SelectedProductContext";
import { useState } from "react";

const schema = z.object({
  searchText: z
    .string()
    .min(3, { message: "Search input must be at least 3 characters." }),
});

interface FormData {
  searchText: string;
}

const SearchDrawer = () => {
  const { setSearchText, searchText } = useSearchText();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const { allProducts } = useAllProductsContext();
  const { setFilteredProduct, filteredProduct } = useFilteredProductContext();
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
          <InputGroup>
            <InputLeftElement pointerEvents="none" />

            <Input
              paddingLeft={10}
              {...register("searchText")}
              borderRadius={5}
              placeholder="Search..."
              variant={"filled"}
              backgroundColor={"primary.50"}
            />
            <InputRightElement width="2.5rem">
              <Button
                rightIcon={<FcSearch />}
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
        <Flex flexWrap="wrap" justifyContent="space-between" margin={2}>
          {searchButtonPressed && filteredProduct.length === 0 ? (
            <Text height={"100vh"}>No results for that search.</Text>
          ) : (
            filteredProduct.map((n) => (
              <Link
                to={`/product/${n.id}`}
                key={n.id}
                onClick={() => onClick(n)}
              >
                <CardFunction m={n} />
              </Link>
            ))
          )}
        </Flex>
      </Box>
    </>
  );
};

export default SearchDrawer;
