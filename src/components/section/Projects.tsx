import { projectItems } from "@/helper/projects";
import Project from "../Project";

const Projects = () => {
  return (
    <div id="projects" className="my-20 my-section">
      <h2 className="text-xl dark:text-white mb-5 font-semibold  ">
        PROJECTS
      </h2>
      {projectItems?.map((item, ind) => (
        <Project key={ind} project={item} />
      ))}
    </div>
  );
};

export default Projects;
