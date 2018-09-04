import {
  GET_COMMENTS,
  CREATE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  WIPE_COMMENTS
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case GET_COMMENTS:
      return action.payload;
    case CREATE_COMMENT: {
      let newState = [...state];
      newState.push(action.payload);
      return newState;
    }
    case EDIT_COMMENT: {
      let newState = [...state];
      newState.forEach(comment => {
        if (comment._id === action.payload._id) {
          comment = action.payload;
        }
      });
      return newState;
    }
    case DELETE_COMMENT:
      return state.filter(comment => comment._id !== action.payload._id);
    case WIPE_COMMENTS:
      return [];
    default:
      return state;
  }
}
