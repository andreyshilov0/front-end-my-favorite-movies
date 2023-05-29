import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import "@utilits/i18next";
import { ApolloProvider } from "@apollo/client";
import client from "apollo/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <CssBaseline />
    <ApolloProvider client={client} >
      <App />
    </ApolloProvider>
  </Suspense>
);
