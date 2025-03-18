import{s as r,a as e,F as i,j as n}from"./index.54adc06d.js";import{R as o}from"./Radio.07ef4d58.js";import"./theme.8fa202b5.js";import"./palette.15e4d008.js";import"./Tooltip.4665f1f5.js";import"./OverlayArrow.module.c231e8c1.js";import"./context.module.23fcf398.js";import"./useButton.module.9d20b895.js";import"./Info.45c31655.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
