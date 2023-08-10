import { GridItem } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

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
    </>
  );
};

export default Layout;