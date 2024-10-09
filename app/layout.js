import MainHeader from "../components/main-header/main-header"
import Footer from "../components/main-footer/main-footer";
import "./globals.css";

export const metadata = {
  title: "Manos Unidas",
  description:
    "Apoyando a las familias latinas con niños sordos o con diferentes niveles auditivas conectar y crecer con su hijo.",
};

export default function RootLayout({ children }) {
  const showHeader = children && children.props.childSegment == 'classresources'; // Example condition, modify as per need
  console.log(children.props.childPropSegment != 'classresources')
  return (
    <html lang="en">
      <body>
      {showHeader && <MainHeader />}
        <div className='content-wrapper'>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
