import React from "react";
import "./ProjectPage.styles.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import pdfobject from "pdfobject";
// import { Document, Page, pdfjs } from "react-pdf";

const ProjectPage = () => {
  const { id } = useParams();
  const projects = useSelector((state) => state.projects);
  let project = !projects.loading
    ? projects.projects.find((proj) => proj.id === id)
    : null;

  // let pdfLink = project
  //   ? "http://docs.google.com/gview?url=" + project.pdfUrl + "&embedded=true"
  //   : "";

  return (
    <div className="projectpage container">
      {project ? (
        <div>
          {console.log(project.pdfUrl)}
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
            <embed
              src={project.pdfUrl}
              // style={{ height: "100vh", width: "75vw" }}
              // type="application/pdf"
              // pluginspage="http://www.adobe.com/products/acrobat/readstep2.html"
              width="100%"
              height="500"
              alt="pdf"
              pluginspage="http://www.adobe.com/products/acrobat/readstep2.html"
              background-color="0xFF525659"
              top-toolbar-height="56"
              full-frame=""
              internalinstanceid="21"
              title="CHROME"
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
