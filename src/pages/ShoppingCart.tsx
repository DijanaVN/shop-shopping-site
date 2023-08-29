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
import { useNavigate } from "react-router-dom";
import ThankYouPopup from "../components/thankYouPopupWindow";
import { useRef, useState } from "react";

const ShoppingCartGrid = () => {
  const { cartTotal, cartItems, handleDelivery, totalAmount } =
    useNewCartContext();
  const [isThankYouPopupOpen, setIsThankYouPopupOpen] = useState(false);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const handleCheckout = () => {
    // if (!isUserAuthenticated()) {
    //   alert("Please sign in to proceed with checkout.");
    //   return;
    // }

    setIsCheckoutLoading(true);
    // Simulate checkout process
    setTimeout(() => {
      setIsCheckoutLoading(false);
      alert("Checkout successful!");
    }, 2000);
    // Implement your checkout logic here
    // ...
    // After successful checkout, open the Thank You popup
    setIsThankYouPopupOpen(true);
  };
  const handleCloseThankYouPopup = () => {
    setIsThankYouPopupOpen(false);
  };
  const emptyButtonRef = useRef<HTMLButtonElement>(null);
  useScrollToTop();
  return (
    <Box m={15}>
      <Grid
        margin={4}
        templateColumns="1.5fr 0.5fr "
        templateRows="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1}>
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
                <SingleCart key={product.id} {...product} />
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
        <GridItem rowSpan={2} colSpan={1}>
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
                <HStack justifyContent={"space-between"}>
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
                </HStack>
                <Divider borderColor="gray" />
                <Text mt={2} fontSize="sm">
                  Standard Delivery ({formatCurrency(DELIVERY_PRICE)} )
                </Text>
                <Divider borderColor="gray" />{" "}
                <HStack mt={5}>
                  <Text fontSize="xl" fontWeight="bold">
                    Total:
                  </Text>
                  <Text fontWeight={"bold"} fontSize="xl">
                    {formatCurrency(totalAmount)}
                  </Text>
                </HStack>
              </Box>
            </Box>
            <Button
              onClick={handleCheckout}
              bgColor={"green.400"}
              color={"whiteAlpha.800"}
              w={"100%"}
              p={4}
              borderWidth="1px"
              boxShadow="md"
            >
              CHECKOUT
            </Button>
            <ThankYouPopup
              isOpen={isThankYouPopupOpen}
              onClose={handleCloseThankYouPopup}
              cancelRef={emptyButtonRef}
            />
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
        <GridItem rowSpan={1} colSpan={2}>
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
