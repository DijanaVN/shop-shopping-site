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
} from "@chakra-ui/react";
import usePoducts from "../hooks/useProducts";
import React from "react";
import { useNewProductContext } from "../StateManagement/NewProductContext";

const ProductGrid = () => {
  const { searchQuery } = usePoducts();
  const { newProduct } = useNewProductContext();

  if (!searchQuery.data) {
    return <Text>Loading...</Text>;
  }

  console.log(searchQuery.data);
  return (
    <>
      <Flex flexWrap="wrap" justifyContent="space-between" margin={2}>
        {" "}
        {newProduct && (
          <Card bg={"primary.400"} key="newProduct" maxW="sm" marginBottom={5}>
            <CardBody>
              <Image
                src={newProduct.image}
                alt={newProduct.title}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{newProduct.title}</Heading>
                <Text>Category: {newProduct.category}</Text>
                <Text>{newProduct.description}</Text>
                <Text color="yellow.400" fontSize="2xl">
                  ${newProduct.price}
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
        )}
        {searchQuery.data.map((m) => (
          <React.Fragment key={m.id}>
            <Card bg={"primary.500"} key={m.id} maxW="sm" marginBottom={5}>
              <CardBody>
                <Image src={m.image} alt={m.title} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{m.title}</Heading>
                  <Text>Category:{m.category}</Text>
                  <Text>{m.description}</Text>
                  <Text color="yellow.400" fontSize="2xl">
                    ${m.price}
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
        ))}{" "}
      </Flex>
    </>
  );
};

export default ProductGrid;
