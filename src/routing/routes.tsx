import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "./../pages/Layout";
import ErrorPage from "./../pages/ErrorPage";
import CategoryGridPage from "../pages/CategoryGridPage";
import ProductDetailedPage from "../pages/ProductDeatiledPage";
import AboutUsPage from "./../pages/AboutUsPage";
import ContactUs from "./../pages/ContactUsPage";
import SignInPage from "../pages/SignInSingUp/SignUpPage";
import SearchPage from "./../pages/SearchPage";
import UserPage from "../pages/SignInSingUp/UserPage";
import ProfilePage from "../pages/SignInSingUp/ProfilePage";
import PasswordPage from "../pages/SignInSingUp/PasswordPage";
import EmailPage from "../pages/SignInSingUp/EmailPage";
import AdressesPage from "../pages/SignInSingUp/AdressesPage";
import HelpPage from "./../pages/SignInSingUp/HelpPage";
import PrivacyPolicy from "./../pages/Footer/PrivacyPolicy";
import PurchaseConditions from "../pages/Footer/PurchaseCondition";
import CookiesSettings from "./../pages/Footer/CookiesSetting";
import Shipping from "./../pages/Footer/Shipping";
import Exchanges from "./../pages/Footer/Exchanges";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/category", element: <CategoryGridPage /> },
      { path: "/product/:id", element: <ProductDetailedPage /> },
      { path: "/aboutus", element: <AboutUsPage /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/profilePage", element: <ProfilePage /> },
      { path: "/adressPage", element: <AdressesPage /> },
      { path: "/emailPage", element: <EmailPage /> },
      { path: "/passwordPage", element: <PasswordPage /> },
      { path: "/helpPage", element: <HelpPage /> },
      { path: "/policy", element: <PrivacyPolicy /> },
      { path: "/purchase", element: <PurchaseConditions /> },
      { path: "/cookies", element: <CookiesSettings /> },
      { path: "/shipping", element: <Shipping /> },
      { path: "/exchanges", element: <Exchanges /> },

      {
        path: "/signin",
        element: (
          <SignInPage
            onClose={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        ),
      },
      {
        path: "/search",
        element: (
          <SearchPage
            onClose={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        ),
      },
      { path: "/userPage", element: <UserPage /> },
    ],
  },
]);

export default router;
