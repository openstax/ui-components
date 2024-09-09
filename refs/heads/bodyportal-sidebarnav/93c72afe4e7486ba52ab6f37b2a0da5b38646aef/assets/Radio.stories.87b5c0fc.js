import{s as r,a as e,F as i,j as n}from"./index.b2a8d8cc.js";import{R as o}from"./Radio.34a428f0.js";import"./theme.6fc3e458.js";import"./palette.15e4d008.js";import"./Tooltip.c7a6657d.js";import"./OverlayArrow.module.a135db62.js";import"./focusSafely.module.55fcac4c.js";import"./context.module.cc6e965d.js";import"./Info.e03ae4be.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
