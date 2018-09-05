import axios from "axios";
import { UPDATE_FEATURES } from "./types";

export const createSubtask = featureID => async dispatch => {
  const body = { featureID };

  // makes blank feature
  const res = await axios.post("/api/feature/subtask/new", body);

  //res.data is parent feature
  dispatch({ type: UPDATE_FEATURES, payload: res.data });
};

export const editSubtask = (values, featureID, subtaskID) => async dispatch => {
  /* format reduxform here */
  const body = { featureID, subtaskID, values };

  const res = await axios.post("/api/feature/subtask/edit", body);

  dispatch({ type: UPDATE_FEATURES, payload: res.data });
};

export const deleteSubtask = (featureID, subtaskID) => async dispatch => {
  const body = { featureID, subtaskID };

  const res = await axios.post("/api/feature/subtask/delete", body);

  dispatch({ type: UPDATE_FEATURES, payload: res.data });
};

export const toggleSubtask = (featureID, subtaskID) => async dispatch => {
  const body = { featureID, subtaskID };

  const res = await axios.get("/api/feature/subtask/toggle", body);

  dispatch({ type: UPDATE_FEATURES, payload: res.data });
};
