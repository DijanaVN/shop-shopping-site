import { Box, Center, ListItem, OrderedList, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";

const Exchanges = () => {
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
        EXCHANGES
      </Center>
      <Text padding={5}>
        <strong>Exchanges</strong>
        <br />
        We want you to be completely satisfied with your purchase, and we
        understand that sometimes items may need to be exchanged. Below are our
        guidelines for making exchanges.
      </Text>
      <Text padding={5}>
        <strong>Eligibility:</strong>
        <br />
        You may be eligible for an exchange if the item you received is
        defective, damaged, or if you received the wrong item. Exchanges for
        size or color preferences are also possible, subject to availability.
      </Text>{" "}
      <Text padding={5}>
        <strong>Timeframe:</strong>
        <br />
        Please initiate an exchange request within 14 days of receiving your
        order. After this period, exchanges may not be possible.
      </Text>{" "}
      <Text padding={5}>
        <strong>Exchange Process:</strong>
        <br />{" "}
      </Text>{" "}
      To request an exchange, please follow these steps:
      <OrderedList style={{ marginLeft: "3rem" }}>
        <ListItem>
          Contact our customer support team within 30 days of receiving your
          order.
        </ListItem>
        <ListItem>
          Provide your order number and a description of the issue.
        </ListItem>
        <ListItem>
          Our team will guide you through the exchange process.
        </ListItem>
        <ListItem>
          Once approved, we will provide instructions for returning the item.
        </ListItem>
        <ListItem>
          Upon receiving the returned item, we will process the exchange.
        </ListItem>
      </OrderedList>
      <Text padding={5}>
        <strong>Conditions:</strong>
        <br />
        The item to be exchanged must be in its original condition, unused, and
        with all tags and packaging intact. We reserve the right to reject
        exchanges for items that do not meet these criteria.
      </Text>{" "}
      <Text padding={5}>
        <strong>Additional Costs:</strong>
        <br />
        If the exchanged item has a higher value, you may be required to pay the
        price difference. Any applicable shipping fees for the exchange will
        also be your responsibility.
      </Text>{" "}
      <Text padding={5}>
        <strong>Non-Exchangeable Items:</strong>
        <br />
        Certain items, such as personalized or custom-made products, may not be
        eligible for exchanges. Please contact us for clarification before
        initiating an exchange request.
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

export default Exchanges;
