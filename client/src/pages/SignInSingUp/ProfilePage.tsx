import {
  Divider,
  Text,
  Box,
  Flex,
  Image,
  AlertDialogOverlay,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import img from "../../images/jason-leung-7bpCPMOZ1rs-unsplash.webp";
import { useUserSignInContext } from "../../StateManagement/SignInUserContext";
import { useUserContext } from "../../StateManagement/UserInfoContext";
import { useRef, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import React from "react";
import { useNewCartContext } from "../../StateManagement/ShoppingCartContext";

const ProfilePage = () => {
  const { userSignIn, setUserSignIn } = useUserSignInContext();
  const { deleteUser } = useUserContext();
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const onCloseConfirmation = () => setIsConfirmationOpen(false);
  const cancelRef = useRef<HTMLButtonElement | null>(null);
  const { setCartItems } = useNewCartContext();

  const navigate = useNavigate();

  const handleSignOut = () => {
    setUserSignIn(undefined);
    setCartItems([]);
    navigate("/");
  };

  const handleDeleteAccount = () => {
    setIsConfirmationOpen(true);
  };

  const confirmDeleteAccount = () => {
    if (userSignIn) {
      deleteUser(userSignIn.id);
      setUserSignIn(undefined);
      onCloseConfirmation();
      navigate("/");
    }
  };
  useScrollToTop();
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
      </Box>{" "}
      <AlertDialog
        isOpen={isConfirmationOpen}
        leastDestructiveRef={cancelRef}
        onClose={onCloseConfirmation}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Delete Account</AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to delete your account?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onCloseConfirmation}>
                No
              </Button>
              <Button colorScheme="red" onClick={confirmDeleteAccount} ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Flex>
  );
};

export default ProfilePage;
