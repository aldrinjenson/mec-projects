import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./data";

const ProjectList = () => {
  return (
    <div
      className="projectList"
      style={{ minHeight: "75vh", marginBottom: "50px" }}
    >
      <div className="container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;