import React from "react";
import {
  Box,
  Heading,
  Text,
  Link,
  List,
  ListItem,
  Textarea,
  Input,
  Button,
  VStack,
  Image,
  FormControl,
  FormLabel,
  Grid,
} from "@chakra-ui/react";
import img from "../images/andrew-neel-ute2XAFQU2I-unsplash.webp";

const ContactUs = () => {
  return (
    <Box bg="gray.100" p={12}>
      <Grid templateColumns="repeat(2, 1fr)" gap={12}>
        <Image height="100%" src={img} alt="Shop-Shopping" />
        <Box pt={12} paddingLeft={8} paddingRight={8}>
          <Box>
            <Heading>Contact Us</Heading> <br />
            <Text>
              If you have any questions or need assistance, feel free to get in
              touch with us. Our team is here to help!
            </Text>
          </Box>
          <br />
          <Box>
            <Heading size="md">Contact Information</Heading>
            <List spacing={2} mt={2}>
              <ListItem>
                <strong>Email:</strong>{" "}
                <Link href="mailto:info@example.com">info@example.com</Link>
              </ListItem>
              <ListItem>
                <strong>Phone:</strong> +1 (555) 123-4567
              </ListItem>
              <ListItem>
                <strong>Address:</strong> 123 Main Street, Cityville, ST 12345
              </ListItem>
            </List>
          </Box>
          <br />
          <br />
          <Box>
            <Heading size="md">Contact Form</Heading>
            <br />
            <Text>You can also reach us by filling out the form below:</Text>
            <form>
              <VStack spacing={4} mt={4} align="start">
                <FormControl>
                  <FormLabel htmlFor="name">Name:</FormLabel>
                  <Input type="text" id="name" name="name" required />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email:</FormLabel>
                  <Input type="email" id="email" name="email" required />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="message">Message:</FormLabel>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    resize="vertical"
                    required
                  />
                </FormControl>
                <Button type="submit">Submit</Button>
              </VStack>
            </form>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default ContactUs;
