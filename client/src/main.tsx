import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider } from "@chakra-ui/react";
import { SelectedCategoryProvider } from "./StateManagement/SelectedCategoryContext";
import customTheme from "./customeTheme";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";
import { NewProductProvider } from "./StateManagement/NewProductContext";
import { SearchTextProvider } from "./StateManagement/SearchTextContext";
import { SelectedProductProvider } from "./StateManagement/SelectedProductContext";
import { AllProductsProvider } from "./StateManagement/AllProductsContexts";
import { FilteredProductProvider } from "./StateManagement/FilteredProducts";
import { UserProvider } from "./StateManagement/UserInfoContext";
import { UserSignInProvider } from "./StateManagement/SignInUserContext";
import { ContactFormProvider } from "./StateManagement/ContactFormContext";
import { AllCartsProvider } from "./StateManagement/AllCartsContext";
import { ShoppingCartProvider } from "./StateManagement/ShoppingCartContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={customTheme}>
        <SelectedProductProvider>
          <FilteredProductProvider>
            <SearchTextProvider>
              <UserProvider>
                <AllProductsProvider>
                  <NewProductProvider>
                    <UserSignInProvider>
                      <ContactFormProvider>
                        <AllCartsProvider>
                          {" "}
                          <ShoppingCartProvider>
                            <SelectedCategoryProvider>
                              <RouterProvider router={router} />
                              <ReactQueryDevtools />
                            </SelectedCategoryProvider>
                          </ShoppingCartProvider>
                        </AllCartsProvider>
                      </ContactFormProvider>
                    </UserSignInProvider>
                  </NewProductProvider>
                </AllProductsProvider>
              </UserProvider>
            </SearchTextProvider>
          </FilteredProductProvider>
        </SelectedProductProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
