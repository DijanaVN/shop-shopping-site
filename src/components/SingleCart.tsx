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
} from "@chakra-ui/react";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "../StateManagement/ShoppingCartContext";
import { useNewCartContext } from "../StateManagement/ShoppingCartContext";
import { useAllProductsContext } from "../StateManagement/AllProductsContexts";

const SingleCart = ({ id, quantity }: CartItem) => {
  const { removeFromCart, cartItems, getItemQuantity, cartTotal, itemTotal } =
    useNewCartContext();
  const { allProducts } = useAllProductsContext();

  const item = allProducts.find((i) => i.id === id);
  if (item == null) return null;

  console.log(cartTotal);
  console.log(cartItems);

  return (
    <Flex margin={5}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        minW="xs"
        minH={"xs"}
        justifyContent="center"
        alignItems="center"
        key={item?.id}
        bg={`rgba(247, 215, 238, 0.5)`}
        display="flex"
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
            <HStack>
              <Box fontWeight={"extrabold"} color="primary.300" fontSize="xl">
                {formatCurrency(Number(item?.price))}
              </Box>
              {quantity > 1 && (
                <Text fontWeight={"extrabold"}>x{quantity}</Text>
              )}
            </HStack>
            <Divider borderColor="black" />
            <Text fontWeight={"extrabold"} fontSize="xl">
              Total:
            </Text>
            <HStack justifyContent={"space-between"}>
              <Box fontWeight={"extrabold"} fontSize="xl" color={"orange"}>
                {itemTotal}
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
