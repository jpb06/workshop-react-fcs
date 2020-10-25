import { ActionType } from "../../types/action.types.enum";
import { Dev } from "../../types/dev.type";
import { ReduxAction } from "../../types/redux.action.type";
import { initialState } from "../store/root.state";

export const devsReducer = (
  state: Array<Dev> = initialState.devs,
  action: ReduxAction<Array<Dev>>
) => {
  if (action.type === ActionType.FetchDevsSuccess) {
    return action.payload;
  }

  return state;
};
