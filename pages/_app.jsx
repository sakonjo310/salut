import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import Layout from "../components/layout";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import InventoryProvider from "../providers/InventoryProvider";
import CircularProgress from "@mui/material/CircularProgress";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
  } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Salut!</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <SessionProvider session={session}>
          {Component.auth ? (
            <Auth>
              <InventoryProvider>
                {/* <Layout navbarType={1}> */}
                  <Component {...pageProps} />
                {/* </Layout> */}
              </InventoryProvider>
            </Auth>
          ) : (
            // <Layout navbarType={1}>
              <Component {...pageProps} />
            // </Layout>
          )}
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <LocalBarIcon />
        <Typography>Loading...</Typography>
        <CircularProgress />
      </Box>
    );
  }

  return children;
}
