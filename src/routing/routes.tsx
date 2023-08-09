import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";

createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/category", element: <CategoryGrid /> },
]);
