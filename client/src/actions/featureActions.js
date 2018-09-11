import axios from "axios";
import {
  GET_FEATURES,
  UPDATE_FEATURES,
  DELETE_FEATURE,
  WIPE_FEATURES
} from "./types";

export const getFeatures = projectId => async dispatch => {
  const body = { projectId };

  const res = await axios.post("/api/features", body);

  dispatch({ type: GET_FEATURES, payload: res.data });
};

export const getFeature = featureId => async dispatch => {
  const body = { featureId };

  const res = await axios.post("/api/feature", body);

  dispatch({ type: UPDATE_FEATURES, payload: res.data });
};

export const createFeature = projectId => async dispatch => {
  const body = { projectId };

  const res = await axios.post("/api/feature/new", body);

  dispatch({ type: UPDATE_FEATURES, payload: res.data });
};

export const editFeature = (featureId, values) => async dispatch => {
  const { title, description, dateDue } = values;

  const body = { featureId };
  if (title) {
    body.title = title;
  }
  if (description) {
    body.description = description;
  }
  if (dateDue) {
    body.dateDue = dateDue;
  }

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
