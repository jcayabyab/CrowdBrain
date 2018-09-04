import {
  GET_PROJECTS,
  CREATE_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case GET_PROJECTS:
      return action.payload;
    case CREATE_PROJECT: {
      let newState = [...state];
      newState.push(action.payload);
      return newState;
    }
    case EDIT_PROJECT: {
      let newState = [...state];
      newState.forEach(project => {
        if (project._id === action.payload._id) {
          project = action.payload;
        }
      });
      return newState;
    }
    case DELETE_PROJECT:
      return state.filter(project => project._id !== action.payload._id);
    default:
      return state;
  }
}
