import React, { useEffect, useState } from "react";
import Landing from "../components/Landing/Landing";
import FiltersTab from "../components/FiltersTab";
import ProjectList from "../components/ProjectList";
import { useSelector } from "react-redux";

const HomePage = () => {
  const projects = useSelector((state) => state.projects.projects);

  const filteredList = projects
  return (
    <div className="HomePage">
      <Landing />
      <FiltersTab  projects={projects} />
      {filteredList.length ? (
        <ProjectList projects={filteredList} />
      ) : (
        <div className="center-align">Loading...</div>
      )}
    </div>
  );
};

export default HomePage;
