import{s as r,a as e,F as i,j as n}from"./index.7c4852f2.js";import{R as o}from"./Radio.175aabd3.js";import"./theme.a8cbb38f.js";import"./palette.15e4d008.js";import"./Tooltip.e9f0942e.js";import"./OverlayArrow.module.29be92e0.js";import"./context.module.ca6ce86b.js";import"./useButton.module.67245ef3.js";import"./Info.6747e125.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
