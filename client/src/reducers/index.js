import { combineReducers } from "redux";
import userReducer from "./userReducer";
import projectsReducer from "./projectsReducer";
import featuresReducer from "./featuresReducer";
import commentsReducer from "./commentsReducer";

export default combineReducers({
  user: userReducer,
  projects: projectsReducer,
  features: featuresReducer,
  comments: commentsReducer
});
