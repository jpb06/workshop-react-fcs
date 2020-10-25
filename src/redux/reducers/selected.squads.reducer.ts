import { ActionType } from "../../types/action.types.enum";
import { ReduxAction } from "../../types/redux.action.type";
import { initialState } from "../store/root.state";

export const selectedSquadsReducer = (
  state: Array<number> = initialState.selectedSquads,
  action: ReduxAction<Array<number>>
) => {
  if (action.type === ActionType.SetSelectedSquads) {
    return action.payload;
  }

  return state;
};
