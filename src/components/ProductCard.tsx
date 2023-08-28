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
  VStack,
  ButtonGroup,
  HStack,
  Center,
  Box,
} from "@chakra-ui/react";
import { Product } from "../hooks/useProducts";
import { useNewCartContext } from "../StateManagement/ShoppingCartContext";
import "../index.css";
import useScrollToTop from "../hooks/useScrollToTop";

const ProductCard = ({ id, title, image, category, price }: Product) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useNewCartContext();
  const quantity = getItemQuantity(id ?? 0);
  useScrollToTop();
  return (
    <Box className={`product-card`}>
      <Card
        height="720px"
        key={id}
        bg={`rgba(247, 215, 238, 0.5)`}
        maxW="sm"
        marginBottom={5}
      >
        <CardBody>
          <Image boxSize="sm" src={image} alt={title} borderRadius="lg" />
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
            <ButtonGroup spacing="2">
              {" "}
              {quantity === 0 ? (
                <Button
                  onClick={() => increaseCartQuantity(id ?? 0)}
                  variant="solid"
                  colorScheme="yellow"
                >
                  Add to cart
                </Button>
              ) : (
                <VStack>
                  <HStack>
                    <Button
                      onClick={() => increaseCartQuantity(id ?? 0)}
                      bgColor={"green.200"}
                    >
                      +
                    </Button>
                    <Text>{quantity} in cart</Text>
                    <Button
                      onClick={() => decreaseCartQuantity(id ?? 0)}
                      bgColor={"orange.300"}
                    >
                      -
                    </Button>
                  </HStack>
                  <Button
                    onClick={() => removeFromCart(id ?? 0)}
                    bgColor={"red"}
                  >
                    Remove
                  </Button>
                </VStack>
              )}
            </ButtonGroup>
          </CardFooter>
        </Center>
      </Card>
    </Box>
  );
};

export default ProductCard;
