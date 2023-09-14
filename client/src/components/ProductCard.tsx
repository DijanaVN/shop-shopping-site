import { formatCurrency } from "../utilities/formatCurrency";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  Button,
  Image,
  Text,
  HStack,
  Center,
  Box,
} from "@chakra-ui/react";
import { Product } from "../hooks/useProducts";
import { useNewCartContext } from "../StateManagement/ShoppingCartContext";
import "../index.css";
import useScrollToTop from "../hooks/useScrollToTop";
import { useNavigate } from "react-router-dom";
import { useSelectedProductContext } from "../StateManagement/SelectedProductContext";
import React from "react";

const ProductCard = ({ id, title, image, category, price }: Product) => {
  const { selectedProduct, onClick } = useSelectedProductContext();
  const { increaseCartQuantity } = useNewCartContext();
  const navigate = useNavigate();

  useScrollToTop();
  return (
    <Box className={`product-card`}>
      <Card
        height="720px"
        key={id}
        bg={`rgba(247, 215, 238, 0.5)`}
        marginBottom={5}
      >
        <CardBody>
          <Image boxSize={"xs"} src={image} alt={title} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text fontWeight={"bold"}>Category: {category}</Text>

            <Text fontWeight={"extrabold"} color="primary.300" fontSize="2xl">
              {formatCurrency(Number(price))}
            </Text>
          </Stack>
        </CardBody>{" "}
        <Divider />
        <Center>
          <CardFooter>
            <HStack justifyContent={"space-between"} spacing={10}>
              <Button
                onClick={() => {
                  increaseCartQuantity(id ?? 0), navigate("/shoppingCartGrid");
                }}
                variant="solid"
                colorScheme="orange"
              >
                Add to cart
              </Button>
              <Button
                onClick={() => {
                  navigate(`/product/${id}`);
                }}
                variant="solid"
                colorScheme="yellow"
              >
                Details
              </Button>
            </HStack>
          </CardFooter>
        </Center>
      </Card>
    </Box>
  );
};

export default ProductCard;
