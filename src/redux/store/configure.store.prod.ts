import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "../reducers";
import { RootState } from "./root.state";

export default function configureStore(preloadedState?: RootState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );

  return store;
}
