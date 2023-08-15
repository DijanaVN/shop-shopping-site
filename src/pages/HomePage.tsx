import { Box, Grid, GridItem, HStack, Image } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import Header from "../components/Header";

import CreateNewCategoryForm from "../components/CreateNewProductForm";
import treatyourself from "../images/freestocks-_3Q3tsJ01nc-unsplash.webp";

function HomePage() {
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
        <GridItem pl="2" area={"header"}>
          <CreateNewCategoryForm />
        </GridItem>

        <GridItem pl="2" area={"main"}>
          <ProductGrid />
        </GridItem>
        <GridItem pl="2" area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default HomePage;
