import{s as r,a as e,F as i,j as n}from"./index.19e0fecb.js";import{R as o}from"./Radio.c5e8c8b4.js";import"./theme.78791aff.js";import"./palette.15e4d008.js";import"./Tooltip.70efdd2a.js";import"./OverlayArrow.module.83b00f24.js";import"./focusSafely.module.7d6e3cff.js";import"./context.module.7bb5e667.js";import"./Info.ea5f1d7e.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};