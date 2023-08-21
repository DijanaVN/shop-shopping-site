import {
  Button,
  Input,
  Text,
  InputGroup,
  InputRightElement,
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
import CardFunction from "../components/CardFunction";
import img from "../images/milad-fakurian-HE1_K4_-QT8-unsplash.webp";
import { FcSearch } from "react-icons/fc";
import { useSelectedProductContext } from "./../StateManagement/SelectedProductContext";
import { useState } from "react";
import NavBar from "./../components/NavBar";

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
        <Flex
          fontSize={"lg"}
          flexWrap="wrap"
          margin={2}
          alignItems="center" // Center align vertically
          flexDirection="column"
        >
          {searchButtonPressed && filteredProduct.length === 0 ? (
            <Text height={"100vh"}>No results for that search.</Text>
          ) : (
            filteredProduct.map((n) => (
              <div
                key={n.id}
                onClick={() => {
                  onClick(n);
                  onClose();
                  navigate(`/product/${n.id}`);
                }}
              >
                <CardFunction m={n} />
              </div>
            ))
          )}
        </Flex>
      </Box>
    </>
  );
};

export default SearchPage;
