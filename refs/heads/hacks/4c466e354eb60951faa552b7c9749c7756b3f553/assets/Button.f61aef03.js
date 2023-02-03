import{C as s,s as d,j as l}from"./index.fb437250.js";import{p as e}from"./palette.15e4d008.js";const u=o=>o,g=u({primary:{background:e.orange,backgroundActive:"#b03808",backgroundHover:"#be3c08",color:e.white},light:{background:e.white,backgroundActive:e.neutralLight,backgroundHover:e.white,color:e.neutralDarker,fontWeight:400},secondary:{background:e.darkGray,backgroundActive:"#4c4c4c",backgroundHover:"#646464",color:e.white}}),b=o=>{var r;const t=g[o];return s`
    background-color: ${t.background};
    color: ${t.color};
    font-weight: ${(r=t.fontWeight)!=null?r:700};

    &:not([disabled]) {
      &:hover {
        background: ${t.backgroundHover};
      }
      &:active {
        background: ${t.backgroundActive};
      }
    }
  `};var m="/home/runner/work/ui-components/ui-components/src/components/Button.tsx";const h=d.button`
  ${o=>b(o.variant)}

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
`,v=o=>{const{disabled:t,isWaiting:r,waitingText:n,children:a,variant:i="primary",...c}=o;return l(h,{...c,disabled:r||t,variant:i,children:r&&n||a},void 0,!1,{fileName:m,lineNumber:61,columnNumber:10},void 0)};export{v as B};
