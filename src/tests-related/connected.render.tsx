import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { render as rtlRender, RenderOptions } from "@testing-library/react";

import { rootReducer } from "../redux/reducers";
import { RootState } from "../redux/store/root.state";
import { ReduxAction } from "../types/redux.action.type";

export interface ConnectedRenderCustomOptions extends RenderOptions {
  state: RootState;
}

export const connectedRender = (
  ui: React.ReactElement,
  priorActions?: Array<ReduxAction<unknown>>,
  options?: ConnectedRenderCustomOptions
) => {
  // Wrap dispatch in a mock so it can be spied on.
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

  store.dispatch = jest.fn(store.dispatch);

  function providerWrapper({
    children,
  }: {
    children: React.ReactElement;
  }): React.ReactElement {
    return <Provider store={store}>{children}</Provider>;
  }

  const returns = rtlRender(ui, {
    wrapper: providerWrapper as React.ComponentType,
    ...options,
  });

  return { store, ...returns };
};
