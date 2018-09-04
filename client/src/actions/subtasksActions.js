import axios from "axios";
import { EDIT_FEATURE } from "./types";

export const createSubtask = featureID => async dispatch => {
  const body = { featureID };

  // makes blank feature
  const res = await axios.post("/api/feature/subtask/new", body);

  dispatch({ type: EDIT_FEATURE, payload: res.data });
};

export const editSubtask = (values, featureID, subtaskID) => async dispatch => {
  /* format reduxform here */
  const body = { featureID, subtaskID, values };

  const res = await axios.post("/api/feature/subtask/edit", body);

  dispatch({ type: EDIT_FEATURE, payload: res.data });
};

export const deleteSubtask = (featureID, subtaskID) => async dispatch => {
  const body = { featureID, subtaskID };

  const res = await axios.post("/api/feature/subtask/delete", body);

  dispatch({ type: EDIT_FEATURE, payload: res.data });
};

export const toggleSubtask = (featureID, subtaskID) => async dispatch => {
  const body = { featureID, subtaskID };

  const res = await axios.get("/api/feature/subtask/toggle", body);

  dispatch({ type: EDIT_FEATURE, payload: res.data });
};
