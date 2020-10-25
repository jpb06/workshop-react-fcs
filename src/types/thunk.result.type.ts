import { ThunkAction } from "redux-thunk";

import { RootState } from "../redux/store/root.state";

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, any>;
