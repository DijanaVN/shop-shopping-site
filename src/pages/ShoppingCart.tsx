import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

const ShoppingCartGrid = () => {
  return (
    <Grid templateColumns="1fr 1fr" gap={4}>
      {/* Left Column */}
      <GridItem colSpan={1}>
        <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            My Cart
          </Text>
        </Box>
      </GridItem>

      {/* Right Column */}
      <GridItem colSpan={1}>
        <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Total
          </Text>
          {/* Display total and delivery option */}
          {/* Checkout button */}
          {/* Accepted payment methods */}
        </Box>
      </GridItem>
    </Grid>
  );
};

export default ShoppingCartGrid;
