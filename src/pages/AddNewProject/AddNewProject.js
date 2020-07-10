import React, { useState } from "react";
import "./AddNewProject.styles.css";
import { useForm } from "react-hook-form";
import { storage } from "../../fbConfig";
import firebase from "firebase";
import { useDispatch } from "react-redux";

const AddNewProject = () => {


  const dispatch = useDispatch()

  const { register, handleSubmit, errors } = useForm();
  const [uploader, setUploader] = useState({});
  const [errorData, setErrorData] = useState({
    isPresent: false,
  });

  const [pdfAsFile, setPdfAsFile] = useState("");

  const onSubmit = (data) => {
    // dispatch(addProject(data))
    console.log(data)

    const uploadTask = storage
      .ref(`/projectPdfs/${pdfAsFile.name}`)
      .put(pdfAsFile);
    
    uploadTask.on(
      "state_changed",
      (snapShot) => console.log(snapShot),
      (err) => console.log(err),
      () => {
        storage
          .ref("projectPdfs")
          .child(pdfAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            // adding to firebase
            const db = firebase.firestore();
            db.collection("projects").add({
              ...data,
              submittedDate: new Date().toLocaleDateString("en-US"),
              pdfUrl: fireBaseUrl,
              uploader,
            });
          });
      }
    );


    firebase
      .auth()
      .signOut()
      .then(() => console.log("signout successfull"))
      .catch((error) =>
        console.log("An error happened while signing out " + error)
      );
  };

  const handlePdfUpload = (e) => {
    const pdf = e.target.files[0];
    setPdfAsFile(() => pdf);
  };

  const handleGoogleVerify = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user; // The signed-in user info.
        setUploader({
          name: user.displayName,
          email: user.email,
        });
      })
      .catch((error) => {
        const { errorCode, errorMessage, email } = error;
        console.log("Error found:", errorCode, email);
        setErrorData({ isPresent: true, errorCode, errorMessage, email });
      });
  };

  return (
    <div className="addnew container">
      <div className="row">
        <form className="col s12 " onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="input-field col s12 ">
              <input
                // placeholder="eg: Natural Language Processing To Query Interface "
                ref={register({ required: true, minLength: 4 })}
                name="projectTitle"
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
            encType="multipart/form-data"
            // required
          />

          <div className="row">
            <div className="input-field col s12 ">
              <textarea
                name="abstract"
                className="materialize-textarea"
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
                type="number" 
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
                type="number" 
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
                type="number" 
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
                type="number" 
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
          <div className="chips">
            <p>Add Some tags for easy finding of your project</p>
            <input
              name="tags"
              className="custom-class"
              placeholder="Type in a tag and press Enter"
              ref={register}
              // onChange={e=>console.log(e.target.value)}
            />
          </div>
          <div className="buttons">
            <button
              onClick={handleGoogleVerify}
              className="btn green lighten-1"
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

      {errorData.isPresent && (
        <div className="errorPresent">
          <p>There seems to be some errors with your credentials</p>
          <p>{errorData.errorMessage}</p>
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
