import React, { useState } from "react";

import { CardActions, Grid } from "@material-ui/core";
import { Squad } from "@sharedtypes/squad.interface";

import { DevsList, SquadFilter, StatusReport } from "./children";
import { DevFriendsContext } from "./contexts/DevFriendsContext.context";
import { useMyDevFriendsStyles } from "./MyDevFriends.styles";

export type DevFriendsStatus = "loading" | "errored" | "ready";

export const MyDevFriends = (): JSX.Element => {
  const classes = useMyDevFriendsStyles();
  const [status, setStatus] = useState<DevFriendsStatus>("loading");
  const [selectedSquads, setSelectedSquads] = useState<Array<Squad>>(undefined);

  return (
    <DevFriendsContext.Provider
      value={{ selectedSquads, setSelectedSquads, setStatus }}
    >
      <CardActions>
        <SquadFilter />
      </CardActions>
      <Grid
        container
        spacing={1}
        justify="center"
        alignItems="center"
        className={classes.list}
      >
        <DevsList />
        <StatusReport status={status} />
      </Grid>
    </DevFriendsContext.Provider>
  );
};
