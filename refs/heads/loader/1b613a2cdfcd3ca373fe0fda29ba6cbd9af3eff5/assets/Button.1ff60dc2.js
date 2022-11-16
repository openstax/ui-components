import{c as n,t as r}from"./theme.ad62f411.js";import{s as c,j as l}from"./index.34dfd198.js";var d="/home/runner/work/ui-components/ui-components/src/components/Button.tsx";const u=c.button`
  background-color: ${o=>n.button[o.color].background};
  color: ${o=>n.button[o.color].color};
  font-size: 1.6rem;
  ${o=>{var e,t;return`
    font-weight: ${(t=(e=r.button[o.color])==null?void 0:e.fontWeight)!=null?t:r.button.default.fontWeight}
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
      background: ${o=>n.button[o.color].backgroundHover};
    }
    &:active {
      background: ${o=>n.button[o.color].backgroundActive};
    }
  }
  &:disabled {
    opacity: 0.4;
  }

  & + & {
    margin-left: 1.6rem;
  }
`,g=o=>{const{disabled:e,isWaiting:t,waitingText:i,children:a,...s}=o;return l(u,{...s,disabled:t||e,color:o.color||"orange",children:t&&i||a},void 0,!1,{fileName:d,lineNumber:64,columnNumber:10},void 0)};export{g as B};
