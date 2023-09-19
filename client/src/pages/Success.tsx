import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="50vh" // This makes the container take up the full viewport height
    >
      <Box>
        <Text>
          Your payment has been successfully processed. To place another order,
          please{" "}
          <Link to="/shoppingCartGrid" style={{ textDecoration: "underline" }}>
            sign in
          </Link>{" "}
          and visit your{" "}
          <Link to="/shoppingCartGrid" style={{ textDecoration: "underline" }}>
            shopping cart.
          </Link>
          .
        </Text>
      </Box>
    </Flex>
  );
};

export default Success;
