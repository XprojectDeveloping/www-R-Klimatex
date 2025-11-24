import { Link } from "react-router-dom";

function Bloq() {
  return (
    <>
      <p>Bloq</p>
      <Link to={"/bloq/s/:id/:sluq"}>BloqSingle</Link>
    </>
  );
}

export default Bloq;
