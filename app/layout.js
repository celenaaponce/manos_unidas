// "use client";
import "./globals.css";
import dynamic from "next/dynamic";

// Dynamically import RouterProvider to disable SSR
const ClientRouterProvider = dynamic(
  () => import("./ClientRouter"), 
  { ssr: false }
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
      title="Manos Unidas"
      description="Apoyar a las familias inmigrantes con niños sordos o sordos parciales para que puedan conectar y crecer con sus hijos."
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <body>
        {/* Use ClientRouterProvider to handle routes */}
        <ClientRouterProvider>{children}</ClientRouterProvider>
      </body>
    </html>
  );
}
