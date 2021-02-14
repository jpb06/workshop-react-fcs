import { squadsMockData } from "@src/tests-related/data/squads.data";
import { DevFriendsContextWrapper } from "@src/tests-related/wrappers/DevFriends.context.wrapper";
import { renderHook } from "@testing-library/react-hooks";

import { useSelectedSquadsInitialization } from "./useSelectedSquadsInitialization.hook";

const setSelectedSquadsMock = jest.fn();
const wrapper = DevFriendsContextWrapper(setSelectedSquadsMock);

describe("Selected squads initialization hook", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should not update the context if there is no selected squads", () => {
    renderHook(() => useSelectedSquadsInitialization(undefined), {
      wrapper,
    });

    expect(setSelectedSquadsMock).toHaveBeenCalledTimes(0);
  });

  it("should update the context once if passed selected squads", () => {
    renderHook(() => useSelectedSquadsInitialization(squadsMockData), {
      wrapper,
    });

    expect(setSelectedSquadsMock).toHaveBeenCalledTimes(1);
    expect(setSelectedSquadsMock).toHaveBeenCalledWith(squadsMockData);
  });
});