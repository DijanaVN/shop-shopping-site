import { GridItem } from "@chakra-ui/react";
import NavBar from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <GridItem
        padding={1}
        area={"nav"}
        bg="bluecolor"
        position="sticky"
        top={0}
        zIndex="sticky"
      >
        <NavBar />
      </GridItem>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
