import{s as r,a as e,F as i,j as n}from"./index.1c2ced63.js";import{R as o}from"./Radio.9e03a8c2.js";import"./theme.c4c799fb.js";import"./palette.15e4d008.js";import"./Tooltip.c51bc602.js";import"./OverlayArrow.module.39b16b36.js";import"./context.module.e1ba5576.js";import"./useButton.module.0d07ee4b.js";import"./Info.f3b493eb.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
