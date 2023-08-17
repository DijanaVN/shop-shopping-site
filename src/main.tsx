import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider } from "@chakra-ui/react";
// import App from "./App";
import { SelectedCategoryProvider } from "./StateManagement/SelectedCategoryContext";
import customTheme from "./customeTheme";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";
import { NewProductProvider } from "./StateManagement/NewProductContext";
import {
  SelectedProductProvider,
  useSelectedProductContext,
} from "./StateManagement/SelectedProductContext";
import { SearchTextProvider } from "./StateManagement/SearchTextContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={customTheme}>
        <SelectedProductProvider>
          <SearchTextProvider>
            <NewProductProvider>
              <SelectedCategoryProvider>
                <RouterProvider router={router} />
                <ReactQueryDevtools />
              </SelectedCategoryProvider>
            </NewProductProvider>
          </SearchTextProvider>
        </SelectedProductProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
