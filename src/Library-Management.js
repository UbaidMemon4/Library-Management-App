import "./Library-Management.css";
import { ConfigProvider } from "antd";
import Layout from "./components/Layout/index.js";
import React from "react";
import Login from "./pages/login-page/login.js";
import Signup from "./pages/sign-up-page/Signup.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
function LibraryManagement() {
  return (
      <div className="App">
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
      </div>
  );
}

export default LibraryManagement;
