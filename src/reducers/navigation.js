import { navigationActions, navigationTabs } from "../constants";

export const navigation = (state = navigationTabs[0], action) => {
  switch (action.type) {
    case navigationActions.GoHomeAction:
      return {
        ...state,
        value: navigationTabs[0].value,
        name: navigationTabs[0].name,
      };
    case navigationActions.GoBlogAction:
      return {
        ...state,
        value: navigationTabs[1].value,
        name: navigationTabs[1].name,
      };
    case navigationActions.GoStackAction:
      return {
        ...state,
        value: navigationTabs[2].value,
        name: navigationTabs[2].name,
      };
    case navigationActions.GoProjectsAction:
      return {
        ...state,
        value: navigationTabs[3].value,
        name: navigationTabs[3].name,
      };
    default:
      return state;
  };
};