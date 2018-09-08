import _ from "lodash";
import {
  GET_FEATURES,
  UPDATE_FEATURES,
  DELETE_FEATURE,
  WIPE_FEATURES
} from "../actions/types";

export default function(state = { notLoaded: true }, action) {
  switch (action.type) {
    case GET_FEATURES:
      return _.mapKeys(action.payload, "_id");
    case UPDATE_FEATURES: {
      let newState = { ...state, [action.payload._id]: action.payload };
      delete newState.notLoaded;
      return newState;
    }
    case DELETE_FEATURE:
      return _.filter(state, { _id: !action.payload._id });
    case WIPE_FEATURES:
      return { notLoaded: true };
    default:
      return state;
  }
}
