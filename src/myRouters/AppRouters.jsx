import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import ProjectsSingle from "../pages/ProjectsSingle";
import Production from "../pages/Production";
import ProductionSingle from "../pages/ProductionSingle";
import Distribution from "../pages/Distribution";
import Bloq from "../pages/Bloq";
import BloqSingle from "../pages/BloqSingle";
import Contact from "../pages/Contact";
import License from "../pages/License";

const AppRoutes = () => {
  const my_Routers = [
    {
      path: "/",
      element: <HomePage />,
      exact: true,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/services/:slug",
      element: <Services />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/projects/s/:id/:slug",
      element: <ProjectsSingle />,
    },
    {
      path: "/production",
      element: <Production />,
    },
    {
      path: "/production/s/:id/:slug",
      element: <ProductionSingle />,
    },
    {
      path: "/distribution",
      element: <Distribution />,
    },
    {
      path: "/bloq",
      element: <Bloq />,
    },
    {
      path: "/bloq/bloqsingle",
      element: <BloqSingle />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/license",
      element: <License />,
    },
  ];
  const route = useRoutes(my_Routers);
  return <>{route}</>;
};
export default AppRoutes;
