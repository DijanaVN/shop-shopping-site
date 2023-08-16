import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Image,
  Flex,
  Box,
  Grid,
} from "@chakra-ui/react";
import usePoducts, { Product } from "../hooks/useProducts";
import React from "react";
import { useNewProductContext } from "../StateManagement/NewProductContext";
import { Link } from "react-router-dom";
import { useSelectedProductContext } from "../StateManagement/SelectedProductContext";
import CardFunction from "./CardFunction";

const ProductGrid = () => {
  const { searchQuery } = usePoducts();
  const { newProduct, deleteProduct, updateProduct } = useNewProductContext();
  const { onClick } = useSelectedProductContext();

  if (!searchQuery) {
    return <Text>Loading...</Text>;
  }

  console.log(searchQuery);

  return (
    <>
      <Flex flexWrap="wrap" justifyContent="space-between" margin={2}>
        {(searchQuery as Product[]).map((product) => {
          const isProductInNewProduct = newProduct.some(
            (newProd) => newProd.id === product.id
          );

          return (
            <Link
              to={`/product/${product.id}`}
              onClick={() => onClick(product)}
              key={product.id}
            >
              <CardFunction m={product} />
            </Link>
          );
        })}
      </Flex>
    </>
  );
};

export default ProductGrid;
