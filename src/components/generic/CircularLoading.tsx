import React from "react";

import { CircularProgress, Grid } from "@material-ui/core";

export const CircularLoading = () => (
  <Grid
    container
    spacing={1}
    justify="center"
    alignItems="center"
    style={{ padding: 50 }}
  >
    <CircularProgress color="secondary" size={100} />
  </Grid>
);
