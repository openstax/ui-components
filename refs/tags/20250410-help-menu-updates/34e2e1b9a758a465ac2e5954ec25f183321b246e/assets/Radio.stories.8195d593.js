import{s as r,a as e,F as i,j as n}from"./index.7c656a9f.js";import{R as o}from"./Radio.24f3e849.js";import"./theme.c68a3012.js";import"./palette.15e4d008.js";import"./Tooltip.38a2427b.js";import"./OverlayArrow.module.14cdc101.js";import"./context.module.50ce8132.js";import"./useButton.module.299a379e.js";import"./Info.93da7d17.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
