import React, { useState } from "react";
import Landing from "../components/Landing/Landing";
import FiltersTab from "../components/FiltersTab";
import ProjectList from "../components/ProjectList";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { projects, loading } = useSelector((state) => state.projects);
  const [constraints, setConstraints] = useState({
    completedYear: "",
    onlyFinalYear: false,
    className: "",
    searchQuery: "",
  });
  const applyConstraints = (projects, constraints) => {
    const searchFilter = (project, searchQuery) => {
      if (searchQuery === "") return true;
      return project.projectTitle
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    };

    const completedYearFilter = (project, year) => {
      if (year === "") return true;
      return project.completedYear === constraints.completedYear;
    };

    const classFilter = (project, className) => {
      if (className === "") return true;
      return project.className === className;
    };

    const finalYearFilter = (project, isOnlyFinalYear) => {
      if (!isOnlyFinalYear) return true;
      return project.isFinalYearProject === true;
    };

    const constrainedProjects = projects.filter((project) => {
      return (
        completedYearFilter(project, constraints.completedYear) &&
        classFilter(project, constraints.className) &&
        finalYearFilter(project, constraints.onlyFinalYear) &&
        searchFilter(project, constraints.searchQuery)
      );
    });
    return constrainedProjects;
  };

  const filteredProjects = !loading
    ? applyConstraints(projects, constraints)
    : [];
  return (
    <div className="HomePage">
      <Landing />
      <FiltersTab constraints={constraints} setConstraints={setConstraints} />
      {!loading ? (
        filteredProjects.length ? (
          <ProjectList projects={filteredProjects} />
        ) : (
          <div className="center loading">
            <p>No such project exists based on the applied conditions</p>
          </div>
        )
      ) : (
        <div className="center loading">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
