import { Box, Button, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useNewCartContext } from "../StateManagement/ShoppingCartContext";
import axios from "axios";

const StripeCheckoutButton: React.FC = () => {
  const { cartItems } = useNewCartContext();
  const [isLoading, setIsLoading] = useState(false);

  const stripePublishableKey = import.meta.env
    .VITE_REACT_APP_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(stripePublishableKey);

  const handleCheckout = async () => {
    setIsLoading(true);
    const lineItems = cartItems.map((item) => {
      if (typeof item.price !== "number") {
        console.error(`Invalid price for item: ${item.id}`);
        return null;
      }
      return {
        price_data: {
          currency: "eur",
          product_data: {
            name: item.title,
            images: [item.image],
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      };
    });

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_REACT_APP_SERVER_URL}/checkout`,
        {
          lineItems,
        }
      );
      const stripe = await stripePromise;
      await stripe?.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      console.error("Error during checkout:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Box>
      <Button colorScheme="green" size="lg" onClick={handleCheckout}>
        {isLoading ? <Spinner size="sm" mr={2} /> : null} Checkout
      </Button>
    </Box>
  );
};

export default StripeCheckoutButton;
