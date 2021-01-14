import React from "react";
import { Provider } from "react-redux";

import { ReduxAction } from "../types/redux.action.type";
import { ConnectedRenderCustomOptions } from "./connected.render";
import { createMockStore } from "./create.mock.store";

interface WrapperProps {
  children: React.ReactElement;
}

export const storeWrapper = (
  priorActions?: Array<ReduxAction<unknown>>,
  options?: ConnectedRenderCustomOptions
) => {
  const store = createMockStore(priorActions, options);

  const wrapper = ({ children }: WrapperProps) => (
    <Provider store={store}>{children}</Provider>
  );
  return { wrapper, store };
};
