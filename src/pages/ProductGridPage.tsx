import {
  Text,
  Flex,
  Button,
  HStack,
  Box,
  Card,
  CardBody,
  Heading,
  Stack,
  Image,
  ButtonGroup,
  CardFooter,
  VStack,
} from "@chakra-ui/react";
import usePoducts, { Product } from "../hooks/useProducts";
import { Link, useNavigate } from "react-router-dom";
import { useSelectedProductContext } from "../StateManagement/SelectedProductContext";
import ScrollToTopButton from "../components/ScrollToTheTopButton";
import ProductCard from "../components/ProductCard";
import { formatCurrency } from "../utilities/formatCurrency";
import { useNewCartContext } from "../StateManagement/ShoppingCartContext";

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
{
  /* <Link
              to={`/product/${product.id}`}
              onClick={() => onClick(product)}
              key={product.id}
            >
              <ProductCard m={product} />
            </Link> */
}
