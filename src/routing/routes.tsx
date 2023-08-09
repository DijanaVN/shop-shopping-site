import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CategoryGrid from "../pages/CategoryGridPage";
import Layout from "./../pages/Layout";
import ErrorPage from "./../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/category", element: <CategoryGrid /> },
    ],
  },
]);

export default router;
