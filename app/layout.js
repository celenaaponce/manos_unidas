// app/layout.js or app/RootLayout.js
import "./globals.css";
import dynamic from "next/dynamic";

// Dynamically import RouterProvider to disable SSR
const ClientRouterProvider = dynamic(() => import("./ClientRouter"), {
  ssr: false,
});

export const metadata = {
  title: "Manos Unidas",
  description:
    "Apoyar a las familias inmigrantes con niños sordos o sordos parciales para que puedan conectar y crecer con sus hijos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ClientRouterProvider>{children}</ClientRouterProvider>
      </body>
    </html>
  );
}
