import React from "react";

import { devsMockData } from "@src/tests-related/data/devs.data";
import { squadsMockData } from "@src/tests-related/data/squads.data";
import { mockApiGetDevsBy } from "@src/tests-related/msw/api.getDevsBy.mock";
import { mockApiGetSquads } from "@src/tests-related/msw/api.getSquads.mock";
import { QueryProviderWrapper } from "@src/tests-related/wrappers/QueryProvider.wrapper";
import { setupMswServer } from "@src/tests-related/wrappers/setupMswServer";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import { MyDevFriends } from "./MyDevFriends";

describe("My dev friends component", () => {
  const { wrapper, queryClient } = QueryProviderWrapper();

  const { instance } = setupMswServer(
    mockApiGetSquads(squadsMockData),
    mockApiGetDevsBy(devsMockData)
  );

  beforeAll(() => instance.listen());
  afterEach(() => {
    instance.resetHandlers();
    queryClient.resetQueries();
  });
  afterAll(() => instance.close());

  it("should display a loading indicator", () => {
    render(<MyDevFriends />, { wrapper });

    screen.getByRole("progressbar", { name: /circle-loading/i });
  });

  it.only("should display a list of devs once data has been fetched", async () => {
    render(<MyDevFriends />, { wrapper });

    await waitForElementToBeRemoved(() =>
      screen.queryByRole("progressbar", { name: /circle-loading/i })
    );
  });

  it("should display nothing if devs fetching failed", async () => {
    instance.use(mockApiGetDevsBy(devsMockData, 400));

    render(<MyDevFriends />, { wrapper });

    await waitForElementToBeRemoved(() =>
      screen.queryByRole("progressbar", { name: /circle-loading/i })
    );
  });
});
