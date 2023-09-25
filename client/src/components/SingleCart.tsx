import {
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  Box,
  Divider,
  Flex,
  Text,
  HStack,
  Button,
  VStack,
} from "@chakra-ui/react";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "../StateManagement/ShoppingCartContext";
import { useNewCartContext } from "../StateManagement/ShoppingCartContext";
import { useAllProductsContext } from "../StateManagement/AllProductsContexts";
import React from "react";

const SingleCart = ({ id, quantity }: CartItem) => {
  const {
    removeFromCart,
    cartItems,
    cartTotal,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useNewCartContext();
  const { allProducts } = useAllProductsContext();

  const item = allProducts.find((i) => i.id === id);
  if (item == null) return null;

  const itemTotal = Number(item.price) * quantity;

  return (
    <Flex
      margin={2}
      flexWrap="wrap"
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems="center"
      p={{ base: 2, lg: 4 }}
      borderRadius="md"
      borderWidth="1px"
      boxShadow="md"
      width={{ base: "100%", lg: "100%" }}
    >
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        justifyContent="center"
        alignItems="center"
        key={item?.id}
        bg={`rgba(247, 215, 238, 0.5)`}
        display="flex"
        width="100%"
      >
        <Image
          boxSize="200px"
          objectFit="scale-down"
          src={item?.image}
          alt={item?.title}
          borderRadius="lg"
        />
        <CardBody flex="2">
          <Stack spacing="3">
            <Heading paddingRight={5} size="md">
              {item?.title}
            </Heading>
            <Box fontWeight={"bold"}>Category: {item?.category}</Box>
            <HStack justifyContent={"space-between"}>
              <HStack>
                <Box fontWeight={"extrabold"} color="primary.300" fontSize="xl">
                  {formatCurrency(Number(item?.price))}
                </Box>
                {quantity > 1 && (
                  <Text fontWeight={"extrabold"}>x{quantity}</Text>
                )}
              </HStack>
              <Box>
                <HStack spacing={"none"}>
                  <Button
                    onClick={() => increaseCartQuantity(id ?? 0)}
                    bgColor={"green.200"}
                  >
                    +
                  </Button>
                  <Button>{quantity}</Button>
                  <Button
                    onClick={() => decreaseCartQuantity(id ?? 0)}
                    bgColor={"orange.300"}
                  >
                    -
                  </Button>
                </HStack>
              </Box>
            </HStack>
            <Divider borderColor="black" />
            <Text fontWeight={"extrabold"} fontSize="xl">
              Total:
            </Text>
            <HStack justifyContent={"space-between"}>
              <Box fontWeight={"extrabold"} fontSize="xl" color={"orange"}>
                {formatCurrency(itemTotal)}
              </Box>
              <Button
                onClick={() => removeFromCart(item.id)}
                fontSize={"sm"}
                padding={1}
                variant={"outline"}
                borderColor="black"
              >
                X
              </Button>
            </HStack>
          </Stack>
          <Divider color={"black"} />
        </CardBody>
      </Card>
    </Flex>
  );
};

export default SingleCart;
