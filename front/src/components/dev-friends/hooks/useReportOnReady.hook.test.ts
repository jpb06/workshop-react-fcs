import { DevFriendsContextWrapper } from "@src/tests-related/wrappers/DevFriends.context.wrapper";
import { renderHook } from "@testing-library/react-hooks";

import { useReportOnReady } from "./useReportOnReady.hook";

const setSelectedSquadsMock = jest.fn();
const setStateMock = jest.fn();
const wrapper = DevFriendsContextWrapper(setSelectedSquadsMock, setStateMock);

describe("useReportOnErrors hook", () => {
  it("should not change the status if there is no data", () => {
    renderHook(() => useReportOnReady(), {
      wrapper,
    });

    expect(setStateMock).toHaveBeenCalledTimes(0);
  });

  it("should set status to ready if there is some data", () => {
    renderHook(() => useReportOnReady([]), {
      wrapper,
    });

    expect(setStateMock).toHaveBeenCalledTimes(1);
    expect(setStateMock).toHaveBeenCalledWith("ready");
  });
});
