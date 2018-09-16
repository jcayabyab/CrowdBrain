import { combineReducers } from "redux";
import userReducer from "./userReducer";
import ownerReducer from "./ownerReducer";
import projectsReducer from "./projectsReducer";
import featuresReducer from "./featuresReducer";
import commentsReducer from "./commentsReducer";
import countReducer from "./countReducer";
import {reducer as formReducer} from "redux-form";

export default combineReducers({
  form: formReducer,
  user: userReducer,
  owner: ownerReducer,
  projects: projectsReducer,
  features: featuresReducer,
  comments: commentsReducer,
  count: countReducer
});
