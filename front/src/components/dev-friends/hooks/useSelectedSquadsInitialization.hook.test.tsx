import { renderHook } from "@testing-library/react-hooks";
import { mockDevFriendsContext } from "@tests/mocks/DevFriends.context.mock";

import { useSelectedSquadsInitialization } from "./useSelectedSquadsInitialization.hook";

const setSelectedSquadsMock = jest.fn();
const wrapper = mockDevFriendsContext(setSelectedSquadsMock);

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
    const selectedSquads = [1, 2, 3, 4];
    renderHook(() => useSelectedSquadsInitialization(selectedSquads), {
      wrapper,
    });

    expect(setSelectedSquadsMock).toHaveBeenCalledTimes(1);
    expect(setSelectedSquadsMock).toHaveBeenCalledWith(selectedSquads);
  });
});
