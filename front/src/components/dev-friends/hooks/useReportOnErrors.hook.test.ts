import { DevFriendsContextWrapper } from "@src/tests-related/wrappers/DevFriends.context.wrapper";
import { renderHook } from "@testing-library/react-hooks";

import { useReportOnErrors } from "./useReportOnErrors.hook";

const setSelectedSquadsMock = jest.fn();
const setStateMock = jest.fn();
const wrapper = DevFriendsContextWrapper(setSelectedSquadsMock, setStateMock);

describe("useReportOnErrors hook", () => {
  it("should not change the status if there is no errors", () => {
    renderHook(() => useReportOnErrors(false), {
      wrapper,
    });

    expect(setStateMock).toHaveBeenCalledTimes(0);
  });

  it("should set status as errored if there is errors", () => {
    renderHook(() => useReportOnErrors(true), {
      wrapper,
    });

    expect(setStateMock).toHaveBeenCalledTimes(1);
    expect(setStateMock).toHaveBeenCalledWith("errored");
  });
});
