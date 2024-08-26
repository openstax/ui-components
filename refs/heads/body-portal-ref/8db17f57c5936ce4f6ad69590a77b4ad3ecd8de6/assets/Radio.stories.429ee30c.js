import{s as r,a as e,F as i,j as n}from"./index.80cbb35d.js";import{R as o}from"./Radio.f442c212.js";import"./theme.6ce78390.js";import"./palette.15e4d008.js";import"./Tooltip.c611c6b7.js";import"./OverlayArrow.module.6362e7d7.js";import"./focusSafely.module.93adf0d7.js";import"./context.module.fbd899c7.js";import"./Info.11907d47.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
