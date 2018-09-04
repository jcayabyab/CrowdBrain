import {
  GET_FEATURES,
  CREATE_FEATURE,
  EDIT_FEATURE,
  DELETE_FEATURE,
  WIPE_FEATURES
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case GET_FEATURES:
      return action.payload;
    case CREATE_FEATURE: {
      let newState = [...state];
      newState.push(action.payload);
      return newState;
    }
    case EDIT_FEATURE: {
      let newState = [...state];
      newState.forEach(feature => {
        if (feature._id === feature.payload._id) {
          feature = action.payload;
        }
      });
      return newState;
    }
    case DELETE_FEATURE:
      return state.filter(feature => feature._id !== action.payload._id);
    case WIPE_FEATURES:
      return [];
    default:
      return state;
  }
}
