import { createStore } from "redux";
import rootReducer from "./../reducers";
import { RootState } from "./root.state";
export default function configureStore(preloadedState?: RootState) {
  const store = createStore(rootReducer, preloadedState);

  return store;
}
