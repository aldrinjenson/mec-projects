import React from "react";
import "./ProjectPage.styles.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProjectPage = () => {
  const { id } = useParams();
  const projects = useSelector((state) => state.projects);
  let project;
  if (!projects.loading)
    project = projects.projects.find((proj) => proj.id === id);
  return (
    <div className="projectpage container">
      {project === undefined ? (
        <div>Loading..</div>
      ) : (
        <div>
          <h3>{project.projectTitle}</h3>
          <div className="abstract">
            <h5 className="bold title">Abstract:</h5>
            {project.abstract}
          </div>

          <div className="members">
            <h5 className="bold title">Submitted By:</h5>
            <ul>
              {project.members.map((member, index) => (
                <li key={index}>
                  <span>{member.name}</span>
                  <span>
                    <strong>ID: {member.id} </strong>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="class">
            <h5 className="bold title">Class: </h5>
            <p className="batchyear">
              {project.className} {project.completedYear}
            </p>
          </div>
          <div className="year">
            <h5 className="bold title">Submitted On: </h5>
            <p className="batchyear">{project.submittedDate}</p>
          </div>

          {/* <div className="tags">
            <h5 className="bold title">Tags:</h5>
            {project.tags.map((tag, index) => (
              <button key={index} className="btn-small disabled tag ">
                {tag}
              </button>
            ))}
          </div> */}
          <div className="pdf">
            <object
              width="100%"
              height="900"
              aria-label="Pdf file of the project"
              data={project.pdfUrl}
              type="application/pdf"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
