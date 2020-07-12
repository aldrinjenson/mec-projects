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
        console.log('identity verified')
        dispatch(verifyIdentitySuccess(uploader));
      })
      .catch((error) => {
        dispatch(verifyIdentityError(error));
        // const { errorCode, errorMessage, email } = error;
        // console.log("Error found:", errorCode, email);
        // setErrorData({ isPresent: true, errorCode, errorMessage, email });
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
