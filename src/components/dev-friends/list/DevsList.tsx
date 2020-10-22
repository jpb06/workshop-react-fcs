import React from "react";

import { Card, CardContent, CardMedia, Grid } from "@material-ui/core";

import { useDevsLoading } from "../../../hooks/useDevsLoading.hook";
import { CircularLoading } from "../../generic/CircularLoading";

interface DevsListProps {
  selectedSquads: Array<number>;
}

export const DevsList: React.FC<DevsListProps> = ({ selectedSquads }) => {
  const [devs, isLoading] = useDevsLoading(selectedSquads);

  if (isLoading) {
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
      {devs.map((dev, index) => (
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
};
