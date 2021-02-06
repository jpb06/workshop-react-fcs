import React from "react";

import {
    GlobalLoadingIndicator
} from "@components/generic/global-loading-indicator/GlobalLoadingIndicator";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";

import { MyDevFriends } from "../components/dev-friends/MyDevFriends";
import { useHomeStyles } from "./index.styles";

export const Home = (): JSX.Element => {
  const classes = useHomeStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/happy.jpg"
            title="Friends"
          />
          <GlobalLoadingIndicator />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              My dev friends
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              They are cool and good; but also great and cool. Together we build
              sand castles with our minds.
            </Typography>
          </CardContent>
        </CardActionArea>

        <MyDevFriends />
      </Card>
    </Grid>
  );
};

export default Home;
