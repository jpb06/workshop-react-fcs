import React from "react";

import { Card, CardContent, CardMedia, Grid } from "@material-ui/core";
import { Dev as DevType } from "@sharedtypes/dev.interface";

import { useDevStyles } from "./Dev.styles";
import { getDevDescription } from "./logic/getDevDescription";

export const Dev: React.FC<DevType> = ({ firstName, squad }): JSX.Element => {
  const classes = useDevStyles();

  const description = getDevDescription({ firstName, squad });

  return (
    <Grid item xs={4}>
      <Card className={classes.card} role="dev" title={description}>
        <CardMedia
          className={classes.media}
          image={`https://picsum.photos/seed/${firstName}/300`}
          role="img"
          title={firstName}
        />
        <CardContent>{description}</CardContent>
      </Card>
    </Grid>
  );
};
