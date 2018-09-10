import {FETCH_OWNER} from "../actions/types";

const emptyOwner = {
  firstName: null,
  lastName: null,
  _id: null,
  userId: null
}

export default function(state = emptyOwner, action) {
  switch(action.type) {
    case FETCH_OWNER:
      return action.payload;
    default:
      return state;
  }
}