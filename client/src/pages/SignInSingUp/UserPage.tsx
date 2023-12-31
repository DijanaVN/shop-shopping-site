import React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Text,
  Center,
  Button,
} from "@chakra-ui/react";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { BiHelpCircle } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import img1 from "../../images/pascal-brauer-ttdio_nOPjQ-unsplash.webp";
import img2 from "../../images/molly-mears-4_90zmmdo_4-unsplash.webp";
import { useUserSignInContext } from "../../StateManagement/SignInUserContext";
import { useNavigate } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import { FiShoppingCart } from "react-icons/fi";
import { useNewCartContext } from "../../StateManagement/ShoppingCartContext";

const UserPage: React.FC = () => {
  const { userSignIn, setUserSignIn } = useUserSignInContext();
  const navigate = useNavigate();
  const { setCartItems } = useNewCartContext();

  const handleSignOut = () => {
    setUserSignIn(undefined);
    setCartItems([]);
    navigate("/");
  };
  useScrollToTop();
  return (
    <Box>
      {/* Body */}
      <Container mt={8}>
        <Flex direction="column" align="center">
          <Grid templateColumns="1fr 1fr" gap={10}>
            <GridItem colSpan={1} rowSpan={1}>
              <Heading
                padding={5}
                marginTop={5}
                textAlign={"center"}
                backgroundColor={"primary.50"}
                mb={10}
              >
                Welcome{" "}
                {
                  <Box>
                    <Text
                      fontStyle={"italic"}
                      fontSize="20"
                      textTransform="uppercase"
                    >
                      {userSignIn?.name.firstname}
                    </Text>{" "}
                    <Text
                      marginTop={5}
                      align={"end"}
                      fontSize={"xs"}
                      onClick={handleSignOut}
                      cursor="pointer"
                    >
                      Sign Out
                    </Text>
                  </Box>
                }
              </Heading>
              <Grid templateColumns="repeat(3, 1fr)" gap={10} mb={5}>
                <GridItem>
                  <IconButton
                    aria-label="Purchases"
                    icon={<FiShoppingCart />}
                    colorScheme="blue"
                    onClick={() => navigate("/shoppingCartGrid")}
                  />
                  <Text fontSize={"sm"} mt={2}>
                    My Cart
                  </Text>
                </GridItem>
                <GridItem>
                  <IconButton
                    aria-label="Profile"
                    icon={<ImProfile />}
                    colorScheme="green"
                    onClick={() => navigate("/profilePage")}
                  />
                  <Text fontSize={"sm"} mt={2}>
                    Profile
                  </Text>
                </GridItem>
                <GridItem>
                  <IconButton
                    aria-label="Help"
                    icon={<BiHelpCircle />}
                    colorScheme="purple"
                    onClick={() => navigate("/helpPage")}
                  />
                  <Text fontSize={"sm"} mt={2}>
                    Help
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>

            <GridItem colSpan={1} rowSpan={1}>
              <Image
                src={img1}
                alt="User Image"
                mt={4}
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </GridItem>

            <GridItem colSpan={2} rowSpan={1}>
              <Image
                src={img2}
                alt="Additional Image"
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </GridItem>
          </Grid>
        </Flex>
      </Container>{" "}
    </Box>
  );
};

export default UserPage;
