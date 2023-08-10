import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider } from "@chakra-ui/react";
// import App from "./App";
import { SelectedCategoryProvider } from "./StateManagement/SelectedCategoryContext";
import customTheme from "./components/customeTheme";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";
import { CategoryProductsProvider } from "./StateManagement/CategoryProductsContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={customTheme}>
        <CategoryProductsProvider>
          <SelectedCategoryProvider>
            <RouterProvider router={router} />
          </SelectedCategoryProvider>
        </CategoryProductsProvider>
        <ReactQueryDevtools />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
