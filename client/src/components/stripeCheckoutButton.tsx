import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useNewCartContext } from "../StateManagement/ShoppingCartContext";
import axios from "axios";

const StripeCheckoutButton: React.FC = () => {
  const { cartTotal, cartItems, totalAmount } = useNewCartContext();
  console.log(cartItems);
  console.log(cartTotal);
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
            name: item.id,
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
      <button onClick={handleCheckout}>Checkout</button>
    </Box>
  );
};

export default StripeCheckoutButton;
// const [publishableKey, setPublishableKey] = useState<string | null>(null);

// useEffect(() => {
//   fetch("/api/get-publishable-key")
//     .then((response) => response.json())
//     .then((data) => {
//       setPublishableKey(data.publishableKey);
//     })
//     .catch((error) => {
//       console.error("Error fetching publishable key:", error);
//     });
// }, []);

// const handleClick = () => {
//   if (!publishableKey) {
//     console.error("Publishable key is not available.");
//     return;
//   }

//   fetch("/api/create-checkout-session", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       items: [
//         { id: 1, quantity: 3 },
//         { id: 2, quantity: 1 },
//       ],
//     }),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         return response
//           .json()
//           .catch(() => ({}))
//           .then((errorData) => {
//             console.error(errorData.error || "An error occurred");
//             throw new Error("Request failed");
//           });
//       }
//       return response.json();
//     })
//     .then(({ url }) => {
//       console.log(url);
//       window.location.href = url;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };
