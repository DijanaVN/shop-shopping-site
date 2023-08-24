import { Box, Center, ListItem, OrderedList, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ReturnsRefunds = () => {
  return (
    <Box margin={10} textAlign={"start"}>
      <Center
        padding={2}
        backgroundColor={"primary.50"}
        fontSize="xl"
        fontWeight="bold"
        mb={4}
      >
        RETURNS AND REFUNDS
      </Center>
      <Text padding={5}>
        We want you to have a satisfying shopping experience, and we understand
        that sometimes items may need to be returned for a refund. Below are our
        guidelines for returns and refunds.
      </Text>
      <Text padding={5}>
        <strong>Eligibility:</strong>
        <br />
        You may be eligible for a return and refund if the item you received is
        defective, damaged, or if you received the wrong item. Returns for size
        or color preferences are also possible, subject to availability.
      </Text>{" "}
      <Text padding={5}>
        <strong>Timeframe:</strong>
        <br />
        Please initiate a return request within 30 days of receiving your order.
        After this period, returns for refunds may not be possible.
      </Text>{" "}
      <Text padding={5}>
        <strong>Return Process:</strong>
        <br />
        To request a return and refund, please follow these steps:
      </Text>{" "}
      <OrderedList style={{ marginLeft: "3rem" }}>
        <ListItem>
          Contact our customer support team within 30 days of receiving your
          order.
        </ListItem>
        <ListItem>
          Provide your order number and a description of the issue.
        </ListItem>
        <ListItem>
          Our team will guide you through the return and refund process.
        </ListItem>
        <ListItem>
          Once approved, we will provide instructions for returning the item.
        </ListItem>
        <ListItem>
          Upon receiving the returned item, we will process the refund.
        </ListItem>
      </OrderedList>
      <Text padding={5}>
        <strong>Conditions:</strong>
        <br />
        The item to be returned must be in its original condition, unused, and
        with all tags and packaging intact. We reserve the right to reject
        returns for items that do not meet these criteria.
      </Text>{" "}
      <Text padding={5}>
        <strong>Refund Process:</strong>
        <br />
        Once we receive the returned item, we will inspect it and process your
        refund. The refund will be issued to the original payment method used
        during purchase. Please allow a reasonable processing time for the
        refund to reflect in your account.
      </Text>{" "}
      <Text padding={5}>
        <strong>Non-Returnable Items:</strong>
        <br />
        Certain items, such as personalized or custom-made products, may not be
        eligible for returns and refunds. Please contact us for clarification
        before initiating a return request.
      </Text>{" "}
      <Text padding={5}>
        If you have any further questions about our exchange policies, feel free
        to
        <Link to="/contactUs">
          <i style={{ textDecoration: "underline" }}> contact us</i>
        </Link>{" "}
        for assistance.
      </Text>
    </Box>
  );
};

export default ReturnsRefunds;
