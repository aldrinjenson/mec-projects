import {
  FETCH_PROJECTS_BEGIN,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_ERROR,
  ADD_PROJECT_BEGIN,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_ERROR,
} from "../constants";
import firebase from "firebase";
import { storage } from "../../fbConfig";

export const fetchProjects = () => {
  return (dispatch) => {
    dispatch(fetchProjectsBegin());
    // Make async call
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("projects")
      .get()
      .then((querySnapshot) => {
        const fetchedProjects = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        dispatch(fetchProjectsSuccess(fetchedProjects));
      })
      .catch((err) => {
        dispatch(fetchProjectsError(err));
      });
    return () => {
      unsubscribe();
    };
  };
};

export const uploadProject = (data, pdfAsFile) => {
  return (dispatch) => {
    dispatch(addNewProjectBegin());
    // async call to upload project
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
            const project = {
              ...data,
              submittedDate: new Date().toLocaleDateString("en-US"),
              pdfUrl: fireBaseUrl,
            };
            db.collection("projects").add(project);
            dispatch(addNewProjectSuccess(project));
          })
          .catch((err) => dispatch(addNewProjectError(err)));
      }
    );
  };
};

export const fetchProjectsBegin = () => {
  return {
    type: FETCH_PROJECTS_BEGIN,
  };
};
export const fetchProjectsSuccess = (projects) => {
  return {
    type: FETCH_PROJECTS_SUCCESS,
    payload: projects,
  };
};
export const fetchProjectsError = (error) => {
  return {
    type: FETCH_PROJECTS_ERROR,
    payload: error,
  };
};

export const addNewProjectBegin = (project) => {
  return {
    type: ADD_PROJECT_BEGIN,
    payload: project,
  };
};
export const addNewProjectSuccess = (project) => {
  return {
    type: ADD_PROJECT_SUCCESS,
    payload: project,
  };
};
export const addNewProjectError = (error) => {
  return {
    type: ADD_PROJECT_ERROR,
    payload: error,
  };
};
