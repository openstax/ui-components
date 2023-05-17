import{s as r,C as c,a as t,j as d,R as m,F as p}from"./index.0c96f494.js";import{c as o,z as g}from"./theme.d907d5cf.js";const f=e=>t("svg",{width:"15px",height:"15px",viewBox:"0 0 15 15",version:"1.1",...e,children:t("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:t("g",{transform:"translate(-302.000000, -18.000000)",fill:"currentColor",children:t("g",{transform:"translate(302.000000, 18.000000)",children:t("path",{d:"M7.5,5.41522791 L12.0331524,0.579865364 C12.3077536,0.286957429 12.7165503,0.24816296 12.946282,0.493210121 L13.9861449,1.60239723 C14.2158766,1.84744439 14.1795068,2.28349422 13.9049056,2.57640216 L9.37175324,7.41176471 L13.9049056,12.2471273 C14.1795068,12.5400352 14.2158766,12.976085 13.9861449,13.2211322 L12.946282,14.3303193 C12.7165503,14.5753665 12.3077536,14.536572 12.0331524,14.243664 L7.5,9.4083015 L2.96684761,14.243664 C2.69224642,14.536572 2.2834497,14.5753665 2.05371799,14.3303193 L1.01385508,13.2211322 C0.784123363,12.976085 0.820493178,12.5400352 1.09509437,12.2471273 L5.62824676,7.41176471 L1.09509437,2.57640216 C0.820493178,2.28349422 0.784123363,1.84744439 1.01385508,1.60239723 L2.05371799,0.493210121 C2.2834497,0.24816296 2.69224642,0.286957429 2.96684761,0.579865364 L7.5,5.41522791 Z"})})})})}),n=3,u=r.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  overflow: hidden;
  width: 40rem;
  background-color: white;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.05), 0 0 4rem rgba(0, 0, 0, 0.08);
  color: ${o.palette.neutralDarker};
  font-size: 1.6rem;
  line-height: 2.5rem;
`,x=r.header`
  display: flex;
  align-items: center;
  margin-bottom: ${n*.5}rem;
  padding: ${n*.5}rem ${n}rem;
  background: ${o.palette.neutralLighter};
  border-bottom: solid 0.1rem #ddd;
  justify-content: space-between;
  ${e=>e.variant==="error"&&c`
    background: ${o.palette.paleRed};
    color: ${o.palette.darkRed};
  `}
`,b=r.h1`
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${n*.5}rem 0;
  font-size: 1.8rem;
`,C=r.h3`
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: 0;
`,v=r.div`
  font-size: 1.6rem;
  padding: ${n}rem;
`,w=r.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
`,$=r.div`
  top: 0;
  z-index: ${g.modals};
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
`,k=r.div`
  z-index: 1;
`,y=r(e=>t(f,{...e,"aria-hidden":"true",focusable:"false"}))`
  padding: 0.4rem;
  cursor: pointer;
  margin-right: 0;
  padding-right: 0;
  color: ${o.palette.neutralMedium};

  :hover {
    color: ${o.palette.neutralDark};
  }
  height: 2rem;
  width: 2rem;

  ${e=>e.variant==="error"&&c`
    color: ${o.palette.darkRed};
  `}
`,j=r.div`
  display: flex;
  justify-content: space-between;
  padding: ${n}rem;

  button {
    min-width: 12rem;
  }
`,I=({className:e,heading:a,onModalClose:l,children:i,show:h,variant:s})=>h?d($,{className:e,children:[t(k,{children:d(u,{children:[d(x,{variant:s,children:[t(b,{children:a}),t(y,{onClick:l,variant:s})]}),i]})}),t(w,{})]}):null,L=m.createContext(null),M=r.div`
  font-size: 0.9rem;
  color: ${o.palette.neutralMedium};
  margin-top: 1.2rem;
`,E=({heading:e,children:a,...l})=>{const i=m.useContext(L);return d(v,{...l,"data-testid":"error",children:[t(C,{children:e!=null?e:"Uh-oh, there's been a glitch"}),a!=null?a:d(p,{children:["We're not quite sure what went wrong. Restart your browser. If this doesn't solve the problem, visit our ",t("a",{href:"https://openstax.secure.force.com/help",target:"_blank",children:"Support Center"}),"."]}),t(M,{children:i==null?void 0:i.eventId})]})};export{E,I as M,L as a,j as b,v as c};
