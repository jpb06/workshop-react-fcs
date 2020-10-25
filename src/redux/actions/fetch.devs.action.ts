import { getDevs } from "../../mockApi/api";
import { ActionType } from "../../types/action.types.enum";
import { Dev } from "../../types/dev.type";
import { ReduxDispatch } from "../../types/redux.dispatch.type";
import { ThunkResult } from "../../types/thunk.result.type";

export const fetchDevsAction = (
  squads: Array<number>
): ThunkResult<Promise<Array<Dev>>> => async (dispatch: ReduxDispatch) => {
  dispatch({ type: ActionType.FetchDevsStart });

  const data = await getDevs();
  const filteredDevs = data.filter((el) => squads.includes(el.squad));

  dispatch({ type: ActionType.FetchDevsSuccess, payload: filteredDevs });
  return data;
};
