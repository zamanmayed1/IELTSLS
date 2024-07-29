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
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/dashboard/Profile.jsx";
import Feed from "./pages/dashboard/Feed.jsx";
import Settings from "./pages/dashboard/Settings.jsx";
import { Provider } from "react-redux";
import store from "./redux-toolkit/store.js";
import PrivateBatch from "./pages/PrivateBatch.jsx";
import CareerCounsiling from "./pages/CareerCounsiling.jsx";
import Courses from "./pages/Courses.jsx";
import SingleCourse from "./pages/SingleCourse.jsx";
import SearchResultPage from "./pages/SearchResultPage.jsx";
import AboutUs from "./pages/AboutUs.jsx";

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
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "feed",
            element: <Feed />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
      {
        path: "library",
        element: <Library />,
      },
      {
        path: "vocabvault",
        element: <VocabVault />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path:"course/:courseId",
        element:<SingleCourse/>
      },
      {
        path: "search",
        element: <SearchResultPage />,
      },
      {
        path: "private-batch",
        element: <PrivateBatch />,
      },
      {
        path: "career-counsiling",
        element: <CareerCounsiling />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <Helmet>
          <title>IELTS LS - Score High</title>
        </Helmet>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
