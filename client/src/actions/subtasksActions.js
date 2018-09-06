import axios from "axios";
import { UPDATE_FEATURES } from "./types";

export const createSubtask = featureId => async dispatch => {
  const body = { featureId };

  // makes blank feature
  const res = await axios.post("/api/feature/subtask/new", body);

  //res.data is parent feature
  dispatch({ type: UPDATE_FEATURES, payload: res.data });
};

export const editSubtask = (featureId, subtaskId, values) => async dispatch => {
  const body = { ...values, featureId, subtaskId };

  const res = await axios.post("/api/feature/subtask/edit", body);

  dispatch({ type: UPDATE_FEATURES, payload: res.data });
};

export const deleteSubtask = (featureId, subtaskId) => async dispatch => {
  const body = { featureId, subtaskId };

  const res = await axios.post("/api/feature/subtask/delete", body);

  dispatch({ type: UPDATE_FEATURES, payload: res.data });
};

export const toggleSubtask = (featureId, subtaskId) => async dispatch => {
  const body = { featureId, subtaskId };

  const res = await axios.post("/api/feature/subtask/toggle", body);

  dispatch({ type: UPDATE_FEATURES, payload: res.data });
};
