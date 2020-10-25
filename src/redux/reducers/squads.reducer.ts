import { ActionType } from "../../types/action.types.enum";
import { ReduxAction } from "../../types/redux.action.type";
import { initialState } from "../store/root.state";

export const squadsReducer = (
  state: Array<number> = initialState.squads,
  action: ReduxAction<Array<number>>
) => {
  if (action.type === ActionType.FetchSquadsSuccess) {
    return action.payload;
  }

  return state;
};
