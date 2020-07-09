import projects from "../../data.js";
import { GET_DATA } from "../constants.js";

const INIT_STATE = projects;

const projectReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_DATA:
      return state;
    default:
      return state;
  }
};

export default projectReducer;
