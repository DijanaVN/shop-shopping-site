import { Box, Center, Text } from "@chakra-ui/react";

const Shipping = () => {
  return (
    <Box margin={10} textAlign={"start"}>
      <Center
        padding={2}
        backgroundColor={"primary.50"}
        fontSize="xl"
        fontWeight="bold"
        mb={4}
      >
        SHIPPING RULES
      </Center>
      <Text padding={5}>
        We strive to provide a seamless and efficient shipping experience for
        all our customers. Below are our shipping rules and guidelines to ensure
        your order reaches you in a timely manner.
      </Text>
      <Text padding={5}>
        <strong>Shipping Locations:</strong>
        <br />
        We currently offer shipping to domestic locations. Shipping rates and
        delivery times may vary based on your location.
      </Text>{" "}
      <Text padding={5}>
        <strong>Processing Time:</strong>
        <br />
        After placing an order, please allow 1-2 business days for order
        processing and verification. Orders are not processed on weekends or
        holidays.
      </Text>{" "}
      <Text padding={5}>
        <strong>Shipping Methods:</strong>
        <br />
        We offer various shipping methods, including standard and express
        options. Shipping costs and delivery times may vary depending on the
        chosen method.
      </Text>{" "}
      <Text padding={5}>
        <strong>Tracking Information:</strong>
        <br />
        Once your order is shipped, you will receive a confirmation email with
        tracking information. You can use this information to track the status
        and estimated delivery date of your order.
      </Text>{" "}
      <Text padding={5}>
        <strong>Shipping Delays:</strong>
        <br />
        While we make every effort to ensure timely deliveries, external factors
        beyond our control (such as weather conditions, customs delays, etc.)
        may occasionally lead to shipping delays. We appreciate your
        understanding in such cases.
      </Text>{" "}
      <Text padding={5}>
        <strong>Shipping Fees:</strong>
        <br />
        Shipping fees are calculated based on the shipping method selected,
        delivery location, and order value. You can view the applicable shipping
        fees during checkout.
      </Text>{" "}
    </Box>
  );
};

export default Shipping;
