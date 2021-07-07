import { FETCH_ALL, CREATE } from "../constants/actionTypes";
import * as api from "../api";

export const getProjects = (page) => async (dispatch) => {
  try {
    const {
      data: { data, currentPage, totalPages },
    } = await api.getAllProjects(page);
    dispatch({ type: FETCH_ALL, payload: { data, currentPage, totalPages } });
  } catch (error) {
    console.log(error.message);
  }
};

export const createProject = (project) => async (dispatch) => {
  try {
    const { data } = await api.createProject(project);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
