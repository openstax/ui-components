import{C as d,s as u,j as r}from"./index.7c7c99fb.js";import{p as o}from"./palette.15e4d008.js";const b=e=>e,g=b({primary:{background:o.orange,backgroundActive:"#b03808",backgroundHover:"#be3c08",color:o.white},light:{background:o.white,backgroundActive:o.neutralLight,backgroundHover:o.white,color:o.neutralDarker,fontWeight:400},secondary:{background:o.darkGray,backgroundActive:"#4c4c4c",backgroundHover:"#646464",color:o.white}}),m=e=>{var n;const t=g[e];return d`
    background-color: ${t.background};
    color: ${t.color};
    font-weight: ${(n=t.fontWeight)!=null?n:700};

    &:not([disabled]) {
      &:hover {
        background: ${t.backgroundHover};
      }
      &:active {
        background: ${t.backgroundActive};
      }
    }
  `};var i="/home/runner/work/ui-components/ui-components/src/components/Button.tsx";const h=u.button`
  ${e=>m(e.variant)}

  font-size: 1.6rem;
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
  }
  &:disabled {
    opacity: 0.4;
  }

  & + & {
    margin-left: 1.6rem;
  }
`,k=e=>{const{disabled:t,isWaiting:n,waitingText:a,children:c,variant:s="primary",...l}=e;return r(h,{...l,disabled:n||t,variant:s,as:e.link?"a":"button",children:n&&a||c},void 0,!1,{fileName:i,lineNumber:62,columnNumber:10},void 0)},f=e=>r(k,{...e,link:!0,children:e.children},void 0,!1,{fileName:i,lineNumber:74,columnNumber:3},void 0);export{k as B,f as L};
