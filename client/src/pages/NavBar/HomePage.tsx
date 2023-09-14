import { Box, Grid, GridItem, HStack, Image } from "@chakra-ui/react";
import ProductGridPage from "../ProductGridPage";
import treatyourself from "../../images/freestocks-_3Q3tsJ01nc-unsplash.webp";
import Header from "./../../components/Header";
import useScrollToTop from "../../hooks/useScrollToTop";
import React from "react";

function HomePage() {
  useScrollToTop();
  return (
    <>
      <Box position="relative">
        <Image
          height="100vh"
          width="100%"
          objectFit="cover"
          src={treatyourself}
          alt="Treat Yourself"
          position="fixed"
          top="0"
          zIndex="-1"
        />
      </Box>
      <Grid
        templateAreas={{
          base: `"main" "footer"`,
          lg: `"header " "nav"
        " main"
        "footer"`,
        }}
        gap="1"
        color="red.700"
        fontWeight="bold"
        marginTop="50vh"
        position="relative"
        zIndex="1"
      >
        <GridItem pl="2" area={"main"}>
          <Header />

          <ProductGridPage />
        </GridItem>
      </Grid>
    </>
  );
}

export default HomePage;
