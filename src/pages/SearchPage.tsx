import {
  Button,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Box,
  Flex,
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

  const onSubmit = (data: FieldValues) => {
    setSearchText(data.searchText);
    const filteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(data.searchText.toLowerCase())
    );

    console.log(filteredProducts);
    setFilteredProduct(filteredProducts);

    reset();
  };

  return (
    <>
      <Box backgroundImage={img} height={"100vh"}>
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
          {filteredProduct.length === 0 ? (
            <Text>No results for that search.</Text>
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
