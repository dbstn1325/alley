import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ThemeProvider } from "styled-components";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { GlobalStyle } from "styles/global/global_style";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </>
);
