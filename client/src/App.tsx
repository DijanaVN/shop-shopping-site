import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./pages/NavBar/NavBar";
import ProductGridPage from "./pages/ProductGridPage";
import ProductCategories from "./pages/NavBar/ProductCategories";
import Footer from "./pages/Footer/Footer";
import React from "react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'header' "nav" "main" "footer"`,
        lg: `"header header" "nav nav"
                  "aside main"
                  "footer footer"`,
      }}
      gap="1"
      color="red.700"
      fontWeight="bold"
    >
      <GridItem pl="2" area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"}>
          <ProductCategories />
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <ProductGridPage />
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
