import {
  FETCH_PROJECTS_BEGIN,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_ERROR,
} from "../constants";
import firebase from "firebase";

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
      }).catch(err=>{
        dispatch(fetchProjectsError(err))
      })
    return () => {
      unsubscribe();
    };

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
