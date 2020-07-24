import React from "react";
import "./ProjectPage.styles.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProjectPage = () => {
  const { id } = useParams();
  const projects = useSelector((state) => state.projects);
  let project = !projects.loading
    ? projects.projects.find((proj) => proj.id === id)
    : null;

  return (
    <div className="projectpage container">
      {project ? (
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
                <li key={index} className='member-details' >
                  <span>{member.name}</span>
                  <span>
                    {member.id && <strong>ID: {member.id} </strong>}
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
          <br />
          {/* <div className="tags">
            <h5 className="bold title">Tags:</h5>
            {project.tags.map((tag, index) => (
              <button key={index} className="btn-small disabled tag ">
                {tag}
              </button>
            ))}
          </div> */}
          <a className="btn green lighten-2" href={project.pdfUrl}>
            Download Project
          </a>
          <br />
          <br />
          <div className="pdf center">
            <object
              aria-label="pdf"
              data={project.pdfUrl}
              type="application/pdf"
              width="95%"
              height="700"
            />
          </div>
          <div className="pdf-container"></div>
        </div>
      ) : (
        <div className="center loading">
          <p className="marginBottom center-align ">Loading..</p>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
