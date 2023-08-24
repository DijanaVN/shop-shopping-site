import { Box, Center, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { useAllCartsContext } from "../StateManagement/AllCartsContext";

const AllShoppingCart = () => {
  const { allCarts } = useAllCartsContext();
  console.log(allCarts);

  return (
    <>
      <Box margin={10} textAlign={"start"}>
        <Center
          padding={2}
          backgroundColor={"primary.50"}
          fontSize="xl"
          fontWeight="bold"
          mb={4}
        >
          {" "}
          {allCarts ? "SHOPPING CARTS" : "Loading..."}
        </Center>

        {allCarts.map((cart) => (
          <Box
            key={cart.id}
            border="1px solid #ccc"
            borderRadius="md"
            p={4}
            mb={4}
          >
            <Text>
              <strong>Cart ID:</strong> {cart.id}
            </Text>
            <Text>
              <strong>User ID:</strong> {cart.userId}
            </Text>
            <Text>
              <strong>Date:</strong> {cart.date}
            </Text>
            <Text>
              <strong>Products:</strong>
              <UnorderedList>
                {cart.products.map((product) => (
                  <ListItem key={product.productId}>
                    Product ID: {product.productId}, Quantity:{" "}
                    {product.quantity}
                  </ListItem>
                ))}
              </UnorderedList>
            </Text>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default AllShoppingCart;