import { useEffect, useState } from "react";
import AppRoutes from "./myRouters/AppRouters";
import PreLoader from "./components/PreLoader/PreLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return <>{loading ? <PreLoader /> : <AppRoutes />}</>;
}

export default App;
