import React from "react";
import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={10}>
      <Container maxW="container.lg">
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <Box>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              HELP
            </Text>
            <SimpleGrid columns={1} spacing={2}>
              <Link to="/userPage">MY ACCOUNT</Link>
              <Link to="/shipping">SHIPPING</Link>
              <Link to="/exchanges">EXCHANGES</Link>
              <Link to="/refunds">RETURNS AND REFUNDS</Link>{" "}
            </SimpleGrid>
          </Box>

          <Box>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              POLICIES
            </Text>
            <SimpleGrid columns={1} spacing={2}>
              <Link to="/policy">PRIVACY POLICY</Link>
              <Link to="/purchase">PURCHASE CONDITIONS</Link>

              <Link to="/cookies">COOKIES SETTINGS</Link>
            </SimpleGrid>
          </Box>

          <Box>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              FOLLOW US
            </Text>

            <SimpleGrid columns={2} spacing={2}>
              <Link to="/">INSTAGRAM</Link>
              <Link to="#">FACEBOOK</Link>
            </SimpleGrid>
          </Box>
        </Grid>

        <Divider mt={8} borderColor="gray.600" />

        <Flex justifyContent="space-between" alignItems="center" mt={8}>
          <Text>&copy; 2023 Shop-Shopping. All rights reserved.</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
