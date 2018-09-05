import axios from "axios";
import {
  GET_FEATURES,
  UPDATE_FEATURES,
  DELETE_FEATURE,
  WIPE_FEATURES
} from "./types";

export const getFeatures = projectId => async dispatch => {
  const body = { projectId };

  const res = await axios.get("/api/features", body);

  dispatch({ type: GET_FEATURES, payload: res.data });
};

export const getFeature = featureId => async dispatch => {
  const body = { featureId };

  const res = await axios.get("/api/feature", body);

  dispatch({ type: UPDATE_FEATURES, payload: res.data });
};

export const createFeature = values => async dispatch => {
  /* format reduxform here */
  const body = {};

  const res = await axios.post("/api/feature/new", body);

  dispatch({ type: UPDATE_FEATURES, payload: res.data });
};

export const editFeature = values => async dispatch => {
  /* format reduxform here */
  const body = {};

  const res = await axios.post("/api/feature/edit", body);

  dispatch({ type: UPDATE_FEATURES, payload: res.data });
};

export const deleteFeature = featureId => async dispatch => {
  const body = { featureId };
  const res = await axios.post("/api/feature/delete", body);

  dispatch({ type: DELETE_FEATURE, payload: res.data });
};

export function wipeFeatures() {
  return { type: WIPE_FEATURES };
}
