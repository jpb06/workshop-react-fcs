import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

import { rootReducer } from "../reducers";
import { RootState } from "./root.state";

export default function configureStore(preloadedState?: RootState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(reduxImmutableStateInvariant(), thunk))
  );
  return store;
}
