import React from "react";
import "./ProjectPage.styles.css";
import { useParams } from "react-router-dom";
import projects from "../../components/data";

const ProjectPage = () => {
  const { id } = useParams();
  const { title, abstract, memebers, batch, year, tags, pdfFile } = projects[
    id
  ];

  return (
    <div className="projectpage container">
      <h3>{title}</h3>

      <div className="abstract">
        <h5 className="bold title">Abstract:</h5>
        {abstract}
      </div>

      <div className="members">
        <h5 className="bold title">Made By:</h5>
        <ul>
          {memebers.map((memeber, index) => (
            <li key={index}>{memeber}</li>
          ))}
        </ul>
      </div>
      <div className="class">
        <h5 className="bold title">Class: </h5>
        <p className="batchyear">
          {batch} {year}
        </p>
      </div>

      <div className="tags">
        <h5 className="bold title">Tags:</h5>
        {tags.map((tag, index) => (
          <button key={index} className="btn-small disabled tag ">
            {tag}
          </button>
        ))}
      </div>
      <div className="pdf">
        <object
          width="100%"
          height="800"
          aria-label="Pdf file of the project"
          data={pdfFile}
          type="application/pdf"
        ></object>
      </div>
    </div>
  );
};

export default ProjectPage;
