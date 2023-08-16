import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "./../pages/Layout";
import ErrorPage from "./../pages/ErrorPage";
import CategoryGridPage from "../pages/CategoryGridPage";
import ProductDetailedPage from "../pages/ProductDeatiledPage";
import AboutUsPage from "./../pages/AboutUsPage";

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
    ],
  },
]);

export default router;
