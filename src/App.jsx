import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import ScrollToTop from "./components/layout/ScrollToTop.jsx";
import WhatsAppButton from "./components/layout/WhatsAppButton.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <AppRoutes />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
