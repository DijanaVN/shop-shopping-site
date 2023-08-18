import {
  Flex,
  HStack,
  useDisclosure,
  Image,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Button,
} from "@chakra-ui/react";

import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import logoImage from "../../src/images/Shop-Shopping-_2_ (1).webp";
import ProductCategories from "./ProductCategories";
import SearchDrawer from "../pages/SearchPage";

const NavBar = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Flex
      backgroundColor="rgba(250, 247, 250, 0.5)"
      padding={2}
      justifyContent={"space-between"}
      alignItems="center"
    >
      <Link to={"/"}>
        <Image boxSize="20" src={logoImage} alt="Logo" borderRadius="full" />
      </Link>
      {/* <ColorModeSwitch /> */}
      <HStack
        spacing={10}
        fontSize={20}
        fontFamily={"heading"}
        fontWeight={"bold"}
      >
        <Link to={"/"}>Home</Link>
        <ProductCategories />
        <Link to={"/contactus"}>Contact </Link>
        <Link to={"/aboutus"}> About Us</Link>
      </HStack>
      <HStack fontSize={"40"} spacing={8}>
        <Button variant={"ghost"} fontSize={"40"} onClick={onOpen} _hover={{}}>
          <FcSearch />
          <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Search</DrawerHeader>
              <DrawerBody>
                <SearchDrawer />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Button>
        <Link to={"/signin"}>
          <FaRegUser />
        </Link>
        <Link to={"/shoppingCart"}>
          <FiShoppingCart />
        </Link>
      </HStack>
    </Flex>
  );
};

export default NavBar;
