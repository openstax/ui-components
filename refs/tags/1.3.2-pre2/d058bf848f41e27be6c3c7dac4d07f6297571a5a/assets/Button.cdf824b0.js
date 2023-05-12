import{C as l,s as g,a as n}from"./index.f93e6bad.js";import{p as o}from"./palette.15e4d008.js";const u=e=>e,b=u({primary:{background:o.orange,backgroundActive:"#b03808",backgroundHover:"#be3c08",color:o.white},light:{background:o.white,backgroundActive:o.neutralLight,backgroundHover:o.white,color:o.neutralDarker,fontWeight:400},secondary:{background:o.darkGray,backgroundActive:"#4c4c4c",backgroundHover:"#646464",color:o.white}}),h=e=>{var r;const t=b[e];return l`
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
  `},a=g.button`
  ${e=>h(e.variant)}

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
`,p=e=>{const{disabled:t,isWaiting:r,waitingText:i,children:c,variant:s="primary",...d}=e;return n(a,{...d,disabled:r||t,variant:s,children:r&&i||c})},y=({variant:e="primary",...t})=>n(a,{...t,as:"a",variant:e,children:t.children});export{p as B,y as L};
