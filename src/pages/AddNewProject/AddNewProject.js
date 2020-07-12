import React, { useState } from "react";
import "./AddNewProject.styles.css";
import { useForm } from "react-hook-form";
// import { storage } from "../../fbConfig";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { uploadProject } from "../../redux/actions/ProjectActions";
import { authenticateWithGoogle } from "../../redux/actions/authActions";

const AddNewProject = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const [pdfAsFile, setPdfAsFile] = useState("");

  const { uploader, error } = auth;
  if (error) console.log("error in authentication", error.errorCode);

  const onSubmit = (data) => {
    data.uploader = uploader;
    dispatch(uploadProject(data, pdfAsFile));

    firebase
      .auth()
      .signOut()
      .then(() => console.log("signout successfull"))
      .catch((err) =>
        console.log("An error happened while signing out " + err)
      );
  };

  const handlePdfUpload = (e) => {
    const pdf = e.target.files[0];
    setPdfAsFile(() => pdf);
  };

  // const handleTags = e =>{
  //   console.log(e.target.data)
  // }

  const handleGoogleVerify = (e) => {
    e.preventDefault();
    dispatch(authenticateWithGoogle());
  };

  return (
    <div className="addnew container">
      <div className="row">
        <form className="col s12 " onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="input-field col s12 ">
              <input
                ref={register({ required: true, minLength: 4 })}
                name="projectTitle"
                type="text"
                placeholder="eg: Squirrel Proof Arduino BirdCage"
              />
              <label htmlFor="title">Project Title</label>
            </div>
          </div>

          <input
            type="file"
            accept=".pdf"
            name="file"
            onChange={handlePdfUpload}
            encType="multipart/form-data"
            // required
          />

          <div className="row">
            <div className="input-field col s12 ">
              <textarea
                name="abstract"
                className="materialize-textarea"
                placeholder="The coolest squirrel trao ever!!"
                ref={register}
              ></textarea>
              <label htmlFor="abstract">Enter an abstract/description</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 ">
              <input
                name="className"
                type="text"
                placeholder="CSA"
                ref={register}
                // required
              />
              <label htmlFor="className">Class name/Batch</label>
            </div>
          </div>

          <h5>Team Members: </h5>
          <div className="row">
            <div className="input-field col s8 ">
              <input
                name="members[0].name"
                type="text"
                // required
                placeholder="John Doe"
                ref={register}
              />
            </div>
            <div className="input-field col s4 ">
              <input
                name="members[0].id"
                type="text"
                placeholder="eg:MDLXXCSXXX"
                ref={register}
              />
              <label htmlFor="members[0].id">KTU ID</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8 ">
              <input
                name="members[1].name"
                type="text"
                placeholder="John Doe"
                ref={register}
              />
            </div>
            <div className="input-field col s4 ">
              <input
                name="members[1].id"
                type="text"
                placeholder="eg:MDLXXCSXXX"
                ref={register}
              />
              <label htmlFor="members[1].id">KTU ID</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8 ">
              <input
                name="members[2].name"
                type="text"
                placeholder="John Doe"
                ref={register}
              />
            </div>
            <div className="input-field col s4 ">
              <input
                name="members[2].id"
                type="text"
                placeholder="eg:MDLXXCSXXX"
                ref={register}
              />
              <label htmlFor="id1">KTU ID</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8 ">
              <input
                name="members[3].name"
                type="text"
                placeholder="John Doe"
                ref={register}
              />
            </div>
            <div className="input-field col s4 ">
              <input
                name="members[2].id"
                type="text"
                placeholder="eg:MDLXXCSXXX"
                ref={register}
              />
              <label htmlFor="id1">KTU ID</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <select ref={register} name="completedYear">
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
                  <input
                    type="checkbox"
                    name="isFinalYearProject"
                    ref={register}
                  />
                  <span>Is this a final year project?</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" name="isCompleted" ref={register} />
                  <span>Is the project fully completed?</span>
                </label>
              </p>
            </div>
          </div>
          {/* <div className="chips">
            <p>Add Some tags for easy finding of your project</p>
            <input
              name="tags"
              className="custom-class"
              placeholder="Type in a tag and press Enter"
              ref={register}
              onChange={handleTags}
            />
          </div> */}
          <div className="buttons">
            <button
              onClick={handleGoogleVerify}
              className="google-verify-btn btn green lighten-1"
            >
              Verify Identity
              <i className="fa fa-google" aria-hidden="true" />
            </button>
            <button
              disabled={!uploader.name}
              className="btn blue"
              type="submit"
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

      {error && (
        <div className="errorPresent">
          <p>There seems to be some errors with your credentials</p>
          <p>{error.errorMessage}</p>
        </div>
      )}

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
