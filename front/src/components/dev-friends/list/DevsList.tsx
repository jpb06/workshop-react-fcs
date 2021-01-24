import React, { useContext } from "react";

import { useDevsBySquadQuery } from "@api/useDevsBySquadQuery.hook";
import { Card, CardContent, CardMedia, Grid } from "@material-ui/core";

import { DevFriendsContext } from "../contexts/DevFriendsContext.context";
import { useDevsListStyles } from "./DevsList.styles";

export const DevsList: React.FC = () => {
  const classes = useDevsListStyles();

  const [squads] = useContext(DevFriendsContext);
  const { data: devs } = useDevsBySquadQuery(squads);

  if (!devs) return null;

  return (
    <Grid
      container
      spacing={1}
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      {devs.map((dev, index) => (
        <Grid item xs={4} key={index}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={`https://picsum.photos/300?random=${index + 1}`}
              title={dev.firstName}
            />
            <CardContent>{`${dev.firstName} - Squad ${dev.squad}`}</CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
