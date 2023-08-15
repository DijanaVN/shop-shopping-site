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
} from "@chakra-ui/react";
import usePoducts, { Product } from "../hooks/useProducts";
import React from "react";
import { useNewProductContext } from "../StateManagement/NewProductContext";

const ProductGrid = () => {
  const { searchQuery } = usePoducts();
  const { newProduct } = useNewProductContext();

  if (!searchQuery) {
    return <Text>Loading...</Text>;
  }

  console.log(searchQuery);

  return (
    <>
      <Flex flexWrap="wrap" justifyContent="space-between" margin={2}>
        {(searchQuery as Product[]).map((product) => (
          <React.Fragment key={product.id}>
            <Card
              bg={"primary.500"}
              key={product.id}
              maxW="sm"
              marginBottom={5}
            >
              <CardBody>
                <Box h="300px" overflow="hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    borderRadius="lg"
                  />
                </Box>
                <Stack mt="6" spacing="3">
                  <Heading size="md">{product.title}</Heading>
                  <Text>Category: {product.category}</Text>
                  <Text>{product.description}</Text>
                  <Text color="yellow.400" fontSize="2xl">
                    ${product.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </React.Fragment>
        ))}
      </Flex>
    </>
  );
};

export default ProductGrid;
