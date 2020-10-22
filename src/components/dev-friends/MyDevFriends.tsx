import React, { useState } from "react";

import {
    Card, CardActionArea, CardActions, CardContent, CardMedia, Typography
} from "@material-ui/core";

import { SquadFilter } from "./Filters/SquadFilter";
import { DevsList } from "./list/DevsList";

export const MyDevFriends = () => {
  const [selectedSquads, setSelectedSquads] = useState([1, 2, 3, 4]);

  const onSquadsFiltered = (selectedSquads: Array<number>) =>
    setSelectedSquads(selectedSquads);

  return (
    <Card style={{ maxWidth: 600, marginTop: 25 }}>
      <CardActionArea>
        <CardMedia style={{ height: 350 }} image="/happy.jpg" title="Friends" />
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
      <CardActions>
        <SquadFilter onSquadsFiltered={onSquadsFiltered} />
      </CardActions>
      <DevsList selectedSquads={selectedSquads} />
    </Card>
  );
};
