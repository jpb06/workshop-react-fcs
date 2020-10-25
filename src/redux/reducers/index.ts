import { combineReducers } from "redux";

import { devsReducer } from "./devs.reducer";
import { isAppLoadingReducer } from "./is.app.loading.reducer";
import { selectedSquadsReducer } from "./selected.squads.reducer";
import { squadsReducer } from "./squads.reducer";

export const rootReducer = combineReducers({
  selectedSquads: selectedSquadsReducer,
  squads: squadsReducer,
  devs: devsReducer,
  isAppLoading: isAppLoadingReducer,
});
