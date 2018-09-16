import _ from "lodash";
import {
  GET_PROJECTS,
  UPDATE_PROJECTS,
  DELETE_PROJECT,
  WIPE_PROJECTS
} from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return _.mapKeys(action.payload, "_id");
    case UPDATE_PROJECTS: {
      let newState = { ...state, [action.payload._id]: action.payload };
      return newState;
    }
    case DELETE_PROJECT:
      return _.filter(state, { _id: !action.payload._id });
    case WIPE_PROJECTS:
      return null;
    default:
      return state;
  }
}
