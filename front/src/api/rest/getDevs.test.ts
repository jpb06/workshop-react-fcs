import { setupServer } from "msw/node";

import { devsMockData } from "@src/tests-related/data/devs.data";
import { mockApiGetDevs } from "@src/tests-related/msw/api.getDevs.mock";

import { getDevs } from "./getDevs";

describe("getDevs function", () => {
  const server = setupServer(mockApiGetDevs(devsMockData));

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should return devs", async () => {
    const devs = await getDevs();

    expect(devs).toStrictEqual(devsMockData);
  });
});
