import Head from "next/head";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { Card, CardMedia, Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import { appTheme } from "../create.theme";

const queryClient = new QueryClient();

const App = (props) => {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={appTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};
export default App;
