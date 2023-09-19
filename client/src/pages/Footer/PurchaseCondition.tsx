import { Box, Center, Text } from "@chakra-ui/react";
import useScrollToTop from "../../hooks/useScrollToTop";
import React from "react";

const PurchaseConditions = () => {
  useScrollToTop();
  return (
    <Box margin={10} textAlign={"start"}>
      <Center
        padding={2}
        backgroundColor={"primary.50"}
        fontSize="xl"
        fontWeight="bold"
        mb={4}
      >
        PURCHASE CONDITIONS
      </Center>
      <Text padding={5}>
        By making a purchase from Shop-Shopping, you agree to the following
        Purchase Conditions:
      </Text>
      <Text padding={5}>
        <strong>Payment:</strong> We accept various payment methods, including
        credit cards and PayPal. Payment is processed securely, and your payment
        information is protected.
      </Text>{" "}
      <Text padding={5}>
        <strong>Order Processing:</strong> Once your order is placed, we will
        process it within 1-2 business days. You will receive a confirmation
        email with your order details.
      </Text>{" "}
      <Text padding={5}>
        <strong>Shipping:</strong> We offer standard and expedited shipping
        options. Shipping times may vary based on your location. You can track
        your order status in the "Order History" section of your account.
      </Text>{" "}
      <Text padding={5}>
        <strong>Returns and Exchanges:</strong> We have a hassle-free return and
        exchange policy. If you are not satisfied with your purchase, you can
        return it within 30 days for a refund or exchange. Please refer to our
        Returns and Exchanges policy for detailed instructions.
      </Text>{" "}
      <Text padding={5}>
        <strong>Product Availability:</strong> Product availability is subject
        to change. We strive to keep our inventory accurate, but in rare cases,
        an item may be out of stock after your order is placed. In such cases,
        we will notify you and provide options for a replacement or refund.
      </Text>{" "}
      <Text padding={5}>
        <strong>Customer Support:</strong> Our customer support team is
        available to assist you with any questions or concerns. You can reach
        out to us through our
      </Text>{" "}
      <Text padding={5}>
        Please review these conditions carefully before completing your
        purchase.
      </Text>{" "}
    </Box>
  );
};

export default PurchaseConditions;
