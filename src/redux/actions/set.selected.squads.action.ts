import { ActionType } from "../../types/action.types.enum";
import { ReduxDispatch } from "../../types/redux.dispatch.type";
import { ThunkResult } from "../../types/thunk.result.type";

export const setSelectedSquadsAction = (
  squads: Array<number>
): ThunkResult<void> => (dispatch: ReduxDispatch) => {
  dispatch({ type: ActionType.SetSelectedSquads, payload: squads });
  return;
};
