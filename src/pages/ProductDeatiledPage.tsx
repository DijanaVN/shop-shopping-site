import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useSelectedProductContext } from "../StateManagement/SelectedProductContext";
import { useNewProductContext } from "../StateManagement/NewProductContext";
import { useState } from "react";
import treatyourself from "../images/jean-philippe-delberghe-75xPHEQBmvA-unsplash.webp";

const ProductDetailedPage = () => {
  const { selectedProduct } = useSelectedProductContext();
  const { newProduct, deleteProduct, updateProduct } = useNewProductContext();

  const isProductInNewProduct = newProduct.some(
    (newProd) => newProd.id === selectedProduct?.id
  );

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bgImg={treatyourself}
      objectFit="fill"
    >
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        key={selectedProduct?.id}
        minW="xl"
        marginBottom={5}
      >
        <CardBody
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={selectedProduct?.image}
            alt={selectedProduct?.title}
          />
        </CardBody>
        <Stack>
          <Heading size="lg">{selectedProduct?.title}</Heading>
          <Text py="2">Category: {selectedProduct?.category}</Text>
          <Text>{selectedProduct?.description}</Text>
          <Text color="yellow.400" fontSize="2xl">
            ${selectedProduct?.price}
          </Text>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
              {isProductInNewProduct && (
                <>
                  <Button
                    onClick={() =>
                      selectedProduct?.id && deleteProduct(selectedProduct.id)
                    }
                    variant="solid"
                    colorScheme="red"
                  >
                    Delete
                  </Button>
                  <Button variant="solid" colorScheme="teal">
                    Update
                  </Button>
                </>
              )}
            </ButtonGroup>
          </CardFooter>
        </Stack>
      </Card>
    </Flex>
  );
};
export default ProductDetailedPage;
