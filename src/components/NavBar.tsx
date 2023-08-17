import { Button, Flex, HStack, useDisclosure, Image } from "@chakra-ui/react";
import React, { useRef } from "react";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import logoImage from "../../src/images/best prices.png"; // Import the logo image
import SearchDrawer from "../pages/SearchPage";
import ProductCategories from "./ProductCategories";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerBtnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Flex
      backgroundColor="rgba(250, 247, 250, 0.5)"
      padding={2}
      justifyContent={"space-between"}
      alignItems="center"
    >
      <Link to={"/"}>
        <Image boxSize="20" src={logoImage} alt="Logo" />
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
        {/* Open the drawer when the search icon is clicked */}
        <Link to={"/search"} onClick={onOpen}>
          <FcSearch />
        </Link>
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
