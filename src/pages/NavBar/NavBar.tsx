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
  Text,
} from "@chakra-ui/react";

import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import logoImage from "../../../src/images/Shop-Shopping-_2_ (1).webp";
import ProductCategories from "./ProductCategories";
import UserDropdown from "../../components/UserDropdown";
import { useUserSignInContext } from "../../StateManagement/SignInUserContext";
import SearchPage from "./SearchPage";

const NavBar = () => {
  const {
    onOpen: onSearchOpen,
    onClose: onSearchClose,
    isOpen: isSearchOpen,
  } = useDisclosure();
  const { userSignIn } = useUserSignInContext();

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
      <HStack spacing={8}>
        <Button
          variant={"ghost"}
          fontSize={"40"}
          onClick={onSearchOpen}
          _hover={{}}
        >
          <FcSearch />
          <Drawer
            placement="bottom"
            onClose={onSearchClose}
            isOpen={isSearchOpen}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Search</DrawerHeader>
              <DrawerBody>
                <SearchPage onClose={onSearchClose} />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Button>
        {userSignIn && (
          <Text
            as={Link}
            to="/userPage"
            fontWeight="bold"
            fontSize="20"
            fontFamily={"heading"}
            textTransform="uppercase"
          >
            {userSignIn.name.firstname}
          </Text>
        )}
        <UserDropdown />
        <Link to={"/shoppingCart"}>
          <FiShoppingCart fontSize={"40"} />
        </Link>
      </HStack>
    </Flex>
  );
};

export default NavBar;