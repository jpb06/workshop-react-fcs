import React from "react";

import { Card, CardContent, CardMedia, Grid } from "@material-ui/core";

import { getDevs } from "../../../mockApi/api";
import { Dev } from "../../../types/dev.type";
import { CircularLoading } from "../../generic/CircularLoading";

interface DevsListProps {
  selectedSquads: Array<number>;
}

interface DevsListState {
  devs: Array<Dev>;
  isLoading: boolean;
}

export class DevsListClass extends React.Component<
  DevsListProps,
  DevsListState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      devs: [],
      isLoading: false,
    };
    this.haveFiltersChanged = this.haveFiltersChanged.bind(this);
    this.getDevsFromApi = this.getDevsFromApi.bind(this);
  }

  async componentDidMount() {
    await this.getDevsFromApi();
  }

  async componentDidUpdate(prevProps: DevsListProps, prevState: DevsListState) {
    const isUpdateNeeded = this.haveFiltersChanged(prevProps.selectedSquads);
    if (isUpdateNeeded) {
      this.setState({ isLoading: true });
      await this.getDevsFromApi();
      this.setState({ isLoading: false });
    }
  }

  haveFiltersChanged(initialFilters: Array<number>) {
    const difference = this.props.selectedSquads
      .filter((el) => !initialFilters.includes(el))
      .concat(
        initialFilters.filter((el) => !this.props.selectedSquads.includes(el))
      );

    return difference.length > 0;
  }

  async getDevsFromApi() {
    const devs = await getDevs();
    const filteredDevs = devs.filter((el) =>
      this.props.selectedSquads.includes(el.squad)
    );
    this.setState({ devs: filteredDevs });
  }

  render() {
    if (this.state.isLoading) {
      return <CircularLoading />;
    }

    return (
      <Grid
        container
        spacing={1}
        justify="center"
        alignItems="center"
        style={{ marginTop: 10, padding: 10 }}
      >
        {this.state.devs.map((dev, index) => (
          <Grid item xs={4} key={index}>
            <Card style={{ backgroundColor: "#0d3c59" }}>
              <CardMedia
                style={{ height: 100 }}
                image={`https://picsum.photos/300?random=${index + 1}`}
                title={dev.firstName}
              />
              <CardContent>{`${dev.firstName} - Squad ${dev.squad}`}</CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}
//
