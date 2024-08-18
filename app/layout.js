import MainHeader from "../components/main-header/main-header"
import Footer from "../components/main-footer/main-footer";
import "./globals.css";

export const metadata = {
  title: "Manos Unidas",
  description:
    "Apoyando a las familias latinas con niños sordos o con dificultades auditivas conectar y crecer con su hijo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        <div className='content-wrapper'>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
