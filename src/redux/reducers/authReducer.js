import {
  AUTH_VERIFY_BEGIN,
  AUTH_VERIFY_SUCCESS,
  AUTH_VERIFY_ERROR,
} from "../constants";

const INIT_STATE = {
  uploader: {},
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case AUTH_VERIFY_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AUTH_VERIFY_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        uploader: action.payload,
      };
    case AUTH_VERIFY_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
