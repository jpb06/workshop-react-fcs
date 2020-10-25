import React from "react";
import { connect } from "react-redux";

import {
    Card, CardActionArea, CardActions, CardContent, CardMedia, Typography
} from "@material-ui/core";

import { fetchDevsAction, fetchSquadsAction, setSelectedSquadsAction } from "../../redux/actions";
import { RootState } from "../../redux/store/root.state";
import { Dev } from "../../types/dev.type";
import { SquadFilterClass } from "./Filters/SquadFilterClass";
import { DevsListClass } from "./list/DevsListClass";

interface MyDevFriendsProps extends RootState {
  fetchSquadsAction: () => Promise<Array<number>>;
  setSelectedSquadsAction: (squads: Array<number>) => void;
  fetchDevsAction: (squads: Array<number>) => Promise<Array<Dev>>;
}

class MyDevFriendsComponent extends React.Component<MyDevFriendsProps> {
  constructor(props: any) {
    super(props);
    this.handleSquadsFiltered = this.handleSquadsFiltered.bind(this);
  }

  componentDidMount() {
    this.props.fetchSquadsAction();
    this.props.fetchDevsAction([1, 2, 3, 4]);
  }

  async handleSquadsFiltered(selectedSquads: Array<number>) {
    this.props.setSelectedSquadsAction(selectedSquads);
    await this.props.fetchDevsAction(selectedSquads);
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
          <SquadFilterClass
            squads={this.props.squads}
            onSquadsFiltered={this.handleSquadsFiltered}
          />
        </CardActions>
        <DevsListClass
          isLoading={this.props.isAppLoading}
          devs={this.props.devs}
        />
      </Card>
    );
  }
}

const mapStateToProps = (state: RootState) => state;
const mapDispatchToProps = {
  fetchSquadsAction,
  setSelectedSquadsAction,
  fetchDevsAction,
};
export const MyDevFriendsClass = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyDevFriendsComponent);
