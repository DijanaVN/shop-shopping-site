import React from "react";
import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={10}>
      <Container maxW="container.lg">
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          {/* Column 1 */}
          <Box>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              HELP
            </Text>
            {/* List of links */}
            <Text>MY ACCOUNT</Text>
            <Text>SHIPPING</Text>
            <Text>EXCHANGES</Text>
            <Text>RETURNS AND REFUNDS</Text>
          </Box>

          {/* Column 2 */}
          <Box>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              POLICIES
            </Text>
            <SimpleGrid columns={1} spacing={2}>
              <Link href="/policy" isExternal>
                PRIVACY POLICY
              </Link>
              <Link href="/purchase" isExternal>
                PURCHASE CONDITIONS
              </Link>

              <Link href="#" isExternal>
                COOKIES SETTINGS
              </Link>
            </SimpleGrid>
          </Box>

          {/* Column 3 */}
          <Box>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              FOLLOW US
            </Text>
            {/* Social media links */}
            <SimpleGrid columns={3} spacing={2}>
              <Link href="/" isExternal>
                INSTAGRAM
              </Link>
              <Link href="#" isExternal>
                FACEBOOK
              </Link>

              <Link href="#" isExternal>
                PINTEREST
              </Link>
            </SimpleGrid>
          </Box>
        </Grid>
        {/* Divider */}
        <Divider mt={8} borderColor="gray.600" />
        {/* Company section */}
        <Flex justifyContent="space-between" alignItems="center" mt={8}>
          <Text>&copy; 2023 Shop-Shopping. All rights reserved.</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
