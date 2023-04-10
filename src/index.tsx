import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import "@utilits/i18next";
// import { CountProvider } from "provider/context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <CssBaseline />
    {/* <CountProvider> */}
    <App />
    {/* </CountProvider> */}
  </Suspense>
);
