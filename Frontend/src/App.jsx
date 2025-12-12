import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPages from "./pages/AuthPages";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <PrivateRoute />,
          children: [{ path: "", element: <Dashboard /> }],
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
