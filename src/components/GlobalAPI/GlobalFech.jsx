import { useEffect, useState } from "react";

function useGlobalFech() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/alldata`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error ! status:${res.status}`);
        }
        return res.json();
      })
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error("404", error);
      });
  }, []);

  return { data };
}

export default useGlobalFech;
