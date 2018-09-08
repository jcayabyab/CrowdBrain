import _ from "lodash";
import {
  GET_PROJECTS,
  UPDATE_PROJECTS,
  DELETE_PROJECT
} from "../actions/types";

export default function(state = {notLoaded: true}, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return _.mapKeys(action.payload, "_id");
    case UPDATE_PROJECTS: {
      let newState = { ...state, [action.payload._id]: action.payload };
      delete newState.notLoaded;
      return newState;
    }
    case DELETE_PROJECT:
      return _.filter(state, { _id: !action.payload._id });
    default:
      return state;
  }
}
