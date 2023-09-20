import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const Cancel = () => {
  return (
    <Flex justifyContent="center" alignItems="center" height="50vh">
      <Box>
        <Text>
          The payment is canceled, please go back to your{" "}
          <Link to="/shoppingCartGrid" style={{ textDecoration: "underline" }}>
            shopping cart
          </Link>
          .
        </Text>
      </Box>
    </Flex>
  );
};

export default Cancel;
