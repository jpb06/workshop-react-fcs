import React from "react";

import { CssBaseline, Grid, MuiThemeProvider } from "@material-ui/core";

import { appTheme } from "../create.theme";
import { MyDevFriends } from "./dev-friends/MyDevFriends";
import { MyDevFriendsClass } from "./dev-friends/MyDevFriendsClass";

export const App = () => (
  <MuiThemeProvider theme={appTheme}>
    <CssBaseline />
    <Grid container direction="row" justify="center" alignItems="center">
      <MyDevFriendsClass />
      {/* <MyDevFriends />*/}
    </Grid>
  </MuiThemeProvider>
);
