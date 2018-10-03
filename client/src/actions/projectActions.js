import axios from "axios";
import {
  GET_PROJECTS,
  GET_COUNT,
  UPDATE_PROJECTS,
  DELETE_PROJECT,
  WIPE_PROJECTS
} from "./types";

export const getAllProjects = (page, projectsPerPage) => async dispatch => {
  const body = { page, projectsPerPage };
  const res = await axios.post("/api/projects/main", body);

  dispatch({ type: GET_PROJECTS, payload: res.data.projects });
  dispatch({ type: GET_COUNT, payload: res.data.count });
};

export const getProjects = () => async dispatch => {
  const res = await axios.get("/api/projects");

  dispatch({ type: GET_PROJECTS, payload: res.data });
};

export const getProject = projectId => async dispatch => {
  const body = { projectId };
  const res = await axios.post("/api/project", body);

  dispatch({ type: UPDATE_PROJECTS, payload: res.data });
};

export const createProject = () => async dispatch => {
  const res = await axios.post("/api/project/new");

  dispatch({ type: UPDATE_PROJECTS, payload: res.data });
};

export const editProject = (projectId, values) => async dispatch => {
  const { title, description, dateDue, completed, isPrivate } = values;
  const body = { projectId };

  if (title) {
    body.title = title;
  }
  if (description) {
    body.description = description;
  }
  if (dateDue) {
    body.dateDue = dateDue.getTime();
  }
  if (typeof completed !== "undefined") {
    body.completed = completed;
  }
  if (typeof isPrivate !== "undefined") {
    body.isPrivate = isPrivate;
  }

  const res = await axios.post("/api/project/edit", body);

  dispatch({ type: UPDATE_PROJECTS, payload: res.data });
};

export const deleteProject = projectId => async dispatch => {
  const body = { projectId };

  const res = await axios.post("/api/project/delete", body);

  dispatch({ type: DELETE_PROJECT, payload: res.data });
};

export function wipeProjects() {
  return { type: WIPE_PROJECTS };
}
