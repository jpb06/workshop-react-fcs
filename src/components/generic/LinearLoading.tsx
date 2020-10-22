import React from "react";

import { Grid, LinearProgress } from "@material-ui/core";

export const LinearLoading = () => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <LinearProgress color="secondary" style={{ height: 8 }} />
    </Grid>
  </Grid>
);
