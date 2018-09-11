import {FETCH_OWNER} from "../actions/types";
import emptyUser from "../components/utils/emptyUser";

export default function(state = emptyUser, action) {
  switch(action.type) {
    case FETCH_OWNER:
      return action.payload;
    default:
      return state;
  }
}