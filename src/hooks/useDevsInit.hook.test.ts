import { mocked } from "ts-jest/dist/utils/testing";

import { renderHook } from "@testing-library/react-hooks";

import { getDevs } from "../mockApi/api";
import { devs } from "../mockApi/data";
import { storeWrapper } from "../tests-related/store.wrapper";
import { useDevsInit } from "./useDevsInit.hook";

jest.mock("./../mockApi/api");

describe("useDevsInit hook", () => {
  const { wrapper, store } = storeWrapper();

  mocked(getDevs).mockResolvedValue(devs);

  it("should return devs", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useDevsInit(), {
      wrapper,
    });
    expect(result.current).toHaveLength(0);

    await waitForNextUpdate();

    expect(result.current).toStrictEqual(devs);
    expect(result.error).toBeUndefined();

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
