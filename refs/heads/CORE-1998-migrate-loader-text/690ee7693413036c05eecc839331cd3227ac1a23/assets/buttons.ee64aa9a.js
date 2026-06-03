import{p as o}from"./palette.5e342580.js";const a=e=>e,c=a({primary:{background:o.orange,backgroundActive:"#b03808",backgroundHover:"#be3c08",color:o.white,outline:o.white,shadow:o.black},light:{background:o.white,backgroundActive:o.neutralLight,backgroundHover:o.white,color:o.neutralDarker,fontWeight:400,outline:o.white,shadow:o.black},secondary:{background:o.darkGray,backgroundActive:"#4c4c4c",backgroundHover:"#646464",color:o.white,outline:o.white,shadow:o.black}}),i=e=>{var r;const t=c[e];return`
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
  `};export{i as a};
