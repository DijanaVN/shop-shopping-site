import React from "react";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Divider,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";

const UserDropdown: React.FC = () => {
  const {
    isOpen: isSignInOpen,
    onOpen: onSignInOpen,
    onClose: onSignInClose,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onOpen: onSignUpOpen,
    onClose: onSignUpClose,
  } = useDisclosure();

  return (
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FaRegUser />}
          variant="ghost"
          fontSize="40"
          _hover={{}}
        />
        <MenuList>
          <MenuItem onClick={onSignInOpen}>Sign In</MenuItem>
          <MenuItem onClick={onSignUpOpen}>Sign Up</MenuItem>
        </MenuList>
      </Menu>

      <Drawer placement="right" onClose={onSignInClose} isOpen={isSignInOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bgColor="primary.50" paddingBottom={8}>
            Sign In
          </DrawerHeader>
          <Divider />
          <DrawerBody>
            <SignInPage onClose={onSignInClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Drawer placement="right" onClose={onSignUpClose} isOpen={isSignUpOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bgColor="primary.50" paddingBottom={8}>
            Sign Up
          </DrawerHeader>
          <Divider />
          <DrawerBody>
            <SignUpPage onClose={onSignUpClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default UserDropdown;
