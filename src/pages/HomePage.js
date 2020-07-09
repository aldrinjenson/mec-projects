import React, { useEffect, useState } from "react";
import Landing from "../components/Landing/Landing";
import FiltersTab from "../components/FiltersTab";
import ProjectList from "../components/ProjectList";
import firebase from "firebase";
import { useSelector } from "react-redux";

const HomePage = () => {
  // const [loading, setLoading] = useState(true);
  // const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   const db = firebase.firestore();
  //   const unsubscribe = db
  //     .collection("projects")
  //     .get()
  //     .then((querySnapshot) => {
  //       setProjects(
  //         querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //       );
  //       setLoading(false);
  //     });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  const projects = useSelector((state) => state.projects);

  return (
    <div className="HomePage">
      <Landing />
      <FiltersTab />
      <ProjectList projects={projects} />
    </div>
  );
};

export default HomePage;
