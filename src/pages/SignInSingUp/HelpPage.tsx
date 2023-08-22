import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Image,
  Flex,
  Grid,
  Center,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import img from "../../images/margarida-afonso-F01g8NPdOdo-unsplash.webp";

const HelpPage = () => {
  return (
    <>
      <Grid p={6} width={"100%"}>
        <Heading
          padding={5}
          backgroundColor={"primary.50"}
          as="h1"
          size="xl"
          mb={4}
        >
          Help Center
        </Heading>
        <VStack align="start" spacing={4} width={"100%"}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Items Availability
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vehicula bibendum sapien, ut gravida urna laoreet vel. Sed
                  iaculis leo euismod felis feugiat, nec sodales lorem dictum.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Refunds
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text>
                  If you are not satisfied with your purchase, you can request a
                  refund within 30 days of your purchase date. Please contact
                  our customer support team for assistance.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Order Status
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text>
                  You can track your order status by logging into your account
                  and visiting the "Order History" section. Alternatively, you
                  can contact our customer support team for assistance.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    How to Return
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text>
                  To initiate a return, please visit the "Returns" section in
                  your account settings. Follow the instructions provided to
                  return your item. Our customer support team is available to
                  assist you throughout the process.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Other Concerns
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel justifyContent={"space-between"}>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text>
                    For any other concerns please write to us, we will reply to
                    you in the next 12h.
                  </Text>{" "}
                  <Button
                    marginLeft={8}
                    as={Link}
                    to={"/contactUs"}
                    variant="outline"
                  >
                    Contact Us
                  </Button>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
        <Stack marginTop={5} align={"center"}>
          <Image boxSize="50%" objectFit="cover" src={img} />
        </Stack>
      </Grid>
    </>
  );
};

export default HelpPage;
