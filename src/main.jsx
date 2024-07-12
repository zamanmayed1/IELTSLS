import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Root from "./Root.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Home from "./pages/Home.jsx";
import Library from "./pages/Library.jsx";
import VocabVault from "./pages/VocabVault.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/vocabvault",
        element: <VocabVault/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>IELTS LS - Score High</title>
      </Helmet>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
