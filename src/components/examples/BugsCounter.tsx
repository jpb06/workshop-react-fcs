import React from "react";
import { useState } from "react";

import {
    Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography
} from "@material-ui/core";

interface AppBugsProps {
  onClick: () => void;
  name: string;
}

const AppBugs: React.FC<AppBugsProps> = ({ onClick, name }) => {
  console.log(`Rendering app bugs ${name}`);
  return (
    <Button
      color="primary"
      variant="outlined"
      onClick={onClick}
      style={{ width: "100%" }}
    >
      {name}
    </Button>
  );
};
//const MemoedAppBugs = React.memo(AppBugs);

export const BugsCounter = () => {
  const [appBugsCount, setAppBugsCount] = useState(0);
  const [apiBugsCount, setApiBugsCount] = useState(0);

  const addAppBug = () => setAppBugsCount((c) => c + 1);
  const addApiBug = () => setApiBugsCount((c) => c + 1);

  console.log("Rendering Bugs counter");
  return (
    <Card style={{ width: 430, marginTop: 25 }}>
      <CardActionArea>
        <CardMedia style={{ height: 400 }} image="/bugs.jpg" title="bugs" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Did you find a bug?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={6}>
            <AppBugs name="App" onClick={addAppBug} />
            {appBugsCount}
          </Grid>
          <Grid item xs={6}>
            <AppBugs name="Api" onClick={addApiBug} />
            {apiBugsCount}
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
