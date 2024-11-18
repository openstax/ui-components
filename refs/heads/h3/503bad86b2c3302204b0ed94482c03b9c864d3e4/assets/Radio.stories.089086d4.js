import{s as r,a as e,F as i,j as n}from"./index.f5adb5b8.js";import{R as o}from"./Radio.731b830b.js";import"./theme.7c4e67ce.js";import"./palette.15e4d008.js";import"./Tooltip.81decda5.js";import"./OverlayArrow.module.08068b49.js";import"./focusSafely.module.a39af407.js";import"./context.module.a9614b73.js";import"./Info.c3b9cf74.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
