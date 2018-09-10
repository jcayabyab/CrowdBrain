import axios from "axios";
import { FETCH_USER, FETCH_OWNER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current-user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchOwner = userId => async dispatch => {
  const body = { userId };

  const res = await axios.post("/api/owner", body);
  dispatch({ type: FETCH_OWNER, payload: res.data });
};
