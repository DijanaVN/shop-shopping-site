import { Box, Grid, GridItem, HStack, Image } from "@chakra-ui/react";
import ProductGrid from "../components/ProductGrid";
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
        <GridItem pl="2" area={"main"}>
          <ProductGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default HomePage;
