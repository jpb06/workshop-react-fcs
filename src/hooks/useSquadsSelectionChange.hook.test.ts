import { ChangeEvent } from "react";

import { renderHook } from "@testing-library/react-hooks";

import { storeWrapper } from "../tests-related/store.wrapper";
import { useSquadsSelectionChange } from "./useSquadsSelectionChange.hook";

describe("useSquadsSelectionChange hook", () => {
  const { wrapper } = storeWrapper();

  it("should return four booleans set to true", async () => {
    const { result } = renderHook(() => useSquadsSelectionChange(), {
      wrapper,
    });

    const [handleChange, values] = result.current;
    expect(values).toStrictEqual([true, true, true, true]);
    expect(handleChange).toStrictEqual(expect.any(Function));
  });

  it("should", async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useSquadsSelectionChange(),
      {
        wrapper,
      }
    );

    const [handleChange, values] = result.current;
    handleChange(
      {
        target: ({
          name: "3",
        } as unknown) as ChangeEvent<HTMLInputElement>,
      },
      false
    );

    await waitForNextUpdate();

    expect(values).toStrictEqual([true, true, false, true]);
  });
});
