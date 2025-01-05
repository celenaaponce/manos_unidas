"use client";
import "./globals.css";
import PublicLayout from "./public";
import PrivateLayout from "./resources";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function RootLayout({ children }) {
  const routesConfig = [
    {
      path: "/classresources/*",
      element: <PrivateLayout children={children}/>,
    },
    {
      element: <PublicLayout children={children}/>,
      children: [
        {
          path: "/*",
        },
      ],
    },
  ];
  const router = createBrowserRouter(routesConfig);
  console.log('Layout code is running...');
  console.log(typeof document);
  
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <body>
        <RouterProvider router={router} children={children} />
      </body>
    </html>
  );
}
