import { getSquads } from "../../mockApi/api";
import { ActionType } from "../../types/action.types.enum";
import { ReduxDispatch } from "../../types/redux.dispatch.type";
import { ThunkResult } from "../../types/thunk.result.type";

export const fetchSquadsAction = (): ThunkResult<
  Promise<Array<number>>
> => async (dispatch: ReduxDispatch) => {
  dispatch({ type: ActionType.FetchSquadsStart });

  const data = await getSquads();

  dispatch({ type: ActionType.FetchSquadsSuccess, payload: data });
  return data;
};
