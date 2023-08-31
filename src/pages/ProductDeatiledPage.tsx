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
  Box,
  Flex,
} from "@chakra-ui/react";
import { useSelectedProductContext } from "../StateManagement/SelectedProductContext";
import { useNewProductContext } from "../StateManagement/NewProductContext";
import treatyourself from "../../public/images/jean-philippe-delberghe-75xPHEQBmvA-unsplash.webp";
import { formatCurrency } from "./../utilities/formatCurrency";
import { useNavigate } from "react-router-dom";
import { useNewCartContext } from "../StateManagement/ShoppingCartContext";

import useScrollToTop from "../hooks/useScrollToTop";

const ProductDetailedPage = () => {
  const { selectedProduct } = useSelectedProductContext();
  const { newProduct, deleteProduct, updateProduct } = useNewProductContext();

  const { increaseCartQuantity } = useNewCartContext();
  const navigate = useNavigate();

  const isProductInNewProduct = newProduct.some(
    (newProd) => newProd.id === selectedProduct?.id
  );
  console.log(newProduct);
  if (!selectedProduct) return "";
  useScrollToTop();

  return (
    <Box
      margin={5}
      alignItems="center"
      justifyContent="center"
      bgImg={treatyourself}
    >
      <Card
        direction={{ base: "column", md: "row" }}
        bg={`rgba(247, 215, 238, 0.4)`}
        overflow="hidden"
        variant="outline"
        key={selectedProduct?.id}
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
            maxW={{ base: "40%", sm: "300px" }}
            src={selectedProduct?.image}
            alt={selectedProduct?.title}
            margin={2}
          />
        </CardBody>
        <Stack padding={{ base: 2, sm: 4 }} fontSize={{ base: "md", sm: "lg" }}>
          <Heading size="xl">{selectedProduct?.title}</Heading>
          <Text fontWeight="bold" fontSize={{ base: "lg", sm: "xl" }}>
            Category: {selectedProduct?.category}
          </Text>
          <Text fontWeight="bold" fontSize={{ base: "sm", sm: "lg" }}>
            {selectedProduct?.description}
          </Text>
          <Text
            fontWeight="bold"
            fontSize={{ base: "xl", sm: "2xl" }}
            color={""}
          >
            {formatCurrency(Number(selectedProduct?.price))}
          </Text>
          <Divider borderColor="gray" />
          <CardFooter>
            <Flex
              flexDir={{ base: "column", md: "row" }}
              justifyContent={{ base: "center", md: "space-between" }}
              alignItems="center"
            >
              <Button
                onClick={() => {
                  increaseCartQuantity(selectedProduct?.id);
                  navigate("/shoppingCartGrid");
                }}
                variant="solid"
                colorScheme="yellow"
                fontSize={{ base: "md", md: "lg" }}
                marginBottom={{ base: 2, md: 0 }}
                marginRight={{ base: 0, md: 2 }}
              >
                Add to cart
              </Button>
              {isProductInNewProduct && (
                <>
                  <Button
                    onClick={() => {
                      selectedProduct?.id && deleteProduct(selectedProduct?.id);
                      navigate("/");
                    }}
                    variant="solid"
                    colorScheme="red"
                    fontSize={{ base: "md", md: "lg" }}
                    marginRight={{ base: 0, md: 2 }}
                    marginBottom={{ base: 2, md: 0 }}
                  >
                    Delete Product
                  </Button>
                </>
              )}
            </Flex>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  );
};

export default ProductDetailedPage;
