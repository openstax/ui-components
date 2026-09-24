import{j as r,s as t,a as s}from"./index-d7519afc.js";import{H as a}from"./Html-dc883e0f.js";import{B as d}from"./Button-93977ac4.js";import{c as n}from"./theme-534347e8.js";const c=e=>r("svg",{width:"15px",height:"15px",viewBox:"0 0 15 15",version:"1.1",...e,children:r("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:r("g",{transform:"translate(-302.000000, -18.000000)",fill:"currentColor",children:r("g",{transform:"translate(302.000000, 18.000000)",children:r("path",{d:"M7.5,5.41522791 L12.0331524,0.579865364 C12.3077536,0.286957429 12.7165503,0.24816296 12.946282,0.493210121 L13.9861449,1.60239723 C14.2158766,1.84744439 14.1795068,2.28349422 13.9049056,2.57640216 L9.37175324,7.41176471 L13.9049056,12.2471273 C14.1795068,12.5400352 14.2158766,12.976085 13.9861449,13.2211322 L12.946282,14.3303193 C12.7165503,14.5753665 12.3077536,14.536572 12.0331524,14.243664 L7.5,9.4083015 L2.96684761,14.243664 C2.69224642,14.536572 2.2834497,14.5753665 2.05371799,14.3303193 L1.01385508,13.2211322 C0.784123363,12.976085 0.820493178,12.5400352 1.09509437,12.2471273 L5.62824676,7.41176471 L1.09509437,2.57640216 C0.820493178,2.28349422 0.784123363,1.84744439 1.01385508,1.60239723 L2.05371799,0.493210121 C2.2834497,0.24816296 2.69224642,0.286957429 2.96684761,0.579865364 L7.5,5.41522791 Z"})})})})}),m=t.span`
  font-weight: bold;
  text-transform: uppercase;
`,h=t.div`
  position: relative;
  background: ${({severity:e})=>e==="error"?"#F8E8EA":"#fff5e0"};
  color: ${({severity:e})=>e==="error"?n.palette.darkRed:"#976502"};
  border: ${({severity:e})=>e==="error"?`1px solid ${n.palette.lightRed}`:"1px solid #fdbd3e"};
  padding: .6rem 1.6rem;
  margin: 0 0 1.6rem 0;
  line-height: 2rem;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: ${n.palette.mediumBlue};
  
    &:hover {
      text-decoration: underline;
      color: ${n.link.hover}
    }
  }

  .button-link {
    font-size: 1.6rem;
  }
`,f=t(d)`
  color: ${({severity:e})=>e==="error"?n.palette.darkRed:"#976502"};
  overflow: visible;
  background: none;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  box-shadow: none;
  margin-left: 2.4rem;

  &:not([disabled]):hover,
  &:not([disabled]):active {
    background: none;
  }
`,x=e=>{const o=e.messages.length;return s(h,{severity:e.severity,children:[s("div",{children:[e.severity!=="error"?r(m,{children:e.severity==="note"?"Note: ":"Warning: "}):null,e.messages.map((i,l)=>r(a,{block:o>1,children:o>1?`[${l+1} of ${o}]: ${i}`:i},l))]}),e.onDismiss?r(f,{severity:e.severity,onClick:e.onDismiss,"aria-label":"dismiss",children:r(c,{"aria-hidden":"true",focusable:"false"})}):null]})};export{x as B};
