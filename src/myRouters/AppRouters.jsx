import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import ProjectsSingle from "../pages/ProjectsSingle";
import Production from "../pages/Production";
import ProductionSingle from "../pages/ProductionSingle";
import ProductionSingleElements from "../pages/ProductionSingleElements";
import Distribution from "../pages/Distribution";
import Bloq from "../pages/Bloq";
import BloqSingle from "../pages/BloqSingle";
import Contact from "../pages/Contact";

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
      path: "/services",
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
      path: "/production/s/e/:id/:slug",
      element: <ProductionSingleElements />,
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
      path: "/bloq/s/:id/:sluq",
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
