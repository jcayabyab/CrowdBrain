import { GET_COUNT } from "../actions/types";

export default function(state = null, action) {
  switch(action.type) {
  case GET_COUNT: 
    return action.payload;
  default:
    return state;
  }
}
