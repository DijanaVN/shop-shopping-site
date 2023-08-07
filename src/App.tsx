import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import ProductGrid from "./ProductGrid";
import ProductCategories from "./ProductCategories";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'header' "nav" "main" "footer"`,
        lg: `"header header" "nav nav"
                  "aside main"
                  "footer footer"`,
      }}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={{ base: "1fr", lg: "30% 70%" }} // 30% and 70% columns
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="gray.300" area={"header"}>
        <Header />
      </GridItem>
      <GridItem pl="2" bg="orange.300" area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" bg="pink.300" area={"aside"}>
          <ProductCategories />
        </GridItem>
      </Show>
      <GridItem pl="2" bg="green.300" area={"main"}>
        <ProductGrid />
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
