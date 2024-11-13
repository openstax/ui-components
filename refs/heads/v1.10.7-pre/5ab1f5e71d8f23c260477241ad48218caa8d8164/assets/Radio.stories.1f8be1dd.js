import{s as r,a as e,F as i,j as n}from"./index.3b0009bd.js";import{R as o}from"./Radio.131f97b1.js";import"./theme.3e0fa88e.js";import"./palette.15e4d008.js";import"./Tooltip.01571323.js";import"./OverlayArrow.module.da99b176.js";import"./focusSafely.module.a46de9e1.js";import"./context.module.4853f354.js";import"./Info.01c482a8.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
