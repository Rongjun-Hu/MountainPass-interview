/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ALL, CREATE } from "../constants/actionTypes";

export default (state = { projects: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        projects: action.payload.data,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
      };
    case CREATE:
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.payload.id ? action.payload : project
        ),
      };

    default:
      return state;
  }
};
