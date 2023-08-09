import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    primary: {
      50: "#f7edf5",
      100: "#807da1",
      500: "#f7d7ee",
      600: "#484770",
    },
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Montserrat, sans-serif",
  },
});

export default customTheme;
