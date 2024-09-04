import{s as r,a as e,F as i,j as n}from"./index.0d250b5c.js";import{R as o}from"./Radio.9d45c99e.js";import"./theme.ae0e9f70.js";import"./palette.15e4d008.js";import"./Tooltip.e4fe3edd.js";import"./OverlayArrow.module.87285495.js";import"./focusSafely.module.48a41d06.js";import"./context.module.0e5badad.js";import"./Info.9a72d8d4.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
