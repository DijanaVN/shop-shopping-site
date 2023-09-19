import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

import ProductGridPage from "./ProductGridPage";
import { useNewCartContext } from "./../StateManagement/ShoppingCartContext";

import SingleCart from "../components/SingleCart";
import { formatCurrency } from "./../utilities/formatCurrency";
import useScrollToTop from "../hooks/useScrollToTop";
import StripeCheckoutButton from "./../components/stripeCheckoutButton";
import React from "react";
import { Link } from "react-router-dom";

const ShoppingCartGrid = () => {
  const { cartTotal, cartItems } = useNewCartContext();

  useScrollToTop();
  return (
    <Box m={15}>
      <Grid
        margin={4}
        templateColumns={{ base: "1fr", lg: "repeat(1.5fr 0.5fr)" }}
        templateRows={{ base: "repeat(3, auto)", lg: "repeat(2, 1fr)" }}
        gap={4}
      >
        <GridItem rowSpan={{ base: 1, lg: 2 }} colSpan={{ base: 1, lg: 1 }}>
          <VStack p={4} borderWidth="2px" borderRadius="md" boxShadow="md">
            <Box
              bgColor={"primary.50"}
              w={"100%"}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
            >
              <Text fontSize="xl" fontWeight="bold">
                MY CART
              </Text>
            </Box>
            {cartItems.length === 0 ? ( // Check if cart is empty
              <Box
                bgColor={"primary.50"}
                p={4}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
              >
                {" "}
                <Text fontSize="xl" fontWeight="bold">
                  Your cart is empty.
                </Text>
                <Text textAlign={"center"} fontSize="lg">
                  Please choose from our various products available below or on
                  the{" "}
                  <Link to="/" style={{ textDecoration: "underline" }}>
                    home page.
                  </Link>
                </Text>
              </Box>
            ) : (
              <Box
                bgColor={"primary.50"}
                p={4}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
              >
                {cartItems.map((product) => (
                  <Flex
                    key={product.id}
                    margin={2}
                    flexWrap="wrap" // Allow flex items to wrap on small screens
                    justifyContent={{ base: "center", lg: "space-between" }} // Responsive alignment
                    alignItems="center" // Align items vertically
                    p={{ base: 2, lg: 4 }} // Responsive padding
                    borderRadius="md"
                    borderWidth="1px"
                    boxShadow="md"
                    width={{ base: "100%", lg: "100%" }} // Responsive width
                  >
                    <SingleCart {...product} />{" "}
                  </Flex>
                ))}
              </Box>
            )}
            <HStack
              justifyContent={"space-evenly"}
              bgColor={"primary.50"}
              w={"100%"}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
            >
              <Text fontSize="2xl" fontWeight="bold">
                Total:
              </Text>
              <Text fontWeight={"bold"} fontSize="xl">
                {formatCurrency(cartTotal)}
              </Text>
              <Text fontSize="2xl" fontWeight="bold"></Text>
            </HStack>
          </VStack>
        </GridItem>
        <GridItem rowSpan={{ base: 1, lg: 2 }} colSpan={{ base: 1, lg: 1 }}>
          <VStack p={4} borderWidth="2px" borderRadius="md" boxShadow="md">
            <Box
              bgColor={"primary.50"}
              w={"100%"}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
            >
              <Text fontSize="xl" fontWeight="bold">
                TOTAL
              </Text>
            </Box>
            <Box
              bgColor={"primary.50"}
              w={"100%"}
              p={4}
              borderRadius="md"
              boxShadow="md"
            >
              <HStack justifyContent={"space-between"}>
                <Text fontSize="xl" mb={4}>
                  Sub-total:
                </Text>
                <Text fontWeight={"bold"} fontSize="xl" mb={4}>
                  {formatCurrency(cartTotal)}
                </Text>
              </HStack>
              <Box fontSize="xl">
                <Divider borderColor="gray" />{" "}
                <HStack mt={5} fontWeight={"bold"} fontSize="xl">
                  <Text>Total:</Text>
                  <Text>{formatCurrency(cartTotal)}</Text>
                </HStack>
              </Box>
            </Box>

            <StripeCheckoutButton />

            <Box
              bgColor={"primary.50"}
              w={"100%"}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
            >
              <Text fontSize="sm" fontWeight={"bold"}>
                WE ACCEPT :
              </Text>
              <Box paddingTop={2} fontSize="2xl">
                <HStack>
                  <Box flex="1">
                    <RiVisaFill />
                  </Box>
                  <Box flex="1">
                    <FaCcMastercard />
                  </Box>

                  <Box flex="1">
                    <SiAmericanexpress />
                  </Box>
                </HStack>
              </Box>
            </Box>
          </VStack>
        </GridItem>
        <GridItem rowSpan={{ base: 1, lg: 1 }} colSpan={{ base: 1, lg: 2 }}>
          <Box>
            <Box
              borderWidth="1px"
              m={3}
              p={3}
              fontSize="lg"
              fontWeight={"bold"}
              bgColor={"lightcyan"}
            >
              YOU MAY ALSO LIKE
            </Box>
            <ProductGridPage />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ShoppingCartGrid;
