import{s as r,a as e,F as i,j as n}from"./index.2382cb6f.js";import{R as o}from"./Radio.aeab1677.js";import"./theme.47ed6afe.js";import"./palette.15e4d008.js";import"./Tooltip.4da64613.js";import"./OverlayArrow.module.0253649c.js";import"./focusSafely.module.2d3a98e9.js";import"./context.module.c474cd58.js";import"./Info.900a36b0.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
