import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
