import { createStore, applyMiddleware } from "redux";
import rootReducer from "./../reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootState } from "./root.state";

export default function configureStore(preloadedState?: RootState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(reduxImmutableStateInvariant()))
  );
  return store;
}
