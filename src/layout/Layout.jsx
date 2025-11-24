import Header from "../layout/Header";
import Footer from "../layout/Footer";
import AppRoutes from "../myRouters/AppRouters";
const Layout = () => {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
};

export default Layout;
