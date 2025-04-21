import{s as r,a as e,F as i,j as n}from"./index.d3086247.js";import{R as o}from"./Radio.b208e2eb.js";import"./theme.fcdbdd22.js";import"./palette.15e4d008.js";import"./Tooltip.5b43583a.js";import"./OverlayArrow.module.b78f8eea.js";import"./context.module.32c38983.js";import"./useButton.module.451a09ac.js";import"./Info.c5ad1d6f.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
