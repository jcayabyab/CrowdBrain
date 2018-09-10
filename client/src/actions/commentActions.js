import axios from "axios";
import {
  GET_COMMENTS,
  UPDATE_COMMENTS,
  DELETE_COMMENT,
  WIPE_COMMENTS
} from "./types";

export const getComments = featureId => async dispatch => {
  const body = { featureId };

  const res = await axios.post("/api/comments", body);

  dispatch({ type: GET_COMMENTS, payload: res.data });
};

export const getComment = commentId => async dispatch => {
  const body = { commentId };

  const res = await axios.post("/api/comment", body);

  dispatch({ type: UPDATE_COMMENTS, payload: res.data });
};

export const createComment = (feature, values) => async dispatch => {
  // values: username, body
  const projectId = feature._project;
  const featureId = feature._id;
  const { username, body } = values;

  const res = await axios.post("/api/comment/new", {
    projectId,
    featureId,
    username,
    body
  });

  console.log(res.data);

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
