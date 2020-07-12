import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  projects: projectReducer,
  auth: authReducer
})

export default rootReducer