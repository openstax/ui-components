import{p as o}from"./palette.5e342580.js";const n=e=>e,a=n({primary:{background:o.orange,backgroundActive:"#b03808",backgroundHover:"#be3c08",color:o.white,outline:o.white,shadow:o.black},light:{background:o.white,backgroundActive:o.neutralLight,backgroundHover:o.white,color:o.neutralDarker,fontWeight:400,outline:o.white,shadow:o.black},secondary:{background:o.darkGray,backgroundActive:"#4c4c4c",backgroundHover:"#646464",color:o.white,outline:o.white,shadow:o.black}}),i=e=>a[e],u=e=>{var r;const t=a[e];return`
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
  `};export{u as a,i as g};
