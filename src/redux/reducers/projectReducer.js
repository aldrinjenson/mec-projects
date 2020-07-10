import projects from "../../data.js";
import {
  FETCH_PROJECTS_BEGIN,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_ERROR,
} from "../constants.js";

const INIT_STATE = {
  projects: [],
  loading: false,
  error: null,
};

const projectReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        loading: false,
      };
    case FETCH_PROJECTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
