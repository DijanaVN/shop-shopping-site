import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import ProductGrid from "../components/ProductGrid";
import ProductCategories from "../components/ProductCategories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CategoryUpdateForm from "../components/CategoryUpdateForm";

function HomePage() {
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
      <GridItem pl="2" area={"header"}>
        <Header />
        <CategoryUpdateForm />
      </GridItem>

      <Show above="lg">
        <GridItem pl="2" area={"aside"}>
          <ProductCategories />
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <ProductGrid />
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
