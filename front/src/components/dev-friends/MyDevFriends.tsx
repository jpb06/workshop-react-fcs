import React, { useState } from "react";

import { CardActions } from "@material-ui/core";

import { DevFriendsContext } from "./contexts/DevFriendsContext.context";
import { SquadFilter } from "./filter/SquadFilter";
import { DevsList } from "./list/DevsList";

export const MyDevFriends = () => {
  const selectedSquadsState = useState<Array<number>>(undefined);

  return (
    <DevFriendsContext.Provider value={selectedSquadsState}>
      <CardActions>
        <SquadFilter />
      </CardActions>
      <DevsList />
    </DevFriendsContext.Provider>
  );
};
