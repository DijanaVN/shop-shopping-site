import React from "react";
import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import useScrollToTop from "../../hooks/useScrollToTop";

const Footer = () => {
  useScrollToTop();
  return (
    <Box bg="gray.800" color="white" py={10}>
      <Container maxW="container.lg">
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              HELP
            </Text>
            <Divider mb={3} borderColor="gray.600" />
            <SimpleGrid fontSize={"sm"} columns={1} spacing={2}>
              <Link to="/userPage">MY ACCOUNT</Link>
              <Link to="/shipping">SHIPPING</Link>
              <Link to="/exchanges">EXCHANGES</Link>
              <Link to="/returns">RETURNS AND REFUNDS</Link>{" "}
            </SimpleGrid>
          </Box>

          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              POLICIES
            </Text>
            <Divider mb={3} borderColor="gray.600" />
            <SimpleGrid fontSize={"sm"} columns={1} spacing={2}>
              <Link to="/policy">PRIVACY POLICY</Link>
              <Link to="/purchase">PURCHASE CONDITIONS</Link>

              <Link to="/cookies">COOKIES SETTINGS</Link>
            </SimpleGrid>
          </Box>

          <Box fontSize={"sm"}>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              FOLLOW US
            </Text>
            <Divider mb={3} borderColor="gray.600" />

            <SimpleGrid columns={2} spacing={2}>
              <Link
                to="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                INSTAGRAM{" "}
                <Center>
                  <BsInstagram />{" "}
                </Center>
              </Link>
              <Link
                to="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                FACEBOOK{" "}
                <Center>
                  <BsFacebook />
                </Center>
              </Link>
            </SimpleGrid>
          </Box>
        </Grid>

        <Divider mt={8} borderColor="gray.600" />

        <Flex
          fontSize={"xs"}
          justifyContent="space-between"
          alignItems="center"
          mt={8}
        >
          <Text>&copy; 2023 Shop-Shopping. All rights reserved.</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
