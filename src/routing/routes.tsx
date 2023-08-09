import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CategoryGrid from "../pages/CategoryGridPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/category", element: <CategoryGrid /> },
]);

export default router;
