import React, { useEffect } from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import useCarts from "./../hooks/useCarts";

const ShoppingCart = () => {
  //   if (searchQuery.error) {
  //     return <div>Error loading data.</div>;
  //   }

  return (
    <Box margin={10} textAlign={"start"}>
      <Center
        padding={2}
        backgroundColor={"primary.50"}
        fontSize="xl"
        fontWeight="bold"
        mb={4}
      >
        {" "}
        {/* {searchQuery.isLoading ? "Loading..." : "SHOPPING CART"} */}
      </Center>

      {/* {carts.map((cart) => (
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
            <ul>
              {cart.products.map((product) => (
                <li key={product.productId}>
                  Product ID: {product.productId}, Quantity: {product.quantity}
                </li>
              ))}
            </ul>
          </Text>
        </Box>
      ))} */}
    </Box>
  );
};

export default ShoppingCart;
