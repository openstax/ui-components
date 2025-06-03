import{C as a}from"./index.cc4cf4d6.js";import{p as o}from"./palette.15e4d008.js";const c=e=>e,n=c({primary:{background:o.orange,backgroundActive:"#b03808",backgroundHover:"#be3c08",color:o.white,outline:o.white,shadow:o.black},light:{background:o.white,backgroundActive:o.neutralLight,backgroundHover:o.white,color:o.neutralDarker,fontWeight:400,outline:o.white,shadow:o.black},secondary:{background:o.darkGray,backgroundActive:"#4c4c4c",backgroundHover:"#646464",color:o.white,outline:o.white,shadow:o.black}}),d=e=>{var r;const t=n[e];return a`
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

    &:focus {
      outline: solid ${t.outline};
      box-shadow: inset 0 0 0 0.3rem ${t.shadow};
    }
  `};export{d as a};
