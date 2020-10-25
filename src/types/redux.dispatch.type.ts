import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { RootState } from "../redux/store/root.state";

export type ReduxDispatch = ThunkDispatch<RootState, any, Action>;
