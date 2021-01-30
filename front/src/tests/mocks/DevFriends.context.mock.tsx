import { useState } from "react";

import { DevFriendsContext } from "@components/dev-friends/contexts/DevFriendsContext.context";

export const mockDevFriendsContext = (
  setSelectedSquadsMock: jest.Mock<any, any>
) => {
  const wrapper = ({ children }) => {
    const selectedSquadsState = useState<Array<number>>(undefined);
    selectedSquadsState[1] = setSelectedSquadsMock;

    return (
      <DevFriendsContext.Provider value={selectedSquadsState}>
        {children}
      </DevFriendsContext.Provider>
    );
  };

  return wrapper;
};
