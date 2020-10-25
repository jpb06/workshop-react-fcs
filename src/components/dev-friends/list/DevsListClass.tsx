import React from "react";

import { Card, CardContent, CardMedia, Grid } from "@material-ui/core";

import { Dev } from "../../../types/dev.type";
import { CircularLoading } from "../../generic/CircularLoading";

interface DevsListProps {
  isLoading: boolean;
  devs: Array<Dev>;
}

export class DevsListClass extends React.Component<DevsListProps> {
  render() {
    if (this.props.isLoading) {
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
        {this.props.devs.map((dev, index) => (
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
