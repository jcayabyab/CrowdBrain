import _ from "lodash";

import {
  GET_COMMENTS,
  UPDATE_COMMENTS,
  DELETE_COMMENT,
  WIPE_COMMENTS
} from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case GET_COMMENTS:
      const reversedArray = [...action.payload];
      reversedArray.sort((a, b) => b.dateCreated - a.dateCreated);

      return _.mapKeys(reversedArray, "_id");
    case UPDATE_COMMENTS: {
      let newState = { [action.payload._id]: action.payload, ...state };
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
