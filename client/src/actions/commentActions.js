import axios from "axios";
import {
  GET_COMMENTS,
  UPDATE_COMMENTS,
  DELETE_COMMENT,
  WIPE_COMMENTS
} from "./types";

export const getComments = featureId => async dispatch => {
  const body = { featureId };

  const res = await axios.get("/api/comments", body);

  dispatch({ type: GET_COMMENTS, payload: res.data });
};

export const getComment = commentId => async dispatch => {
  const body = { commentId };

  const res = await axios.get("/api/comment", body);

  dispatch({ type: UPDATE_COMMENTS, payload: res.data });
};

export const createComment = (featureId, values) => async dispatch => {
  /* format reduxform here */
  const body = { featureId, values };

  const res = await axios.post("/api/feature/new", body);

  dispatch({ type: UPDATE_COMMENTS, payload: res.data });
};

export const editComment = (commentId, values) => async dispatch => {
  /* format reduxform here */
  const body = { commentId, values };

  const res = await axios.post("/api/feature/edit", body);

  dispatch({ type: UPDATE_COMMENTS, payload: res.data });
};

export const deleteComment = commentId => async dispatch => {
  const body = { commentId };
  const res = await axios.post("/api/feature/delete", body);

  dispatch({ type: DELETE_COMMENT, payload: res.data });
};

export function wipeComments() {
  return { type: WIPE_COMMENTS };
}
