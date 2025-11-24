import { Link } from "react-router-dom";

function Production() {
  return (
    <>
      <p>Production</p>
      <Link to={"/productionSingle/:id/:slug"}>productionSingle</Link>
    </>
  );
}

export default Production;
