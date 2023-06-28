import { Suspense } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import "@utilits/i18next";
import { ApolloProvider } from "@apollo/client";
import client from "apollo/client";
import { EmailProvider } from "context/EmailContext";

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <CssBaseline />
    <ApolloProvider client={client}>
      <EmailProvider>
        <App />
      </EmailProvider>
    </ApolloProvider>
  </Suspense>,
  document.getElementById("root")
);
