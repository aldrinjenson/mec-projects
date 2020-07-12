import firebase from "firebase";
import {
  AUTH_VERIFY_SUCCESS,
  AUTH_VERIFY_ERROR,
  AUTH_VERIFY_BEGIN,
} from "../constants";

export const authenticateWithGoogle = () => {
  return (dispatch) => {
    dispatch(verifyIdentityBegin());
    // Async action
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user; // The signed-in user info.
        const uploader = {
          name: user.displayName,
          email: user.email,
        };
        dispatch(verifyIdentitySuccess(uploader));
      })
      .catch((error) => {
        console.log("error in authentication", error.message);
        dispatch(verifyIdentityError(error));
      });
  };
};

export const signOutUser = () => {
  return (dispatch) => {
    dispatch(signOutUserBegin());
    // Async action
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(signOutUserSuccess());
        console.log("Signed out user");
      })
      .catch((err) => {
        console.log("error in signing out user");
        dispatch(signOutUserError(err));
      });
  };
};

export const verifyIdentityBegin = () => {
  return {
    type: AUTH_VERIFY_BEGIN,
  };
};

export const verifyIdentitySuccess = (uploader) => {
  return {
    type: AUTH_VERIFY_SUCCESS,
    payload: uploader,
  };
};
export const verifyIdentityError = (error) => {
  return {
    type: AUTH_VERIFY_ERROR,
    payload: error,
  };
};

export const signOutUserBegin = () => {
  return {
    type: AUTH_VERIFY_BEGIN,
  };
};

export const signOutUserSuccess = () => {
  return {
    type: AUTH_VERIFY_SUCCESS,
  };
};
export const signOutUserError = (error) => {
  return {
    type: AUTH_VERIFY_ERROR,
    payload: error,
  };
};
