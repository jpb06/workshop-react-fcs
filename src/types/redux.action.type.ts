import { ActionType } from "./action.types.enum";

export interface ReduxAction<T> {
  type: ActionType;
  payload: T;
}
