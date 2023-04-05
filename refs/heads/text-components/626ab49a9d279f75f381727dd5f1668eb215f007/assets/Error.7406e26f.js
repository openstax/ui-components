import{c as n,z as f}from"./theme.18cc432c.js";import{s as i,C as s,j as e,F as b}from"./index.c9e8e0d1.js";var o="/home/runner/work/ui-components/ui-components/src/components/Modal.tsx";const p=r=>e("svg",{width:"15px",height:"15px",viewBox:"0 0 15 15",version:"1.1",...r,children:e("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:e("g",{transform:"translate(-302.000000, -18.000000)",fill:"currentColor",children:e("g",{transform:"translate(302.000000, 18.000000)",children:e("path",{d:"M7.5,5.41522791 L12.0331524,0.579865364 C12.3077536,0.286957429 12.7165503,0.24816296 12.946282,0.493210121 L13.9861449,1.60239723 C14.2158766,1.84744439 14.1795068,2.28349422 13.9049056,2.57640216 L9.37175324,7.41176471 L13.9049056,12.2471273 C14.1795068,12.5400352 14.2158766,12.976085 13.9861449,13.2211322 L12.946282,14.3303193 C12.7165503,14.5753665 12.3077536,14.536572 12.0331524,14.243664 L7.5,9.4083015 L2.96684761,14.243664 C2.69224642,14.536572 2.2834497,14.5753665 2.05371799,14.3303193 L1.01385508,13.2211322 C0.784123363,12.976085 0.820493178,12.5400352 1.09509437,12.2471273 L5.62824676,7.41176471 L1.09509437,2.57640216 C0.820493178,2.28349422 0.784123363,1.84744439 1.01385508,1.60239723 L2.05371799,0.493210121 C2.2834497,0.24816296 2.69224642,0.286957429 2.96684761,0.579865364 L7.5,5.41522791 Z"},void 0,!1,{fileName:o,lineNumber:9,columnNumber:11},void 0)},void 0,!1,{fileName:o,lineNumber:8,columnNumber:9},void 0)},void 0,!1,{fileName:o,lineNumber:7,columnNumber:7},void 0)},void 0,!1,{fileName:o,lineNumber:6,columnNumber:5},void 0)},void 0,!1,{fileName:o,lineNumber:5,columnNumber:3},void 0),l=3,v=i.div`
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
`,N=i.header`
  display: flex;
  align-items: center;
  margin-bottom: ${l*.5}rem;
  padding: ${l*.5}rem ${l}rem;
  background: ${n.palette.neutralLighter};
  border-bottom: solid 0.1rem #ddd;
  justify-content: space-between;
  ${r=>r.variant==="error"&&s`
    background: ${n.palette.paleRed};
    color: ${n.palette.darkRed};
  `}
`,h=i.h1`
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${l*.5}rem 0;
  font-size: 1.8rem;
`,g=i.h3`
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: 0;
`,x=i.div`
  font-size: 1.6rem;
  padding: ${l}rem;
`,w=i.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
`,$=i.div`
  top: 0;
  z-index: ${f.modals};
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
`,C=i.div`
  z-index: 1;
`,k=i(r=>e(p,{...r,"aria-hidden":"true",focusable:"false"},void 0,!1,{fileName:o,lineNumber:90,columnNumber:42},void 0))`
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

  ${r=>r.variant==="error"&&s`
    color: ${n.palette.darkRed};
  `}
`,M=i.div`
  display: flex;
  justify-content: space-between;
  padding: ${l}rem;

  button {
    min-width: 12rem;
  }
`,z=({className:r,heading:t,onModalClose:a,children:u,show:c,variant:m})=>c?e($,{className:r,children:[e(C,{children:e(v,{children:[e(N,{variant:m,children:[e(h,{children:t},void 0,!1,{fileName:o,lineNumber:140,columnNumber:13},void 0),e(k,{onClick:a,variant:m},void 0,!1,{fileName:o,lineNumber:143,columnNumber:13},void 0)]},void 0,!0,{fileName:o,lineNumber:139,columnNumber:11},void 0),u]},void 0,!0,{fileName:o,lineNumber:138,columnNumber:9},void 0)},void 0,!1,{fileName:o,lineNumber:137,columnNumber:7},void 0),e(w,{},void 0,!1,{fileName:o,lineNumber:148,columnNumber:7},void 0)]},void 0,!0,{fileName:o,lineNumber:136,columnNumber:5},void 0):null;var d="/home/runner/work/ui-components/ui-components/src/components/Error.tsx";const j=({heading:r,children:t,...a})=>e(x,{...a,children:[e(g,{children:r!=null?r:"Uh-oh, there's been a glitch"},void 0,!1,{fileName:d,lineNumber:11,columnNumber:5},void 0),t!=null?t:e(b,{children:["We're not quite sure what went wrong. Restart your browser. If this doesn't solve the problem, visit our ",e("a",{href:"https://openstax.secure.force.com/help",target:"_blank",children:"Support Center"},void 0,!1,{fileName:d,lineNumber:14,columnNumber:30},void 0),"."]},void 0,!0)]},void 0,!0,{fileName:d,lineNumber:10,columnNumber:10},void 0);export{j as E,z as M,M as a,x as b};
