import React from "react";

import {
    Card, CardActionArea, CardActions, CardContent, CardMedia, Typography
} from "@material-ui/core";

import { SquadFilterClass } from "./Filters/SquadFilterClass";
import { DevsListClass } from "./list/DevsListClass";

interface MyDevFriendsState {
  selectedSquads: Array<number>;
}

export class MyDevFriendsClass extends React.Component<{}, MyDevFriendsState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedSquads: [1, 2, 3, 4],
    };
    this.onSquadsFiltered = this.onSquadsFiltered.bind(this);
  }

  onSquadsFiltered(selectedSquads: Array<number>) {
    this.setState({ selectedSquads });
  }

  render() {
    return (
      <Card style={{ maxWidth: 600, marginTop: 25 }}>
        <CardActionArea>
          <CardMedia
            style={{ height: 350 }}
            image="/happy.jpg"
            title="Friends"
          />
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
          <SquadFilterClass onSquadsFiltered={this.onSquadsFiltered} />
        </CardActions>
        <DevsListClass selectedSquads={this.state.selectedSquads} />
      </Card>
    );
  }
}
