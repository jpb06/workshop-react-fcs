import React from "react";

import { Card, CardContent, CardMedia, Grid } from "@material-ui/core";

import { useDevsInit } from "../../../hooks/useDevsInit.hook";
import { isAppLoadingSelector } from "../../../redux/selectors";
import { useRootSelector } from "../../../types/use.root.selector";
import { CircularLoading } from "../../generic/CircularLoading";

export const DevsList = () => {
  const isLoading = useRootSelector(isAppLoadingSelector);
  const devs = useDevsInit();

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
