import { Link } from "react-router-dom";

function ProductionSingle() {
  return (
    <>
      <p>ProductionSingle</p>
      <Link to={"/production/s/e/:id/:slug"}>productionSingleElements</Link>
    </>
  );
}
export default ProductionSingle;
