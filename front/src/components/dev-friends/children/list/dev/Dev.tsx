import React from "react";

import { Card, CardContent, CardMedia, Grid } from "@material-ui/core";
import { Dev as DevType } from "@sharedtypes/dev.interface";

import { getDevDescription } from "../../../logic/getDevDescription";
import { useDevStyles } from "./Dev.styles";

interface DevProps extends DevType {
  id: number;
}

export const Dev: React.FC<DevProps> = ({
  id,
  firstName,
  squad,
}): JSX.Element => {
  const classes = useDevStyles();

  const description = getDevDescription({ firstName, squad });

  return (
    <Grid item xs={4}>
      <Card className={classes.card} role="dev" title={description}>
        <CardMedia
          className={classes.media}
          image={`https://picsum.photos/300?random=${id + 1}`}
          role="img"
          title={firstName}
        />
        <CardContent>{description}</CardContent>
      </Card>
    </Grid>
  );
};
