import axios from "axios";
import { GET_PROJECTS, UPDATE_PROJECTS, DELETE_PROJECT } from "./types";

export const getProjects = () => async dispatch => {
  const res = await axios.get("/api/projects");

  dispatch({ type: GET_PROJECTS, payload: res.data });
};

export const getProject = projectId => async dispatch => {
  const body = { projectId };
  const res = await axios.post("/api/project", body);

  dispatch({ type: UPDATE_PROJECTS, payload: res.data });
};

export const createProject = values => async dispatch => {
  /* format reduxform here */
  const body = {};

  const res = await axios.post("/api/project/new", body);

  dispatch({ type: UPDATE_PROJECTS, payload: res.data });
};

export const editProject = values => async dispatch => {
  /* format reduxform here */
  const body = {};

  const res = await axios.post("/api/project/edit", body);

  dispatch({ type: UPDATE_PROJECTS, payload: res.data });
};

export const deleteProject = projectId => async dispatch => {
  const res = await axios.post("/api/project/delete", projectId);

  dispatch({ type: DELETE_PROJECT, payload: res.data });
};
