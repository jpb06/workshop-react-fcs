import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "../redux/reducers";
import { RootState } from "../redux/store/root.state";
import { ReduxAction } from "../types/redux.action.type";

interface CreateMockStoreOptions {
  state: RootState;
}

export const createMockStore = (
  priorActions?: Array<ReduxAction<unknown>>,
  options?: CreateMockStoreOptions
) => {
  const store = createStore(
    rootReducer,
    options?.state,
    applyMiddleware(thunk)
  );

  if (priorActions) {
    for (let i = 0; i < priorActions.length; i++) {
      store.dispatch(priorActions[i]);
    }
  }
  // Wrap dispatch in a mock so it can be spied on.
  store.dispatch = jest.fn(store.dispatch);

  return store;
};
