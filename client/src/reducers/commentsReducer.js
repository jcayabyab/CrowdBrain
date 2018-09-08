import _ from "lodash";

import {
  GET_COMMENTS,
  UPDATE_COMMENTS,
  DELETE_COMMENT,
  WIPE_COMMENTS
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return _.mapKeys(action.payload, "_id");
    case UPDATE_COMMENTS: {
      let newState = { ...state, [action.payload._id]: action.payload };
      return newState;
    }
    case DELETE_COMMENT:
      return _.filter(state, { _id: !action.payload._id });
    case WIPE_COMMENTS:
      return {};
    default:
      return state;
  }
}
