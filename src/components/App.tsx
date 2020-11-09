import React from "react";
import { Provider as ReduxProvider } from "react-redux";

import { CssBaseline, Grid, MuiThemeProvider } from "@material-ui/core";

import { appTheme } from "../create.theme";
import configureStore from "../redux/store/configure.store";
import { MyDevFriends } from "./dev-friends/MyDevFriends";

//import { MyDevFriendsClass } from "./dev-friends/MyDevFriendsClass";

const store = configureStore();

export const App = () => (
  <ReduxProvider store={store}>
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      <Grid container direction="row" justify="center" alignItems="center">
        {/* <MyDevFriendsClass /> */}
        <MyDevFriends /> 
      </Grid>
    </MuiThemeProvider>
  </ReduxProvider>
);
