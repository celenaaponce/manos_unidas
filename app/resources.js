import Footer from "../components/main-footer/main-footer";
import "./globals.css";

export default function PrivateLayout({ children }) {
  return (
    <>
      <div className="content-wrapper">{children}</div>
      <Footer />
    </>
  );
}