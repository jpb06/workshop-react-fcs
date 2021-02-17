import { Dispatch, SetStateAction, useState } from "react";

import { DevFriendsStatus } from "@components/dev-friends/MyDevFriends";
import { Squad } from "@sharedtypes/squad.interface";

interface MockedDevFriendsState {
  selectedSquadsState: [Squad[], Dispatch<SetStateAction<Squad[]>>];
  statusState: [DevFriendsStatus, Dispatch<SetStateAction<DevFriendsStatus>>];
}

export const useMockedDevFriendsState = (
  setSelectedSquadsMock: jest.Mock<any, any> = jest.fn(),
  setStatusMock: jest.Mock<any, any> = jest.fn()
): MockedDevFriendsState => {
  const statusState = useState<DevFriendsStatus>("loading");
  const selectedSquadsState = useState<Array<Squad>>(undefined);
  selectedSquadsState[1] = setSelectedSquadsMock;
  statusState[1] = setStatusMock;

  return { selectedSquadsState, statusState };
};
