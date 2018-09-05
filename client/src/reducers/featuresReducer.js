import _ from "lodash";
import {
  GET_FEATURES,
  UPDATE_FEATURES,
  DELETE_FEATURE,
  WIPE_FEATURES
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_FEATURES:
      return _.mapKeys(action.payload, "id");
    case UPDATE_FEATURES: {
      let newState = {...state, [action.payload._id]: action.payload};
      return newState;
    }
    case DELETE_FEATURE:
      return _.filter(state, { _id: !action.payload._id });
    case WIPE_FEATURES:
      return {};
    default:
      return state;
  }
}
