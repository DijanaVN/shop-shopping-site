import {
  Box,
  Button,
  Divider,
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
import { DELIVERY_PRICE } from "./../components/constants";
import useScrollToTop from "../hooks/useScrollToTop";
import ThankYouPopup from "../components/thankYouPopupWindow";
import { useRef, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import StripeCheckoutButton from "./../components/stripeCheckoutButton";
import React from "react";
interface CheckoutResponse {
  url: string;
}

const ShoppingCartGrid = () => {
  const { cartTotal, cartItems, handleDelivery, totalAmount } =
    useNewCartContext();
  const [isThankYouPopupOpen, setIsThankYouPopupOpen] = useState(false);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  // const handleCloseThankYouPopup = () => {
  //   setIsThankYouPopupOpen(false);
  // };

  const emptyButtonRef = useRef<HTMLButtonElement>(null);
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
            <Box
              bgColor={"primary.50"}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
            >
              {cartItems.map((product) => (
                <Box key={product.id} margin={2}>
                  <SingleCart {...product} />{" "}
                </Box>
              ))}
            </Box>
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
                {/* <HStack justifyContent={"space-between"}>
                  <Text>Delivery:</Text>
                  <Box>
                    <Button
                      onClick={() => handleDelivery(true)}
                      marginRight={2}
                      boxShadow="md"
                      marginBottom={1}
                      bgColor="rgba(160, 242, 237, 0.4)"
                    >
                      Yes
                    </Button>
                    <Button
                      onClick={() => handleDelivery(false)}
                      boxShadow="md"
                      marginBottom={1}
                      bgColor="rgba(214, 26, 82, 0.4)"
                    >
                      No
                    </Button>
                  </Box>
                </HStack> */}
                {/* <Divider borderColor="gray" />
                <Text mt={2} fontSize="sm">
                  Standard Delivery ({formatCurrency(DELIVERY_PRICE)} )
                </Text> */}
                <Divider borderColor="gray" />{" "}
                <HStack mt={5} fontWeight={"bold"} fontSize="xl">
                  <Text>Total:</Text>
                  <Text>{formatCurrency(cartTotal)}</Text>
                </HStack>
              </Box>
            </Box>

            <StripeCheckoutButton />

            {/* <ThankYouPopup
              isOpen={isThankYouPopupOpen}
              onClose={handleCloseThankYouPopup}
              cancelRef={emptyButtonRef}
            /> */}
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
                    <FaCcPaypal />
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
// const stripe = await Stripe();
//   const response = await stripe?.redirectToCheckout({
//     lineItems: [
//       {
//         price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
//         quantity: 1,
//       },
//     ],
//     mode: "subscription",
//     successUrl: `http://localhost:5713/success`,
//     cancelUrl: `http://localhost:5713/cancel`,
//     customerEmail: "customer@email.com",
//   });
//   if (response?.error) {
//     console.warn(response.error.message);
//   } else {
//     setIsCheckoutLoading(true);
//     // Simulate checkout process
//     setTimeout(() => {
//       setIsCheckoutLoading(false);
//       alert("Checkout successful!");
//       // After successful checkout, open the Thank You popup
//       setIsThankYouPopupOpen(true);
//     }, 2000);
//   }
// };
