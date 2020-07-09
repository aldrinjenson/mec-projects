import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage/LoginPage";
import AddNewProject from "./pages/AddNewProject/AddNewProject";
// import firebaseConfig from "./fbConfig";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/new" component={AddNewProject} />
        <Route path="/about" component={About} />
        <Route path="/login" component={LoginPage} />
        <Route path="/project:id" component={ProjectPage} />
      </Switch>
    </div>
  );
};

export default App;
