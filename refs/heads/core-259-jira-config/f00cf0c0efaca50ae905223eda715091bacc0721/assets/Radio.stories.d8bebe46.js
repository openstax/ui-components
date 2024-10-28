import{s as r,a as e,F as i,j as n}from"./index.643303b4.js";import{R as o}from"./Radio.800a2fed.js";import"./theme.6feb31b4.js";import"./palette.15e4d008.js";import"./Tooltip.9034eda4.js";import"./OverlayArrow.module.c87470a6.js";import"./focusSafely.module.1f0bacdd.js";import"./context.module.29649597.js";import"./Info.c603e8b3.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
