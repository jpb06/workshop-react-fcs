import React, { useState } from "react";

import { CircularLoading } from "@components/generic/circular-loading/CircularLoading";
import { CardActions, Grid } from "@material-ui/core";
import { Squad } from "@sharedtypes/squad.interface";

import { SquadFilter } from "./children/filter/SquadFilter";
import { DevsList } from "./children/list/DevsList";
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
        {{ loading: <CircularLoading />, errored: <>Oh no!</> }[status]}
      </Grid>
    </DevFriendsContext.Provider>
  );
};
