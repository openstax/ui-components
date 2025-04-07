import{C as c}from"./index.5e3f1571.js";import{p as o}from"./palette.15e4d008.js";const a=t=>t,n=a({primary:{background:o.orange,backgroundActive:"#b03808",backgroundHover:"#be3c08",color:o.white},light:{background:o.white,backgroundActive:o.neutralLight,backgroundHover:o.white,color:o.neutralDarker,fontWeight:400},secondary:{background:o.darkGray,backgroundActive:"#4c4c4c",backgroundHover:"#646464",color:o.white}}),b=t=>{var e;const r=n[t];return c`
    background-color: ${r.background};
    color: ${r.color};
    font-weight: ${(e=r.fontWeight)!=null?e:700};

    &:not([disabled]) {
      &:hover {
        background: ${r.backgroundHover};
      }
      &:active {
        background: ${r.backgroundActive};
      }
    }
  `};export{b as a};
