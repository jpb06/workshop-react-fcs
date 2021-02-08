import { DevFriendsContextWrapper } from "@src/tests-related/wrappers/DevFriends.context.wrapper";
import { act, renderHook } from "@testing-library/react-hooks";

import { useSquadsSelectionChange } from "./useSquadsSelectionChange.hook";

const setSelectedSquadsMock = jest.fn();
const setStatusMock = jest.fn();
const wrapper = DevFriendsContextWrapper(setSelectedSquadsMock, setStatusMock);

describe("Squads selection change hook", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should return form values set to true and a function to handle changes", () => {
    const { result } = renderHook(() => useSquadsSelectionChange(), {
      wrapper,
    });

    const [handleChange, formValues] = result.current;
    expect(handleChange).toEqual(expect.any(Function));
    expect(formValues).toStrictEqual([true, true, true, true]);
  });

  it("should update form values", async () => {
    const { result } = renderHook(() => useSquadsSelectionChange(), {
      wrapper,
    });

    const [handleChange] = result.current;

    act(() => {
      handleChange({ target: { name: "1" } } as any, false);
    });

    expect(result.current[1]).toStrictEqual([true, false, true, true]);
    expect(setStatusMock).toHaveBeenCalledWith("loading");
    expect(setSelectedSquadsMock).toHaveBeenCalledTimes(1);
  });

  it("shouldn't update form values if event is invalid", async () => {
    const { result } = renderHook(() => useSquadsSelectionChange(), {
      wrapper,
    });

    const [handleChange] = result.current;

    act(() => {
      handleChange({ target: { name: "-58" } } as any, false);
    });

    expect(result.current[1]).toStrictEqual([true, true, true, true]);
    expect(setStatusMock).toHaveBeenCalledWith("loading");
    expect(setSelectedSquadsMock).toHaveBeenCalledTimes(0);
  });
});
