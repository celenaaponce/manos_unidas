"use client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./public";
import PrivateLayout from "./resources";

export default function ClientRouter({ children }) {
  const routesConfig = [
    {
      path: "/classresources/*",
      element: <PrivateLayout>{children}</PrivateLayout>,
    },
    {
      element: <PublicLayout>{children}</PublicLayout>,
      children: [
        {
          path: "/*",
        },
      ],
    },
  ];
  const router = createBrowserRouter(routesConfig);

  return <RouterProvider router={router} />;
}
