import{a as s,s as t,j as l,R as d}from"./index.18776f80.js";import{H as m}from"./Html.b5f169a8.js";import{a as c,B as g}from"./Button.3f55d1b3.js";import{c as n}from"./theme.a62307c5.js";import"./buttons.8bdfdbf5.js";import"./palette.15e4d008.js";const h=e=>s("svg",{width:"15px",height:"15px",viewBox:"0 0 15 15",version:"1.1",...e,children:s("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:s("g",{transform:"translate(-302.000000, -18.000000)",fill:"currentColor",children:s("g",{transform:"translate(302.000000, 18.000000)",children:s("path",{d:"M7.5,5.41522791 L12.0331524,0.579865364 C12.3077536,0.286957429 12.7165503,0.24816296 12.946282,0.493210121 L13.9861449,1.60239723 C14.2158766,1.84744439 14.1795068,2.28349422 13.9049056,2.57640216 L9.37175324,7.41176471 L13.9049056,12.2471273 C14.1795068,12.5400352 14.2158766,12.976085 13.9861449,13.2211322 L12.946282,14.3303193 C12.7165503,14.5753665 12.3077536,14.536572 12.0331524,14.243664 L7.5,9.4083015 L2.96684761,14.243664 C2.69224642,14.536572 2.2834497,14.5753665 2.05371799,14.3303193 L1.01385508,13.2211322 C0.784123363,12.976085 0.820493178,12.5400352 1.09509437,12.2471273 L5.62824676,7.41176471 L1.09509437,2.57640216 C0.820493178,2.28349422 0.784123363,1.84744439 1.01385508,1.60239723 L2.05371799,0.493210121 C2.2834497,0.24816296 2.69224642,0.286957429 2.96684761,0.579865364 L7.5,5.41522791 Z"})})})})}),u=t.span`
  font-weight: bold;
  text-transform: uppercase;
`,f=t.div`
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

  ${c} {
    font-size: 1.6rem;
  }
`,v=t(g)`
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
`,i=e=>{const r=e.messages.length;return l(f,{severity:e.severity,children:[l("div",{children:[e.severity!=="error"?s(u,{children:e.severity==="note"?"Note: ":"Warning: "}):null,e.messages.map((o,a)=>s(m,{block:r>1,children:r>1?`[${a+1} of ${r}]: ${o}`:o},a))]}),e.onDismiss?s(v,{severity:e.severity,onClick:e.onDismiss,"aria-label":"dismiss",children:s(h,{"aria-hidden":"true",focusable:"false"})}):null]})},k=()=>s(i,{messages:["This is an error message"],severity:"error"}),C=()=>s(i,{messages:["This is a warning message"],severity:"warning"}),$=()=>s(i,{messages:["This is a note message"],severity:"note"}),B=()=>s(i,{messages:["First message","Second message","Third message"],severity:"warning"}),R=()=>{const[e,r]=d.useState(!0);return e?s(i,{messages:["This is a dismissible warning message"],severity:"warning",onDismiss:()=>r(!1)}):null};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Dismissible,k as Error,B as MultipleMessages,$ as Note,C as Warning};
