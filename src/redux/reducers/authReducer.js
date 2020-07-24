import {
  AUTH_VERIFY_BEGIN,
  AUTH_VERIFY_SUCCESS,
  AUTH_VERIFY_ERROR,
  SIGNOUT_USER_SUCCESS,
  SIGNOUT_USER_BEGIN,
  SIGNOUT_USER_ERROR,
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
    case SIGNOUT_USER_BEGIN:
      return state;
    case SIGNOUT_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        uploader: {},
        error: null,
      };
    case SIGNOUT_USER_ERROR:
      return {
        ...state,
        isAuthenticated: true,
        uploader: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
