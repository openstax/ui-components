import{C as u,s as b,j as n}from"./index.ad635b07.js";import{p as t}from"./palette.15e4d008.js";const g=o=>o,m=g({primary:{background:t.orange,backgroundActive:"#b03808",backgroundHover:"#be3c08",color:t.white},light:{background:t.white,backgroundActive:t.neutralLight,backgroundHover:t.white,color:t.neutralDarker,fontWeight:400},secondary:{background:t.darkGray,backgroundActive:"#4c4c4c",backgroundHover:"#646464",color:t.white}}),h=o=>{var r;const e=m[o];return u`
    background-color: ${e.background};
    color: ${e.color};
    font-weight: ${(r=e.fontWeight)!=null?r:700};

    &:not([disabled]) {
      &:hover {
        background: ${e.backgroundHover};
      }
      &:active {
        background: ${e.backgroundActive};
      }
    }
  `};var a="/home/runner/work/ui-components/ui-components/src/components/Button.tsx";const i=b.button`
  ${o=>h(o.variant)}

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
`,v=o=>{const{disabled:e,isWaiting:r,waitingText:c,children:s,variant:d="primary",...l}=o;return n(i,{...l,disabled:r||e,variant:d,children:r&&c||s},void 0,!1,{fileName:a,lineNumber:64,columnNumber:10},void 0)},f=({variant:o="primary",...e})=>n(i,{...e,as:"a",variant:o,children:e.children},void 0,!1,{fileName:a,lineNumber:74,columnNumber:3},void 0);export{v as B,f as L};
