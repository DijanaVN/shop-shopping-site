import React from "react";
import {
  VStack,
  Text,
  Box,
  Flex,
  Image,
  Divider,
  Button,
} from "@chakra-ui/react";
import { useUserSignInContext } from "../../StateManagement/SignInUserContext";
import img from "../../images/jason-leung-7bpCPMOZ1rs-unsplash.webp";
import { useRef, useState } from "react";
import { useUserContext } from "../../StateManagement/UserInfoContext";
import PopupWindow from "../../components/Popupwindow";
import useScrollToTop from "../../hooks/useScrollToTop";

const PasswordPage = () => {
  const { userSignIn, updateSignInUser } = useUserSignInContext();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [wrongOldPassword, setWrongOldPassword] = useState(false);
  const { users, setUsers } = useUserContext();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  useScrollToTop();
  const handlePasswordChange = () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    if (oldPassword !== userSignIn?.password) {
      setWrongOldPassword(true);
      return;
    }

    updateSignInUser({
      ...userSignIn,
      password: newPassword,
    });
    const updatedUsers = users.map((u) =>
      u.id === userSignIn.id ? { ...u, password: newPassword } : u
    );
    setUsers(updatedUsers);
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordMatchError(false);
    setWrongOldPassword(false);
    setIsSuccessOpen(true);
  };

  if (!userSignIn) {
    return null;
  }

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
        <Text fontSize={"xl"} fontWeight="bold">
          Password:
        </Text>{" "}
        <Divider />
        <Box>
          <Text padding={2} fontSize={"lg"} fontWeight="bold">
            User: {userSignIn?.name.firstname + " " + userSignIn?.name.lastname}
          </Text>
          <Divider />

          <Flex direction={"column"} alignItems="center" gap="3">
            <Box>
              <Text>Old Password</Text>
              <input
                type="password"
                placeholder="Enter your password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />{" "}
              {oldPassword !== "" && oldPassword === userSignIn.password ? (
                <Button
                  variant="solid"
                  colorScheme="green"
                  size={"xs"}
                  onClick={() => alert("Password is correct!")}
                >
                  ✓
                </Button>
              ) : null}
            </Box>
            <Box>
              <Text>New Password</Text>
              <input
                type="password"
                placeholder="Enter your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Box>
            <Box>
              {" "}
              <Box>
                <Text>Confirm New Password</Text>
                <input
                  type="password"
                  placeholder="Confirm your new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />{" "}
                {confirmPassword !== "" && confirmPassword === newPassword ? (
                  <Button
                    variant="solid"
                    colorScheme="green"
                    size={"xs"}
                    onClick={() => alert("Password is correct!")}
                  >
                    ✓
                  </Button>
                ) : null}
              </Box>
            </Box>
            {passwordMatchError && (
              <Text fontSize={"sm"} color="red">
                Passwords do not match.
              </Text>
            )}
            {wrongOldPassword && (
              <Text fontSize={"sm"} color="red">
                Incorrect old password.
              </Text>
            )}
            <Button
              variant="solid"
              colorScheme="blue"
              ref={cancelRef}
              onClick={handlePasswordChange}
            >
              Change Password
            </Button>{" "}
            <PopupWindow
              isOpen={isSuccessOpen}
              onClose={() => setIsSuccessOpen(false)}
              state={"password"}
              action={"update"}
              cancelRef={cancelRef}
            />
          </Flex>
        </Box>
      </VStack>
    </Flex>
  );
};

export default PasswordPage;
