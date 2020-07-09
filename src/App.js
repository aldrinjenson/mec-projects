import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage/LoginPage";
import AddNewProject from "./pages/AddNewProject/AddNewProject";

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
