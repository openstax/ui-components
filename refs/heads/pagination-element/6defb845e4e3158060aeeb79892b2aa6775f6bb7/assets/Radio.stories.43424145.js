import{s as r,a as e,F as i,j as n}from"./index.c4c6dca5.js";import{R as o}from"./Radio.b271e511.js";import"./theme.780a3272.js";import"./palette.15e4d008.js";import"./Tooltip.a1356529.js";import"./OverlayArrow.module.3cfb706a.js";import"./context.module.6fba6f19.js";import"./useButton.module.57db5103.js";import"./Info.5ae6be6a.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
