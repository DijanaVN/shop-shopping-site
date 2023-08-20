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
  Spacer,
  Text,
} from "@chakra-ui/react";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { BiHelpCircle } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import img1 from "../images/pascal-brauer-ttdio_nOPjQ-unsplash.webp";
import img2 from "../images/molly-mears-4_90zmmdo_4-unsplash.webp";
import { useUserSignInContext } from "../StateManagement/SignInUserContext";

const UserPage: React.FC = () => {
  const { userSignIn } = useUserSignInContext();
  return (
    <Box>
      {/* Body */}
      <Container mt={8}>
        <Flex direction="column" align="start">
          <Grid templateColumns="1fr 1fr" gap={10}>
            <GridItem colSpan={1} rowSpan={1}>
              <Heading mb={10}>
                Welcome -{" "}
                {
                  <Text
                    fontStyle={"italic"}
                    fontSize="20"
                    textTransform="uppercase"
                  >
                    {userSignIn?.name.firstname}
                  </Text>
                }
              </Heading>
              <Grid templateColumns="repeat(3, 1fr)" gap={10} mb={8}>
                <GridItem>
                  <IconButton
                    aria-label="Purchases"
                    icon={<BiSolidPurchaseTag />}
                    colorScheme="blue"
                  />
                  <Text mt={2}>Purchases</Text>
                </GridItem>
                <GridItem>
                  <IconButton
                    aria-label="Profile"
                    icon={<ImProfile />}
                    colorScheme="green"
                  />
                  <Text mt={2}>Profile</Text>
                </GridItem>
                <GridItem>
                  <IconButton
                    aria-label="Help"
                    icon={<BiHelpCircle />}
                    colorScheme="purple"
                  />
                  <Text mt={2}>Help</Text>
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
      </Container>
    </Box>
  );
};

export default UserPage;
