import{s as r,a as e,F as i,j as n}from"./index.2d01b0d2.js";import{R as o}from"./Radio.b82e6cfc.js";import"./theme.6341794f.js";import"./palette.15e4d008.js";import"./Tooltip.e2a788ce.js";import"./OverlayArrow.module.c9e4cd37.js";import"./focusSafely.module.e6673a6f.js";import"./context.module.1bed84c6.js";import"./Info.1bb84b5b.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
