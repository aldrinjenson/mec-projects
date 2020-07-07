import React, { useState } from "react";
import "./AddNewProject.styles.css";
import * as firebase from "firebase/app";

const AddNewProject = () => {
  const [uploader, setUploader] = useState({});
  const [errorData, setErrorData] = useState({
    isPresent: false,
  });

  const handleGoogleVerify = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // const token = result.credential.accessToken;
        const user = result.user; // The signed-in user info.
        setUploader({
          name: user.displayName,
          email: user.email
        });
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // const credential = error.credential;
        const { errorCode, errorMessage, email } = error;
        console.log("Error found:", errorCode, email);
        setErrorData({ isPresent: true, errorCode, errorMessage, email });
        // ...
      });
  };

  console.log(uploader);
  const handlePdfUpload = (e) => {
    // const file = e.target.files[0];
    // let formData = new FormData();
    // formData.append("file", file);
    // console.log(formData)
    console.log(e);
  };

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
              <label htmlFor="title">Project Title</label>
            </div>
          </div>

          <input
            type="file"
            accept=".pdf"
            name="file"
            onChange={handlePdfUpload}
            enctype="multipart/form-data"
          />

          <div className="row">
            <div className="input-field col s12 ">
              <textarea
                id="abstract"
                className="materialize-textarea"
              ></textarea>
              <label htmlFor="abstract">Enter an abstract/description</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 ">
              <input id="className" type="text" placeholder="CSA" />
              <label htmlFor="className">className/Batch</label>
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
            <div className="input-field col s6">
              <select>
                <option value="2020" defaultValue>
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
          <div className="buttons">
            <button
              onClick={handleGoogleVerify}
              className="btn green lighten-1"
            >
              Verify Identity
              <i class="fa fa-google" aria-hidden="true" />
            </button>
            <button
              disabled={!uploader.name}
              type="submit"
              className="btn blue"
            >
              Submit Project
            </button>
          </div>
        </form>
      </div>
      {!uploader.name ? (
        <p className="red-text ">
          You can submit once your identity is verified
        </p>
      ) : (
        <p className="green-text">Identity Verified: {uploader.name} </p>
      )}

      {errorData.isPresent ? (
        <div className="errorPresent">
          <p>There seems to be some errors with your credentials</p>
          <p>{errorData.errorMessage}</p>
        </div>
      ) : null}

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
