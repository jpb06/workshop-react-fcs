import React from "react";
import { Provider } from "react-redux";

import { render as rtlRender, RenderOptions } from "@testing-library/react";

import { RootState } from "../redux/store/root.state";
import { ReduxAction } from "../types/redux.action.type";
import { createMockStore } from "./create.mock.store";

export interface ConnectedRenderCustomOptions extends RenderOptions {
  state: RootState;
}

interface ProviderWrapperProps {
  children: React.ReactElement;
}

export const connectedRender = (
  ui: React.ReactElement,
  priorActions?: Array<ReduxAction<unknown>>,
  options?: ConnectedRenderCustomOptions
) => {
  const store = createMockStore(priorActions, options);

  function providerWrapper({
    children,
  }: ProviderWrapperProps): React.ReactElement {
    return <Provider store={store}>{children}</Provider>;
  }

  const returns = rtlRender(ui, {
    wrapper: providerWrapper as React.ComponentType,
    ...options,
  });

  return { store, ...returns };
};
