import { VStack, Divider, Text, Box, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import img from "../images/jason-leung-7bpCPMOZ1rs-unsplash.webp";

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Implement your sign out logic here
  };

  const handleDeleteAccount = () => {
    // Implement your delete account logic here
  };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Image height="50vh" width={"100%"} src={img} objectFit="cover" />
      <Box margin={8} bgColor={"primary.50"} padding={5} width={"100%"}>
        <Divider />
        <Text
          bgColor={"primary.50"}
          padding={5}
          fontSize="lg"
          fontWeight="bold"
          cursor="pointer"
          onClick={() => navigate("/adressPage")}
        >
          ADDRESSES
        </Text>
        <Divider />
        <Text
          padding={5}
          fontSize="lg"
          fontWeight="bold"
          cursor="pointer"
          onClick={() => navigate("/emailPage")}
        >
          EMAIL
        </Text>{" "}
        <Divider />
        <Text
          padding={5}
          fontSize="lg"
          fontWeight="bold"
          cursor="pointer"
          onClick={() => navigate("/passwordPage")}
        >
          CHANGE PASSWORD
        </Text>
        <Divider />
      </Box>
      <Box padding={5}>
        <Divider />
        <Text fontSize="sm" cursor="pointer" onClick={handleSignOut}>
          Sign out
        </Text>
        <Divider />
        <Text fontSize="sm" cursor="pointer" onClick={handleDeleteAccount}>
          Delete your account
        </Text>{" "}
        <Divider />
      </Box>
    </Flex>
  );
};

export default ProfilePage;
