import{s as r,a as e,F as i,j as n}from"./index.c6e4754d.js";import{R as o}from"./Radio.e3085ed8.js";import"./theme.4cd513e6.js";import"./palette.15e4d008.js";import"./Tooltip.ba3c3fa0.js";import"./OverlayArrow.module.66686487.js";import"./context.module.9cf8351e.js";import"./useButton.module.53c817b7.js";import"./Info.e4af2d5e.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
