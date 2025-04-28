import{s as r,a as e,F as i,j as n}from"./index.a3530c27.js";import{R as o}from"./Radio.8ca267b7.js";import"./theme.8724e1ea.js";import"./palette.15e4d008.js";import"./Tooltip.5e8ab23c.js";import"./OverlayArrow.module.74f78d26.js";import"./context.module.b6f6c385.js";import"./useButton.module.0b059335.js";import"./Info.a9b62ad7.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
