import React from "react";

export const DevFriendsContext = React.createContext<
  [Array<number>, React.Dispatch<Array<number>>]
>(undefined);
