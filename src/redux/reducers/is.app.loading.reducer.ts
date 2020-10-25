import { ActionType } from "../../types/action.types.enum";
import { ReduxAction } from "../../types/redux.action.type";
import { initialState } from "../store/root.state";

export const isAppLoadingReducer = (
  state: boolean = initialState.isAppLoading,
  action: ReduxAction<any>
) => {
  if (action.type.endsWith("-SUCCESS")) {
    return false;
  }

  switch (action.type) {
    case ActionType.FetchDevsStart:
    case ActionType.FetchSquadsStart:
      return true;
  }

  return state;
};
