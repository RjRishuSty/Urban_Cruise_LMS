import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPages from "./pages/AuthPages";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import AllLeads from "./pages/AllLeads";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <PrivateRoute />,
          children: [
            { path: "", element: <Dashboard /> },
            { path: "leads", element: <AllLeads /> },
            {
              path: "leads/:source?",
              element: <AllLeads />,
            },
            //Edit...........
            { path: "leads/:id?", element: <AllLeads /> },
          ],
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
