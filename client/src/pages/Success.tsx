import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Success = () => {
  useEffect(() => {
    localStorage.removeItem("cartData");
  }, []);
  return (
    <Flex justifyContent="center" alignItems="center" height="50vh">
      <Box>
        <Text>
          Your payment has been successfully processed. To place another order,
          please{" "}
          <Link to="/signin" style={{ textDecoration: "underline" }}>
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
