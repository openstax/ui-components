import{c as n}from"./theme.847e8553.js";import{s as i,C as u,j as e,r as c}from"./index.945cac6f.js";import{B as v}from"./Button.a2f8ab3c.js";var r="/home/runner/work/ui-components/ui-components/src/components/Modal.tsx";const p=o=>e("svg",{width:"15px",height:"15px",viewBox:"0 0 15 15",version:"1.1",...o,children:e("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:e("g",{transform:"translate(-302.000000, -18.000000)",fill:"currentColor",children:e("g",{transform:"translate(302.000000, 18.000000)",children:e("path",{d:"M7.5,5.41522791 L12.0331524,0.579865364 C12.3077536,0.286957429 12.7165503,0.24816296 12.946282,0.493210121 L13.9861449,1.60239723 C14.2158766,1.84744439 14.1795068,2.28349422 13.9049056,2.57640216 L9.37175324,7.41176471 L13.9049056,12.2471273 C14.1795068,12.5400352 14.2158766,12.976085 13.9861449,13.2211322 L12.946282,14.3303193 C12.7165503,14.5753665 12.3077536,14.536572 12.0331524,14.243664 L7.5,9.4083015 L2.96684761,14.243664 C2.69224642,14.536572 2.2834497,14.5753665 2.05371799,14.3303193 L1.01385508,13.2211322 C0.784123363,12.976085 0.820493178,12.5400352 1.09509437,12.2471273 L5.62824676,7.41176471 L1.09509437,2.57640216 C0.820493178,2.28349422 0.784123363,1.84744439 1.01385508,1.60239723 L2.05371799,0.493210121 C2.2834497,0.24816296 2.69224642,0.286957429 2.96684761,0.579865364 L7.5,5.41522791 Z"},void 0,!1,{fileName:r,lineNumber:9,columnNumber:11},void 0)},void 0,!1,{fileName:r,lineNumber:8,columnNumber:9},void 0)},void 0,!1,{fileName:r,lineNumber:7,columnNumber:7},void 0)},void 0,!1,{fileName:r,lineNumber:6,columnNumber:5},void 0)},void 0,!1,{fileName:r,lineNumber:5,columnNumber:3},void 0),t=3,g=i.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  overflow: hidden;
  width: 40rem;
  background-color: white;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.05), 0 0 4rem rgba(0, 0, 0, 0.08);
  color: ${n.palette.neutralDarker};
  font-size: 1.6rem;
  line-height: 2.5rem;
`,w=i.header`
  display: flex;
  align-items: center;
  margin-bottom: ${t*.5}rem;
  padding: ${t*.5}rem ${t}rem;
  background: ${n.palette.neutralLighter};
  border-bottom: solid 0.1rem #ddd;
  justify-content: space-between;
  ${o=>o.variant==="error"&&u`
    background: ${n.palette.paleRed};
    color: ${n.palette.darkRed};
  `}
`,x=i.h1`
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${t*.5}rem 0;
  font-size: 1.8rem;
`,C=i.h3`
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: 0;
`,m=i.div`
  font-size: 1.6rem;
  padding: ${t}rem;
`,M=i.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
`,k=i.div`
  top: 0;
  z-index: 1060;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
`,$=i.div`
  z-index: 1;
`,y=i(o=>e(p,{...o,"aria-hidden":"true",focusable:"false"},void 0,!1,{fileName:r,lineNumber:90,columnNumber:42},void 0))`
  padding: 0.4rem;
  cursor: pointer;
  margin-right: 0;
  padding-right: 0;
  color: ${n.palette.neutralMedium};

  :hover {
    color: ${n.palette.neutralDark};
  }
  height: 2rem;
  width: 2rem;

  ${o=>o.variant==="error"&&u`
    color: ${n.palette.darkRed};
  `}
`,L=i.div`
  display: flex;
  justify-content: space-between;
  padding: ${t}rem;

  button {
    min-width: 12rem;
  }
`,f=({className:o,heading:d,onModalClose:N,children:h,show:b,variant:s})=>b?e(k,{className:o,children:[e($,{children:e(g,{children:[e(w,{variant:s,children:[e(x,{children:d},void 0,!1,{fileName:r,lineNumber:140,columnNumber:13},void 0),e(y,{onClick:N,variant:s},void 0,!1,{fileName:r,lineNumber:143,columnNumber:13},void 0)]},void 0,!0,{fileName:r,lineNumber:139,columnNumber:11},void 0),h]},void 0,!0,{fileName:r,lineNumber:138,columnNumber:9},void 0)},void 0,!1,{fileName:r,lineNumber:137,columnNumber:7},void 0),e(M,{},void 0,!1,{fileName:r,lineNumber:148,columnNumber:7},void 0)]},void 0,!0,{fileName:r,lineNumber:136,columnNumber:5},void 0):null;var l="/home/runner/work/ui-components/ui-components/src/components/ErrorModal.tsx";const j=o=>e(f,{...o,variant:"error",heading:"Error",children:[e(m,{children:[e(C,{children:"Uh-oh, there's been a glitch"},void 0,!1,{fileName:l,lineNumber:9,columnNumber:7},void 0),"We're not quite sure what went wrong. Restart your browser. If this doesn't solve the problem, visit our ",e("a",{href:"https://openstax.secure.force.com/help",target:"_blank",children:"Support Center"},void 0,!1,{fileName:l,lineNumber:11,columnNumber:30},void 0),"."]},void 0,!0,{fileName:l,lineNumber:8,columnNumber:5},void 0),e(L,{children:e(v,{onClick:o.onModalClose,children:"OK"},void 0,!1,{fileName:l,lineNumber:13,columnNumber:18},void 0)},void 0,!1,{fileName:l,lineNumber:13,columnNumber:5},void 0)]},void 0,!0,{fileName:l,lineNumber:7,columnNumber:10},void 0);var a="/home/runner/work/ui-components/ui-components/src/components/Modal.stories.tsx";const R=()=>{const[o,d]=c.exports.useState(!0);return e(f,{heading:"test",onModalClose:()=>d(!1),show:o,children:e(m,{children:"Message"},void 0,!1,{fileName:a,lineNumber:8,columnNumber:5},void 0)},void 0,!1,{fileName:a,lineNumber:7,columnNumber:10},void 0)},S=()=>{const[o,d]=c.exports.useState(!0);return e(j,{onModalClose:()=>d(!1),show:o,children:e(m,{children:"Message"},void 0,!1,{fileName:a,lineNumber:15,columnNumber:5},void 0)},void 0,!1,{fileName:a,lineNumber:14,columnNumber:10},void 0)};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,S as Error};
