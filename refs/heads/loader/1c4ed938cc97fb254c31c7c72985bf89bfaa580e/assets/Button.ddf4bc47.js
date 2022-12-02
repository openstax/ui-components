import{c as n,t as r}from"./theme.e0da5652.js";import{s as c,j as d}from"./index.b3147b9a.js";var l="/home/runner/work/ui-components/ui-components/src/components/Button.tsx";const u=c.button`
  background-color: ${t=>n.button[t.variant].background};
  color: ${t=>n.button[t.variant].color};
  font-size: 1.6rem;
  ${t=>{var e,o;return`
    font-weight: ${(o=(e=r.button[t.variant])==null?void 0:e.fontWeight)!=null?o:r.button.default.fontWeight}
  `}};
  line-height: 2rem;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  padding: 0 3rem;
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  user-select: none;
  white-space: nowrap;

  &:not([disabled]) {
    cursor: pointer;
    &:hover {
      background: ${t=>n.button[t.variant].backgroundHover};
    }
    &:active {
      background: ${t=>n.button[t.variant].backgroundActive};
    }
  }
  &:disabled {
    opacity: 0.4;
  }

  & + & {
    margin-left: 1.6rem;
  }
`,g=t=>{const{disabled:e,isWaiting:o,waitingText:i,children:a,...s}=t;return d(u,{...s,disabled:o||e,variant:t.variant||"orange",children:o&&i||a},void 0,!1,{fileName:l,lineNumber:64,columnNumber:10},void 0)};export{g as B};
