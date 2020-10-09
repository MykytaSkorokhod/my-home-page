import { navigationActions } from "../constants";

export const goHome = () => {
  return dispatch => {
    dispatch({ type: navigationActions.GoHomeAction });
  };
};

export const goBlog = () => {
  return dispatch => {
    dispatch({ type: navigationActions.GoBlogAction });
  };
};

export const goStack = () => {
  return dispatch => {
    dispatch({ type: navigationActions.GoStackAction });
  };
};

export const goProjects = () => {
  return dispatch => {
    dispatch({ type: navigationActions.GoProjectsAction });
  };
};