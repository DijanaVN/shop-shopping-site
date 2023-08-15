import { Text, Flex, HStack, Image } from "@chakra-ui/react";
// import ColorModeSwitch from "./ColorModeSwitch";
import { FiShoppingCart } from "react-icons/fi";
import { FcSearch } from "react-icons/fc";
import logoImage from "../../src/images/best prices.png"; // Import the logo image
import { Link } from "react-router-dom";
import ProductCategories from "./ProductCategories";

const NavBar = () => {
  return (
    <Flex
      backgroundColor="rgba(250, 247, 250, 0.9)" // 30% transparent white
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
        <Link to={"/signIn"}>Sign In </Link>
        <Link to={"/footer"}>Contact </Link>
        <Link to={"/aboutUs"}> About Us</Link>
      </HStack>
      <HStack fontSize={"40"} spacing={8}>
        <Link to={"/search"}>
          <FcSearch />
        </Link>
        <Link to={"/shoppingCart"}>
          <FiShoppingCart />
        </Link>
      </HStack>

      {/* Use the imported logo image */}
    </Flex>
  );
};

export default NavBar;
