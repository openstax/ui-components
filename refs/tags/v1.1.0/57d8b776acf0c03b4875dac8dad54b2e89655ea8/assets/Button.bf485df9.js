import{c as o}from"./theme.e1e15d89.js";import{s as a,j as c}from"./index.391eade3.js";var d="/home/runner/work/ui-components/ui-components/src/components/Button.tsx";const u=a.button`
  background-color: ${o.button.background};
  color: ${o.palette.white};
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  padding: 0 3rem;
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:not([disabled]) {
    cursor: pointer;
    &:hover {
      background: ${o.button.backgroundHover}
    }
    &:active {
      background: ${o.button.backgroundActive}
    }
  }
  &:disabled {
    opacity: 0.4;
  }
`,m=t=>{const{disabled:r,isWaiting:e,waitingText:n,children:i,...s}=t;return c(u,{...s,disabled:e||r,children:e&&n||i},void 0,!1,{fileName:d,lineNumber:47,columnNumber:5},void 0)};export{m as B};
