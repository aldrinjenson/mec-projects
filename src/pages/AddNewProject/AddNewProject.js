import React from "react";
import "./AddNewProject.styles.css";

const AddNewProject = () => {
  return (
    <div className="addnew container">
      <div className="row">
        <form className="col s12 ">
          <div className="row">
            <div className="input-field col s12 ">
              <input
                // placeholder="eg: Natural Language Processing To Query Interface "
                id="title"
                type="text"
              />
              <label for="title">Project Title</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 ">
              <textarea id="abstract" class="materialize-textarea"></textarea>
              <label for="abstract">Enter an abstract/description</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 ">
              <input id="class" type="text" placeholder="CSA" />
              <label for="class">Class/Batch</label>
            </div>
          </div>

          <h5>Team Members: </h5>
          <div className="row">
            <div className="input-field col s8 ">
              <input
                id="name1"
                type="text"
                className="validate"
                placeholder="John Doe"
              />
            </div>
            <div className="input-field col s4 ">
              <input id="id1" type="number" className="validate" />
              <label htmlFor="id1">KTU ID</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8 ">
              <input
                id="name1"
                type="text"
                className="validate"
                placeholder="John Doe"
              />
            </div>
            <div className="input-field col s4 ">
              <input id="id1" type="number" className="validate" />
              <label htmlFor="id1">KTU ID</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8 ">
              <input
                id="name1"
                type="text"
                className="validate"
                placeholder="John Doe"
              />
            </div>
            <div className="input-field col s4 ">
              <input id="id1" type="number" className="validate" />
              <label htmlFor="id1">KTU ID</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8 ">
              <input
                id="name1"
                type="text"
                className="validate"
                placeholder="John Doe"
              />
            </div>
            <div className="input-field col s4 ">
              <input id="id1" type="number" className="validate" />
              <label htmlFor="id1">KTU ID</label>
            </div>
          </div>

          <div className="row">
            <div class="input-field col s6">
              <select>
                <option value="2020" selected>
                  2020
                </option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
              </select>
              <label>Year of completion</label>
            </div>
            <div className="col s6">
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Is this a final year project?</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Is the project fully completed?</span>
                </label>
              </p>
            </div>
          </div>
          <div
            className="buttons"
          >
            <button className="btn green lighten-1">
              Verify Identity
              <i className="material-icons">google</i>
            </button>
            <button type="submit" className="btn blue  ">
              Submit Project
            </button>
          </div>
        </form>
      </div>

      <h5 className="bold">Disclaimer:</h5>
      <p>
        The admins of the site has the authority to remove submitted projects if
        the contents are found to be manipulated or writted using unlawful
        methods.
      </p>
      <h5 className="bold">NOTE:</h5>
      <p className="red-text">
        Google verification is used for storing the name and email of the one
        one who submits the project into the database. This is done to ensure
        that the person can be contacted in case of any errors or mistakes in
        the information entered.
      </p>
    </div>
  );
};

export default AddNewProject;
