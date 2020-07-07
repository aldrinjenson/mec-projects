import React from "react";
import Pokeball from "../images/pokeball.png";
import { Link } from "react-router-dom";

const ProjectCard = ({project}) => {
  return (
    <div className="card post">
      <img src={Pokeball} alt="Pokeball" />
      <div className="card-content">
        <Link to={"/project" + project.id} project={project} >
        {/* <Link to={"/project" + p.id}> */}
        <span className="card-title green-text text-darken-4 ">
          {project.title}
        </span>
        </Link>
        <p>
          {project.abstract}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
