import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CategoryGrid from "../pages/CategoryGridPage";
import Layout from "./../pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/category", element: <CategoryGrid /> },
    ],
  },
]);

export default router;
