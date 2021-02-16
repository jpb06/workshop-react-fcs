import { useState } from "react";

import { DevFriendsContext } from "@components/dev-friends/contexts/DevFriendsContext.context";
import { DevFriendsStatus } from "@components/dev-friends/MyDevFriends";
import { Squad } from "@sharedtypes/squad.interface";

export const DevFriendsContextWrapper = (
  setSelectedSquadsMock: jest.Mock<any, any> = jest.fn(),
  setStatusMock: jest.Mock<any, any> = jest.fn()
): (({ children }) => JSX.Element) => {
  const wrapper = ({ children }) => {
    const statusState = useState<DevFriendsStatus>("loading");
    const selectedSquadsState = useState<Array<Squad>>(undefined);
    selectedSquadsState[1] = setSelectedSquadsMock;
    statusState[1] = setStatusMock;

    return (
      <DevFriendsContext.Provider
        value={{
          selectedSquads: selectedSquadsState[0],
          setSelectedSquads: selectedSquadsState[1],
          setStatus: statusState[1],
        }}
      >
        {children}
      </DevFriendsContext.Provider>
    );
  };

  return wrapper;
};
