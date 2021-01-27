import React, { useState } from "react";

import { CardActions, Grid } from "@material-ui/core";

import { DevFriendsContext } from "./contexts/DevFriendsContext.context";
import { SquadFilter } from "./filter/SquadFilter";
import { DevsList } from "./list/DevsList";
import { useMyDevFriendsStyles } from "./MyDevFriends.styles";

export const MyDevFriends = () => {
  const classes = useMyDevFriendsStyles();
  const selectedSquadsState = useState<Array<number>>(undefined);

  return (
    <DevFriendsContext.Provider value={selectedSquadsState}>
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
      </Grid>
    </DevFriendsContext.Provider>
  );
};
