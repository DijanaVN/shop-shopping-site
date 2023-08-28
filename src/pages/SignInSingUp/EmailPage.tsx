import {
  VStack,
  Text,
  Box,
  Flex,
  Image,
  Divider,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import { useUserSignInContext } from "../../StateManagement/SignInUserContext";
import img from "../../images/jason-leung-7bpCPMOZ1rs-unsplash.webp";
import { useRef, useState } from "react";
import { User, useUserContext } from "../../StateManagement/UserInfoContext";
import PopupWindow from "../../components/Popupwindow";
import useScrollToTop from "../../hooks/useScrollToTop";

const EmailPage = () => {
  const { userSignIn, updateSignInUser } = useUserSignInContext();
  const [newEmail, setNewEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [emailMatchError, setEmailMatchError] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [wrongOldEmail, setWrongOldEmail] = useState(false);
  const cancelRef = useRef<HTMLButtonElement | null>(null);
  const { users, setUsers } = useUserContext();

  const handleEmailChange = () => {
    if (!newEmail || !confirmEmail) {
      return; // Don't proceed if any field is empty
    }

    if (newEmail !== confirmEmail) {
      setEmailMatchError(true);
      return; // Don't proceed if new Email and confirm Email don't match
    }
    updateSignInUser({
      ...(userSignIn as User),
      email: newEmail,
    });

    const updatedUsers = users.map((u) =>
      u.id === userSignIn?.id ? { ...u, email: newEmail } : u
    );
    setUsers(updatedUsers);
    console.log(userSignIn);
    console.log(updatedUsers);

    setNewEmail("");
    setConfirmEmail("");
    setEmailMatchError(false);
    setWrongOldEmail(false);
    setIsSuccessOpen(true);
  };

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
        <Text fontWeight="bold">Email:</Text> <Divider />
        <Box>
          <Text fontWeight="bold">
            User: {userSignIn?.name.firstname + " " + userSignIn?.name.lastname}
          </Text>
          <Divider />
          <Text>
            <b>email:</b> {userSignIn.email}
          </Text>
          <Divider />
          <Divider />
          <Flex direction={"column"} alignItems="center" gap="3">
            <input
              type="Email"
              placeholder="New Email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <Box>
              <input
                type="Email"
                placeholder="Confirm New Email"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
              />{" "}
              {confirmEmail !== "" && confirmEmail === newEmail ? (
                <Button
                  variant="solid"
                  colorScheme="green"
                  size={"xs"}
                  onClick={() => alert("Email is correct!")}
                >
                  ✓
                </Button>
              ) : null}
            </Box>
            {emailMatchError && (
              <Text fontSize={"sm"} color="red">
                Emails do not match.
              </Text>
            )}
            {wrongOldEmail && (
              <Text fontSize={"sm"} color="red">
                Incorrect old Email.
              </Text>
            )}
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={handleEmailChange}
              ref={cancelRef}
            >
              Change Email
            </Button>
          </Flex>{" "}
          <PopupWindow
            isOpen={isSuccessOpen}
            onClose={() => setIsSuccessOpen(false)}
            state={"email"}
            action={"update"}
            cancelRef={cancelRef}
          />
        </Box>
      </VStack>
    </Flex>
  );
};

export default EmailPage;
