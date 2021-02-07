import { setupServer } from "msw/node";

import { devsMockData } from "@src/tests-related/data/devs.data";
import { mockApiGetDevsBy } from "@src/tests-related/msw/api.getDevsBy.mock";

import { getDevsBy } from "./getDevsBy";

describe("getDevsBy function", () => {
  const server = setupServer(mockApiGetDevsBy(devsMockData));

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should return devs", async () => {
    const devs = await getDevsBy([1]);

    expect(devs).toStrictEqual(devsMockData);
  });
});
