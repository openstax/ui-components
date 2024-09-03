import{a as r,s as o,C as d,j as n}from"./index.306bf6a6.js";import{c as e,z as m}from"./theme.2dc685db.js";import{B as h}from"./BodyPortal.4756824a.js";const g=t=>r("svg",{width:"15px",height:"15px",viewBox:"0 0 15 15",version:"1.1",...t,children:r("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:r("g",{transform:"translate(-302.000000, -18.000000)",fill:"currentColor",children:r("g",{transform:"translate(302.000000, 18.000000)",children:r("path",{d:"M7.5,5.41522791 L12.0331524,0.579865364 C12.3077536,0.286957429 12.7165503,0.24816296 12.946282,0.493210121 L13.9861449,1.60239723 C14.2158766,1.84744439 14.1795068,2.28349422 13.9049056,2.57640216 L9.37175324,7.41176471 L13.9049056,12.2471273 C14.1795068,12.5400352 14.2158766,12.976085 13.9861449,13.2211322 L12.946282,14.3303193 C12.7165503,14.5753665 12.3077536,14.536572 12.0331524,14.243664 L7.5,9.4083015 L2.96684761,14.243664 C2.69224642,14.536572 2.2834497,14.5753665 2.05371799,14.3303193 L1.01385508,13.2211322 C0.784123363,12.976085 0.820493178,12.5400352 1.09509437,12.2471273 L5.62824676,7.41176471 L1.09509437,2.57640216 C0.820493178,2.28349422 0.784123363,1.84744439 1.01385508,1.60239723 L2.05371799,0.493210121 C2.2834497,0.24816296 2.69224642,0.286957429 2.96684761,0.579865364 L7.5,5.41522791 Z"})})})})}),f=o(({variant:t,...i})=>r("button",{...i,type:"button","aria-label":"Close",children:r(g,{"aria-hidden":"true",focusable:"false"})}))`
  padding: 0.4rem;
  cursor: pointer;
  margin-right: 0;
  padding-right: 0;
  background: transparent;
  color: ${e.palette.neutralMedium};
  height: 2rem;
  width: 2rem;
  border: 0;

  :hover {
    color: ${e.palette.neutralDark};
  }

  ${t=>t.variant==="error"&&d`
    color: ${e.palette.darkRed};
  `}

  ${t=>t.variant==="inverted-circle"&&d`
    color: ${e.palette.white};
    border: 0.1rem solid ${e.palette.white};
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    &:hover, &:focus {
      color: ${e.palette.black};
      background-color: ${e.palette.white};
      border-color: ${e.palette.white};
    }
  `}
`,a=3,u=o.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  overflow: hidden;
  width: 40rem;
  background-color: white;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.05), 0 0 4rem rgba(0, 0, 0, 0.08);
  color: ${e.palette.neutralDarker};
  font-size: 1.6rem;
  line-height: 2.5rem;
`,b=o.header`
  display: flex;
  align-items: center;
  margin-bottom: ${a*.5}rem;
  padding: ${a*.5}rem ${a}rem;
  background: ${e.palette.neutralLighter};
  border-bottom: solid 0.1rem #ddd;
  justify-content: space-between;
  ${t=>t.variant==="error"&&d`
    background: ${e.palette.paleRed};
    color: ${e.palette.darkRed};
  `}
`,$=o.h1`
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${a*.5}rem 0;
  font-size: 1.8rem;
`,L=o.h3`
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: 0;
`,M=o.div`
  font-size: 1.6rem;
  padding: ${a}rem;
`,x=o.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
`,w=o(h)`
  top: 0;
  z-index: ${m.modals};
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
`,C=o.div`
  z-index: 1;
`,z=o.div`
  display: flex;
  justify-content: space-between;
  padding: ${a}rem;

  button {
    min-width: 12rem;
  }
`,j=({className:t,heading:i,onModalClose:s,children:c,show:p,variant:l})=>p?n(w,{className:t,slot:"modal",children:[r(C,{children:n(u,{children:[n(b,{variant:l,children:[r($,{children:i}),r(f,{onClick:s,variant:l})]}),c]})}),r(x,{})]}):null;export{f as C,M,L as a,j as b,z as c,x as d,w as e};
