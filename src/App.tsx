import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProductGrid from "./components/ProductGrid";
import ProductCategories from "./components/ProductCategories";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
