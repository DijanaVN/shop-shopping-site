import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CategoryUpdateForm from "../components/CategoryUpdateForm";

function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: `'header' "nav" "main" "footer"`,
        lg: `"header " " nav"
                  " main"
                  "footer"`,
      }}
      gap="1"
      color="red.700"
      fontWeight="bold"
    >
      <GridItem pl="2" area={"header"}>
        <Header />
        <CategoryUpdateForm />
      </GridItem>

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
