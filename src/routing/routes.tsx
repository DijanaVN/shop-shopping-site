import { createBrowserRouter } from "react-router-dom";

createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/category", element: <CategoryGrid /> },
]);
