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
              <Card
                bg={`rgba(247, 215, 238, 0.8)`}
                key={product.id}
                maxW="lg"
                marginBottom={5}
              >
                <CardBody>
                  <Image
                    src={product.image}
                    alt={product.title}
                    borderRadius="lg"
                  />

                  <Stack mt="6" spacing="3">
                    <Heading size="md">{product.title}</Heading>
                    <Text>Category: {product.category}</Text>

                    <Text
                      fontWeight={"extrabold"}
                      color="primary.300"
                      fontSize="2xl"
                    >
                      ${product.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter flexWrap="wrap">
                  <Flex justifyContent="space-between" alignItems="center">
                    <ButtonGroup flex="1" mr="3">
                      <Button variant="solid" colorScheme="blue">
                        Buy now
                      </Button>
                      <Button variant="solid" colorScheme="yellow">
                        Add to cart
                      </Button>
                    </ButtonGroup>
                    {isProductInNewProduct && (
                      <ButtonGroup flex="2" spacing="2">
                        <Button
                          onClick={() => deleteProduct(product.id)}
                          variant="solid"
                          colorScheme="red"
                        >
                          Delete
                        </Button>
                        <Button
                          onClick={() => updateProduct(product.id, product)}
                          variant="solid"
                          colorScheme="teal"
                        >
                          Update
                        </Button>
                      </ButtonGroup>
                    )}
                  </Flex>
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </Flex>
    </>
  );
};

export default ProductGrid;
