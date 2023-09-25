import React, { useRef, useState } from "react";
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
  GridItem,
} from "@chakra-ui/react";
import img from "../../images/andrew-neel-ute2XAFQU2I-unsplash.webp";
import { FieldElement, FieldValues, useForm } from "react-hook-form";
import {
  ContactForm,
  useContactFormContext,
} from "../../StateManagement/ContactFormContext";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PopupWindow from "../../components/Popupwindow";
import useScrollToTop from "../../hooks/useScrollToTop";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(schema),
  });
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const { contactForm, setContactForm } = useContactFormContext();

  const onSubmit = (data: ContactForm) => {
    setContactForm([...contactForm, data]);

    reset();
    setIsSuccessOpen(true);
  };
  useScrollToTop();
  return (
    <Box bg="gray.100" p={12}>
      <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={12}>
        <GridItem display={{ base: "none", lg: "block" }}>
          <Image height="100%" src={img} alt="Shop-Shopping" />
        </GridItem>
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing={4} mt={4} align="start">
                <FormControl>
                  <FormLabel htmlFor="name">Name:</FormLabel>
                  <Input type="text" {...register("name")} />
                  {errors.name && (
                    <Text fontSize={"xs"} color="red">
                      {errors.name.message}
                    </Text>
                  )}
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email:</FormLabel>
                  <Input type="email" {...register("email")} />
                  {errors.email && (
                    <Text fontSize={"xs"} color="red">
                      {errors.email.message}
                    </Text>
                  )}
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="message">Message:</FormLabel>
                  <Textarea
                    rows={4}
                    resize="vertical"
                    required
                    {...register("message")}
                  />
                  {errors.message && (
                    <Text fontSize={"xs"} color="red">
                      {errors.message.message}
                    </Text>
                  )}
                </FormControl>
                <Button ref={cancelRef} variant={"outline"} type="submit">
                  Submit
                </Button>{" "}
                <PopupWindow
                  isOpen={isSuccessOpen}
                  onClose={() => setIsSuccessOpen(false)}
                  state={"contact form"}
                  action={"send"}
                  cancelRef={cancelRef}
                />
              </VStack>
            </form>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default ContactUs;
