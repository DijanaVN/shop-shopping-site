import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useNewCartContext } from "../StateManagement/ShoppingCartContext";
import axios from "axios";

const StripeCheckoutButton: React.FC = () => {
  const { cartItems } = useNewCartContext();
  console.log(cartItems);

  const stripePublishableKey = import.meta.env
    .VITE_REACT_APP_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(stripePublishableKey);
  console.log(stripePublishableKey);

  const handleCheckout = async () => {
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

    const { data } = await axios.post(
      `${import.meta.env.VITE_REACT_APP_SERVER_URL}/checkout`,
      {
        lineItems,
      }
    );
    const stripe = await stripePromise;
    await stripe?.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <Box>
      <Button
        colorScheme="green" // You can choose your desired color scheme
        size="lg"
        onClick={handleCheckout}
      >
        Checkout
      </Button>
    </Box>
  );
};

export default StripeCheckoutButton;
