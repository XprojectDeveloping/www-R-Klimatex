import { Link } from "react-router-dom";

function Projects(params) {
  return (
    <>
      <p>Projects</p>
      <Link className="text-[red]" to={"/projects/s/:id/:slug"}>
        ProjectsSingle
      </Link>
    </>
  );
}

export default Projects;
