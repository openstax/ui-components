import{s as r,a as e,F as i,j as n}from"./index.f97136cc.js";import{R as o}from"./Radio.cf75ac70.js";import"./theme.603e6fc9.js";import"./palette.15e4d008.js";import"./Tooltip.845c2cb0.js";import"./OverlayArrow.module.0862972c.js";import"./focusSafely.module.37fa09e3.js";import"./context.module.cfc85b7c.js";import"./Info.0b25b366.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
