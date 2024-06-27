import { GlobalProvider } from "@ladle/react";
import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #424242;
    height: 100%;
    margin: 0;
  }
`;

export const Provider: GlobalProvider = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
};
