import { FETCH_USER } from "../actions/types";
import emptyUser from "../components/utils/emptyUser";

export default function(state = emptyUser, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
