import axios from "axios";
import {
  GET_PROJECTS,
  CREATE_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT
} from "./types";

export const getProjects = () => async dispatch => {
  const res = await axios.get("/api/project");

  dispatch({type: GET_PROJECTS, payload: res.data});
};

export const createProject = values => async dispatch => {
  /* format reduxform here */
  const body = {};

  const res = await axios.post("/api/project/new", body);

  dispatch({type: CREATE_PROJECT, payload: res.data});
};

export const editProject = values => async dispatch => {
    /* format reduxform here */
  const body = {};
  
  const res = await axios.post("/api/project/edit", body);

  dispatch({type: EDIT_PROJECT, payload: res.data});
};

export const deleteProject = projectID => async dispatch => {
  const res = await axios.post("/api/project/delete", projectID);

  dispatch({type: DELETE_PROJECT, payload: res.data});
};

