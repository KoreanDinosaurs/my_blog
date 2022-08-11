import React from "react";
import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";

import Router from "@/route/Router";

import themeState from "@/recoil/ThemeMode";
import GlobalStyle from "@/styles/GlobalStyle";
import { LightTheme, DarkTheme } from "@/styles/theme";

const App = () => {
  const theme = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={theme ? LightTheme : DarkTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
