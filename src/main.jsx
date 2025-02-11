import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

//Pages
import App from "./Pages/App.jsx";
import Favourites from "./Pages/favourites.jsx";
import BookCategory from "./Pages/BookCategory.jsx";
import Layout from "./layout.jsx";
import BookPage from "./components/Books/bookpage.jsx";
import ErrorBoundary from "./components/errorComponent.jsx";
import BookSearch from "./Pages/bookSearch.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorBoundary />,
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
          path: "/book/:id",
          element: <BookPage />,
        },
        {
          path: "/category/:category",
          element: <BookCategory />,
        },
        {
          path: "/search/:page",
          element: <BookSearch />,
        },
      ],
    },
  ],
  { basename: "/Pocket-Library" }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
