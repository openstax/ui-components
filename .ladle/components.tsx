import { GlobalProvider } from "@ladle/react";

// `:where()` keeps this reset at zero specificity, so a story's own `body` rule wins even
// though this <style> is rendered after it.
const globalCss = `
  *, ::before, ::after {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  :where(body) {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #424242;
    height: 100%;
    margin: 0;
  }
`;

export const Provider: GlobalProvider = ({ children }) => (
  <>
    <style>{globalCss}</style>
    {children}
  </>
);
