import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPages from "./pages/AuthPages";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path:'dashboard',
          element: <Dashboard/>
        },
        {
          path: "sign-in",
          element: <AuthPages />,
        },
        {
          path: "sign-up",
          element: <AuthPages />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
