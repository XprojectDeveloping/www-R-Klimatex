import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { AnimatePresence } from "framer-motion";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <AnimatePresence>{children}</AnimatePresence>
      <Footer />
    </>
  );
};

export default Layout;
