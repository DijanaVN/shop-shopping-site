import { VStack, Text, Box, Flex, Image, Divider } from "@chakra-ui/react";
import { useUserSignInContext } from "../../StateManagement/SignInUserContext";
import img from "../../../public/images/jason-leung-7bpCPMOZ1rs-unsplash.webp";
import useScrollToTop from "../../hooks/useScrollToTop";

const AdressesPage = () => {
  const { userSignIn } = useUserSignInContext();

  if (!userSignIn) {
    return null;
  }
  useScrollToTop();
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Image height={"40vh"} width={"100%"} objectFit="cover" src={img} />
      <VStack
        spacing={4}
        marginTop={8}
        bgColor={"primary.50"}
        padding={5}
        width={"100%"}
      >
        <Text fontWeight="bold">ADDRESS:</Text> <Divider />
        <Box>
          <Text fontWeight="bold">
            {userSignIn?.name.firstname + " " + userSignIn?.name.lastname}
          </Text>
          <Divider />
          <Text>street: {userSignIn.address.street}</Text>
          <Divider />
          <Text>number: {userSignIn.address.number}</Text>
          <Divider />
          <Text>
            city:
            {userSignIn?.address.zipcode + " " + userSignIn?.address.city}
          </Text>
          <Divider />
        </Box>
      </VStack>
      <VStack spacing={4} padding={5}>
        <Text fontWeight="bold">INVOICING</Text> <Divider />
      </VStack>
    </Flex>
  );
};

export default AdressesPage;
