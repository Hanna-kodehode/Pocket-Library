import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

//Pages
import App from "./Pages/App.jsx";
import BookPage from "./Pages/Books/bookpage.jsx";
import Favourites from "./Pages/favourites.jsx";
import BookCategory from "./Pages/BookCategory.jsx";
import Layout from "./layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
      {
        path: "/books",
        element: <BookPage />,
      },
      { path: "/category/:category", element: <BookCategory /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
