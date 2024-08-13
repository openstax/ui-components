import{s as r,a as e,F as i,j as n}from"./index.be681636.js";import{R as o}from"./Radio.554f3b1f.js";import"./theme.64f96e43.js";import"./palette.15e4d008.js";import"./Tooltip.346b4a0c.js";import"./OverlayArrow.module.2d657fee.js";import"./focusSafely.module.9b1fb895.js";import"./context.module.a9b03c48.js";import"./Info.cc0d08c3.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
