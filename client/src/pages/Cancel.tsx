import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="50vh" // This makes the container take up the full viewport height
    >
      <Box>
        <Text>
          The payment is canceled, please go back to our{" "}
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
