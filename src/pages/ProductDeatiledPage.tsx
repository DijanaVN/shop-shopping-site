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
        bg={`rgba(247, 215, 238, 0.4)`}
        overflow="hidden"
        variant="outline"
        key={selectedProduct?.id}
        minW="xl"
        minH={"xl"}
        marginBottom={5}
        justifyContent="center"
        alignItems="center"
      >
        <CardBody
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "500px" }}
            src={selectedProduct?.image}
            alt={selectedProduct?.title}
            margin={5}
          />
        </CardBody>
        <Stack>
          <Heading size="xl">{selectedProduct?.title}</Heading>
          <Text fontWeight={"extrabold"} fontSize={"2xl"}>
            Category: {selectedProduct?.category}
          </Text>
          <Text fontWeight={"bold"} fontSize={"2xl"}>
            {selectedProduct?.description}
          </Text>
          <Text fontWeight={"extrabold"} fontSize="2xl" color={""}>
            ${selectedProduct?.price}
          </Text>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="solid" colorScheme="yellow">
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
