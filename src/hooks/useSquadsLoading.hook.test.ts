import { mocked } from "ts-jest/dist/utils/testing";

import { renderHook } from "@testing-library/react-hooks";

import { getSquads } from "../mockApi/api";
import { squads } from "../mockApi/data";
import { storeWrapper } from "../tests-related/store.wrapper";
import { useSquadsLoading } from "./useSquadsLoading.hook";

jest.mock("./../mockApi/api");

describe("useSquadsLoading hook", () => {
  const { wrapper, store } = storeWrapper();
  console.log = jest.fn();

  mocked(getSquads).mockResolvedValue(squads);

  it("should return squads", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSquadsLoading(), {
      wrapper,
    });
    expect(result.current).toStrictEqual([[], true]);

    await waitForNextUpdate();

    expect(result.current).toStrictEqual([squads, false]);
    expect(result.error).toBeUndefined();

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
