import{s as r,a as e,F as i,j as n}from"./index.5e11718c.js";import{R as o}from"./Radio.b305b28d.js";import"./theme.2c5db1d3.js";import"./palette.15e4d008.js";import"./Tooltip.36f7dc7b.js";import"./OverlayArrow.module.7c8b0f40.js";import"./context.module.4ed32ea3.js";import"./useButton.module.0454b8a7.js";import"./Info.0828861b.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
