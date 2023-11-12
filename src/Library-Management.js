import { ConfigProvider } from "antd";
import React from "react";
import Signup from "./pages/sign-up-page/Signup.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page/error";
import Layout from "./components/Layout/layout";
import Home from "./pages/Home/index.js";
import Shelves from "./pages/shelves-page/shelves";
import Author from "./pages/author-page/author";
import { Provider } from "react-redux";
import store from "./store/index";
import "./Library-Management.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/shelves",
        element: <Shelves />,
      },
      {
        path: "/author",
        element: <Author />,
      },
    ],
  },
]);
function LibraryManagement() {
  return (
    <ConfigProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ConfigProvider>
  );
}

export default LibraryManagement;
