import axios from "axios";
import {
  GET_COMMENTS,
  CREATE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  WIPE_COMMENTS
} from "./types";

export const getComments = featureID => async dispatch => {
  const body = { featureID };

  const res = await axios.get("/api/comment", body);

  dispatch({ type: GET_COMMENTS, payload: res.data });
};

export const createComment = (featureID, values) => async dispatch => {
  /* format reduxform here */
  const body = { featureID, values };

  const res = await axios.post("/api/feature/new", body);

  dispatch({ type: CREATE_COMMENT, payload: res.data });
};

export const editComment = (commentID, values) => async dispatch => {
  /* format reduxform here */
  const body = { commentID, values };

  const res = await axios.post("/api/feature/edit", body);

  dispatch({ type: EDIT_COMMENT, payload: res.data });
};

export const deleteComment = commentID => async dispatch => {
  const body = { commentID };
  const res = await axios.post("/api/feature/delete", body);

  dispatch({ type: DELETE_COMMENT, payload: res.data });
};

export function wipeComments() {
  return { type: WIPE_COMMENTS };
}
