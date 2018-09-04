import axios from "axios";
import {
  GET_FEATURES,
  CREATE_FEATURE,
  EDIT_FEATURE,
  DELETE_FEATURE,
  WIPE_FEATURES
} from "./types";

export const getFeatures = projectID => async dispatch => {
  const body = { projectID };

  const res = await axios.get("/api/feature", body);

  dispatch({ type: GET_FEATURES, payload: res.data });
};

export const createFeature = values => async dispatch => {
  /* format reduxform here */
  const body = {};

  const res = await axios.post("/api/feature/new", body);

  dispatch({ type: CREATE_FEATURE, payload: res.data });
};

export const editFeature = values => async dispatch => {
  /* format reduxform here */
  const body = {};

  const res = await axios.post("/api/feature/edit", body);

  dispatch({ type: EDIT_FEATURE, payload: res.data });
};

export const deleteFeature = featureID => async dispatch => {
  const body = { featureID };
  const res = await axios.post("/api/feature/delete", body);

  dispatch({ type: DELETE_FEATURE, payload: res.data });
};

export function wipeFeatures() {
  return { type: WIPE_FEATURES };
}
